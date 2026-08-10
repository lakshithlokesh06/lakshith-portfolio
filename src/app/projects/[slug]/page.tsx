import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description = project.shortDescription ?? project.description;
  const title = `${project.title} | Lakshith S Lokesh`;

  return {
    title: project.title,
    description,
    ...(siteUrl
      ? {
          alternates: {
            canonical: absoluteUrl(`/projects/${project.slug}`),
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      siteName: "Lakshith S Lokesh Portfolio",
      type: "article",
      ...(siteUrl ? { url: absoluteUrl(`/projects/${project.slug}`) } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
