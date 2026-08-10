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
              I work across Data Science, Machine Learning, and Data Analytics,
              with an academic foundation in Computer Applications and a
              specialization in Data Analytics. My focus is on using data
              clearly and practically, from understanding patterns to building
              systems that make those insights easier to use.
            </RevealItem>
            <RevealItem as="p">
              I enjoy building practical data-driven applications, including
              analytics dashboards, predictive systems, intelligent
              applications, and full-stack data products. I am currently
              continuing my studies through an MSc in Data Science,
              strengthening the technical depth behind the products I build.
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
