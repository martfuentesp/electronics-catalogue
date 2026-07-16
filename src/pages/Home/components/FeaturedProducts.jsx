import { Link } from 'react-router-dom'
import { ProductGrid } from '../../../components/products/ProductGrid'
import { SectionHeading } from '../../../components/shared/SectionHeading'
import { Button } from '../../../components/shared/Button'

export function FeaturedProducts({ products }) {
  return (
    <section>
      <SectionHeading
        title="Featured products"
        subtitle="Hand-picked items the team is excited about this week."
        action={
          <Button as={Link} to="/products?tag=featured" variant="secondary">
            Browse featured
          </Button>
        }
      />
      <ProductGrid products={products} />
    </section>
  )
}
