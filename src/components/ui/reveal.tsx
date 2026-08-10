"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps, Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealElement =
  "article" | "aside" | "div" | "figure" | "header" | "p" | "section";
type ViewportAmount = number | "some" | "all";

type RevealBaseProps = Omit<
  HTMLMotionProps<"div">,
  "animate" | "initial" | "transition" | "variants" | "viewport" | "whileInView"
> & {
  amount?: ViewportAmount;
  as?: RevealElement;
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  y?: number;
};

type RevealGroupProps = Omit<RevealBaseProps, "delay" | "duration" | "y"> & {
  stagger?: number;
};

const defaultEase = "easeOut";

type MotionElementProps = HTMLMotionProps<"div"> & {
  as: RevealElement;
  children: ReactNode;
};

function MotionElement({ as, children, ...props }: MotionElementProps) {
  switch (as) {
    case "article":
      return <motion.article {...props}>{children}</motion.article>;
    case "aside":
      return <motion.aside {...props}>{children}</motion.aside>;
    case "figure":
      return <motion.figure {...props}>{children}</motion.figure>;
    case "header":
      return <motion.header {...props}>{children}</motion.header>;
    case "p":
      return <motion.p {...props}>{children}</motion.p>;
    case "section":
      return <motion.section {...props}>{children}</motion.section>;
    default:
      return <motion.div {...props}>{children}</motion.div>;
  }
}

export function Reveal({
  amount = 0.18,
  as = "div",
  children,
  delay = 0,
  duration = 0.56,
  once = true,
  y = 24,
  ...props
}: RevealBaseProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionElement
      as={as}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: defaultEase, delay }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

export function RevealGroup({
  amount = 0.18,
  as = "div",
  children,
  once = true,
  stagger = 0.08,
  ...props
}: RevealGroupProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
      },
    },
  };

  return (
    <MotionElement
      as={as}
      variants={shouldReduceMotion ? undefined : variants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </MotionElement>
  );
}

export function RevealItem({
  as = "div",
  children,
  delay = 0,
  duration = 0.56,
  y = 24,
  ...props
}: RevealBaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: defaultEase, delay },
    },
  };

  return (
    <MotionElement
      as={as}
      variants={shouldReduceMotion ? undefined : variants}
      {...props}
    >
      {children}
    </MotionElement>
  );
}
