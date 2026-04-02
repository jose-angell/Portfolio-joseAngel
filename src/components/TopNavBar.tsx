import { useLanguage } from "../context/LanguageContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { Button } from "./ui/button";

export const TopNavBar = () => {
  const { t, language, toggleLanguage } = useLanguage();

  const navLinks = t('topbar', 'links') as unknown as { name: string; id: string }[];

  const sectionIds = navLinks.map(link => link.id);
  
  // Usamos nuestro hook
  const activeSection = useActiveSection(sectionIds);
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,112,243,0.08)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        <div className="font-label font-bold text-primary tracking-widest text-lg">
          JAGC_DEV
        </div>

       <div className="hidden md:flex items-center gap-8 font-headline tracking-tighter text-sm uppercase">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={`#${link.id}`}
                className={`transition-all duration-300 pb-1 border-b-2 ${
                  isActive 
                    ? "text-primary border-primary" 
                    : "text-outline border-transparent hover:text-primary" 
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <Button render={<a href="#footer" className="text-black" />}
          className="bg-primary text-tertiary font-label text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-transform rounded-lg px-5 py-2"
        >
          Hire Me
        </Button>
        <div className="flex items-center gap-4">
          
          {/* 4. Botón Toggle ES/EN */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 hover:border-primary/50 text-on-surface hover:text-primary transition-all font-label text-sm font-bold"
            aria-label="Cambiar idioma"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

        </div>
      </div>
    </nav>
  );
};