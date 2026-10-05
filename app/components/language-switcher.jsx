"use client";

import { useLanguage } from './language-provider';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Bahasa Indonesia' },
];

function FlagIcon({ code }) {
  if (code === 'id') {
    return <svg aria-hidden="true" viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-sm shadow-sm"><path fill="#e11d48" d="M0 0h24v8H0z" /><path fill="#fff" d="M0 8h24v8H0z" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 16" className="h-4 w-6 overflow-hidden rounded-sm bg-[#012169] shadow-sm"><path stroke="#fff" strokeWidth="4" d="M0 0l24 16M24 0L0 16" /><path stroke="#c8102e" strokeWidth="2" d="M0 0l24 16M24 0L0 16" /><path stroke="#fff" strokeWidth="6" d="M12 0v16M0 8h24" /><path stroke="#c8102e" strokeWidth="3" d="M12 0v16M0 8h24" /></svg>;
}

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div aria-label="Language" className="flex rounded-full border border-[#3a315f] p-1 text-xs font-semibold">
      {languages.map(({ code, label }) => (
        <button key={code} type="button" aria-pressed={language === code} onClick={() => setLanguage(code)} className={`flex items-center rounded-full px-2 py-1.5 transition-all sm:px-3 ${language === code ? 'bg-violet-600 text-white ring-2 ring-[#16f2b3] shadow-[0_0_16px_rgba(22,242,179,0.35)]' : 'text-[#b7b3ca] hover:bg-[#1a1443] hover:text-white'}`}>
          <FlagIcon code={code} /><span className="ml-1.5 hidden lg:inline">{label}</span>
          <span className="sr-only">{label}</span>
        </button>
      ))}
    </div>
  );
}
