# Azure Incident Assistant

AI-powered web app for analyzing Azure incidents with structured root cause analysis, KQL queries, and PowerShell remediation steps.

## Features

- Issue types: AVD, VPN, VM Down, High CPU, Backup Failure, Entra ID Login Issue
- Structured AI output: RCA, confidence score, investigation steps, KQL, PowerShell, resolution
- Copy buttons for KQL and PowerShell
- Responsive Azure-themed UI with loading and error states

## Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS
- **Backend:** Node.js, Express (local) + Vercel serverless (production)
- **AI:** OpenAI API

## Quick Start

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment

Copy `.env.example` to `.env` in the project root and set your OpenAI API key:

```bash
cp .env.example .env
```

For local development, the server loads `.env` from the project root.

### 3. Run locally

```bash
npm run dev
```

- Frontend: http://localhost:5173
- API: http://localhost:3001/api/analyze

## Project Structure

```
├── api/                 # Vercel serverless functions
├── client/              # React + Vite frontend
├── server/              # Express API (local dev) + shared logic
├── vercel.json
└── package.json
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add environment variable: `OPENAI_API_KEY`
4. Optional: `OPENAI_MODEL` (default: `gpt-4o-mini`)
5. Deploy — the frontend and `/api/analyze` route are configured automatically.

## API

**POST** `/api/analyze`

```json
{
  "issueType": "VM Down",
  "details": "VM my-vm-prod in eastus not responding since 09:00 UTC",
  "username": "jdoe@contoso.com",
  "ipAddress": "10.0.1.42"
}
```

Response includes `rootCauseAnalysis`, `confidenceScore`, `investigationSteps`, `kqlQueries`, `powershellCommands`, and `recommendedResolution`.
