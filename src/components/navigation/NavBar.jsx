import { NavLink } from 'react-router-dom'
import { BrandLogo } from './BrandLogo'
import styles from './NavBar.module.css'

const getLinkClassName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link
}

export function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <BrandLogo />

        <nav className={styles.nav} aria-label="Primary">
          <NavLink to="/" className={getLinkClassName} end>
            Home
          </NavLink>
          <NavLink to="/products" className={getLinkClassName}>
            Products
          </NavLink>
          <NavLink to="/about" className={getLinkClassName}>
            About
          </NavLink>
          <NavLink to="/contact" className={getLinkClassName}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
