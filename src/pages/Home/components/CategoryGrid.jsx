import { Link } from 'react-router-dom'
import { SectionHeading } from '../../../components/shared/SectionHeading'
import styles from './CategoryGrid.module.css'

export function CategoryGrid({ categories }) {
  return (
    <section>
      <SectionHeading
        title="Shop by category"
        subtitle="Explore a curated catalogue across core electronics categories."
        action={
          <Link className={styles.linkAction} to="/products">
            View catalogue
          </Link>
        }
      />

      <div className={styles.grid}>
        {categories.map((c) => (
          <Link key={c.id} className={styles.card} to={`/products?category=${c.id}`}>
            <div className={styles.cardTitle}>{c.name}</div>
            <div className={styles.cardDesc}>{c.description}</div>
            <div className={styles.cardCta}>Browse</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
