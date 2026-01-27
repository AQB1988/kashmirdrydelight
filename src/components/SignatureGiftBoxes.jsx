import { Link } from 'react-router-dom'
import './SignatureGiftBoxes.css'

const SignatureGiftBoxes = () => {
  const giftBoxes = [
    { id: 1, name: 'Gift Box Collection', price: '₹1,299', image: '/assets/images/gift-boxes/gift-box-signature-1.jpg' },
    { id: 2, name: 'Gift Box Collection', price: '₹1,599', image: '/assets/images/gift-boxes/gift-box-signature-2.jpg' },
    { id: 3, name: 'Gift Box Collection', price: '₹1,999', image: '/assets/images/gift-boxes/gift-box-signature-3.jpg' },
    { id: 4, name: 'Gift Box Collection', price: '₹2,499', image: '/assets/images/gift-boxes/gift-box-signature-4.jpg' },
    { id: 5, name: 'Gift Box Collection', price: '₹2,999', image: '/assets/images/gift-boxes/gift-box-signature-5.jpg' },
    { id: 6, name: 'Gift Box Collection', price: '₹3,499', image: '/assets/images/gift-boxes/gift-box-signature-6.jpg' },
  ]

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
