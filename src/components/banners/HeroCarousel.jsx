import { useEffect, useMemo, useState } from 'react'
import { heroBanners } from '../../data/bannerData'
import { HeroSlide } from './HeroSlide'
import styles from './HeroCarousel.module.css'

const AUTOPLAY_MS = 6000

export function HeroCarousel() {
  const slides = useMemo(() => heroBanners, [])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!slides.length) return

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [slides.length])

  if (!slides.length) return null

  return (
    <section className={styles.section} aria-label="Promotions">
      <div className={styles.carousel}>
        {slides.map((banner, idx) => (
          <HeroSlide key={banner.id} banner={banner} isActive={idx === activeIndex} />
        ))}

        <div className={styles.controls}>
          {slides.map((banner, idx) => (
            <button
              key={banner.id}
              type="button"
              className={idx === activeIndex ? `${styles.dot} ${styles.dotActive}` : styles.dot}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === activeIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
