"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Code2,
  FileText,
  GitBranch,
  Link2,
  Search,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
    icon: Search,
    title: "Understand",
    description: "Define the problem, objectives, and available data.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Analyze",
    description: "Explore patterns, relationships, quality issues, and useful signals.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Model",
    description: "Build and evaluate machine-learning solutions when they add value.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Build",
    description: "Turn insights and models into practical applications and interfaces.",
  },
  {
    number: "05",
    icon: Send,
    title: "Deliver",
    description: "Communicate results through dashboards, reports, and deployable products.",
  },
];

function HeroDataNetwork() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="hero-data-network absolute left-1/2 top-6 h-[34rem] w-[52rem] -translate-x-1/2 opacity-[0.08] sm:top-4 sm:h-[38rem] sm:w-[64rem] lg:left-[54%] lg:top-10 lg:h-[44rem] lg:w-[72rem]"
        viewBox="0 0 960 620"
        fill="none"
      >
        <g className="hidden sm:block" stroke="currentColor" strokeWidth="1">
          <path d="M102 190 L228 118 L366 172 L508 102 L664 154 L826 94" />
          <path d="M178 352 L304 274 L450 326 L594 246 L768 314" />
          <path d="M228 118 L304 274 L366 172 L450 326 L508 102 L594 246 L664 154 L768 314" />
          <path d="M102 190 L178 352 L304 274" />
          <path d="M664 154 L768 314 L826 94" />
        </g>
        <g fill="currentColor">
          {[
            [102, 190],
            [178, 352],
            [228, 118],
            [304, 274],
            [366, 172],
            [450, 326],
            [508, 102],
            [594, 246],
            [664, 154],
            [768, 314],
            [826, 94],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
          ))}
        </g>
      </svg>
    </div>
  );
}

function WorkflowStep({
  step,
  isLast,
  shouldReduceMotion,
}: {
  step: {
    number: string;
    icon: LucideIcon;
    title: string;
    description: string;
  };
  isLast: boolean;
  shouldReduceMotion: boolean | null;
}) {
  const Icon = step.icon;

  return (
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
      className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 py-4 first:pt-0 last:pb-0"
    >
      {!isLast ? (
        <span
          aria-hidden="true"
          className="absolute left-[1.375rem] top-9 h-[calc(100%-1.25rem)] w-px bg-[linear-gradient(180deg,rgba(103,232,249,0.22),rgba(37,43,54,0.35))]"
        />
      ) : null}
      <span className="relative z-10 inline-flex size-11 items-center justify-center rounded-md border border-[rgba(103,232,249,0.24)] bg-[rgba(8,9,11,0.42)] text-[var(--color-accent)]">
        <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
        <span className="sr-only">{step.number}</span>
      </span>
      <span className="min-w-0">
        <span className="text-xs font-semibold tracking-[0.18em] text-[var(--color-accent)]">
          {step.number}
        </span>
        <span className="mt-1 block text-sm font-semibold text-[var(--color-foreground)]">
          {step.title}
        </span>
        <span className="mt-1 block text-sm leading-6 text-[var(--color-muted)]">
          {step.description}
        </span>
      </span>
    </motion.li>
  );
}

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
          className="pt-4"
        >
          {workflowSteps.map((step, index) => (
            <WorkflowStep
              key={step.number}
              step={step}
              isLast={index === workflowSteps.length - 1}
              shouldReduceMotion={shouldReduceMotion}
            />
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
      <HeroDataNetwork />
      <PageContainer className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
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
