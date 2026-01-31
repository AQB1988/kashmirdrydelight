import { useSearchParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { getProductsByCategory } from '../utils/products'
import './Shop.css'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'

  const allProducts = getProductsByCategory(category)
  
  // Format products for display (add price string)
  const filteredProducts = allProducts.map(product => ({
    ...product,
    price: `₹${product.basePrice.toLocaleString('en-IN')}`
  }))

  return (
    <main className="shop-page">
      <SEO 
        title="Shop Premium Dry Fruits Online - Buy Dry Fruits, Nuts, Dates & Berries | Kashmir Dry Delight"
        description="Browse our wide collection of premium dry fruits, nuts, dates, berries, and gift boxes. Best quality guaranteed with fast delivery across India. Shop almonds, cashews, walnuts, pistachios, dates, berries, and more at best prices."
        keywords="buy dry fruits online, shop dry fruits, dry fruits online shopping, premium nuts, almonds online, cashews online, dates online, berries online, gift boxes dry fruits, kashmir dry fruits, buy nuts online, online dry fruits store, best dry fruits online, premium dry fruits online, dry fruits shop, dry fruits store, wholesale dry fruits, dry fruits delivery, mamra almonds, kashmiri almonds, premium cashews, medjool dates, deglet noor dates, walnuts online, pistachios online, cranberries, blueberries, sunflower seeds, pumpkin seeds, dry fruits india"
        url="/shop"
      />
      <div className="container">
        <h1 className="page-title">Our Products</h1>
        
        <div className="category-filters">
          <Link to="/shop?category=all" className={category === 'all' ? 'active' : ''}>All</Link>
          <Link to="/shop?category=nuts" className={category === 'nuts' ? 'active' : ''}>Nuts & Dry Fruits</Link>
          <Link to="/shop?category=dates" className={category === 'dates' ? 'active' : ''}>Dates</Link>
          <Link to="/shop?category=exclusives" className={category === 'exclusives' ? 'active' : ''}>KDD Exclusives</Link>
          <Link to="/shop?category=berries" className={category === 'berries' ? 'active' : ''}>Berries</Link>
          <Link to="/shop?category=seeds" className={category === 'seeds' ? 'active' : ''}>Seeds & More</Link>
          <Link to="/shop?category=gift-boxes" className={category === 'gift-boxes' ? 'active' : ''}>Gift Boxes</Link>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
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
                <div className="product-placeholder" style={{display: 'none'}}>🥜</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <Link 
                  to={`/product/${product.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Shop
