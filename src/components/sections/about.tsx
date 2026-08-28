"use client";

import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";

const profileDetails = [
  {
    label: "Focus",
    value: "Data Science & Machine Learning",
  },
  {
    label: "Based in",
    value: "Bengaluru, India",
  },
  {
    label: "Currently",
    value: "MSc Data Science",
  },
  {
    label: "Background",
    value: "BCA - Data Analytics",
  },
];

export function About() {
  return (
    <Section id="about" className="border-t border-[rgba(37,43,54,0.55)]">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <RevealGroup amount={0.22}>
          <RevealItem>
            <SectionHeading eyebrow="About" heading="Who I am & what I build" />
          </RevealItem>

          <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            <RevealItem as="p">
              I got into data because I wanted to understand why things happen,
              not just that they did. That curiosity led me to build systems
              that turn data and ideas into solutions people can actually use
              &mdash; from predicting student outcomes to planning trips with AI
              agents. I&apos;m currently pursuing my MSc in Data Science at
              Chanakya University while building projects that sit at the
              intersection of machine learning, analytics, and real products.
            </RevealItem>
          </div>
        </RevealGroup>

        <RevealGroup
          as="aside"
          amount={0.22}
          className="relative"
          aria-label="Profile summary"
        >
          <div className="absolute -inset-4 rounded-full bg-[rgba(103,232,249,0.06)] blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(21,25,34,0.82),rgba(12,14,18,0.9))] shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
            <div className="border-b border-[var(--color-border)] px-6 py-5">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-subtle)]">
                Profile Snapshot
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--color-foreground)]">
                Practical data work with a product mindset
              </p>
            </div>

            <dl className="divide-y divide-[var(--color-border)]">
              {profileDetails.map((detail) => (
                <RevealItem
                  key={detail.label}
                  className="grid gap-2 px-6 py-5 sm:grid-cols-[7rem_1fr] sm:items-center"
                >
                  <dt className="text-sm text-[var(--color-subtle)]">
                    {detail.label}
                  </dt>
                  <dd className="text-sm font-medium text-[var(--color-foreground)]">
                    {detail.value}
                  </dd>
                </RevealItem>
              ))}
            </dl>
          </div>
        </RevealGroup>
      </div>
    </Section>
  );
}
