import { useEffect, useState } from "react";

interface Heading { id: string; text: string; level: 2 | 3; }
interface Props { headings: Heading[]; variant?: "mobile" | "desktop"; }

export const BlogTOC = ({ headings, variant = "desktop" }: Props) => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (variant !== "desktop" || headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings, variant]);

  if (headings.length === 0) return null;

  if (variant === "mobile") {
    return (
      <details className="lg:hidden bg-muted/40 rounded-xl p-4 mb-8 border border-border">
        <summary className="font-semibold cursor-pointer text-foreground">Sumário do artigo</summary>
        <nav className="mt-3 space-y-1 text-sm">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`block py-1 ${h.level === 3 ? 'pl-4' : ''} text-muted-foreground hover:text-cyan-dark transition-colors`}
            >
              {h.text}
            </a>
          ))}
        </nav>
      </details>
    );
  }

  return (
    <aside className="hidden lg:block sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 border-l border-border pl-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-3">Neste artigo</p>
      <nav className="space-y-1 text-sm">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`block py-1 transition-colors ${
              h.level === 3 ? 'pl-4 text-xs' : ''
            } ${
              active === h.id
                ? 'text-cyan-dark font-semibold border-l-2 border-cyan-dark -ml-[1px] pl-3'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </aside>
  );
};
