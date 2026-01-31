import { Link } from 'react-router-dom'
import { getAllProducts } from '../utils/products'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  // Get first 6 products from all categories as featured
  const products = getAllProducts()
    .slice(0, 6)
    .map(product => ({
      id: product.id,
      name: product.name,
      price: `₹${product.basePrice.toLocaleString('en-IN')}`,
      image: product.image
    }))

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="section-title">Dry Fruits - Featured Collection</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="blog-img" style={{display: 'none'}}>🌾</div>
                <div className="brand-name">Kashmir Dry Delight</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <Link to={`/product/${product.id}`} className="btn-link">View more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
