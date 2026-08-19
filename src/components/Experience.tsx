import { resume } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import ExperienceCard from "./ExperienceCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Experience() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-shell py-24 sm:py-28" aria-label="Work experience">
      <div ref={containerRef}>
        <SectionHeading
          eyebrow="03 — Experience"
          title="Three internships, one thread"
          description="Each role added a different layer — dashboards and data pipelines, a full-stack product from scratch, and secure business applications."
        />

        <div className="space-y-8">
          {resume.experience.map((entry, index) => (
            <ExperienceCard
              key={entry.company}
              entry={entry}
              isLast={index === resume.experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
