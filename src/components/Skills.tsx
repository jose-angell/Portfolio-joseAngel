import { SkillCard } from "./SkillCard";

// Definimos la data de forma centralizada.
// Esto podría venir de un CMS o un archivo de configuración en el futuro.
const skillsData = [
  {
    iconName: "terminal",
    title: "Backend",
    skills: [".NET Core / C#", "Node.js / Express", "RESTful APIs", "Microservices", "Clean Architecture"],
  },
  {
    iconName: "web",
    title: "Frontend",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Redux / TanStack"],
  },
  {
    iconName: "database",
    title: "Databases",
    skills: ["PostgreSQL", "SQL Server / MySQL", "MongoDB", "Redis"],
  },
  {
    iconName: "architecture",
    title: "Infrastructure & Tools",
    skills: ["Docker", "CI/CD (GitHub Actions)", "Azure / AWS", "Git & GitHub", "SOLID Principles"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
      
      {/* Encabezado de la Sección */}
      <div className="text-center mb-20">
        <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
          02 // Core Stack
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
          Technical Capabilities
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