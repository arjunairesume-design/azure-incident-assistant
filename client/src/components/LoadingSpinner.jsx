export default function LoadingSpinner({ label = 'Analyzing incident...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16" role="status" aria-live="polite">
      <div className="relative h-14 w-14">
        <div className="absolute inset-0 rounded-full border-4 border-azure-200" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-azure-500" />
      </div>
      <p className="text-sm font-medium text-slate-600">{label}</p>
      <p className="max-w-sm text-center text-xs text-slate-400">
        Querying Azure expertise via OpenAI — this may take 15–30 seconds
      </p>
    </div>
  );
}
