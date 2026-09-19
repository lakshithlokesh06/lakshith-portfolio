import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

import { PrintButton } from "@/components/resume/print-button";
import { projects } from "@/data/projects";
import { resumeEducation, resumeProfile } from "@/data/resume";
import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

import styles from "./resume.module.css";

const description =
  "Resume of Lakshith S Lokesh — Data Science, Machine Learning, and Data Analytics.";

export const metadata: Metadata = {
  title: "Resume",
  description,
  alternates: { canonical: absoluteUrl("/resume") },
  openGraph: { title: `Resume | ${site.name}`, description, url: absoluteUrl("/resume") },
  twitter: { card: "summary", title: `Resume | ${site.name}`, description },
};

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <nav className={styles.actions} aria-label="Resume actions">
        <Link href="/" className={styles.back}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to Portfolio
        </Link>
        <div className={styles.actionButtons}>
          <a href={site.resume} download className={styles.button}>
            <Download size={16} aria-hidden="true" /> Download PDF
          </a>
          <PrintButton className={styles.button} />
        </div>
      </nav>

      <article className={styles.document} aria-label={`${site.name} resume`}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Resume</p>
            <h1>{site.name}</h1>
            <p className={styles.positioning}>{site.title}</p>
          </div>
          <div className={styles.contact}>
            <p>{site.location}</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <div className={styles.socials}>
              <a href={site.github}>GitHub</a>
              <a href={site.linkedin}>LinkedIn</a>
              <a href={siteUrl || "https://lakshith.me"}>Portfolio</a>
            </div>
          </div>
        </header>

        <section className={styles.section} aria-labelledby="resume-profile">
          <h2 id="resume-profile">Professional Profile</h2>
          <p className={styles.profile}>{resumeProfile}</p>
        </section>

        <section className={styles.section} aria-labelledby="resume-education">
          <h2 id="resume-education">Education</h2>
          <div className={styles.education}>
            {resumeEducation.map((entry) => (
              <div className={styles.educationEntry} key={entry.degree}>
                <div>
                  <h3>{entry.degree}</h3>
                  <p>{entry.institution}{entry.detail ? ` · ${entry.detail}` : ""}</p>
                </div>
                <p className={styles.period}>{entry.period} · {entry.status}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="resume-skills">
          <h2 id="resume-skills">Technical Skills</h2>
          <dl className={styles.skills}>
            {skillCategories.map((category) => (
              <div className={styles.skillRow} key={category.title}>
                <dt>{category.title}</dt>
                <dd>
                  {category.skills.join(" · ")}
                  {category.concepts ? <p><strong>Concepts:</strong> {category.concepts.join(" · ")}</p> : null}
                  {category.methods ? <p><strong>Methods:</strong> {category.methods.join(" · ")}</p> : null}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={`${styles.section} ${styles.projects}`} aria-labelledby="resume-projects">
          <h2 id="resume-projects">Selected Projects</h2>
          {projects.map((project) => (
            <article key={project.slug} className={styles.project}>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <p className={styles.technologies}><strong>Tech:</strong> {project.techStack.join(" · ")}</p>
              <nav className={styles.projectLinks} aria-label={`${project.title} links`}>
                <Link href={`/projects/${project.slug}`}>Case Study</Link>
                <a href={project.githubUrl}>GitHub</a>
                {project.liveUrl ? <a href={project.liveUrl}>Live Demo</a> : null}
              </nav>
            </article>
          ))}
        </section>
      </article>
    </main>
  );
}
