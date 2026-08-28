"use client";

import {
  Bot,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: string[];
  methods?: string[];
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
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SHAP"],
    methods: [
      "Predictive Modeling",
      "Exploratory Data Analysis",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    description: "Databases, distributed processing, and analytical workflows.",
    icon: Database,
    skills: ["Apache Spark", "PySpark", "PostgreSQL", "SQLite"],
    methods: ["Data Visualization", "Statistical Analysis"],
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

export function Skills() {
  return (
    <Section id="skills" className="pt-0">
      <RevealGroup amount={0.2}>
        <RevealItem>
          <SectionHeading
            eyebrow="Skills"
            heading="Tools & technologies I work with"
            description="A practical stack spanning data science, machine learning, analytics, backend development, and modern web applications."
          />
        </RevealItem>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(
            ({ title, description, icon: Icon, skills, methods }) => (
              <RevealItem
                as="article"
                key={title}
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

                {methods?.length ? (
                  <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                      Methods
                    </p>
                    <ul
                      className="mt-3 flex flex-wrap gap-2"
                      aria-label={`${title} methods`}
                    >
                      {methods.map((method) => (
                        <li key={method}>
                          <span className="inline-flex min-h-8 items-center rounded-md border border-[rgba(148,163,184,0.28)] bg-transparent px-2.5 py-1 text-xs font-medium text-[var(--color-muted)] opacity-85 transition-colors hover:border-[var(--color-border-strong)] hover:text-[var(--color-foreground)] hover:opacity-100">
                            {method}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </RevealItem>
            ),
          )}
        </div>
      </RevealGroup>
    </Section>
  );
}
