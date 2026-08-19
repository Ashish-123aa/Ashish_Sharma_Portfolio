import { ExternalLink, Github, ShieldCheck } from "lucide-react";
import type { ProjectEntry } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FeaturedProjectProps {
  project: ProjectEntry;
}

/** Abstract, wireframe-style representation of the product — not a real screenshot. */
function AbstractPreview() {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-surface bg-base-soft"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 border-b border-surface bg-surface px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
        <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
        <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
        <div className="ml-3 h-4 flex-1 max-w-[180px] rounded bg-base-elevated" />
      </div>
      <div className="grid h-full grid-cols-[80px_1fr] gap-3 p-4 sm:grid-cols-[100px_1fr]">
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded bg-signal/25" />
          <div className="h-2.5 w-3/4 rounded bg-base-elevated" />
          <div className="h-2.5 w-full rounded bg-base-elevated" />
          <div className="h-2.5 w-2/3 rounded bg-base-elevated" />
        </div>
        <div className="space-y-2.5">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex items-center gap-3 rounded-md border border-surface p-2.5">
              <div className="h-8 w-8 shrink-0 rounded bg-amber/20" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-3/4 rounded bg-base-elevated" />
                <div className="h-2 w-1/2 rounded bg-base-elevated" />
              </div>
              <div className="h-5 w-14 shrink-0 rounded bg-signal/20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={containerRef} className="reveal">
      <span className="eyebrow">Featured project</span>
      <div className="mt-4 grid gap-10 rounded-2xl border border-surface bg-surface p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
        <AbstractPreview />

        <div className="flex flex-col justify-center">
          <h3 className="font-display text-2xl font-bold text-primary sm:text-3xl">{project.name}</h3>
          <p className="mt-3 text-base leading-relaxed text-secondary">{project.description}</p>

          <div className="mt-5 flex items-start gap-2 rounded-lg border border-signal/25 bg-signal/5 p-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-secondary">
              Secured end to end with JWT authentication and role-based access control for job
              seekers and recruiters.
            </p>
          </div>

          <h4 className="mt-6 font-mono text-[11px] uppercase tracking-wide text-faint">
            Key features
          </h4>
          <ul className="mt-2.5 space-y-1.5">
            {project.features.map((feature, index) => (
              <li key={index} className="flex gap-2.5 text-sm leading-relaxed text-secondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal/70" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-surface bg-base-soft px-2.5 py-1 font-mono text-[11px] text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-signal px-4 py-2.5 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-surface bg-base-soft px-4 py-2.5 font-mono text-sm font-medium text-primary hover:border-signal/50"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
