import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref's subtree.
 * Any descendant carrying the `reveal` class gets `is-visible` added
 * once it scrolls into view, triggering the CSS fade-up transition.
 * Respects prefers-reduced-motion via the CSS itself (index.css).
 */
export function useScrollReveal<T extends HTMLElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.matches(".reveal")
      ? [container, ...container.querySelectorAll<HTMLElement>(".reveal")]
      : Array.from(container.querySelectorAll<HTMLElement>(".reveal"));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
