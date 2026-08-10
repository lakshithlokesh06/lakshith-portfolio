export type ProjectStatus = "Featured / Flagship" | "Featured" | "Completed";

export type Project = {
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: string;
  techStack: string[];
  overview: string;
  problem?: string;
  solution?: string;
  features: string[];
  architecture?: string[];
  challenges?: string[];
  learnings?: string[];
  featured?: boolean;
  flagship?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  screenshots?: string[];
  screenshotAlts?: string[];
  screenshotCaptions?: string[];
  status: ProjectStatus;
};
