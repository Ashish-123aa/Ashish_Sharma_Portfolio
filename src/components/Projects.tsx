import { resume } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
  const containerRef = useScrollReveal<HTMLDivElement>();
  const [featured, ...rest] = resume.projects;

  return (
    <section id="projects" className="section-shell py-24 sm:py-28" aria-label="Projects">
      <div ref={containerRef}>
        <SectionHeading
          eyebrow="04 — Projects"
          title="Things I've built end to end"
          description="Full-stack applications covering authentication, role-based access, REST APIs and both SQL and NoSQL data layers."
        />

        {featured && <FeaturedProject project={featured} />}

        {rest.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {rest.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
