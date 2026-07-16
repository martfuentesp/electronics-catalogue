import { products } from '../data/products' 

export function getAllProducts() {
  return products
}

export function getProductById(productId) {
  return products.find((p) => p.id === productId) || null
}

export function getFeaturedProducts(limit = 6) {
  return products.filter((p) => p.isFeatured).slice(0, limit)
}

export function getBestSellers(limit = 6) {
  return products.filter((p) => p.isBestSeller).slice(0, limit)
}

export function filterProducts({ category, query } = {}) {
  const normalizedQuery = (query || '').trim().toLowerCase()

  return products.filter((p) => {
    const matchesCategory = category ? p.category === category : true
    const matchesQuery = normalizedQuery
      ? `${p.name} ${p.shortDescription}`.toLowerCase().includes(normalizedQuery)
      : true

    return matchesCategory && matchesQuery
  })
}
