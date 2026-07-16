import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import styles from './AboutPage.module.css'

export function AboutPage() {
  useDocumentTitle('About')

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About Electro Store</h1>
      <p className={styles.lead}>
        Electro Store is a modern electronics store experience—browse laptops, smartphones, gaming gear,
        monitors, and everyday accessories.
      </p>

      <div className={styles.grid}>
        <section className={styles.card}>
          <div className={styles.cardTitle}>What we offer</div>
          <p className={styles.text}>
            Curated devices and peripherals with clear specs, availability indicators, and quick
            navigation by category.
          </p>
        </section>

        <section className={styles.card}>
          <div className={styles.cardTitle}>Store policies</div>
          <p className={styles.text}>
            Shipping and returns vary by item and region. For warranty coverage and eligibility,
            contact our team.
          </p>
        </section>

        <section className={styles.card}>
          <div className={styles.cardTitle}>Why shop here</div>
          <p className={styles.text}>
            New arrivals and seasonal promotions are highlighted on the homepage, with featured picks
            updated regularly.
          </p>
        </section>
      </div>
    </div>
  )
}
