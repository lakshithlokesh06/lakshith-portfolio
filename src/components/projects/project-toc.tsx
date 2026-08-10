"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type ProjectTocItem = {
  id: string;
  label: string;
};

type ProjectTocProps = {
  items: ProjectTocItem[];
};

export function ProjectToc({ items }: ProjectTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length || typeof IntersectionObserver === "undefined") {
      return;
    }

    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const nextActive = Array.from(visibleSections.entries()).sort(
          (a, b) => b[1] - a[1],
        )[0]?.[0];

        if (nextActive) {
          setActiveId(nextActive);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0.08, 0.18, 0.32, 0.5],
      },
    );

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) {
    return null;
  }

  return (
    <aside className="hidden lg:block">
      <nav
        aria-label="Project case study sections"
        className="sticky top-24 rounded-lg border border-[var(--color-border)] bg-[rgba(8,9,11,0.3)] p-3"
      >
        <p className="px-3 pb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-subtle)]">
          Case Study
        </p>
        <ol className="space-y-1">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] ${
                    isActive
                      ? "text-[var(--color-foreground)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-4 w-px rounded-full transition-colors ${
                      isActive
                        ? "bg-[var(--color-accent)]"
                        : "bg-[var(--color-border-strong)] group-hover:bg-[var(--color-accent)]"
                    }`}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}
