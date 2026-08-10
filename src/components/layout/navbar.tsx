"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, GitBranch, Link2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navigationItems, site } from "@/data/site";
import { PageContainer } from "@/components/ui/page-container";

const socialLinks = [
  { label: "GitHub", href: site.github, icon: GitBranch },
  { label: "LinkedIn", href: site.linkedin, icon: Link2 },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isOpen
          ? "border-[var(--color-border)] bg-[rgba(8,9,11,0.82)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <PageContainer>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary navigation">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-[var(--color-foreground)] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
            onClick={closeMenu}
          >
            {site.name}
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-md border border-transparent text-[var(--color-muted)] transition-colors hover:border-[var(--color-border)] hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                >
                  <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                </Link>
              ))}

              {site.resumeAvailable ? (
                <Link
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open resume PDF in a new tab"
                  className="ml-2 inline-flex h-9 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]"
                >
                  <FileText aria-hidden="true" size={16} strokeWidth={1.8} />
                  Resume
                </Link>
              ) : null}
            </div>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
          </button>
        </nav>
      </PageContainer>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[rgba(8,9,11,0.96)] lg:hidden"
          >
            <PageContainer className="py-5">
              <div className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-[var(--color-border)] pt-5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-10 items-center justify-center rounded-md border border-[var(--color-border)] text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                    onClick={closeMenu}
                  >
                    <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                  </Link>
                ))}

                {site.resumeAvailable ? (
                  <Link
                    href={site.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume PDF in a new tab"
                    className="ml-auto inline-flex h-10 items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-surface-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
                    onClick={closeMenu}
                  >
                    <FileText aria-hidden="true" size={16} strokeWidth={1.8} />
                    Resume
                  </Link>
                ) : null}
              </div>
            </PageContainer>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
