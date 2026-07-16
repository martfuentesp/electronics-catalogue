import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../services/catalogService'
import { availabilityLabels, categories } from '../../data/products'
import { formatPrice } from '../../utils/formatters'
import { SectionHeading } from '../../components/shared/SectionHeading'
import styles from './ProductDetailsPage.module.css'

function getCategoryName(id) {
  return categories.find((c) => c.id === id)?.name || id
}

export function ProductDetailsPage() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className={styles.notFound}>
        <SectionHeading title="Product not found" subtitle="This item does not exist in the current catalogue." />
        <Link className={styles.back} to="/products">
          Return to catalogue
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumbs}>
        <Link className={styles.crumb} to="/products">
          Products
        </Link>
        <span className={styles.sep}>/</span>
        <span className={styles.crumbActive}>{product.name}</span>
      </div>

      <div className={styles.grid}>
        <div className={styles.media}>
          <img className={styles.image} src={product.image} alt={product.name} />
        </div>

        <div className={styles.info}>
          <div className={styles.metaRow}>
            <span className={styles.pill}>{getCategoryName(product.category)}</span>
            <span className={styles.pill}>{availabilityLabels[product.availability] || '—'}</span>
          </div>

          <h1 className={styles.title}>{product.name}</h1>
          <div className={styles.price}>{formatPrice(product.price)}</div>
          <p className={styles.desc}>{product.shortDescription}</p>

          <div className={styles.specs}>
            <div className={styles.specTitle}>Specifications</div>
            <dl className={styles.specGrid}>
              {Object.entries(product.specifications).map(([k, v]) => (
                <div key={k} className={styles.specItem}>
                  <dt className={styles.specKey}>{k}</dt>
                  <dd className={styles.specValue}>{String(v)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.actions}>
            <Link className={styles.secondary} to="/products">
              Back to catalogue
            </Link>
            <a className={styles.primary} href="#" onClick={(e) => e.preventDefault()}>
              Add to wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
