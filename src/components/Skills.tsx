import { useLanguage } from "../context/LanguageContext";
import { SkillCard } from "./SkillCard";

// Definimos la data de forma centralizada.
// Esto podría venir de un CMS o un archivo de configuración en el futuro.
const skillsData = [
  {
    iconName: "terminal",
    title: "Backend Development",
    skills: [".NET", "C#", "ASP.NET Core", "REST APIs", "Entity Framework Core"],
  },
  {
    iconName: "database",
    title: "Data & Persistence",
    skills: ["SQL Server", "PostgreSQL"],
  },
  {
    iconName: "architecture",
    title: "Architecture & Engineering",
    skills: ["Clean Architecture", "SOLID", "Dependency Injection", "Testing", "xUnit"],
  },
  {
    iconName: "devops",
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "GitHub Actions"],
  },
  {
    iconName: "web",
    title: "Frontend Technologies",
    skills: ["JavaScript", "TypeScript", "Angular", "React", "Blazor"],
  },
];

export const Skills = () => {
  const { t } = useLanguage();
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
      
      {/* Encabezado de la Sección */}
      <div className="text-center mb-20">
        <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
          02 // Core Stack
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
          {t('skills', 'title')}
        </h2>
      </div>

      {/* Grid Responsivo para las Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category) => (
          <SkillCard
            key={category.title} // Usamos el título como key única
            iconName={category.iconName}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
      
    </section>
  );
};