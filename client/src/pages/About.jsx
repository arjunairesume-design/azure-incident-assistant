export default function About() {
    return (
      <div className="mx-auto max-w-5xl px-6 py-12">
  
        <h1 className="text-4xl font-bold text-slate-800">
          About Azure Incident Assistant
        </h1>
  
        <p className="mt-4 text-lg text-slate-600">
          Azure Incident Assistant is an AI-powered Root Cause Analysis platform
          built for Azure Engineers, Cloud Architects and Production Support teams.
        </p>
  
        <div className="mt-10 rounded-2xl border bg-white p-8 shadow">
  
          <h2 className="text-2xl font-bold">
            About the Developer
          </h2>
  
          <div className="mt-6 flex items-center gap-6">
  
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl">
              👨‍💻
            </div>
  
            <div>
  
              <h3 className="text-xl font-bold">
                Nagarjuna Bolla
              </h3>
  
              <p className="text-slate-600">
                Azure Cloud Architect • AI Developer
              </p>
  
              <p className="mt-2 text-slate-600">
                10+ years of experience in Azure Cloud, Infrastructure,
                Migration, Automation and Production Support.
              </p>
  
            </div>
  
          </div>
  
        </div>
  
        <div className="mt-10">
  
          <h2 className="text-2xl font-bold">
            Certifications
          </h2>
  
          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Microsoft Certified: Azure Administrator (AZ-104)</li>
            <li>Microsoft Certified: Azure Solutions Architect (AZ-305)</li>
            <li>Microsoft Certified: Azure DevOps Engineer (AZ-400)</li>
          </ul>
  
        </div>
  
        <div className="mt-10">
  
          <h2 className="text-2xl font-bold">
            Why this project?
          </h2>
  
          <p className="mt-4 text-slate-700 leading-8">
            During production support, engineers often spend valuable time
            identifying the root cause of Azure incidents. This project was built
            to accelerate troubleshooting by combining AI with real-world Azure
            production scenarios, KQL generation, PowerShell remediation,
            business impact analysis and preventive recommendations.
          </p>
  
        </div>
  
        <div className="mt-10">
  
          <h2 className="text-2xl font-bold">
            Roadmap
          </h2>
  
          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Azure OpenAI Integration</li>
            <li>Incident History</li>
            <li>Azure Resource Discovery</li>
            <li>Analytics Dashboard</li>
            <li>Team Collaboration</li>
            <li>Subscription Plans</li>
          </ul>
  
        </div>
  
      </div>
    );
  }