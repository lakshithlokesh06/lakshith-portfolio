"use client";

import { GraduationCap } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/ui/reveal";
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

function EducationEntry({
  degree,
  detail,
  institution,
  location,
  status,
}: EducationEntryProps) {
  return (
    <RevealItem
      as="article"
      className="relative grid gap-4 rounded-lg border border-[var(--color-border)] bg-[rgba(8,9,11,0.24)] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.12)] transition-colors hover:border-[var(--color-border-strong)] sm:grid-cols-[1fr_auto] sm:gap-8 sm:p-6"
    >
      <div className="flex min-w-0 gap-4">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-[rgba(103,232,249,0.24)] bg-[rgba(103,232,249,0.06)] text-[var(--color-accent)]">
          <GraduationCap aria-hidden="true" size={19} strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--color-foreground)] sm:text-xl">
            {degree}
          </h3>
          {detail ? (
            <p className="mt-2 text-sm text-[var(--color-muted)]">{detail}</p>
          ) : null}
          <p className="mt-4 text-base font-medium text-[var(--color-foreground)]">
            {institution}
          </p>
          <p className="mt-1 text-sm text-[var(--color-subtle)]">{location}</p>
        </div>
      </div>

      <div className="sm:pt-1">
        <span className="inline-flex rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {status}
        </span>
      </div>
    </RevealItem>
  );
}

export function Education() {
  return (
    <Section id="education" className="pt-0">
      <RevealGroup amount={0.22} className="mx-auto max-w-4xl">
        <RevealItem>
          <SectionHeading
            eyebrow="Education"
            heading="Academic foundation"
            description="A focused academic path across computer applications, data analytics, and current postgraduate study in data science."
          />
        </RevealItem>

        <div className="mt-10 grid gap-4 rounded-lg border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(21,25,34,0.76),rgba(12,14,18,0.86))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-5">
          {educationEntries.map((entry) => (
            <EducationEntry
              key={`${entry.degree}-${entry.status}`}
              {...entry}
            />
          ))}
        </div>
      </RevealGroup>
    </Section>
  );
}
