import { createContext, useState, useContext, type ReactNode } from 'react';
import { translations, type Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (section: keyof typeof translations.es, key: string) => string; // Función para traducir
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  // Función helper que busca el texto en el diccionario
  const t = (section: keyof typeof translations.es, key: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (translations[language][section] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usarlo fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};