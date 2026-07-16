import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.title}>ElectraMart</div>
          <p className={styles.muted}>
            Premium electronics, clear specs, and fast shipping—shop the latest tech essentials.
          </p>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <div className={styles.colTitle}>Explore</div>
            <Link className={styles.link} to="/products">
              Product catalogue
            </Link>
            <Link className={styles.link} to="/about">
              About
            </Link>
            <Link className={styles.link} to="/contact">
              Contact
            </Link>
          </div>
          <div className={styles.col}>
            <div className={styles.colTitle}>Support</div>
            <a className={styles.link} href="#">
              Shipping & returns
            </a>
            <a className={styles.link} href="#">
              Warranty
            </a>
            <a className={styles.link} href="#">
              Terms
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.innerBottom}>
          <span className={styles.muted}>© {new Date().getFullYear()} ElectraMart</span>
          <span className={styles.muted}>Secure checkout • Fast support</span>
        </div>
      </div>
    </footer>
  )
}
