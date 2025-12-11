"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { defaultLocale, type Locale, supported, translations } from "@/i18n";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Record<string, string>;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("locale") as Locale | null;
      if (saved && supported.includes(saved)) {
        setLocaleState(saved);
        return;
      }
    } catch (e) {
      // ignore
    }

    if (typeof navigator !== "undefined") {
      const nav = navigator.language?.split("-")[0] as Locale | undefined;
      if (nav && supported.includes(nav)) setLocaleState(nav);
    }
  }, []);

  function setLocale(l: Locale) {
    if (!supported.includes(l)) return;
    setLocaleState(l);
    try {
      localStorage.setItem("locale", l);
    } catch (e) {
      // ignore
    }
  }

  const t = translations[locale] ?? translations[defaultLocale];

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return { locale: ctx.locale, setLocale: ctx.setLocale };
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used within LocaleProvider");
  return ctx.t;
}
