interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string[]; // Cambiamos a un array para renderizar viñetas
  technologies: string[]; // Agregamos las tecnologías clave
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    period: "Dic 2022 - Presente",
    role: "Desarrollador Web Full Stack",
    company: "NTT DATA",
    description: [
      "Lideré la migración y refactorización de servicios críticos (Vigencia y Reintegros), incluyendo la transición de PostgreSQL a SQL Server sin interrupción operativa.",
      "Desarrollé arquitecturas de integración con el ecosistema SAP y normativas del SAT, automatizando procesos comerciales y de facturación.",
      "Implementé sistemas de telemetría y monitoreo de errores (logs) en aplicaciones productivas, reduciendo drásticamente los tiempos de diagnóstico.",
      "Integré flujos de autenticación segura con Azure y automaticé la carga masiva de datos mediante el procesamiento de archivos Excel y XML."
    ],
    technologies: [".NET", "C#", "SQL Server", "MVC", "SAP Integration", "Azure"]
  },
  {
    id: 2,
    period: "Ago 2021 - Nov 2022",
    role: "Desarrollador Web",
    company: "Volkswagen Veracruz",
    description: [
      "Diseñé e implementé un sistema integral para la valuación de autos seminuevos, agilizando el proceso de tasación y documentación interna.",
      "Desarrollé módulos de control de inventario de herramientas para optimizar la trazabilidad y reducir pérdidas operativas.",
      "Construí APIs RESTful para la interconexión de plataformas y sistemas internos, mejorando el flujo de información entre departamentos."
    ],
    technologies: ["Angular", "TypeScript", "C#", "Entity Framework", "RESTful APIs"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="bg-surface-container py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-20">
          <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
            03 // Career Path
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
            Professional Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-outline-variant/30 ml-3 md:ml-6 space-y-16">
          
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              
              {/* Nodo del Timeline */}
              <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[9px] top-1.5 group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(174,198,255,0.6)] transition-all duration-300"></div>
              
              {/* Encabezado del Puesto */}
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2 md:gap-4">
                <h3 className="font-headline font-bold text-2xl text-on-surface">
                  {item.role}
                </h3>
                <span className="font-label text-tertiary text-sm md:text-right whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              
              <h4 className="font-headline text-lg text-primary mb-4 font-medium">
                {item.company}
              </h4>
              
              {/* Descripción en Viñetas */}
              <ul className="space-y-3 mb-6">
                {item.description.map((bullet, index) => (
                  <li key={index} className="text-outline text-base leading-relaxed flex items-start gap-3">
                    <span className="text-tertiary mt-1 text-sm">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Badges de Tecnologías */}
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="font-label text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};