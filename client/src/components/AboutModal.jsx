export default function AboutModal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-white p-8 shadow-2xl">
  
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-bold text-slate-800">
            Azure Cloud Engineer Assistant
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
              Azure Cloud Engineer Assistant is an AI-powered platform built to simplify Azure operations and accelerate cloud engineering workflows. The current release focuses on AI-driven Incident Management with intelligent Root Cause Analysis, KQL query generation, PowerShell recommendations and production troubleshooting guidance.
              </p>
            </div>
            <div>

  <h3 className="mb-3 text-lg font-semibold">
    Why Azure Cloud Engineer Assistant?
  </h3>

  <p className="text-sm leading-7 text-slate-600">
  Azure Cloud Engineer Assistant is purpose-built for Azure professionals. It combines Azure Incident Management, Cloud Operations, Migration, Architecture and Automation into one AI-powered engineering workspace, reducing manual effort and context switching.
  </p>

  <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-2">
    <li>Reduce engineering effort by bringing Azure troubleshooting, migration planning, architecture guidance and automation into one focused workspace.</li>
    <li>Minimize switching between Azure Portal, Microsoft Learn, scripts and multiple AI tools.</li>
    <li>Generate structured and consistent engineering guidance.</li>
    <li>Support Azure Incident Management, Cloud Operations, Migration, Architecture and Automation in one platform.</li>
    <li>Continuously evolving based on real-world Azure engineering scenarios.</li>
  </ul>

</div>
            <div>
              <h3 className="mb-3 text-lg font-semibold">
                Current Features
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
  Current Capability
</h3>

<ul className="list-disc pl-5 text-sm text-slate-700">
  <li>✅ AI Incident Management</li>
</ul>

<h3 className="mt-6 mb-2 text-lg font-semibold">
  Upcoming Capabilities
</h3>

<ul className="list-disc pl-5 text-sm text-slate-700">
  <li>Migration Assistant</li>
  <li>Landing Zone Planning</li>
  <li>Infrastructure as Code</li>
  <li>Solution Architecture</li>
  <li>Cost & Governance Advisor</li>
</ul>
<div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">

  <h3 className="text-lg font-semibold text-blue-800">
    Current Version
  </h3>

  <p className="mt-2 text-sm leading-7 text-slate-700">
    Version 1.0 uses a curated Azure engineering knowledge base combined with AI
    reasoning to generate structured recommendations for common Azure production
    scenarios.
  </p>

  <p className="mt-3 text-sm leading-7 text-slate-700">
  Roadmap:
  Future releases will introduce optional Azure Tenant Integration, enabling
    the assistant to securely analyze Azure resources, monitoring data and
    diagnostics using customer-authorized Azure access.
  </p>

</div>
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
  