"use client";

import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageContainer } from "@/components/ui/page-container";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProjectLinks } from "@/components/projects/project-links";
import { ProjectVisual } from "@/components/projects/project-visual";

function TechStack({ project, limit }: { project: Project; limit: number }) {
  const visibleTech = project.techStack.slice(0, limit);
  const remaining = project.techStack.length - visibleTech.length;

  return (
    <ul
      className="mt-5 flex flex-wrap gap-2"
      aria-label={`${project.title} technologies`}
    >
      {visibleTech.map((tech) => (
        <li key={tech}>
          <span className="inline-flex min-h-8 items-center rounded-md border border-[var(--color-border)] bg-[rgba(8,9,11,0.28)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]">
            {tech}
          </span>
        </li>
      ))}
      {remaining > 0 ? (
        <li>
          <span className="inline-flex min-h-8 items-center rounded-md border border-[rgba(103,232,249,0.24)] bg-[rgba(103,232,249,0.06)] px-2.5 py-1 text-xs font-medium text-[var(--color-foreground)]">
            +{remaining} more
          </span>
        </li>
      ) : null}
    </ul>
  );
}

function ProjectMetadata({ project, number }: { project: Project; number?: string }) {
  return (
    <div className="project-metadata">
      <span>
        {number ? <small aria-hidden="true" className="mr-2 text-[0.625rem] font-normal tabular-nums text-[var(--color-subtle)]">{number}</small> : null}
        {project.category}
      </span>
      {project.featured ? <span>{project.status}</span> : null}
    </div>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flagship = Boolean(project.flagship);

  return (
    <RevealItem
      as="article"
      className={`project-story group ${flagship ? "project-story-flagship" : ""} ${index === 2 ? "project-story-reverse" : ""}`}
    >
      <header className="project-story-heading">
        <span className="project-number" aria-hidden="true">0{index + 1}</span>
        <ProjectMetadata project={project} />
        <h3>
          {project.title.includes(" - ") ? (
            <><span className="whitespace-nowrap">{project.title.split(" - ")[0]} -</span>{" "}{project.title.split(" - ").slice(1).join(" - ")}</>
          ) : project.title}
        </h3>
      </header>
      <div className="project-story-media">
        <ProjectVisual
          project={project}
          large
          sizes={flagship ? "(min-width: 1280px) 1160px, 92vw" : "(min-width: 1280px) 650px, (min-width: 1024px) 52vw, 92vw"}
        />
      </div>
      <div className="project-story-details">
        <p>{project.description}</p>
        <TechStack project={project} limit={project.featured ? 7 : 5} />
        <ProjectLinks project={project} includeDetail />
      </div>
    </RevealItem>
  );
}

function ProjectCard({ project, number }: { project: Project; number: string }) {
  return (
    <RevealItem as="article" className="project-card project-card-compact group flex h-full min-w-0 flex-col overflow-hidden border border-[var(--color-border)] transition-all duration-300 motion-safe:hover:-translate-y-1">
      <div className="project-media p-4 pb-0">
        <ProjectVisual project={project} sizes="(min-width: 1280px) 360px, (min-width: 768px) 44vw, 92vw" />
      </div>
      <div className="project-copy flex flex-1 flex-col p-5">
        <ProjectMetadata project={project} number={number} />
        <h3 className="mt-5 text-xl font-semibold leading-tight tracking-tight text-balance">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{project.description}</p>
        <TechStack project={project} limit={5} />
        <ProjectLinks project={project} includeDetail />
      </div>
    </RevealItem>
  );
}

export function Projects() {
  // Presentation priority is separate from the project's existing status metadata.
  const showcaseSlugs = new Set([
    "ai-smart-travel-planner",
    "autoinsight-intelligent-dataset-analyzer",
    "job-market-analytics-portal",
  ]);
  const showcaseProjects = projects.filter((project) => showcaseSlugs.has(project.slug));
  const secondaryProjects = projects.filter((project) => !showcaseSlugs.has(project.slug));

  return (
    <>
      <PageContainer>
        <Reveal as="p" className="work-statement">
          <span>FROM RAW DATA</span>{" "}
          <span>TO USABLE</span>{" "}
          <span>PRODUCTS.</span>
        </Reveal>
      </PageContainer>
      <Section id="projects" className="pt-0">
        <RevealGroup amount="some">
          <RevealItem className="project-section-heading">
            <SectionHeading
              eyebrow="Selected Work"
              heading="Featured projects"
              description="A selection of data science, machine learning, analytics, and full-stack applications built around practical problems."
            />
          </RevealItem>
          <div className="project-stories">
            {showcaseProjects.map((project, index) => (
              <FeaturedProject key={project.slug} project={project} index={index} />
            ))}
          </div>
          <div className="compact-projects grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {secondaryProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                number={String(showcaseProjects.length + index + 1).padStart(2, "0")}
              />
            ))}
          </div>
        </RevealGroup>
      </Section>
    </>
  );
}
