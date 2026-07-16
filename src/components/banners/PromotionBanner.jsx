import { Link } from 'react-router-dom'
import styles from './PromotionBanner.module.css'

export function PromotionBanner({ title, subtitle, image, ctaText, destinationUrl, tone = 'dark' }) {
  return (
    <section
      className={tone === 'light' ? `${styles.banner} ${styles.light}` : styles.banner}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}
      >
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
        <Link className={styles.cta} to={destinationUrl}>
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
