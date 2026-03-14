import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>( 404 )</p>
        <h1 className={styles.title}>This page is outside the portfolio map.</h1>
        <p className={styles.body}>
          The route does not exist, or the case study has been moved. Use the
          main portfolio page to continue.
        </p>
        <Link className={styles.link} href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
