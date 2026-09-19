"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BackToTop } from "@/components/ui/back-to-top";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  if (pathname === "/resume") return children;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
      <BackToTop />
    </div>
  );
}
