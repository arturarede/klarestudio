"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { type Language } from "@/i18n/translations";

/* ─── Context shape ─── */
interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  setLang: () => {},
});

/* ─── Provider ─── */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("de");

  // Restore persisted language on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("klare_lang");
      if (stored && ["de", "fr", "it", "en"].includes(stored)) {
        setLangState(stored as Language);
      }
    } catch {
      // localStorage unavailable — stay with default
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem("klare_lang", l);
    } catch {}
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/* ─── Hook ─── */
export const useLanguage = () => useContext(LanguageContext);
