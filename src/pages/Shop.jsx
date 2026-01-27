import { useSearchParams, Link } from 'react-router-dom'
import { useState } from 'react'
import './Shop.css'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'

  const allProducts = [
    { id: 1, name: 'Almonds', price: '₹999', category: 'nuts', image: '🥜' },
    { id: 2, name: 'Cashews', price: '₹899', category: 'nuts', image: '🥜' },
    { id: 3, name: 'Walnuts', price: '₹699', category: 'nuts', image: '🌰' },
    { id: 4, name: 'Pistachios', price: '₹599', category: 'nuts', image: '🥜' },
    { id: 5, name: 'Medjool Dates', price: '₹799', category: 'dates', image: '📅' },
    { id: 6, name: 'Deglet Noor Dates', price: '₹599', category: 'dates', image: '📅' },
    { id: 7, name: 'Kashmiri Premium Mix', price: '₹1,299', category: 'exclusives', image: '⭐' },
    { id: 8, name: 'Special Gift Box', price: '₹1,599', category: 'exclusives', image: '⭐' },
    { id: 9, name: 'Blueberries', price: '₹499', category: 'berries', image: '🫐' },
    { id: 10, name: 'Cranberries', price: '₹399', category: 'berries', image: '🫐' },
    { id: 11, name: 'Sunflower Seeds', price: '₹299', category: 'seeds', image: '🌰' },
    { id: 12, name: 'Pumpkin Seeds', price: '₹349', category: 'seeds', image: '🌰' },
    { id: 13, name: 'Festival Gift Box', price: '₹1,299', category: 'gift-boxes', image: '🎁' },
    { id: 14, name: 'Premium Gift Hamper', price: '₹1,599', category: 'gift-boxes', image: '🎁' },
  ]

  const filteredProducts = category === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === category)

  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <main className="shop-page">
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
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedProduct(product)}
                >
                  Add to Cart
                </button>
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

