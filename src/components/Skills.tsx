import { resume } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import SkillBadge from "./SkillBadge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Skills() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-shell py-24 sm:py-28" aria-label="Technical skills">
      <div ref={containerRef}>
        <SectionHeading
          eyebrow="02 — Skills"
          title="Technical toolkit"
          description="Grouped by where each technology sits in the stack — from language fundamentals to the databases and tools behind every project below."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resume.skills.map((category) => (
            <div key={category.label} className="reveal card-surface rounded-xl p-6">
              <h3 className="font-display text-sm font-semibold text-primary">{category.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <SkillBadge key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
