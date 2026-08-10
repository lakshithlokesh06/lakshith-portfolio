"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const visibilityThreshold = 600;

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > visibilityThreshold);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={
            shouldReduceMotion ? false : { opacity: 0, y: 8, scale: 0.96 }
          }
          animate={
            shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
          }
          exit={
            shouldReduceMotion ? undefined : { opacity: 0, y: 8, scale: 0.96 }
          }
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-40 inline-flex size-11 items-center justify-center rounded-md border border-[var(--color-border)] bg-[rgba(16,19,24,0.86)] text-[var(--color-foreground)] shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] sm:bottom-6 sm:right-6 sm:size-12"
        >
          <ArrowUp aria-hidden="true" size={18} strokeWidth={1.8} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
