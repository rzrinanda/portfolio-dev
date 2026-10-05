"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { copy } from '@/utils/i18n';

const DEFAULT_LANGUAGE = 'en';
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language');
    if (savedLanguage === 'id' || savedLanguage === 'en') setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('portfolio-language', language);
  }, [language]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key) => copy[language][key] ?? copy.en[key] ?? key,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
