import { categories } from '../../data/products'
import styles from './ProductFilters.module.css'

export function ProductFilters({ value, onChange }) {
  return (
    <div className={styles.filters}>
      <label className={styles.field}>
        <span className={styles.label}>Category</span>
        <select
          className={styles.select}
          value={value.category || ''}
          onChange={(e) => onChange({ ...value, category: e.target.value || undefined })}
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Search</span>
        <input
          className={styles.input}
          value={value.query || ''}
          onChange={(e) => onChange({ ...value, query: e.target.value })}
          placeholder="Name or keyword"
        />
      </label>
    </div>
  )
}
