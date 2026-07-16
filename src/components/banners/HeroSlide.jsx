import { Link } from 'react-router-dom'
import styles from './HeroSlide.module.css'

export function HeroSlide({ banner, isActive }) {
  return (
    <article
      className={isActive ? `${styles.slide} ${styles.active}` : styles.slide}
      style={{ backgroundImage: `url(${banner.image})` }}
      aria-hidden={!isActive}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.kicker}>Electronics catalogue</p>
        <h1 className={styles.title}>{banner.title}</h1>
        <p className={styles.subtitle}>{banner.subtitle}</p>
        <div className={styles.actions}>
          <Link className={styles.cta} to={banner.destinationUrl}>
            {banner.ctaText}
          </Link>
        </div>
      </div>
    </article>
  )
}
