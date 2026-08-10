import { GitBranch, Link2, Mail } from "lucide-react";
import Link from "next/link";

import { navigationItems, site } from "@/data/site";
import { PageContainer } from "@/components/ui/page-container";

const socialLinks = [
  { label: "GitHub", href: site.github, icon: GitBranch, external: true },
  { label: "LinkedIn", href: site.linkedin, icon: Link2, external: true },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(10,12,15,0.72)]">
      <PageContainer className="py-10 sm:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-base font-semibold tracking-tight text-[var(--color-foreground)]">
              {site.name}
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{site.title}</p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon, external }) => (
                <Link
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={label === "Email" ? `Email ${site.name}` : `Open ${label} profile`}
                  className="inline-flex size-9 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                >
                  <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </PageContainer>
    </footer>
  );
}
