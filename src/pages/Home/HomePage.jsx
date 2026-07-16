import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { HeroCarousel } from '../../components/banners/HeroCarousel'
import { PromotionBanner } from '../../components/banners/PromotionBanner'
import { promoBanners } from '../../data/bannerData'
import { categories } from '../../data/products'
import { getBestSellers, getFeaturedProducts } from '../../services/catalogService'
import { ProductGrid } from '../../components/products/ProductGrid'
import { SectionHeading } from '../../components/shared/SectionHeading'
import { Button } from '../../components/shared/Button'
import { NewsletterSection } from './components/NewsletterSection'
import { CategoryGrid } from './components/CategoryGrid'
import { FeaturedProducts } from './components/FeaturedProducts'
import { BestSellers } from './components/BestSellers'
import styles from './HomePage.module.css'

export function HomePage() {
  const featured = useMemo(() => getFeaturedProducts(6), [])
  const bestSellers = useMemo(() => getBestSellers(6), [])

  return (
    <div className={styles.page}>
      <HeroCarousel />

      <div className={styles.promoRow}>
        {promoBanners.map((b) => (
          <PromotionBanner key={b.id} {...b} />
        ))}
      </div>

      <FeaturedProducts products={featured} />

      <CategoryGrid categories={categories} />

      <BestSellers products={bestSellers} />

      <section className={styles.quickBrowse}>
        <SectionHeading
          title="Quick browse"
          subtitle="Jump into the catalogue with curated sections."
          action={
            <Button as={Link} to="/products" variant="secondary">
              View all products
            </Button>
          }
        />
        <ProductGrid products={[...featured].slice(0, 3)} />
      </section>

      <NewsletterSection />
    </div>
  )
}
