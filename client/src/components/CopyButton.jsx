import { useState } from 'react';

export default function CopyButton({ text, label = 'Copy' }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="absolute right-3 top-3 rounded-md bg-slate-700 px-3 py-1.5 text-xs font-medium text-white
        transition hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-azure-400"
      aria-label={`${label} to clipboard`}
    >
      {copied ? 'Copied!' : label}
    </button>
  );
}
