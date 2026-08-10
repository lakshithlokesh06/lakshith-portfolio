"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, GitBranch, Link2, Mail, MapPin } from "lucide-react";
import Link from "next/link";

import { site } from "@/data/site";
import { Section, SectionHeading } from "@/components/ui/section";

const contactMethods = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: site.linkedin,
    href: site.linkedin,
    icon: Link2,
    external: true,
  },
  {
    label: "GitHub",
    value: site.github,
    href: site.github,
    icon: GitBranch,
    external: true,
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const primaryEmailHref = `mailto:${site.email}`;

  return (
    <Section id="contact" className="pt-0">
      <motion.div
        variants={shouldReduceMotion ? undefined : sectionVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.22 }}
        className="relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(21,25,34,0.82),rgba(12,14,18,0.92))] px-5 py-10 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:px-8 lg:px-10 lg:py-12"
      >
        <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[rgba(103,232,249,0.08)] blur-3xl" />

        <div className="relative grid min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="min-w-0">
            <SectionHeading
              eyebrow="Contact"
              heading="Let's connect"
              description="I'm open to opportunities, collaborations, and conversations around data science, machine learning, analytics, and data-driven applications."
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={primaryEmailHref}
                aria-label={`Email ${site.name}`}
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[var(--color-foreground)] px-5 text-sm font-semibold !text-[var(--color-background)] transition-colors hover:bg-white hover:!text-[var(--color-background)] focus-visible:!text-[var(--color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
              >
                Get in touch
                <ArrowUpRight
                  aria-hidden="true"
                  size={16}
                  strokeWidth={1.8}
                  className="text-[var(--color-background)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <Link
                href="/#projects"
                className="inline-flex h-11 items-center justify-center rounded-md border border-[var(--color-border)] px-5 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
              >
                View selected work
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="min-w-0 rounded-lg border border-[var(--color-border)] bg-[rgba(8,9,11,0.28)] p-5"
          >
            <div className="flex items-start gap-3 border-b border-[var(--color-border)] pb-5">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent)]">
                <MapPin aria-hidden="true" size={18} strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-sm font-medium text-[var(--color-foreground)]">{site.location}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{site.title}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {contactMethods.map(({ label, value, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label === "Email" ? `Email ${site.name}` : `Open ${label} profile`}
                  className="group flex items-center justify-between gap-4 rounded-md border border-[var(--color-border)] px-4 py-3 text-sm transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                >
                  <span className="flex shrink-0 items-center gap-3 text-[var(--color-foreground)]">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                    {label}
                  </span>
                  <span className="min-w-0 max-w-[12rem] truncate text-[var(--color-muted)]">{value}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
