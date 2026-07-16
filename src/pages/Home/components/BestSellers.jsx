import { Link } from 'react-router-dom'
import { ProductGrid } from '../../../components/products/ProductGrid'
import { SectionHeading } from '../../../components/shared/SectionHeading'
import { Button } from '../../../components/shared/Button'

export function BestSellers({ products }) {
  return (
    <section>
      <SectionHeading
        title="Best sellers"
        subtitle="Popular items chosen by customers—available while stock lasts."
        action={
          <Button as={Link} to="/products" variant="secondary">
            Shop all
          </Button>
        }
      />
      <ProductGrid products={products} />
    </section>
  )
}
