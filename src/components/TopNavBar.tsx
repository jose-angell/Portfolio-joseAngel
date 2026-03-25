import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const TopNavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,112,243,0.08)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo / Brand */}
        <div className="font-label font-bold text-primary tracking-widest text-lg">
          JAGC_DEV
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tighter text-sm uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-outline hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button - Usando shadcn */}
        <Button 
          className="bg-primary text-on-primary font-label text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-transform rounded-lg px-5 py-2"
        >
          Hire Me
        </Button>
      </div>
    </nav>
  );
};