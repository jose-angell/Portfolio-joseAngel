import { Badge } from "./ui/badge";
import { Button } from "./ui/button";


// Definimos la estructura de datos para nuestros proyectos
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  technologies: string[];
  projectUrl?: string;
  sourceCodeUrl?: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  technologies,
  projectUrl,
  sourceCodeUrl,
}: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full">
      {/* Contenedor de la Imagen */}
      <div className="relative overflow-hidden rounded-xl mb-6 bg-surface-container-high border border-white/5 aspect-video flex items-center justify-center">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>

      {/* Tecnologías usando Badge de shadcn */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <Badge 
            key={tech} 
            variant="outline" 
            className="bg-white/5 border-white/10 font-label text-[10px] text-outline uppercase tracking-wider rounded-full px-3 py-1"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Título y Enlace Externo */}
      <h3 className="font-headline font-bold text-2xl mb-3 flex items-center gap-3">
        {title}
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-xl">open_in_new</span>
          </a>
        )}
      </h3>

      {/* Descripción */}
      <p className="text-outline mb-6 flex-grow">
        {description}
      </p>

      {/* Botón de Código Fuente usando Button de shadcn */}
      {sourceCodeUrl && (
        <div className="mt-auto">
          <Button variant="link" className="p-0 h-auto font-label text-sm text-tertiary hover:text-tertiary/80 flex items-center gap-2" asChild>
            <a href={sourceCodeUrl} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-lg">code</span> 
              Source Code
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}