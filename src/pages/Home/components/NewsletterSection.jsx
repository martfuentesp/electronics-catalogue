import { useState } from 'react'
import { useNewsletter } from '../../../contexts/NewsletterContext'
import styles from './NewsletterSection.module.css'

export function NewsletterSection() {
  const { subscribe } = useNewsletter()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const result = subscribe(email)
    setStatus(result)
    if (result.ok) setEmail('')
  }

  return (
    <section className={styles.section} aria-label="Newsletter">
      <div className={styles.inner}
      >
        <div>
          <div className={styles.title}>Newsletter</div>
          <div className={styles.subtitle}>
            Product drops, seasonal promos, and build guides—sent occasionally.
          </div>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <input
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            inputMode="email"
            aria-label="Email address"
          />
          <button className={styles.button} type="submit">
            Subscribe
          </button>
        </form>
      </div>

      {status ? (
        <div className={status.ok ? styles.messageOk : styles.messageErr}>{status.message}</div>
      ) : null}
    </section>
  )
}
