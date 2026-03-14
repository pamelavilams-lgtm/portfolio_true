import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site-content";
import { absoluteUrl } from "@/lib/site-url";

import styles from "./page.module.css";

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

function proofLevelLabel(level: string) {
  if (level === "core") {
    return "Core";
  }

  if (level === "working-knowledge") {
    return "Working knowledge";
  }

  return "Shipped";
}

export const metadata: Metadata = {
  title: "Resume",
  description: siteContent.resume.summary,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: `Resume | ${siteContent.meta.name}`,
    description: siteContent.resume.summary,
    url: absoluteUrl("/resume"),
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `Resume | ${siteContent.meta.name}`,
    description: siteContent.resume.summary,
  },
};

export default function ResumePage() {
  const { meta, profileMedia, resume } = siteContent;

  return (
    <main className={styles.page} data-resume-page>
      <div className={styles.utilityBar}>
        <Link className={styles.utilityLink} href="/">
          Back to portfolio
        </Link>
        <p className={styles.utilityNote}>Print or save as PDF from browser.</p>
      </div>

      <article className={styles.resumeShell}>
        <header className={styles.header}>
          <div className={styles.headerCopy}>
            <p className={styles.kicker}>Resume</p>
            <h1 className={styles.name}>{meta.name}</h1>
            <p className={styles.headline}>{resume.headline}</p>
            <p className={styles.summary}>{resume.summary}</p>
            <p className={styles.contactNote}>{resume.contactNote}</p>

            <ul className={styles.linkList} aria-label="Resume links">
              {resume.contactLinks.map((item) => (
                <li key={item.label}>
                  {!item.href ? (
                    <span>
                      {item.label}: {item.value}
                    </span>
                  ) : item.href.startsWith("/") ? (
                    <Link className={styles.textLink} href={item.href}>
                      {item.label}: {item.value}
                    </Link>
                  ) : (
                    <a
                      className={styles.textLink}
                      href={item.href}
                      target={isExternalHref(item.href) ? "_blank" : undefined}
                      rel={isExternalHref(item.href) ? "noopener noreferrer" : undefined}
                    >
                      {item.label}: {item.value}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.portraitFrame}>
            <Image
              src={profileMedia.src}
              alt={profileMedia.alt}
              width={profileMedia.width}
              height={profileMedia.height}
              priority
              sizes="(max-width: 720px) 48vw, 14rem"
              className={styles.portrait}
            />
          </div>
        </header>

        <section className={styles.section} aria-labelledby="skills-title">
          <h2 className={styles.sectionTitle} id="skills-title">
            Skills
          </h2>

          <div className={styles.sectionStack}>
            {resume.skillGroups.map((group) => (
              <div key={group.title} className={styles.skillGroup}>
                <div className={styles.groupHeader}>
                  <h3 className={styles.itemTitle}>{group.title}</h3>
                  <span className={styles.levelTag}>
                    {proofLevelLabel(group.level)}
                  </span>
                </div>

                <p className={styles.inlineList}>{group.items.join(" • ")}</p>

                {group.note ? (
                  <p className={styles.supportingNote}>{group.note}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="experience-title">
          <h2 className={styles.sectionTitle} id="experience-title">
            Experience
          </h2>

          <div className={styles.sectionStack}>
            {resume.experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className={styles.experienceItem}>
                <div className={styles.itemHeader}>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemMeta}>{item.company}</p>
                  </div>

                  <p className={styles.period}>{item.period}</p>
                </div>

                <ul className={styles.bulletList}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="projects-title">
          <h2 className={styles.sectionTitle} id="projects-title">
            Selected projects
          </h2>

          <div className={styles.sectionStack}>
            {resume.selectedProjects.map((project) => (
              <article key={project.title} className={styles.projectItem}>
                <div className={styles.itemHeader}>
                  <h3 className={styles.itemTitle}>{project.title}</h3>

                  {project.href.startsWith("/") ? (
                    <Link className={styles.projectLink} href={project.href}>
                      Open
                    </Link>
                  ) : (
                    <a
                      className={styles.projectLink}
                      href={project.href}
                      target={isExternalHref(project.href) ? "_blank" : undefined}
                      rel={isExternalHref(project.href) ? "noopener noreferrer" : undefined}
                    >
                      Open
                    </a>
                  )}
                </div>

                <p className={styles.projectNote}>{project.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="education-title">
          <h2 className={styles.sectionTitle} id="education-title">
            Education
          </h2>

          <div className={styles.sectionStack}>
            {resume.education.map((item) => (
              <article key={item.title} className={styles.educationItem}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemMeta}>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="languages-title">
          <h2 className={styles.sectionTitle} id="languages-title">
            Languages
          </h2>
          <p className={styles.inlineList}>{resume.languages}</p>
        </section>
      </article>
    </main>
  );
}
