import { resume } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-shell py-24 sm:py-28" aria-label="About">
      <div ref={containerRef}>
        <SectionHeading eyebrow="01 — About" title="Where code meets a working product" />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div className="reveal space-y-5">
            {resume.summaryPoints.map((point, index) => (
              <p key={index} className="text-base leading-relaxed text-secondary sm:text-lg">
                {point}
              </p>
            ))}
          </div>

          <div className="reveal grid grid-cols-2 gap-4 self-start">
            {resume.stats.filter((stat) => stat.label !== "Full-Stack Projects").map((stat) => (
              <div key={stat.label} className="card-surface rounded-xl p-5">
                <div className="font-display text-3xl font-bold text-signal">{stat.value}</div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wide text-faint">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-12 border-l-2 border-signal/60 pl-5">
          {resume.exploring.map((category) => (
            <div key={category.label}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{category.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{category.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
