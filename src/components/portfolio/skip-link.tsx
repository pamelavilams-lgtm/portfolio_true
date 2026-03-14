"use client";

import styles from "./skip-link.module.css";

interface SkipLinkProps {
  /** The target element ID to skip to (without #) */
  targetId?: string;
  /** Custom label for the skip link */
  label?: string;
}

/**
 * Skip link component for keyboard accessibility.
 * Allows users to skip navigation and jump directly to main content.
 * Visible only on focus for screen reader and keyboard users.
 */
export function SkipLink({ 
  targetId = "main-content", 
  label = "Skip to main content" 
}: SkipLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.focus();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      className={styles.skipLink}
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
