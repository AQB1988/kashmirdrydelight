import { Link } from 'react-router-dom'
import './GiftBoxes.css'

const GiftBoxes = () => {
  const giftBoxes = [
    { id: 1, name: 'Festival Gift Box', price: '₹1,299' },
    { id: 2, name: 'Premium Gift Hamper', price: '₹1,599' },
    { id: 3, name: 'Deluxe Gift Collection', price: '₹1,999' },
    { id: 4, name: 'Luxury Gift Box', price: '₹2,499' },
    { id: 5, name: 'Royal Gift Hamper', price: '₹2,999' },
    { id: 6, name: 'Exclusive Gift Box', price: '₹3,499' },
  ]

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
              <div className="gift-box-image">🎁</div>
              <div className="gift-box-info">
                <h3>{box.name}</h3>
                <p className="gift-box-price">{box.price}</p>
                <Link to="/shop" className="btn btn-primary">View More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftBoxes

