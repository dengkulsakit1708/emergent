import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext({ lang: "en", setLang: () => {}, t: (k) => k });

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("sonar_lang") || "en";
  });

  useEffect(() => {
    window.localStorage.setItem("sonar_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((p) => (p === "en" ? "id" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

// Helper: pick translation based on current language
export const useT = () => {
  const { lang } = useLang();
  return (en, id) => (lang === "id" ? id : en);
};
