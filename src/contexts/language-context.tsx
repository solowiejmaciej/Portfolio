"use client";
import React, { createContext, useContext, useState } from "react";
import en from "@/config/translations/en";
import pl from "@/config/translations/pl";

const translations = {
  en: en,
  pl: pl,
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pl");

  const t = (key) => {
    try {
      const keys = key.split(".");
      let value = translations[language];

      for (const k of keys) {
        if (value === undefined || value === null) {
          console.warn(`Brak tłumaczenia dla klucza: ${key}`);
          return key;
        }
        value = value[k];
      }

      return value;
    } catch (error) {
      console.error(
        `Błąd podczas pobierania tłumaczenia dla klucza: ${key}`,
        error
      );
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage musi być użyte wewnątrz LanguageProvider");
  }
  return context;
};
