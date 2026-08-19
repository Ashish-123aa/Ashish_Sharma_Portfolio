import { ExternalLink, Github } from "lucide-react";
import type { ProjectEntry } from "@/types";

interface ProjectCardProps {
  project: ProjectEntry;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="reveal card-surface flex h-full flex-col rounded-xl p-6 transition-colors hover:border-signal/40">
      <h3 className="font-display text-lg font-semibold text-primary">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-secondary">{project.description}</p>

      <div className="mt-4">
        <h4 className="font-mono text-[11px] uppercase tracking-wide text-faint">Key features</h4>
        <ul className="mt-2 space-y-1.5">
          {project.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex gap-2 text-sm leading-relaxed text-secondary">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal/60" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-surface bg-surface px-2 py-1 font-mono text-[11px] text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3 border-t border-surface pt-5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-signal hover:underline"
          >
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            Live Demo
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-primary hover:text-signal"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
