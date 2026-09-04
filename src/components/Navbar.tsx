import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { resume } from "@/data/resume";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-surface bg-page/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary">
        <button
          onClick={() => handleNavClick("home")}
          className="font-display text-lg font-semibold tracking-tight text-primary"
        >
          Ashish<span className="text-signal">.</span>dev
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                aria-current={activeId === item.id ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 font-mono text-[13px] transition-colors ${
                  activeId === item.id ? "text-signal" : "text-secondary hover:text-primary"
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-px bg-signal" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={resume.resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-signal/40 bg-signal/10 px-4 py-2 font-mono text-[13px] font-medium text-signal transition-colors hover:bg-signal/20"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            View Resume
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-surface bg-surface text-primary"
          >
            {menuOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-surface bg-page/95 backdrop-blur-md lg:hidden">
          <ul className="section-shell flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full rounded-md px-3 py-2.5 text-left font-mono text-sm ${
                    activeId === item.id ? "bg-signal/10 text-signal" : "text-secondary"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={resume.resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-signal/40 bg-signal/10 px-4 py-2.5 font-mono text-sm font-medium text-signal"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
