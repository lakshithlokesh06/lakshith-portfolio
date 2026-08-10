import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { PageContainer } from "@/components/ui/page-container";
import { ProjectLinks } from "@/components/projects/project-links";
import { ProjectVisual } from "@/components/projects/project-visual";
import type { Project } from "@/types/project";

type ProjectCaseStudyProps = {
  project: Project;
};

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-[var(--color-border)] py-11 sm:py-12">
      <div className="grid gap-5 lg:grid-cols-[13rem_1fr] xl:grid-cols-[14rem_1fr]">
        <h2 className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-subtle)]">
          {title}
        </h2>
        <div className="max-w-3xl text-base leading-8 text-[var(--color-muted)]">
          {children}
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-[var(--color-border)] bg-[rgba(16,19,24,0.62)] px-4 py-3 text-sm leading-6 text-[var(--color-muted)] transition-colors hover:border-[var(--color-border-strong)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ArchitectureVisual({ steps }: { steps: string[] }) {
  return (
    <ol
      className="rounded-lg border border-[var(--color-border)] bg-[rgba(8,9,11,0.28)] p-3"
      aria-label="Project architecture flow"
    >
      {steps.map((step, index) => (
        <li key={step} className="relative grid gap-3 pl-8">
          <span className="absolute left-0 top-3 inline-flex size-5 items-center justify-center rounded-full border border-[rgba(103,232,249,0.28)] bg-[rgba(103,232,249,0.08)] text-[0.68rem] font-semibold text-[var(--color-foreground)]">
            {index + 1}
          </span>
          <div className="rounded-md border border-[var(--color-border)] bg-[rgba(16,19,24,0.72)] px-4 py-3 text-sm font-medium text-[var(--color-foreground)]">
            {step}
          </div>
          {index < steps.length - 1 ? (
            <div
              className="ml-2 h-4 w-px bg-[var(--color-border)]"
              aria-hidden="true"
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function ScreenshotGallery({ project }: { project: Project }) {
  const screenshots = project.screenshots?.filter(Boolean) ?? [];

  if (!screenshots.length) {
    return null;
  }

  return (
    <DetailBlock title="Interface Preview">
      <div className="grid gap-4 md:grid-cols-2">
        {screenshots.map((src, index) => {
          const isPrimary = index === 0;
          const caption = project.screenshotCaptions?.[index];

          return (
            <figure
              key={src}
              className={`overflow-hidden rounded-lg border border-[var(--color-border)] bg-[rgba(16,19,24,0.62)] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.16)] ${
                isPrimary ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-md bg-[var(--color-surface)] ${
                  isPrimary ? "aspect-[16/10]" : "aspect-[16/10]"
                }`}
              >
                <Image
                  src={src}
                  alt={
                    project.screenshotAlts?.[index] ??
                    `${project.title} interface preview ${index + 1}`
                  }
                  fill
                  sizes={
                    isPrimary
                      ? "(min-width: 1024px) 72vw, 92vw"
                      : "(min-width: 768px) 38vw, 92vw"
                  }
                  className="object-contain object-top"
                />
              </div>
              {caption ? (
                <figcaption className="px-2 py-3 text-sm font-medium text-[var(--color-muted)]">
                  {caption}
                </figcaption>
              ) : null}
            </figure>
          );
        })}
      </div>
    </DetailBlock>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <main>
      <PageContainer className="py-10 sm:py-14 lg:py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
        >
          <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.8} />
          Back to Projects
        </Link>

        <header className="mt-10 grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-[var(--color-border)] bg-[rgba(8,9,11,0.28)] px-2.5 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-subtle)]">
                {project.category}
              </span>
              <span className="rounded-md border border-[rgba(103,232,249,0.28)] bg-[rgba(103,232,249,0.06)] px-2.5 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-foreground)]">
                {project.status}
              </span>
            </div>

            <h1 className="mt-6 max-w-4xl text-[clamp(2.45rem,7vw,5.25rem)] font-semibold leading-[0.96] tracking-tight text-balance text-[var(--color-foreground)]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              {project.shortDescription ?? project.description}
            </p>

            <ul
              className="mt-7 flex flex-wrap gap-2"
              aria-label={`${project.title} key technologies`}
            >
              {project.techStack.slice(0, 8).map((tech) => (
                <li key={tech}>
                  <span className="inline-flex min-h-8 items-center rounded-md border border-[var(--color-border)] bg-[rgba(8,9,11,0.28)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>

            <ProjectLinks project={project} />
          </div>

          <ProjectVisual
            project={project}
            large
            priority={Boolean(project.flagship)}
          />
        </header>

        <div className="mt-12">
          <ScreenshotGallery project={project} />

          <DetailBlock title="Overview">
            <p>{project.overview}</p>
          </DetailBlock>

          {project.problem ? (
            <DetailBlock title="The Problem">
              <p>{project.problem}</p>
            </DetailBlock>
          ) : null}

          {project.solution ? (
            <DetailBlock title="The Solution">
              <p>{project.solution}</p>
            </DetailBlock>
          ) : null}

          <DetailBlock title="Key Features">
            <BulletList items={project.features} />
          </DetailBlock>

          <DetailBlock title="Technology / Architecture">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Full technology stack"
              >
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <span className="inline-flex min-h-8 items-center rounded-md border border-[var(--color-border)] bg-[rgba(8,9,11,0.28)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>

              {project.architecture ? (
                <ArchitectureVisual steps={project.architecture} />
              ) : null}
            </div>
          </DetailBlock>

          {project.challenges?.length || project.learnings?.length ? (
            <DetailBlock title="Challenges & Learnings">
              <div className="grid gap-6 md:grid-cols-2">
                {project.challenges?.length ? (
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-[var(--color-foreground)]">
                      Challenges
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {project.challenges.map((challenge) => (
                        <li
                          key={challenge}
                          className="text-sm leading-6 text-[var(--color-muted)]"
                        >
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.learnings?.length ? (
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-[var(--color-foreground)]">
                      Learnings
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {project.learnings.map((learning) => (
                        <li
                          key={learning}
                          className="text-sm leading-6 text-[var(--color-muted)]"
                        >
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </DetailBlock>
          ) : null}

          <DetailBlock title="Project Links">
            <ProjectLinks project={project} />
          </DetailBlock>
        </div>
      </PageContainer>
    </main>
  );
}
