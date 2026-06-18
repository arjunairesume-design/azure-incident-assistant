import OpenAI from 'openai';
import { ISSUE_TYPES, SYSTEM_PROMPT } from './constants.js';
import { INCIDENT_KNOWLEDGE } from './incidentKnowledge.js';

function parseAnalysis(content) {
  let parsed;

  try {
    parsed = JSON.parse(content);
  } catch (error) {
    console.error('RAW AI RESPONSE:');
    console.log(content);
    throw new Error('Failed to parse AI response as JSON');
  }

  return parsed;
}

export async function analyzeIncident(body) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error('OPENAI_API_KEY not configured');
  }

  const openai = new OpenAI({ apiKey });

  const enhancedBody = {
    ...body,

    investigationEvidence: {
      userLoginId: body.userLoginId || '',
      roleName: body.roleName || '',
      resourceScope: body.resourceScope || '',
      authenticationError:
        body.authenticationError || '',
      mfaEnabled: body.mfaEnabled || '',
      conditionalAccess:
        body.conditionalAccess || ''
    }
  };

  const completion =
    await openai.chat.completions.create({
      model:
        process.env.OPENAI_MODEL ||
        'gpt-4o-mini',

      response_format: {
        type: 'json_object'
      },

      messages: [
        {
          role: 'system',
          content:
            SYSTEM_PROMPT +
            '\n\n' +
            INCIDENT_KNOWLEDGE +
            `
      
      Also return a field called "fiveWhys" as an array with exactly 5 items.
      
      Example:
      
      "fiveWhys": [
        "Why 1 explanation",
        "Why 2 explanation",
        "Why 3 explanation",
        "Why 4 explanation",
        "Why 5 explanation"
      ]
      `
        },
        {
          role: 'user',
          content: JSON.stringify(
            enhancedBody
          )
        }
      ]
    });

  const content =
    completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error(
      'Empty response from OpenAI'
    );
  }

  const analysis =
    parseAnalysis(content);

  if (!analysis.fiveWhys) {
      analysis.fiveWhys = [
        'Investigation required',
        'Investigation required',
        'Investigation required',
        'Investigation required',
        'Investigation required'
      ];
    }  

  if (
    typeof analysis.confidenceScore ===
      'number' &&
    analysis.confidenceScore <= 1
  ) {
    analysis.confidenceScore =
      Math.round(
        analysis.confidenceScore * 100
      );
  }

  const TEAM_MAPPING = {
    'VM Down': 'Windows/Linux Team',
    'High CPU': 'Windows/Linux Team',
    'High Memory': 'Windows/Linux Team',
    'Disk Full': 'Windows/Linux Team',
    'RDP Access Issue':
      'Windows/Linux Team',
    'SSH Access Issue':
      'Windows/Linux Team',
    'OS Disk Issue':
      'Windows/Linux Team',

    'NSG Blocking': 'Network Team',
    'Azure Firewall': 'Network Team',
    'Routing Issue': 'Network Team',
    'DNS Resolution': 'Network Team',
    'VPN Connectivity':
      'Network Team',
    'ExpressRoute Connectivity':
      'Network Team',
    'Load Balancer Issue':
      'Network Team',

    AVD: 'EUC Team',
    'FSLogix Profile Issue':
      'EUC Team',

    'Entra ID Login Issue':
      'Identity Team',
    'RBAC Issue':
      'Identity Team',

    'Storage Connectivity':
      'Storage Team',

    'SQL Connectivity':
      'Database Team',

    'Backup Failure':
      'Backup Team',

    'VM Migration Issue':
      'Migration Team'
  };

  if (
    body.issueType &&
    TEAM_MAPPING[body.issueType]
  ) {
    analysis.recommendedTeam =
      TEAM_MAPPING[body.issueType];
  }

  if (
    analysis.powershellCommands?.length
  ) {
    analysis.powershellCommands =
      analysis.powershellCommands.map(
        (cmd) =>
          cmd
            .replace(
              /<ResourceGroup>/gi,
              body.resourceGroup || ''
            )
            .replace(
              /<ResourceName>/gi,
              body.resourceName || ''
            )
            .replace(
              /<Subscription>/gi,
              body.subscription || ''
            )
            .replace(
              /\$resourceGroup/gi,
              body.resourceGroup || ''
            )
            .replace(
              /\$resourceName/gi,
              body.resourceName || ''
            )
      );
  }

  return analysis;
}