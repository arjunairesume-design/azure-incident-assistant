function getConfidenceStyle(score) {
  if (score >= 80) return { bar: 'bg-emerald-500', text: 'text-emerald-700', label: 'High' };
  if (score >= 50) return { bar: 'bg-amber-500', text: 'text-amber-700', label: 'Medium' };
  return { bar: 'bg-rose-500', text: 'text-rose-700', label: 'Low' };
}

export default function ConfidenceBadge({ score }) {
  const style = getConfidenceStyle(score);

  return (
    <div className="card">
      <h3 className="section-title">
        <span className="inline-block h-2 w-2 rounded-full bg-azure-500" />
        Confidence Score
      </h3>
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-slate-900">{score}</span>
          <span className="text-2xl font-medium text-slate-400">/ 100</span>
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${style.text} bg-slate-100`}>
          {style.label} confidence
        </span>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all duration-700 ${style.bar}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
