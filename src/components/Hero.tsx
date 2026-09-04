import { lazy, Suspense } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { resume } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HeroScene = lazy(() => import("./HeroScene"));

export default function Hero() {
  const containerRef = useScrollReveal<HTMLDivElement>();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
      aria-label="Introduction"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid-dark bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)] dark:block hidden"
        aria-hidden="true"
      />

      <div ref={containerRef} className="section-shell grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-surface bg-surface px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_theme(colors.signal.DEFAULT)]" />
            <span className="font-mono text-xs text-secondary">Open to SDE roles</span>
          </div>

          <h1 className="reveal mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {resume.name}
          </h1>

          <p className="reveal mt-4 font-mono text-lg text-signal sm:text-xl">
            {resume.title} <span className="text-faint">/</span> {resume.tagline} <span className="text-faint">/</span> Cloud Computing <span className="text-faint">/</span> CyberSecurity
          </p>

          <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            {resume.summaryIntro}
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-md border border-signal/40 bg-signal/10 px-5 py-3 font-mono text-sm font-medium text-signal transition-colors hover:bg-signal/20"
            >
              Contact Me
            </button>
            <a
              href={resume.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-md border border-surface bg-surface px-5 py-3 font-mono text-sm font-medium text-primary transition-colors hover:border-signal/50"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div className="reveal mt-9 flex items-center gap-4">
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface bg-surface text-secondary transition-colors hover:text-signal"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface bg-surface text-secondary transition-colors hover:text-signal"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${resume.email}`}
              aria-label="Send email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface bg-surface text-secondary transition-colors hover:text-signal"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="reveal flex items-center justify-center lg:translate-y-8 lg:justify-end">
          <div className="profile-visual">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
            <div className="profile-frame">
              <div className="profile-frame__inner">
              <img
                src={resume.profileImage}
                alt="Professional headshot of Ashish Sharma"
                className="h-full w-full object-cover object-[center_18%]"
              />
              </div>
            <span className="profile-frame__label">Software / Full-Stack</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-faint transition-colors hover:text-signal sm:flex"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" style={{ animationDuration: "1.8s" }} />
      </button>
    </section>
  );
}
