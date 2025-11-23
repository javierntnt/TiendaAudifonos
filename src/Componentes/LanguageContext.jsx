import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "es"
  );

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "es" ? "en" : "es";
      localStorage.setItem("language", newLang); // 👈 guardar preferencia
      return newLang;
    });
  };

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
