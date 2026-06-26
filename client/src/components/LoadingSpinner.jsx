import { useEffect, useState } from "react";

const STEPS = [
  "Reading incident details...",
  "Checking Azure resource information...",
  "Finding similar production incidents...",
  "Generating Root Cause Analysis...",
  "Creating KQL investigation queries...",
  "Preparing PowerShell recommendations...",
  "Building preventive recommendations...",
  "Finalizing AI response..."
];

export default function LoadingSpinner() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="card flex flex-col items-center py-10"
      role="status"
      aria-live="polite"
    >
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-azure-200"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-azure-600"></div>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-slate-800">
        🤖 AI is analyzing your incident
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Please wait while Azure Incident Assistant investigates the issue...
      </p>

      <div className="mt-8 w-full max-w-md rounded-lg bg-slate-50 p-5">
        {STEPS.map((step, index) => (
          <div
            key={step}
            className="mb-3 flex items-center gap-3 text-sm"
          >
            {index < currentStep ? (
              <span className="text-green-600 text-lg">✅</span>
            ) : index === currentStep ? (
              <span className="animate-pulse text-blue-600">⏳</span>
            ) : (
              <span className="text-slate-300">○</span>
            )}

            <span
              className={
                index <= currentStep
                  ? "text-slate-800"
                  : "text-slate-400"
              }
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs text-slate-400">
        Typical analysis time: 10–20 seconds
      </p>
    </div>
  );
}