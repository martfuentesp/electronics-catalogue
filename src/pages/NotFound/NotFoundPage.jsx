import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div className={styles.code}>404</div>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.subtitle}>
        The page you’re looking for doesn’t exist. Check the URL or return to the homepage.
      </p>
      <Link className={styles.link} to="/">
        Go home
      </Link>
    </div>
  )
}
