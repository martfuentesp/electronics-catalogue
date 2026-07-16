import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const NewsletterContext = createContext(null)

export function NewsletterProvider({ children }) {
  const [subscribers, setSubscribers] = useState([])

  const subscribe = useCallback((email) => {
    const normalized = String(email || '').trim().toLowerCase()
    if (!normalized) return { ok: false, message: 'Email is required.' }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(normalized)) {
      return { ok: false, message: 'Please enter a valid email.' }
    }

    setSubscribers((prev) => {
      if (prev.includes(normalized)) return prev
      return [normalized, ...prev]
    })

    return { ok: true, message: 'Thanks for subscribing.' }
  }, [])

  const value = useMemo(() => ({ subscribers, subscribe }), [subscribers, subscribe])

  return <NewsletterContext.Provider value={value}>{children}</NewsletterContext.Provider>
}

export function useNewsletter() {
  const ctx = useContext(NewsletterContext)
  if (!ctx) throw new Error('useNewsletter must be used within NewsletterProvider')
  return ctx
}
