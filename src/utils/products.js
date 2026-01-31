import productsData from '../data/products.json'

/**
 * Get all products as a flat array
 */
export const getAllProducts = () => {
  const allProducts = []
  Object.values(productsData).forEach(categoryProducts => {
    allProducts.push(...categoryProducts)
  })
  return allProducts
}

/**
 * Get all products as an object with id as key (for ProductDetail)
 */
export const getAllProductsById = () => {
  const productsById = {}
  getAllProducts().forEach(product => {
    productsById[product.id] = product
  })
  return productsById
}

/**
 * Get products by category
 */
export const getProductsByCategory = (category) => {
  if (category === 'all') {
    return getAllProducts()
  }
  return productsData[category] || []
}

/**
 * Get products for a specific category array
 */
export const getProductsForCategories = (categories) => {
  const products = []
  categories.forEach(category => {
    if (productsData[category]) {
      products.push(...productsData[category])
    }
  })
  return products
}

export default productsData

