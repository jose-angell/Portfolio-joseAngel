import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailDialog } from "./ProjectDetailDialog";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

export default function ProjectGrid() {

  const { t, language } = useLanguage();
  const projects = t('projects', 'projectItems') as unknown as { detailId?: string; title: string; description: string; imageUrl: string; imageAlt: string; technologies: string[]; projectUrl: string; sourceCodeUrl: string }[];
  const page = translations[language].projectsPage;
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = page.items.find((item) => item.id === selectedId) ?? null;
  const hasDetail = (detailId?: string) => page.items.some((item) => item.id === detailId);

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
        <a href="#/projects" className="font-label text-outline text-sm hover:text-tertiary transition-colors">
          VIEW_ALL_REPOS <span className="text-tertiary">-&gt;</span>
        </a>
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
            onSelect={
              hasDetail(project.detailId) ? () => setSelectedId(project.detailId ?? null) : undefined
            }
          />
        ))}
      </div>

      <ProjectDetailDialog
        project={selectedProject}
        projectIndex={page.items.findIndex((item) => item.id === selectedId)}
        labels={{
          highlights: page.modalHighlights,
          techStack: page.modalTechStack,
          viewCode: page.viewCode,
          viewDemo: page.viewDemo,
          privateLabel: page.privateLabel,
          close: page.modalClose,
        }}
        onClose={() => setSelectedId(null)}
      />
    </section>
  );
}
