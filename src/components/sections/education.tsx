"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

import { Section, SectionHeading } from "@/components/ui/section";

type EducationEntryProps = {
  degree: string;
  detail?: string;
  institution: string;
  location: string;
  status: string;
};

const educationEntries: EducationEntryProps[] = [
  {
    degree: "Master of Science (MSc) in Data Science",
    institution: "Chanakya University",
    location: "Bengaluru",
    status: "Current",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    detail: "Specialization in Data Analytics",
    institution: "Jain (Deemed-to-be University)",
    location: "Bengaluru",
    status: "Completed",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const entryVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: "easeOut" },
  },
};

function EducationEntry({
  degree,
  detail,
  institution,
  location,
  status,
}: EducationEntryProps) {
  return (
    <motion.article
      variants={entryVariants}
      className="relative grid gap-4 border-l border-[var(--color-border)] pb-10 pl-6 last:pb-0 sm:grid-cols-[1fr_auto] sm:gap-8 sm:pl-8"
    >
      <span className="absolute -left-[5px] top-1 size-2.5 rounded-full border border-[var(--color-accent)] bg-[var(--color-background)] shadow-[0_0_0_6px_rgba(103,232,249,0.08)]" />

      <div>
        <h3 className="text-xl font-semibold tracking-tight text-[var(--color-foreground)]">
          {degree}
        </h3>
        {detail ? <p className="mt-2 text-sm text-[var(--color-muted)]">{detail}</p> : null}
        <p className="mt-4 text-base font-medium text-[var(--color-foreground)]">{institution}</p>
        <p className="mt-1 text-sm text-[var(--color-subtle)]">{location}</p>
      </div>

      <div className="sm:pt-1">
        <span className="inline-flex rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {status}
        </span>
      </div>
    </motion.article>
  );
}

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section id="education" className="pt-0">
      <motion.div
        variants={shouldReduceMotion ? undefined : sectionVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-4xl"
      >
        <motion.div variants={shouldReduceMotion ? undefined : entryVariants}>
          <SectionHeading
            eyebrow="Education"
            heading="Academic foundation"
            description="A focused academic path across computer applications, data analytics, and current postgraduate study in data science."
          />
        </motion.div>

        <div className="mt-10 rounded-lg border border-[var(--color-border)] bg-[rgba(16,19,24,0.72)] px-6 py-8 shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:px-8 sm:py-10">
          {educationEntries.map((entry) => (
            <EducationEntry key={`${entry.degree}-${entry.status}`} {...entry} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
