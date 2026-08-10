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

const modelSignals = [
  { label: "Data", value: "Curated", width: "72%" },
  { label: "Model", value: "Validated", width: "86%" },
  { label: "Insight", value: "Delivered", width: "64%" },
];

function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-full max-w-[23rem] sm:max-w-[29rem] lg:mx-0 lg:ml-auto"
      aria-hidden="true"
    >
      <div className="absolute -inset-5 rounded-full bg-[rgba(103,232,249,0.08)] blur-3xl" />
      <div className="relative overflow-hidden rounded-lg border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(21,25,34,0.94),rgba(12,14,18,0.94))] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)]">
        <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-subtle)]">
              ML System
            </p>
            <p className="mt-1 text-sm font-medium text-[var(--color-foreground)]">
              Analytics Pipeline
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[rgba(103,232,249,0.9)]" />
            <span className="size-2 rounded-full bg-[rgba(154,164,178,0.45)]" />
            <span className="size-2 rounded-full bg-[rgba(154,164,178,0.28)]" />
          </div>
        </div>

        <div className="grid gap-4 py-5 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-md border border-[var(--color-border)] bg-[rgba(8,9,11,0.34)] p-4">
            <div className="flex h-28 items-end gap-2 sm:h-36">
              {[42, 66, 51, 82, 74, 91, 63].map((height, index) => (
                <motion.span
                  key={height + index}
                  initial={shouldReduceMotion ? false : { scaleY: 0.65, opacity: 0.6 }}
                  animate={shouldReduceMotion ? undefined : { scaleY: [0.8, 1, 0.92] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.08,
                    ease: "easeInOut",
                  }}
                  className="origin-bottom flex-1 rounded-t-sm bg-[linear-gradient(180deg,rgba(103,232,249,0.82),rgba(103,232,249,0.14))]"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-subtle)]">
              <span>Features</span>
              <span>Prediction</span>
            </div>
          </div>

          <div className="hidden rounded-md border border-[var(--color-border)] bg-[rgba(8,9,11,0.34)] p-4 sm:block">
            <div className="relative h-36">
              {[
                ["12%", "68%"],
                ["28%", "44%"],
                ["38%", "78%"],
                ["55%", "34%"],
                ["68%", "58%"],
                ["82%", "22%"],
              ].map(([left, top], index) => (
                <motion.span
                  key={`${left}-${top}`}
                  initial={shouldReduceMotion ? false : { opacity: 0.45 }}
                  animate={shouldReduceMotion ? undefined : { opacity: [0.45, 1, 0.55] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: index * 0.12,
                    ease: "easeInOut",
                  }}
                  className="absolute size-2.5 rounded-full border border-[rgba(103,232,249,0.55)] bg-[rgba(103,232,249,0.28)]"
                  style={{ left, top }}
                />
              ))}
              <span className="absolute left-[17%] top-[72%] h-px w-[55%] rotate-[-18deg] bg-[rgba(103,232,249,0.25)]" />
              <span className="absolute left-[35%] top-[47%] h-px w-[40%] rotate-[21deg] bg-[rgba(154,164,178,0.18)]" />
              <span className="absolute inset-x-0 bottom-0 h-px bg-[var(--color-border)]" />
              <span className="absolute inset-y-0 left-0 w-px bg-[var(--color-border)]" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-subtle)]">
              <span>Clusters</span>
              <span>Signal</span>
            </div>
          </div>
        </div>

        <div className="hidden space-y-3 border-t border-[var(--color-border)] pt-4 sm:block">
          {modelSignals.map((signal) => (
            <div key={signal.label} className="grid grid-cols-[4.75rem_1fr_5.5rem] items-center gap-3">
              <span className="text-xs text-[var(--color-subtle)]">{signal.label}</span>
              <span className="h-1.5 overflow-hidden rounded-full bg-[rgba(154,164,178,0.14)]">
                <motion.span
                  initial={shouldReduceMotion ? false : { width: "28%" }}
                  animate={shouldReduceMotion ? undefined : { width: signal.width }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.35 }}
                  className="block h-full rounded-full bg-[rgba(103,232,249,0.72)]"
                  style={shouldReduceMotion ? { width: signal.width } : undefined}
                />
              </span>
              <span className="text-right text-xs font-medium text-[var(--color-muted)]">
                {signal.value}
              </span>
            </div>
          ))}
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
