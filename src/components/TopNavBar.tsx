import { useActiveSection } from "../hooks/useActiveSection";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  //{ name: "Contact", id: "contact" },
];

export const TopNavBar = () => {
  // Extraemos solo los IDs ["home", "about", "skills", ...]
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
      </div>
    </nav>
  );
};