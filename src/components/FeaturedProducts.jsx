import { Link } from 'react-router-dom'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Breakfast Mix Seeds', price: '₹499', image: '🌾' },
    { id: 2, name: 'Best Quality Medjool Dates', price: '₹799', image: '📅' },
    { id: 3, name: 'Exquisite Brazil Nuts', price: '₹899', image: '🥜' },
    { id: 4, name: 'Premium Walnut Kernels', price: '₹699', image: '🌰' },
    { id: 5, name: 'Best Quality Plain Pista', price: '₹599', image: '🥜' },
    { id: 6, name: 'Premium Mamra Almonds', price: '₹999', image: '🥜' },
  ]

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Dry Fruits - Featured Collection</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <div className="blog-img">{product.image}</div>
                <div className="brand-name">Kashmir Dry Delight</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <Link to="/shop" className="btn-link">View more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts

