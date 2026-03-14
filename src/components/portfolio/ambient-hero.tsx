"use client";

import { motion, useReducedMotion } from "motion/react";

import styles from "./ambient-hero.module.css";

export function AmbientHero() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.grid} />
      <motion.div
        className={`${styles.orb} ${styles.core}`}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 24, -18, 0],
                y: [0, -16, 20, 0],
                rotate: [0, 8, -6, 0],
                scale: [1, 1.06, 0.97, 1],
              }
        }
        transition={{
          duration: 16,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`${styles.orb} ${styles.secondary}`}
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, -22, 18, 0],
                y: [0, 18, -20, 0],
                rotate: [0, -9, 6, 0],
                scale: [1, 0.96, 1.04, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`${styles.orb} ${styles.highlight}`}
        animate={
          reduceMotion
            ? undefined
            : {
                opacity: [0.65, 0.85, 0.6, 0.65],
                scale: [1, 1.1, 0.96, 1],
              }
        }
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <div className={styles.ring} />
      <div className={styles.ringMinor} />
      <div className={styles.haze} />
    </div>
  );
}
