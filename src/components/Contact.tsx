import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { resume } from "@/data/resume";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CONTACT_LINKS = [
  { icon: Mail, label: resume.email, href: `mailto:${resume.email}` },
  { icon: Linkedin, label: "LinkedIn", href: resume.linkedin },
  { icon: Github, label: "GitHub", href: resume.github },
];

export default function Contact() {
  const containerRef = useScrollReveal<HTMLDivElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${resume.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell py-24 sm:py-28" aria-label="Contact">
      <div ref={containerRef}>
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's build something together"
          description="Open to entry-level Software Engineer and Full-Stack Developer roles. Reach out directly, or send a message below."
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal space-y-3">
            {CONTACT_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-surface flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-signal/40"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-signal">
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="truncate text-sm text-primary">{item.label}</span>
              </a>
            ))}
            <div className="card-surface flex items-center gap-3 rounded-xl p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-surface text-secondary">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm text-secondary">{resume.location}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal card-surface space-y-4 rounded-xl p-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-secondary">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-surface bg-base-soft px-3.5 py-2.5 text-sm text-primary outline-none transition-colors focus:border-signal/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-secondary">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-surface bg-base-soft px-3.5 py-2.5 text-sm text-primary outline-none transition-colors focus:border-signal/60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-secondary">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-md border border-surface bg-base-soft px-3.5 py-2.5 text-sm text-primary outline-none transition-colors focus:border-signal/60"
                placeholder="What would you like to talk about?"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-signal px-4 py-3 font-mono text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
            <p className="text-center text-xs text-faint">Opens in your email app, addressed to {resume.email}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
