import { useState } from 'react';
import Login from './components/Login';
import { analyzeIncident } from './api/analyze';
import IncidentForm from './components/IncidentForm';
import AnalysisResults from './components/AnalysisResults';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorAlert from './components/ErrorAlert';

const INITIAL_FORM = {
  issueCategory: 'Virtual Machine',
  issueType: 'VM Down',
  resourceName: '',
  resourceGroup: '',
  subscription: '',
  region: '',
  incident: '',

  cpuUtilization: '',
  memoryUtilization: '',
  diskUtilization: '',
  bootDiagnostics: '',

  username: '',
  ipAddress: '',

  authenticationError: '',
  firewallEnabled: '',
  privateEndpoint: '',
  storageReachable: '',

  sourceIp: '',
  destinationIp: '',
  port: '',
  protocol: '',
  nsgResult: '',
  nextHopResult: '',
  firewallResult: '',

  userLoginId: '',
  roleName: '',
  resourceScope: '',
  authenticationError: '',
  mfaEnabled: '',
  conditionalAccess: '',

  hostPoolName: '',
  sessionHost: '',
  fslogixStatus: '',
  profileContainerReachable: '',
  avdAgentStatus: '',

  applicationUrl: '',
  httpStatusCode: '',
  backendReachable: '',
  databaseReachable: '',
  applicationInsightsError: '',

  screenshot: null,

};


export default function App() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [user, setUser] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await analyzeIncident(form);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-azure-600/20 bg-gradient-to-r from-azure-700 via-azure-600 to-azure-500 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">

<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 19h20L12 2zm0 4.5L17.5 17h-11L12 6.5z" />
  </svg>
</div>

<div>
  <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
    Azure Incident Assistant
  </h1>

  <p className="text-sm text-azure-100">
    AI-powered root cause analysis, KQL queries, and remediation guidance
  </p>
</div>

</div>

<Login
user={user}
setUser={setUser}
/>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Incident Details</h2>
            <ErrorAlert message={error} onDismiss={() => setError(null)} />
            <div className="mt-4">
              <IncidentForm
                form={form}
                onChange={setForm}
                onSubmit={handleSubmit}
                loading={loading}
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold text-slate-800">Analysis Output</h2>
            {loading && <LoadingSpinner />}
            {!loading && !result && !error && (
              <div className="card flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 rounded-full bg-azure-50 p-4">
                  <svg className="h-10 w-10 text-azure-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <p className="text-sm font-medium text-slate-600">No analysis yet</p>
                <p className="mt-1 max-w-xs text-xs text-slate-400">
                  Fill in the incident details and click Analyze Incident to generate insights.
                </p>
              </div>
            )}
            {!loading && result && <AnalysisResults data={result} />}
          </section>
        </div>
      </main>

      <footer className="mt-auto border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        Azure Incident Assistant — powered by OpenAI. Verify all commands before production use.
      </footer>
    </div>
  );
}
