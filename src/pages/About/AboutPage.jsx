import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import styles from './AboutPage.module.css'

export function AboutPage() {
  useDocumentTitle('About')

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About ElectraMart</h1>
      <p className={styles.lead}>
        ElectraMart is a static electronics catalogue built to resemble a real production frontend.
        It uses hardcoded JSON data and focuses on architecture, routing, and reusable components.
      </p>

      <div className={styles.grid}>
        <section className={styles.card}>
          <div className={styles.cardTitle}>What this project is</div>
          <p className={styles.text}>
            A React 18 + Vite application with a realistic structure: data modules, services,
            feature components, page routing, and CSS modules.
          </p>
        </section>

        <section className={styles.card}>
          <div className={styles.cardTitle}>What this project is not</div>
          <p className={styles.text}>
            There is no backend, database, checkout, authentication, or payments.
            Product availability and promotions are purely illustrative.
          </p>
        </section>

        <section className={styles.card}>
          <div className={styles.cardTitle}>Banner architecture</div>
          <p className={styles.text}>
            Homepage banners are data-driven. The carousel and promotional banners render from
            <code className={styles.code}>src/data/bannerData.js</code>.
          </p>
        </section>
      </div>
    </div>
  )
}
