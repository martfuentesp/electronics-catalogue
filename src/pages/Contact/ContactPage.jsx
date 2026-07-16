import { useState } from 'react'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import styles from './ContactPage.module.css'

export function ContactPage() {
  useDocumentTitle('Contact')

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const onChange = (key) => (e) => {
    setSent(false)
    setForm((prev) => ({ ...prev, [key]: e.target.value }))
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.lead}>
        This is a static demo—form submissions are not sent anywhere. Use this page as a realistic
        placeholder for support or sales inquiries.
      </p>

      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input className={styles.input} value={form.name} onChange={onChange('name')} />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input
            className={styles.input}
            value={form.email}
            onChange={onChange('email')}
            inputMode="email"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Message</span>
          <textarea
            className={styles.textarea}
            value={form.message}
            onChange={onChange('message')}
            rows={6}
          />
        </label>

        <button className={styles.button} type="submit">
          Send message
        </button>

        {sent ? <div className={styles.sent}>Message saved (demo).</div> : null}
      </form>
    </div>
  )
}
