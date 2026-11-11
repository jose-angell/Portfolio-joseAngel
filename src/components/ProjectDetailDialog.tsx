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
      <div className="rounded-lg overflow-hidden border border-white/5 bg-surface-container-low aspect-video flex items-center justify-center">
        {image ? (
          <img alt={image.alt} src={image.src} className="w-full h-full object-cover" />
        ) : (
          <span className="material-symbols-outlined text-primary text-6xl">{project.icon}</span>
        )}
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
              <span className="font-label text-[10px] text-tertiary tracking-[0.2em] uppercase">
                {project.statusLabel}
              </span>
              <DialogTitle className="font-headline text-3xl font-bold leading-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-outline text-sm leading-relaxed">
                {project.longDescription}
              </DialogDescription>
            </DialogHeader>

            <ProjectGallery key={project.id} project={project} />

            <div>
              <h4 className="font-label text-xs text-outline uppercase mb-3">{labels.highlights}</h4>
              <ul className="space-y-2 text-sm text-on-surface">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="text-tertiary font-label">&gt;</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-transparent border-white/20 font-label text-[10px] text-outline uppercase rounded"
                >
                  {tech}
                </Badge>
              ))}
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
                    className="border-white/20 text-outline hover:text-on-surface hover:bg-white/5 uppercase tracking-wider font-headline font-bold text-xs rounded"
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
                  className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-background hover:bg-primary-fixed rounded uppercase tracking-wider font-headline font-bold transition-all active:scale-95"
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
