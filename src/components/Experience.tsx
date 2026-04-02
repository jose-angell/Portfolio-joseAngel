import { useLanguage } from "../context/LanguageContext";


export const Experience = () => {
   const { t } = useLanguage();
    const experienceData = t('experience', 'experiencesItems') as unknown as {  id: string; period: string; role: string; company: string; description: string[]; technologies: string[] }[];
  return (
    <section id="experience" className="bg-surface-container py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-20">
          <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
            03 // Career Path
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
            {t('experience', 'title')}
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