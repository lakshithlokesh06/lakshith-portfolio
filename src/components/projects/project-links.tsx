import { ArrowUpRight, GitBranch } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/types/project";

type ProjectLinksProps = {
  project: Project;
  includeDetail?: boolean;
};

export function ProjectLinks({ project, includeDetail = false }: ProjectLinksProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {includeDetail ? (
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View case study for ${project.title}`}
          className="group/link inline-flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
        >
          View Project
          <ArrowUpRight
            aria-hidden="true"
            size={15}
            strokeWidth={1.8}
            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </Link>
      ) : null}

      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} GitHub repository`}
          className="group/link inline-flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] px-4 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
        >
          <GitBranch aria-hidden="true" size={15} strokeWidth={1.8} />
          GitHub Repository
        </a>
      ) : null}

      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live demo`}
          className="group/link inline-flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
        >
          Live Demo
          <ArrowUpRight
            aria-hidden="true"
            size={15}
            strokeWidth={1.8}
            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      ) : null}
    </div>
  );
}
