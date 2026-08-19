import { Award } from "lucide-react";
import { resume } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Certifications() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  if (resume.certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-shell py-24 sm:py-28" aria-label="Certifications">
      <div ref={containerRef}>
        <SectionHeading eyebrow="06 — Certifications" title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-3">
          {resume.certifications.map((cert) => (
            <div key={cert.name} className="reveal card-surface flex items-start gap-4 rounded-xl p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber">
                <Award className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold leading-snug text-primary">
                  {cert.name}
                </h3>
                <p className="mt-1.5 text-sm text-secondary">{cert.issuer}</p>
                <p className="mt-0.5 font-mono text-xs text-faint">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
