import { Outlet } from 'react-router-dom'
import { NavBar } from '../navigation/NavBar'
import { Footer } from './Footer'
import styles from './AppLayout.module.css'

export function AppLayout() {
  return (
    <div className={styles.shell}>
      <NavBar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
