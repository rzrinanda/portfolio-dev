"use client";

import { useLanguage } from './language-provider';

const languages = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'id', flag: '🇮🇩', label: 'Bahasa Indonesia' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <div aria-label="Language" className="flex rounded-full border border-[#3a315f] p-1 text-xs font-semibold">
      {languages.map(({ code, flag, label }) => (
        <button key={code} type="button" aria-pressed={language === code} onClick={() => setLanguage(code)} className={`rounded-full px-2 py-1.5 transition-colors sm:px-3 ${language === code ? 'bg-[#1a1443] text-white' : 'text-[#b7b3ca] hover:text-white'}`}>
          <span aria-hidden="true">{flag}</span><span className="ml-1.5 hidden lg:inline">{label}</span>
          <span className="sr-only">{label}</span>
        </button>
      ))}
    </div>
  );
}
