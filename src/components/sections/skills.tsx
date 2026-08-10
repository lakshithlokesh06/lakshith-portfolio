"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/section";

type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
};

const coreSkills = new Set([
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "PostgreSQL",
  "Apache Spark",
  "PySpark",
  "LangChain",
  "LangGraph",
  "OpenAI API",
  "Groq",
  "Git",
  "GitHub",
  "VS Code",
  "Jupyter Notebook",
  "Streamlit Community Cloud",
]);

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description:
      "Core languages used across analysis, systems, and application work.",
    icon: Code2,
    skills: ["Python", "SQL", "Java", "C++"],
  },
  {
    title: "Data Science & Machine Learning",
    description:
      "Practical tooling for exploration, modeling, interpretation, and preprocessing.",
    icon: BrainCircuit,
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "SHAP",
      "Predictive Modeling",
      "Exploratory Data Analysis",
      "Data Preprocessing",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    description: "Databases, distributed processing, and analytical workflows.",
    icon: Database,
    skills: [
      "Apache Spark",
      "PySpark",
      "PostgreSQL",
      "SQLite",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    title: "Web & Application Development",
    description:
      "Frameworks for building modern interfaces, APIs, and data apps.",
    icon: ChartNoAxesCombined,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Flask",
      "Streamlit",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI & LLM Tools",
    description:
      "Tools for building and experimenting with intelligent application workflows.",
    icon: Bot,
    skills: ["LangChain", "LangGraph", "OpenAI API", "Groq", "Ollama"],
  },
  {
    title: "Tools & Platforms",
    description: "Development, notebook, hosting, and deployment environments.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Supabase",
      "Render",
      "Vercel",
      "Streamlit Community Cloud",
    ],
  },
];

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
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="skills" className="pt-0">
      <motion.div
        variants={shouldReduceMotion ? undefined : sectionVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={shouldReduceMotion ? undefined : cardVariants}>
          <SectionHeading
            eyebrow="Skills"
            heading="Tools & technologies I work with"
            description="A practical stack spanning data science, machine learning, analytics, backend development, and modern web applications."
          />
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(({ title, description, icon: Icon, skills }) => (
            <motion.article
              key={title}
              variants={shouldReduceMotion ? undefined : cardVariants}
              className="group rounded-lg border border-[var(--color-border)] bg-[rgba(16,19,24,0.72)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.16)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[rgba(21,25,34,0.78)]"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)] transition-colors group-hover:border-[var(--color-border-strong)]">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-[var(--color-foreground)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {description}
                  </p>
                </div>
              </div>

              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label={`${title} skills`}
              >
                {skills.map((skill) => {
                  const isCore = coreSkills.has(skill);

                  return (
                    <li key={skill}>
                      <span
                        className={`inline-flex min-h-9 items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors ${
                          isCore
                            ? "border-[rgba(103,232,249,0.36)] bg-[rgba(103,232,249,0.07)] font-medium text-[var(--color-foreground)]"
                            : "border-[var(--color-border)] bg-[rgba(8,9,11,0.28)] text-[var(--color-muted)]"
                        } hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)]`}
                      >
                        {isCore ? (
                          <span className="size-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        ) : null}
                        {skill}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
