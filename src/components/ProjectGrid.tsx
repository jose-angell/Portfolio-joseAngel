import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";
export default function ProjectGrid() {

  const { t } = useLanguage();
  const projects = t('projects', 'projectItems') as unknown as { title: string; description: string; imageUrl: string; imageAlt: string; technologies: string[]; projectUrl: string; sourceCodeUrl: string }[];
  return (
    <section className="max-w-7xl mx-auto px-6" id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="font-label text-primary text-xs uppercase tracking-widest mb-4 block">
            04 // Featured Work
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            {t('projects', 'title')}
          </h2>
        </div>
        <div className="font-label text-outline text-sm cursor-pointer hover:text-tertiary transition-colors">
          VIEW_ALL_REPOS <span className="text-tertiary">-&gt;</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            imageAlt={project.imageAlt}
            technologies={project.technologies}
            projectUrl={project.projectUrl}
            sourceCodeUrl={project.sourceCodeUrl}
          />
        ))}
      </div>
    </section>
  );
}