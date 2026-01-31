import { Link } from 'react-router-dom'
import { getProductsByCategory } from '../utils/products'
import './SignatureGiftBoxes.css'

const SignatureGiftBoxes = () => {
  // Get last 6 gift boxes (signature collection)
  const giftBoxes = getProductsByCategory('gift-boxes')
    .slice(-6)
    .map(box => ({
      ...box,
      price: `₹${box.basePrice.toLocaleString('en-IN')}`
    }))

  return (
    <section className="signature-gift-boxes">
      <div className="container">
        <h2 className="section-title">Gift Boxes - Signature Collection</h2>
        <div className="signature-gift-boxes-grid">
          {giftBoxes.map(box => (
            <div key={box.id} className="signature-gift-box-card">
              <div className="signature-gift-box-image">
                <img 
                  src={box.image} 
                  alt={box.name}
                  className="signature-gift-box-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="blog-img" style={{display: 'none'}}>🎁</div>
                <div className="brand-name">Kashmir Dry Delight</div>
              </div>
              <div className="signature-gift-box-info">
                <h3>{box.name}</h3>
                <Link to={`/product/${box.id}`} className="btn-link">View more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignatureGiftBoxes
