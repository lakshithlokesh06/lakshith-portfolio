"use client";

import { Printer } from "lucide-react";

export function PrintButton({ className }: { className: string }) {
  return (
    <button type="button" className={className} onClick={() => window.print()}>
      <Printer size={16} aria-hidden="true" />
      Print / Save PDF
    </button>
  );
}
