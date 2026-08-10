"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FileText, GitBranch, Link2 } from "lucide-react";
import Link from "next/link";

import { site } from "@/data/site";
import { PageContainer } from "@/components/ui/page-container";

const socialLinks = [
  { label: "GitHub", href: site.github, icon: GitBranch },
  { label: "LinkedIn", href: site.linkedin, icon: Link2 },
];

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Define the problem, objectives, and available data.",
  },
  {
    number: "02",
    title: "Analyze",
    description: "Explore patterns, relationships, quality issues, and useful signals.",
  },
  {
    number: "03",
    title: "Model",
    description: "Build and evaluate machine-learning solutions when they add value.",
  },
  {
    number: "04",
    title: "Build",
    description: "Turn insights and models into practical applications and interfaces.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "Communicate results through dashboards, reports, and deployable products.",
  },
];

function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-full max-w-[23rem] sm:max-w-[29rem] lg:mx-0 lg:ml-auto"
    >
      <div className="absolute -inset-5 rounded-full bg-[rgba(103,232,249,0.08)] blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(21,25,34,0.94),rgba(12,14,18,0.94))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] transition-colors hover:border-[rgba(103,232,249,0.28)] sm:p-6">
        <div className="border-b border-[var(--color-border)] pb-4">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-subtle)]">
            How I Work
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--color-foreground)] sm:text-2xl">
            From data to usable solutions
          </h2>
        </div>

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          transition={shouldReduceMotion ? undefined : { staggerChildren: 0.07, delayChildren: 0.25 }}
          className="divide-y divide-[var(--color-border)]"
        >
          {workflowSteps.map((step) => (
            <motion.li
              key={step.number}
              variants={
                shouldReduceMotion
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.32, ease: "easeOut" },
                      },
                    }
              }
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 py-3.5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:py-4"
            >
              <span className="pt-0.5 text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)]">
                {step.number}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-[var(--color-foreground)]">
                  {step.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-[var(--color-muted)]">
                  {step.description}
                </span>
              </span>
            </motion.li>
          ))}
        </motion.ol>

        <div className="mt-2 border-t border-[var(--color-border)] pt-4">
          <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            Data <span className="text-[var(--color-accent)]">&rarr;</span> Insight{" "}
            <span className="text-[var(--color-accent)]">&rarr;</span> Model{" "}
            <span className="text-[var(--color-accent)]">&rarr;</span> Product
          </p>
        </div>
      </div>
    </motion.div>
  );
}


export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:min-h-[calc(100vh-4rem)] lg:py-28">
      <PageContainer className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          className="max-w-3xl"
        >
          <motion.p
            variants={shouldReduceMotion ? undefined : item}
            className="text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-accent)]"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={shouldReduceMotion ? undefined : item}
            className="mt-5 max-w-4xl text-[clamp(3rem,8vw,6.75rem)] font-semibold leading-[0.94] tracking-tight text-balance text-[var(--color-foreground)]"
          >
            {site.name}
          </motion.h1>

          <motion.p
            variants={shouldReduceMotion ? undefined : item}
            className="mt-6 text-xl font-medium tracking-tight text-[var(--color-foreground)] sm:text-2xl"
          >
            {site.title}
          </motion.p>

          <motion.p
            variants={shouldReduceMotion ? undefined : item}
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg"
          >
            I build data-driven applications, machine learning solutions, analytics systems,
            and intelligent web experiences that turn complex information into useful products.
          </motion.p>

          <motion.div
            variants={shouldReduceMotion ? undefined : item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-md bg-[var(--color-foreground)] px-5 text-sm font-semibold !text-[var(--color-background)] transition-colors hover:bg-white hover:!text-[var(--color-background)] active:!text-[var(--color-background)] focus-visible:!text-[var(--color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
            >
              View My Work
            </Link>
            {site.resumeAvailable ? (
              <Link
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume PDF in a new tab"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
              >
                <FileText aria-hidden="true" size={16} strokeWidth={1.8} />
                Download Resume
              </Link>
            ) : null}
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : item}
            className="mt-8 flex flex-col gap-4 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center"
          >
            <div className="inline-flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full rounded-full bg-[rgba(103,232,249,0.35)]" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              <span>Open to Data Science &amp; Machine Learning opportunities</span>
            </div>

            <div className="flex items-center gap-2 sm:border-l sm:border-[var(--color-border)] sm:pl-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${label} profile`}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-[var(--color-border)] px-3 text-sm text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                >
                  <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </PageContainer>
    </section>
  );
}
