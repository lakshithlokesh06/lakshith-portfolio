import type { ComponentPropsWithoutRef } from "react";

type PageContainerProps = ComponentPropsWithoutRef<"div">;

export function PageContainer({ className = "", ...props }: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--max-page-width)] px-6 sm:px-8 lg:px-10 ${className}`}
      {...props}
    />
  );
}
