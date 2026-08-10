import Image from "next/image";

import type { Project } from "@/types/project";

type ProjectVisualProps = {
  project: Project;
  large?: boolean;
  priority?: boolean;
};

function ProjectPlaceholder({ project, large }: { project: Project; large: boolean }) {
  const markerCount = large ? 5 : 4;

  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(103,232,249,0.12),transparent_18rem)]" />
      <div className="absolute inset-3 rounded-md border border-[rgba(37,43,54,0.58)] bg-[linear-gradient(180deg,rgba(21,25,34,0.42),rgba(8,9,11,0.28))]" />

      <div className="absolute left-5 right-5 top-5 flex items-center justify-between border-b border-[var(--color-border)] pb-3 sm:left-6 sm:right-6">
        <span className="max-w-[72%] truncate text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-subtle)]">
          {project.category}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-[rgba(103,232,249,0.82)]" />
          <span className="size-2 rounded-full bg-[rgba(154,164,178,0.35)]" />
          <span className="size-2 rounded-full bg-[rgba(154,164,178,0.22)]" />
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-5 top-20 grid grid-cols-[0.82fr_1.18fr] gap-4 sm:inset-x-6">
        <div className="space-y-3">
          {Array.from({ length: markerCount }).map((_, index) => (
            <span
              key={index}
              className="block h-2 rounded-full bg-[rgba(154,164,178,0.16)]"
              style={{ width: `${64 + ((index * 13) % 28)}%` }}
            />
          ))}
        </div>

        <div className="relative rounded-md border border-[rgba(37,43,54,0.86)] bg-[rgba(16,19,24,0.64)] p-4 transition-transform duration-300 motion-safe:group-hover:-translate-y-1">
          <div className="absolute inset-x-4 top-4 h-px bg-[var(--color-border)]" />
          <div className="absolute bottom-4 left-4 right-4 flex h-20 items-end gap-2 sm:h-24">
            {[38, 66, 49, 82, 58, 74].map((height, index) => (
              <span
                key={`${project.slug}-${height}-${index}`}
                className="flex-1 rounded-t-sm bg-[linear-gradient(180deg,rgba(103,232,249,0.62),rgba(103,232,249,0.12))]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <span className="absolute left-5 top-10 size-2 rounded-full bg-[var(--color-accent)]" />
          <span className="absolute right-8 top-14 size-2 rounded-full bg-[rgba(154,164,178,0.45)]" />
        </div>
      </div>
    </>
  );
}

export function ProjectVisual({ project, large = false, priority = false }: ProjectVisualProps) {
  const image = project.image?.trim();

  return (
    <div
      className={`relative overflow-hidden rounded-md border border-[var(--color-border)] bg-[rgba(8,9,11,0.35)] ${
        large ? "min-h-[17rem] sm:min-h-[20rem] lg:min-h-full" : "min-h-[13.5rem]"
      }`}
      aria-hidden={image ? undefined : true}
    >
      {image ? (
        <>
          <div className="absolute inset-2 overflow-hidden rounded-md border border-[rgba(37,43,54,0.72)] bg-[var(--color-surface)]">
            <Image
              src={image}
              alt={project.imageAlt ?? `${project.title} project preview`}
              fill
              priority={priority}
              sizes={large ? "(min-width: 1024px) 46vw, 92vw" : "(min-width: 768px) 42vw, 92vw"}
              className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.015]"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,11,0.02),rgba(8,9,11,0.22))]" />
        </>
      ) : (
        <ProjectPlaceholder project={project} large={large} />
      )}
    </div>
  );
}
