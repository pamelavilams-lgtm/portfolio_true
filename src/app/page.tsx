import Image from "next/image";
import Link from "next/link";

import { AmbientHero } from "@/components/portfolio/ambient-hero";
import { Reveal } from "@/components/portfolio/reveal";
import { siteContent } from "@/content/site-content";

import styles from "./page.module.css";

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:");
}

function isInternalRouteHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function proofLevelLabel(level: string) {
  if (level === "core") {
    return "Core proof";
  }

  if (level === "working-knowledge") {
    return "Working knowledge";
  }

  return "Shipped build";
}

export default function Home() {
  const {
    meta,
    profileMedia,
    hero,
    nav,
    cases,
    builds,
    strengths,
    contact,
    footer,
  } = siteContent;

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <Link className={styles.brand} href="/">
          <span className={styles.brandName}>{meta.name}</span>
          <span className={styles.brandRole}>{meta.role}</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) =>
            isInternalRouteHref(item.href) ? (
              <Link key={item.href} className={styles.navLink} href={item.href}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            ),
          )}
        </nav>

        <a className={styles.contactButton} href={`mailto:${meta.email}`}>
          Email
        </a>
      </header>

      <section className={styles.hero}>
        <Reveal className={styles.heroCopy}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <p className={styles.heroPositioning}>{hero.positioning}</p>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroDescription}>{hero.description}</p>

          <div className={styles.heroActions}>
            {hero.ctas.map((cta) =>
              isInternalRouteHref(cta.href) ? (
                <Link
                  key={cta.label}
                  className={
                    cta.variant === "primary"
                      ? styles.primaryAction
                      : styles.secondaryAction
                  }
                  href={cta.href}
                >
                  {cta.label}
                </Link>
              ) : (
                <a
                  key={cta.label}
                  className={
                    cta.variant === "primary"
                      ? styles.primaryAction
                      : styles.secondaryAction
                  }
                  href={cta.href}
                  target={isExternalHref(cta.href) ? "_blank" : undefined}
                  rel={isExternalHref(cta.href) ? "noopener noreferrer" : undefined}
                >
                  {cta.label}
                </a>
              ),
            )}
          </div>
        </Reveal>

        <Reveal className={styles.heroVisual} delay={0.12}>
          <div className={styles.profileStage}>
            <div className={styles.profileBackdrop} aria-hidden="true">
              <AmbientHero />
            </div>

            <div className={styles.profilePhotoFrame}>
              <Image
                src={profileMedia.src}
                alt={profileMedia.alt}
                width={profileMedia.width}
                height={profileMedia.height}
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1040px) 72vw, 34rem"
                className={styles.profilePhoto}
              />
            </div>

            <article className={styles.profilePanel}>
              <div className={styles.profilePanelLead}>
                <p className={styles.profileLabel}>Recruiter read</p>
                <p className={styles.profileText}>{hero.positioning}</p>
                <p className={styles.profileAvailability}>{hero.availability}</p>
                <a 
                  className={styles.profileGithub} 
                  href={meta.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/CodeAvd
                </a>
              </div>

              <div className={styles.heroSignals}>
                {hero.signals.map((signal) => (
                  <div key={signal.label} className={styles.signalCard}>
                    <p className={styles.signalValue}>{signal.value}</p>
                    <p className={styles.signalLabel}>{signal.label}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <p className={styles.heroNote}>{hero.note}</p>
        </Reveal>
      </section>

      <Reveal className={styles.section} id="cases" delay={0.06}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{cases.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{cases.title}</h2>
            <p className={styles.sectionIntro}>{cases.intro}</p>
          </div>
        </div>

        <div className={styles.casesGrid}>
          {siteContent.caseStudies.map((caseStudy, index) => (
            <article 
              key={caseStudy.slug} 
              className={index === 0 ? styles.caseCardFeatured : styles.caseCardSecondary}
            >
              <div className={index === 0 ? styles.caseVisualFeatured : styles.caseVisual}>
                <Image
                  src={caseStudy.previewImage}
                  alt={`${caseStudy.title} preview`}
                  fill
                  sizes={index === 0 ? "(max-width: 900px) 100vw, 56vw" : "(max-width: 900px) 100vw, 40vw"}
                  className={styles.caseImage}
                />
              </div>

              <div className={styles.caseBody}>
                <div className={styles.caseMeta}>
                  <p className={styles.caseNumber}>{caseStudy.number}</p>
                  <p className={styles.caseEyebrow}>{caseStudy.eyebrow}</p>
                </div>

                <h3 className={index === 0 ? styles.caseTitleFeatured : styles.caseTitle}>{caseStudy.title}</h3>
                <p className={styles.caseSummary}>{caseStudy.summary}</p>
                {index === 0 && <p className={styles.caseOutcome}>{caseStudy.outcome}</p>}

                <div className={styles.caseTags}>
                  {caseStudy.tags.map((tag) => (
                    <span key={tag} className={styles.caseTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link className={styles.caseLink} href={`/cases/${caseStudy.slug}`}>
                  Open case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className={styles.section} id="builds" delay={0.10}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{builds.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{builds.title}</h2>
            <p className={styles.sectionIntro}>{builds.intro}</p>
          </div>
        </div>

        <div className={styles.buildsGrid}>
          {builds.items.map((item) => (
            <article key={item.title} className={styles.buildCard}>
              <div className={styles.buildMeta}>
                <p className={styles.buildEyebrow}>{item.eyebrow}</p>
                <span className={styles.levelBadge}>{proofLevelLabel(item.level)}</span>
              </div>

              <h3 className={styles.buildTitle}>{item.title}</h3>
              <p className={styles.buildSummary}>{item.summary}</p>
              <p className={styles.buildImpact}>{item.impact}</p>

              <div className={styles.buildStacks}>
                {item.stack.map((tag) => (
                  <span key={tag} className={styles.buildTag}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                className={styles.buildLink}
                href={item.href}
                target={isExternalHref(item.href) ? "_blank" : undefined}
                rel={isExternalHref(item.href) ? "noopener noreferrer" : undefined}
              >
                {item.linkLabel}
              </a>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className={styles.section} id="strengths" delay={0.14}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{strengths.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{strengths.title}</h2>
            <p className={styles.sectionIntro}>{strengths.intro}</p>
          </div>
        </div>

        <div className={styles.strengthsGrid}>
          {strengths.items.map((item) => (
            <article key={item.title} className={styles.strengthCard}>
              <p className={styles.strengthEyebrow}>{item.eyebrow}</p>
              <h3 className={styles.strengthTitle}>{item.title}</h3>
              <p className={styles.strengthDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal className={`${styles.section} ${styles.contactSection}`} id="contact">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>{contact.eyebrow}</p>
          <div>
            <h2 className={styles.sectionTitle}>{contact.title}</h2>
            <p className={styles.sectionIntro}>{contact.intro}</p>
          </div>
        </div>

        <div className={styles.contactGrid}>
          <article className={styles.contactLead}>
            <p className={styles.contactStatement}>
              Support credibility gets you screened. Systems leverage is what makes
              the interview loop remember you.
            </p>
            <Link className={styles.primaryAction} href={meta.resumeUrl}>
              Open public resume
            </Link>
          </article>

          <ul className={styles.contactList}>
            {contact.links.map((item) => (
              <li key={item.label} className={styles.contactItem}>
                <span className={styles.contactLabel}>{item.label}</span>
                {item.href ? (
                  isInternalRouteHref(item.href) ? (
                    <Link className={styles.contactValue} href={item.href}>
                      {item.value}
                    </Link>
                  ) : (
                    <a
                      className={styles.contactValue}
                      href={item.href}
                      target={isExternalHref(item.href) ? "_blank" : undefined}
                      rel={
                        isExternalHref(item.href) ? "noopener noreferrer" : undefined
                      }
                    >
                      {item.value}
                    </a>
                  )
                ) : (
                  <span className={styles.contactValue}>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <footer className={styles.footer}>
        <p>{footer}</p>
        <p>{meta.location}</p>
      </footer>
    </main>
  );
}
