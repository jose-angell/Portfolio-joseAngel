import type { ProjectDetail } from "../i18n/translations";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";

interface ProjectDetailDialogProps {
  project: ProjectDetail | null;
  labels: { role: string; context: string; highlights: string };
  onClose: () => void;
}

export function ProjectDetailDialog({ project, labels, onClose }: ProjectDetailDialogProps) {
  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-background text-on-surface ring-white/10 p-6 gap-6">
        {project && (
          <>
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
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
