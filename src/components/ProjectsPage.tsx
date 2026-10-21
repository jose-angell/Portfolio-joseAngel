import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations, type ProjectCategory, type ProjectDetail } from "../i18n/translations";
import { ProjectDetailDialog } from "./ProjectDetailDialog";
import { Badge } from "./ui/badge";

type Filter = ProjectCategory | "ALL";

const CATEGORIES: ProjectCategory[] = [".NET", "FRONTEND", "SQL", "ARCHITECTURE"];

function ProjectTile({ project, onSelect }: { project: ProjectDetail; onSelect: () => void }) {
  const image = project.images[0];
  const interactive = {
    role: "button",
    tabIndex: 0,
    onClick: onSelect,
    onKeyDown: (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSelect();
      }
    },
  };
  const techBadges = (
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech) => (
        <Badge
          key={tech}
          variant="outline"
          className="bg-transparent border-white/20 font-label text-[10px] text-outline uppercase rounded group-hover:border-primary/40 group-hover:text-primary transition-colors"
        >
          {tech}
        </Badge>
      ))}
    </div>
  );

  if (project.variant === "featured") {
    return (
      <div {...interactive} className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary md:col-span-2 glass-card rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,112,243,0.08)]">
        <div className="flex flex-col lg:flex-row h-full">
          <div className="lg:w-3/5 relative h-64 lg:h-auto overflow-hidden bg-surface-container-low flex items-center justify-center">
            {image ? (
              <img
                alt={image.alt}
                src={image.src}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            ) : (
              <span className="material-symbols-outlined text-primary text-7xl">{project.icon}</span>
            )}
            <div className="absolute inset-0 bg-linear-to-r from-surface-container-low via-transparent to-transparent hidden lg:block"></div>
          </div>
          <div className="lg:w-2/5 p-8 flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <span className="font-label text-[10px] text-tertiary tracking-[0.2em] uppercase">
                {project.statusLabel}
              </span>
              <span className="material-symbols-outlined text-primary">{project.icon}</span>
            </div>
            <h3 className="font-headline text-3xl font-bold text-on-surface">{project.title}</h3>
            <p className="text-outline text-sm leading-relaxed">{project.summary}</p>
            {techBadges}
          </div>
        </div>
      </div>
    );
  }

  if (project.variant === "horizontal") {
    return (
      <div {...interactive} className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary md:col-span-2 bg-surface-container-low rounded-xl border-l-4 border-l-tertiary p-10 flex flex-col md:flex-row justify-between items-center gap-8 transition-all duration-300 hover:bg-surface-container-high">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="font-label text-[10px] text-outline uppercase tracking-widest">
              {project.statusLabel}
            </span>
          </div>
          <h3 className="font-headline text-3xl font-bold text-on-surface mb-3">{project.title}</h3>
          <p className="text-outline max-w-xl text-sm leading-relaxed mb-6">{project.summary}</p>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs font-label text-primary"># {tech}</span>
            ))}
          </div>
        </div>
        <div className="w-32 h-32 shrink-0 flex items-center justify-center rounded-full border border-white/10 group-hover:border-tertiary/40 transition-all duration-500">
          <span className="material-symbols-outlined text-4xl text-outline group-hover:text-tertiary group-hover:scale-110 transition-all duration-500">
            {project.icon}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div {...interactive} className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary glass-card rounded-xl p-8 flex flex-col transition-all duration-500 hover:border-primary/40 hover:shadow-[0_20px_40px_rgba(0,112,243,0.08)]">
      <div className="mb-6 h-48 rounded-lg overflow-hidden border border-white/5 bg-surface-container-low flex items-center justify-center">
        {image ? (
          <img
            alt={image.alt}
            src={image.src}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <span className="material-symbols-outlined text-primary text-6xl">{project.icon}</span>
        )}
      </div>
      <div className="flex items-center gap-3 mb-4">
        <span className="material-symbols-outlined text-tertiary text-sm">{project.icon}</span>
        <h3 className="font-headline text-2xl font-bold text-on-surface">{project.title}</h3>
      </div>
      <p className="text-outline text-sm mb-8 leading-relaxed grow">{project.summary}</p>
      {techBadges}
    </div>
  );
}

export function ProjectsPage() {
  const { language } = useLanguage();
  const page = translations[language].projectsPage;
  const [filter, setFilter] = useState<Filter>("ALL");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = page.items.find((project) => project.id === selectedId) ?? null;

  const filters: { value: Filter; label: string }[] = [
    { value: "ALL", label: page.filterAll },
    ...CATEGORIES.map((category) => ({ value: category, label: category })),
  ];
  const visibleItems = page.items.filter(
    (project) => filter === "ALL" || project.categories.includes(filter),
  );

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto" id="projects-page">
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-label text-tertiary text-sm tracking-widest uppercase">{page.path}</span>
          <div className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent"></div>
        </div>
        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-primary mb-6">
          {page.title}
        </h1>
        <p className="max-w-2xl text-outline text-lg md:text-xl font-light leading-relaxed">{page.intro}</p>
      </header>

      <section className="mb-16 flex flex-wrap items-center gap-3">
        <span className="font-label text-xs text-outline uppercase mr-2">{page.filterLabel}</span>
        {filters.map(({ value, label }) => {
          const isActive = filter === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(value)}
              className={`px-4 py-1.5 rounded-lg text-xs font-label uppercase border transition-all ${
                isActive
                  ? "bg-primary text-background border-primary/20"
                  : "bg-surface-container-high text-outline border-white/5 hover:text-primary hover:border-primary/40"
              }`}
            >
              {label}
            </button>
          );
        })}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visibleItems.map((project) => (
          <ProjectTile key={project.id} project={project} onSelect={() => setSelectedId(project.id)} />
        ))}
      </div>

      <ProjectDetailDialog
        project={selectedProject}
        labels={{ role: page.modalRole, context: page.modalContext, highlights: page.modalHighlights }}
        onClose={() => setSelectedId(null)}
      />
    </main>
  );
}
