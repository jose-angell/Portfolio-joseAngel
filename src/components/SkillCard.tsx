interface SkillCardProps {
  iconName: string; // El nombre del icono de Material Symbols (ej: 'terminal')
  title: string;    // El título de la categoría (ej: 'Backend')
  skills: string[]; // Un array de strings con las tecnologías
}

export function SkillCard({ iconName, title, skills }: SkillCardProps) {
  return (
    <div className="glass-card p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full">
      
      {/* Contenedor del Icono con animación en hover */}
      <div className="mb-6 text-primary group-hover:scale-110 transition-transform origin-left duration-300">
        <span className="material-symbols-outlined text-4xl">
          {iconName}
        </span>
      </div>
      
      {/* Título de la Categoría */}
      <h3 className="font-headline font-bold text-xl mb-4 text-on-surface">
        {title}
      </h3>
      
      {/* Lista de Habilidades */}
      <ul className="font-label text-sm text-outline space-y-3 flex-grow">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            {/* El prompt ">" estilo terminal */}
            <span className="text-tertiary font-bold">{'>'}</span> 
            {skill}
          </li>
        ))}
      </ul>
      
    </div>
  );
}
