"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

import { projects } from "@/data/projects";
import type { Project } from "@/types/project";
import { Section, SectionHeading } from "@/components/ui/section";
import { ProjectLinks } from "@/components/projects/project-links";
import { ProjectVisual } from "@/components/projects/project-visual";

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

function TechStack({ project, limit }: { project: Project; limit: number }) {
  const visibleTech = project.techStack.slice(0, limit);
  const remaining = project.techStack.length - visibleTech.length;

  return (
    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
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

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const isFlagship = Boolean(project.flagship);

  return (
    <motion.article
      variants={cardVariants}
      className={`group flex h-full flex-col overflow-hidden rounded-lg border bg-[rgba(16,19,24,0.72)] shadow-[0_24px_80px_rgba(0,0,0,0.16)] transition-all duration-300 hover:border-[var(--color-border-strong)] hover:bg-[rgba(21,25,34,0.8)] motion-safe:hover:-translate-y-1 ${
        isFlagship ? "border-[rgba(103,232,249,0.28)]" : "border-[var(--color-border)]"
      } ${
        large ? "lg:grid lg:grid-cols-[1fr_0.94fr]" : ""
      }`}
    >
      <div className={`${large ? "p-5 sm:p-6 lg:order-2" : "p-4 pb-0"}`}>
        <ProjectVisual project={project} large={large} priority={isFlagship} />
      </div>

      <div className={`flex flex-1 flex-col ${large ? "p-6 pt-2 sm:p-7 lg:p-8" : "p-5"}`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-[var(--color-border)] bg-[rgba(8,9,11,0.28)] px-2.5 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-subtle)]">
            {project.category}
          </span>
          {large ? (
            <span className="rounded-md border border-[rgba(103,232,249,0.34)] bg-[rgba(103,232,249,0.07)] px-2.5 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-foreground)]">
              {project.status}
            </span>
          ) : null}
        </div>

        <h3
          className={`mt-5 font-semibold leading-tight tracking-tight text-balance text-[var(--color-foreground)] ${
            large ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p className={`mt-4 flex-1 leading-7 text-[var(--color-muted)] ${large ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>

        <TechStack project={project} limit={large ? 7 : 5} />
        <ProjectLinks project={project} includeDetail />
      </div>
    </motion.article>
  );
}

export function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const featuredProjects = projects.filter((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" className="pt-0">
      <motion.div
        variants={shouldReduceMotion ? undefined : sectionVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.16 }}
      >
        <motion.div variants={shouldReduceMotion ? undefined : cardVariants}>
          <SectionHeading
            eyebrow="Selected Work"
            heading="Featured projects"
            description="A selection of data science, machine learning, analytics, and full-stack applications built around practical problems."
          />
        </motion.div>

        <div className="mt-10 grid gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} large />
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
