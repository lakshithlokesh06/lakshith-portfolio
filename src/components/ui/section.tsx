import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { PageContainer } from "@/components/ui/page-container";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
};

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
};

export function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section className={`scroll-mt-24 py-[var(--section-spacing)] ${className}`} {...props}>
      <PageContainer>{children}</PageContainer>
    </section>
  );
}

export function SectionHeading({ eyebrow, heading, description }: SectionHeadingProps) {
  return (
    <div className="min-w-0 max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-[var(--color-foreground)] sm:text-4xl">
        {heading}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
