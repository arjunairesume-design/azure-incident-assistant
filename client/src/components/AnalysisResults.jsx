import ExportPdfButton from './ExportPdfButton';
import CopyButton from './CopyButton';
import ConfidenceBadge from './ConfidenceBadge';

function TextSection({ title, children }) {
if (!children) return null;

return ( <div className="card"> <h3 className="section-title"> <span className="inline-block h-2 w-2 rounded-full bg-azure-500" />
{title} </h3> <div className="prose prose-sm max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed">
{children} </div> </div>
);
}

function ListSection({ title, items }) {
if (!items?.length) return null;

return ( <div className="card"> <h3 className="section-title"> <span className="inline-block h-2 w-2 rounded-full bg-azure-500" />
{title} </h3>


  <ol className="list-decimal space-y-3 pl-5 text-sm text-slate-700">
    {items.map((item, i) => (
      <li key={i} className="leading-relaxed pl-1">
        {item}
      </li>
    ))}
  </ol>
</div>


);
}

function CodeSection({ title, items, copyLabel }) {
if (!items?.length) return null;

return ( <div className="card"> <h3 className="section-title"> <span className="inline-block h-2 w-2 rounded-full bg-azure-500" />
{title} </h3>

  <div className="space-y-4">
    {items.map((code, i) => (
      <div key={i} className="code-block">
        <CopyButton text={code} label={copyLabel} />
        <pre className="pr-24 font-mono text-xs sm:text-sm">
          <code>{code}</code>
        </pre>
      </div>
    ))}
  </div>
</div>
);
}

export default function AnalysisResults({ data }) {
if (!data) return null;

return (
  <div
    id="analysis-results"
    className="space-y-5"
  >

  <ConfidenceBadge score={data.confidenceScore} />
  <ExportPdfButton data={data} />

  <TextSection title="Severity">
    {data.severity}
  </TextSection>

  <TextSection title="Recommended Team">
    {data.recommendedTeam}
  </TextSection>

  <TextSection title="Similar Incident">
    {data.similarIncident}
  </TextSection>

 <TextSection title="Root Cause Analysis (RCA)">
  {data.likelyRootCause || data.mostLikelyCause}
</TextSection>

{data.fiveWhys && (
  <div className="card">
    <h3 className="section-title">
      5 WHYS ANALYSIS
    </h3>

    <ul className="space-y-2">
      {data.fiveWhys.map((item, index) => (
        <li key={index}>
          <strong>Why {index + 1}:</strong> {item}
        </li>
      ))}
    </ul>
  </div>
)}

<ListSection
  title="Supporting Evidence"
  items={data.supportingEvidence}
/>

<ListSection
  title="Possible Contributors"
  items={data.possibleContributors}
/>

<ListSection
  title="Validation Steps"
  items={data.validationSteps}
/>

  <TextSection title="Reasoning">
    {data.reasoning}
  </TextSection>

  <TextSection title="Business Impact">
    {data.businessImpact}
  </TextSection>

  <ListSection
    title="Azure Tools Used"
    items={data.azureToolsUsed}
  />

  <ListSection
    title="Evidence Required"
    items={data.evidenceRequired}
  />

  <ListSection
    title="Investigation Steps"
    items={data.investigationSteps}
  />

  <CodeSection
    title="KQL Queries"
    items={data.kqlQueries}
    copyLabel="Copy KQL"
  />

  <CodeSection
    title="PowerShell Commands"
    items={data.powershellCommands}
    copyLabel="Copy PS"
  />

  <TextSection title="Recommended Fix">
    {data.recommendedFix}
  </TextSection>

  <TextSection title="Permanent Fix">
    {data.permanentFix}
  </TextSection>

  <TextSection title="Preventive Measure">
    {data.preventiveMeasure}
  </TextSection>

  <TextSection title="Escalation Path">
    {data.escalationPath}
  </TextSection>

</div>


);
}