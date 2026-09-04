import { resume } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
  const containerRef = useScrollReveal<HTMLDivElement>();
  const visibleProjects = resume.projects.filter((project) =>
    ["DevGraph — Developer Skill & Career Relationship Explorer", "Online Job Portal"].includes(project.name)
  );
  return (
    <section id="projects" className="section-shell py-24 sm:py-28" aria-label="Projects">
      <div ref={containerRef}>
        <SectionHeading
          eyebrow="04 — Projects"
          title="Systems with a point of view"
          description="Two focused builds spanning graph exploration, authentication, role-based access, REST APIs and both SQL and NoSQL data layers."
        />

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-secondary">
          Explore more of my projects and experiments on my{" "}
          <a className="font-medium text-signal hover:underline" href={resume.github} target="_blank" rel="noopener noreferrer">
            GitHub profile
          </a>
          .
        </p>
      </div>
    </section>
  );
}
