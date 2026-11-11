import { useState } from "react";
import type { ProjectDetail } from "../i18n/translations";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectDetailDialogProps {
  project: ProjectDetail | null;
  projectIndex: number;
  labels: {
    highlights: string;
    techStack: string;
    viewCode: string;
    viewDemo: string;
    privateLabel: string;
    close: string;
  };
  onClose: () => void;
}

const hasProjectUrl = (project: ProjectDetail) =>
  Boolean(project.projectUrl?.trim() && project.projectUrl.trim() !== "#");

function ProjectGallery({ project }: { project: ProjectDetail }) {
  const [selected, setSelected] = useState(0);
  const image = project.images[selected];

  return (
    <div className="space-y-3">
      <div className="rounded-lg border border-[#414754]/20 bg-[#0e0e0e] overflow-hidden shadow-inner">
        <div className="flex items-center justify-between gap-3 px-4 py-2 bg-surface-container-high/60 border-b border-[#414754]/15 text-xs font-label text-outline">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-sm text-primary">terminal</span>
            <span className="truncate">{project.id}.app</span>
          </div>
          <span className="text-[11px] text-tertiary shrink-0">{project.categories.join(" · ")}</span>
        </div>
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#0e0e0e] flex items-center justify-center">
          {image ? (
            <>
              <img alt={image.alt} src={image.src} className="w-full h-full object-cover opacity-85" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0e0e0e] via-transparent to-transparent"></div>
            </>
          ) : (
            <span className="material-symbols-outlined text-primary text-8xl">{project.icon}</span>
          )}
        </div>
      </div>
      {project.images.length > 1 && (
        <div className="flex gap-2">
          {project.images.map((thumb, index) => (
            <button
              key={thumb.src}
              type="button"
              aria-label={thumb.alt}
              aria-pressed={index === selected}
              onClick={() => setSelected(index)}
              className={`w-20 aspect-video rounded overflow-hidden border transition-colors ${
                index === selected ? "border-primary" : "border-white/10 opacity-60 hover:opacity-100"
              }`}
            >
              <img alt="" src={thumb.src} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectDetailDialog({ project, projectIndex, labels, onClose }: ProjectDetailDialogProps) {
  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="fixed inset-0 m-auto h-fit translate-x-0 translate-y-0 w-[calc(100%-2rem)] sm:max-w-4xl max-h-[90vh] flex flex-col overflow-hidden bg-surface-container-low text-on-surface ring-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-0 gap-0"
      >
        {project && (
          <div className="flex items-center px-6 py-4 border-b border-white/10 bg-background/90 shrink-0">
            <span className="font-label text-xs font-semibold text-tertiary tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse inline-block"></span>
              [PROJECT_ID: PRJ-{String(projectIndex + 1).padStart(3, "0")}] // {project.statusLabel}
            </span>
          </div>
        )}
        {project && (
          <div className="overflow-y-auto p-6 flex flex-col gap-6 grow">
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 text-[10px] font-label bg-tertiary/10 text-tertiary border border-tertiary/30 rounded uppercase tracking-wider">
                  {project.context}
                </span>
                <span className="px-2 py-0.5 text-[10px] font-label bg-primary/10 text-primary border border-primary/20 rounded uppercase tracking-wider">
                  {project.role}
                </span>
              </div>
              <DialogTitle className="font-headline text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-outline text-sm leading-relaxed">
                {project.longDescription}
              </DialogDescription>
            </DialogHeader>

            <ProjectGallery key={project.id} project={project} />

            {project.stats && project.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-lg bg-surface-container-high/40 border border-[#414754]/15"
                  >
                    <span className="block font-label text-[11px] text-outline uppercase tracking-wider mb-1">
                      {stat.label}
                    </span>
                    <span className="font-headline text-xl font-bold text-on-surface">{stat.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-primary">account_tree</span>
                {labels.highlights}
              </h3>
              <ul className="space-y-3 text-sm text-[#c1c6d7]">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-high/20 border border-[#414754]/10 hover:border-primary/30 transition-colors"
                  >
                    <span className="font-label text-tertiary font-bold mt-0.5">&gt;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-label text-xs uppercase tracking-widest text-outline mb-3">
                {labels.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 h-auto bg-surface-container-high border-primary/20 font-label text-xs text-primary rounded"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
        {project && (
          <div className="px-6 py-4 border-t border-white/10 bg-background/90 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs font-label text-outline">
              <span className="material-symbols-outlined text-sm text-tertiary">verified</span>
              <span>{project.context}</span>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end font-label text-xs">
              <DialogClose
                render={
                  <Button
                    variant="outline"
                    className="border-[#414754]/30 text-[#c1c6d7] hover:text-white hover:bg-white/5 uppercase tracking-wider font-headline font-bold text-xs rounded"
                  />
                }
              >
                {labels.close}
              </DialogClose>
              {hasProjectUrl(project) && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">open_in_new</span>
                  {labels.viewDemo}
                </a>
              )}
              {project.sourceCodeUrl ? (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-black font-label text-xs uppercase tracking-widest font-bold hover:scale-105 active:scale-95 transition-transform rounded-lg px-5 py-2"
                >
                  <span className="material-symbols-outlined text-sm">code</span>
                  {labels.viewCode}
                </a>
              ) : (
                <span className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined text-lg">lock</span>
                  {labels.privateLabel}
                </span>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
