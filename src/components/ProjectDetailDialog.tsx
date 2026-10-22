import { useState } from "react";
import type { ProjectDetail } from "../i18n/translations";
import { XIcon } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectDetailDialogProps {
  project: ProjectDetail | null;
  labels: {
    role: string;
    context: string;
    highlights: string;
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

export function ProjectDetailDialog({ project, labels, onClose }: ProjectDetailDialogProps) {
  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="fixed inset-0 m-auto h-fit translate-x-0 translate-y-0 w-[calc(100%-2rem)] sm:max-w-2xl max-h-[85vh] flex flex-col overflow-hidden bg-background text-on-surface ring-white/10 p-0 gap-0"
      >
        <div className="flex justify-end px-3 pt-3 shrink-0">
          <DialogClose
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={labels.close}
                className="text-outline hover:text-on-surface hover:bg-white/5"
              />
            }
          >
            <XIcon />
          </DialogClose>
        </div>
        {project && (
          <div className="overflow-y-auto p-6 pt-2 flex flex-col gap-6">
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

            <dl className="grid grid-cols-2 gap-4 font-label text-xs">
              <div>
                <dt className="text-outline uppercase mb-1">{labels.role}</dt>
                <dd className="text-on-surface">{project.role}</dd>
              </div>
              <div>
                <dt className="text-outline uppercase mb-1">{labels.context}</dt>
                <dd className="text-on-surface">{project.context}</dd>
              </div>
            </dl>

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

            <div className="flex flex-wrap items-center gap-6 font-label text-sm">
              {project.sourceCodeUrl ? (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-tertiary hover:text-tertiary/80 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">code</span>
                  {labels.viewCode}
                </a>
              ) : (
                <span className="flex items-center gap-2 text-outline">
                  <span className="material-symbols-outlined text-lg">lock</span>
                  {labels.privateLabel}
                </span>
              )}
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
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
