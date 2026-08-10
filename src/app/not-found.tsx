import type { Metadata } from "next";
import Link from "next/link";

import { PageContainer } from "@/components/ui/page-container";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found on the Lakshith S Lokesh portfolio.",
};

export default function NotFound() {
  return (
    <main>
      <PageContainer className="flex min-h-[60vh] items-center py-20">
        <section className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
            404
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance text-[var(--color-foreground)] sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-5 text-base leading-8 text-[var(--color-muted)] sm:text-lg">
            The page you are looking for could not be found.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-[var(--color-foreground)] px-5 text-sm font-semibold text-[var(--color-background)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
          >
            Back to homepage
          </Link>
        </section>
      </PageContainer>
    </main>
  );
}
