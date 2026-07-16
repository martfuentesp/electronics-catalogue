import { Link } from 'react-router-dom'
import styles from './BrandLogo.module.css'

export function BrandLogo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Electro Store home">
      <span className={styles.mark} aria-hidden="true">ES</span>
      <span className={styles.wordmark}>Electro Store</span>
    </Link>
  )
}
