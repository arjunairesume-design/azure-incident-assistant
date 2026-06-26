export default function AboutModal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-2xl">
  
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold text-slate-800">
            Azure Incident Assistant
<span className="ml-2 rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
  v1.0
</span>
            </h2>
  
            <button
              onClick={onClose}
              className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700 hover:bg-slate-200"
            >
              ✕
            </button>
          </div>
  
          <div className="mt-6 space-y-6">
  
            <div className="text-center">
  
              <p className="mt-2 text-slate-600">
              An AI-powered assistant designed to help Azure engineers investigate production incidents faster by generating Root Cause Analysis (RCA), KQL queries, PowerShell recommendations, business impact analysis and preventive guidance.
              </p>
            </div>
  
            <div>
              <h3 className="mb-3 text-lg font-semibold">
                Key Features
              </h3>
  
              <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <li>✅ AI Root Cause Analysis</li>
                <li>✅ KQL Query Generation</li>
                <li>✅ PowerShell Recommendations</li>
                <li>✅ Confidence Score</li>
                <li>✅ Business Impact</li>
                <li>✅ Similar Incidents</li>
                <li>✅ Recommended Team</li>
                <li>✅ PDF Export</li>
              </ul>
            </div>
  
            <div>
              <h3 className="mb-2 text-lg font-semibold">
              About the Developer
              </h3>
  
              <p className="font-semibold">
                Nagarjuna Bolla
              </p>
  
              <p className="text-slate-600">
                Azure Cloud Architect • AI Developer
              </p>
  
              <div className="mt-4 flex justify-center gap-6">
                <a
                  href="https://github.com/arjunairesume-design/azure-incident-assistant"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  ⭐ GitHub
                </a>
  
                <a
                  href="https://www.linkedin.com/in/nagarjuna-bolla-b14604104"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
  
            <div>
              <h3 className="mb-2 text-lg font-semibold">
                Upcoming Features
              </h3>
  
              <ul className="list-disc pl-5 text-sm text-slate-700">
                <li>Azure OpenAI Integration</li>
                <li>Incident History</li>
                <li>Incident Timeline</li>
                <li>Analytics Dashboard</li>
                <li>Export to Word</li>
                <li>Multi-user workspace</li>
              </ul>
            </div>
  
            <div className="border-t pt-4 text-center">

  <h3 className="font-semibold text-slate-700">
    Technology Stack
  </h3>

  <p className="mt-2 text-sm text-slate-500">
    Azure • OpenAI API • React • Node.js • Firebase Authentication • Tailwind CSS
  </p>
  <p className="mt-4 text-xs text-slate-400">
  Version 1.0 • June 2026
</p>
</div>
  
          </div>
        </div>
      </div>
    );
  }
  