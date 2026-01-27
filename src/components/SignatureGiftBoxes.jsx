import { Link } from 'react-router-dom'
import './SignatureGiftBoxes.css'

const SignatureGiftBoxes = () => {
  const giftBoxes = [
    { id: 1, name: 'Gift Box Collection', price: '₹1,299' },
    { id: 2, name: 'Gift Box Collection', price: '₹1,599' },
    { id: 3, name: 'Gift Box Collection', price: '₹1,999' },
    { id: 4, name: 'Gift Box Collection', price: '₹2,499' },
    { id: 5, name: 'Gift Box Collection', price: '₹2,999' },
    { id: 6, name: 'Gift Box Collection', price: '₹3,499' },
  ]

  return (
    <section className="signature-gift-boxes">
      <div className="container">
        <h2 className="section-title">Gift Boxes - Signature Collection</h2>
        <div className="signature-gift-boxes-grid">
          {giftBoxes.map(box => (
            <div key={box.id} className="signature-gift-box-card">
              <div className="signature-gift-box-image">
                <div className="blog-img">🎁</div>
                <div className="brand-name">Kashmir Dry Delight</div>
              </div>
              <div className="signature-gift-box-info">
                <h3>{box.name}</h3>
                <Link to="/shop" className="btn-link">View more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SignatureGiftBoxes

