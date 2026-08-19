import type { ExperienceEntry } from "@/types";
import { MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  entry: ExperienceEntry;
  isLast: boolean;
}

export default function ExperienceCard({ entry, isLast }: ExperienceCardProps) {
  return (
    <div className="reveal relative pl-10 sm:pl-12">
      {/* timeline trace */}
      <span className="absolute left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-signal bg-page sm:left-[9px]" aria-hidden="true" />
      {!isLast && (
        <span className="absolute left-3 top-5 bottom-[-2.5rem] w-px bg-base-border sm:left-[15px]" aria-hidden="true" />
      )}

      <div className="card-surface rounded-xl p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-primary">{entry.role}</h3>
            <p className="mt-0.5 font-mono text-sm text-signal">{entry.company}</p>
          </div>
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {entry.dates}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {entry.location}
            </span>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {entry.bullets.map((bullet, index) => (
            <li key={index} className="flex gap-2.5 text-sm leading-relaxed text-secondary">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/60" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {entry.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-surface bg-surface px-2.5 py-1 font-mono text-[11px] text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
