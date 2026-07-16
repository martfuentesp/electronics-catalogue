import { Link } from 'react-router-dom'
import styles from './BrandLogo.module.css'

export function BrandLogo() {
  return (
    <Link to="/" className={styles.logo} aria-label="ElectraMart home">
      <span className={styles.mark} aria-hidden="true">EM</span>
      <span className={styles.wordmark}>ElectraMart</span>
    </Link>
  )
}
