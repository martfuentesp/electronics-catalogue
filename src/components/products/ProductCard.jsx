import { Link } from 'react-router-dom'
import { availabilityLabels } from '../../data/products'
import { formatPrice } from '../../utils/formatters'
import styles from './ProductCard.module.css'

export function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <Link className={styles.media} to={`/products/${product.id}`} aria-label={product.name}>
        <img className={styles.image} src={product.image} alt={product.name} loading="lazy" />
      </Link>

      <div className={styles.body}>
        <div className={styles.topRow}>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{formatPrice(product.price)}</div>
        </div>

        <div className={styles.desc}>{product.shortDescription}</div>

        <div className={styles.bottomRow}>
          <span className={styles.badge}>{availabilityLabels[product.availability] || '—'}</span>
          <Link className={styles.link} to={`/products/${product.id}`}>
            View details
          </Link>
        </div>
      </div>
    </article>
  )
}
