import { GraduationCap } from "lucide-react";
import { resume } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Education() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-shell py-24 sm:py-28" aria-label="Education">
      <div ref={containerRef}>
        <SectionHeading eyebrow="05 — Education" title="Academic background" />

        <div className="grid gap-4 sm:grid-cols-3">
          {resume.education.map((entry) => (
            <div
              key={entry.degree}
              className={`reveal card-surface rounded-xl p-6 ${
                entry.isPrimary ? "sm:col-span-3 sm:flex sm:items-center sm:justify-between sm:gap-6" : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    entry.isPrimary ? "bg-signal/15 text-signal" : "bg-surface text-secondary"
                  }`}
                >
                  <GraduationCap className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-primary">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-sm text-secondary">{entry.institution}</p>
                  <p className="mt-0.5 font-mono text-xs text-faint">{entry.location}</p>
                </div>
              </div>
              <div className={`${entry.isPrimary ? "mt-4 sm:mt-0" : "mt-4"} flex items-center gap-3 font-mono text-xs`}>
                <span className="rounded-md border border-surface bg-surface px-2.5 py-1 text-secondary">
                  {entry.date}
                </span>
                {entry.detail && (
                  <span className="rounded-md border border-signal/30 bg-signal/10 px-2.5 py-1 text-signal">
                    {entry.detail}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
