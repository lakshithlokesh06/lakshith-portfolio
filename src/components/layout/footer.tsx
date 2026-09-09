import { site } from "@/data/site";
import { PageContainer } from "@/components/ui/page-container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(10,12,15,0.72)]">
      <PageContainer className="py-5 text-sm text-[var(--color-muted)]">
        <p>© 2026 {site.name}.</p>
      </PageContainer>
    </footer>
  );
}
