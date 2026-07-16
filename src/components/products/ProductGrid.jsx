import styles from './ProductGrid.module.css'
import { ProductCard } from './ProductCard'

export function ProductGrid({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
