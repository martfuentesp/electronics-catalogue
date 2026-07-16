import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductFilters } from '../../components/products/ProductFilters'
import { ProductGrid } from '../../components/products/ProductGrid'
import { SectionHeading } from '../../components/shared/SectionHeading'
import { filterProducts } from '../../services/catalogService'
import styles from './ProductListPage.module.css'

export function ProductListPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || undefined,
    query: searchParams.get('q') || '',
  })

  const results = useMemo(() => {
    return filterProducts({ category: filters.category, query: filters.query })
  }, [filters.category, filters.query])

  const onChange = (next) => {
    setFilters(next)

    const params = new URLSearchParams()
    if (next.category) params.set('category', next.category)
    if (next.query) params.set('q', next.query)
    setSearchParams(params, { replace: true })
  }

  return (
    <div className={styles.page}>
      <SectionHeading
        title="Product catalogue"
        subtitle="Browse our static electronics catalogue—filter by category or search by name."
      />

      <ProductFilters value={filters} onChange={onChange} />

      {results.length ? (
        <ProductGrid products={results} />
      ) : (
        <div className={styles.empty}>
          <div className={styles.emptyTitle}>No products found</div>
          <div className={styles.emptySubtitle}>Try removing filters or searching for a different keyword.</div>
        </div>
      )}
    </div>
  )
}
