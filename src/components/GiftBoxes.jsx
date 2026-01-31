import { Link } from 'react-router-dom'
import { getProductsByCategory } from '../utils/products'
import './GiftBoxes.css'

const GiftBoxes = () => {
  // Get first 6 gift boxes
  const giftBoxes = getProductsByCategory('gift-boxes')
    .slice(0, 6)
    .map(box => ({
      ...box,
      price: `₹${box.basePrice.toLocaleString('en-IN')}`
    }))

  return (
    <section className="gift-boxes">
      <div className="container">
        <div className="gift-boxes-header">
          <h2 className="section-title">Latest Gift Boxes Collection</h2>
          <p>Celebrate all festivals in a healthy & delicious way with our exquisite range of dry fruit gift hampers.</p>
          <Link to="/shop?category=gift-boxes" className="btn btn-primary">View More</Link>
        </div>
        <div className="gift-boxes-grid">
          {giftBoxes.map(box => (
            <div key={box.id} className="gift-box-card">
              <div className="gift-box-image">
                <img 
                  src={box.image} 
                  alt={box.name}
                  className="gift-box-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="gift-box-placeholder" style={{display: 'none'}}>🎁</div>
              </div>
              <div className="gift-box-info">
                <h3>{box.name}</h3>
                <p className="gift-box-price">{box.price}</p>
                <Link to={`/product/${box.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftBoxes
