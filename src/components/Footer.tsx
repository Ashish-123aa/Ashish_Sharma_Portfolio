import { Github, Linkedin, Mail } from "lucide-react";
import { resume } from "@/data/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface">
      <div className="section-shell flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-primary">{resume.name}</p>
          <p className="font-mono text-xs text-faint">
            {resume.title} · {resume.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={resume.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-secondary transition-colors hover:text-signal"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary transition-colors hover:text-signal"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href={`mailto:${resume.email}`} aria-label="Email" className="text-secondary transition-colors hover:text-signal">
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="font-mono text-xs text-faint">
          © {year} {resume.name}. Built with React &amp; TypeScript.
        </p>
      </div>
    </footer>
  );
}
