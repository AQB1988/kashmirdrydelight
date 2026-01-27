import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = () => {
  const categories = [
    { id: 1, name: 'Nuts & Dry Fruits', link: '/shop?category=nuts', icon: '🥜', image: '/assets/images/categories/category-nuts.jpg' },
    { id: 2, name: 'Dates', link: '/shop?category=dates', icon: '📅', image: '/assets/images/categories/category-dates.jpg' },
    { id: 3, name: 'KDD Exclusives', link: '/shop?category=exclusives', icon: '⭐', image: '/assets/images/categories/category-exclusives.jpg' },
    { id: 4, name: 'Berries', link: '/shop?category=berries', icon: '🫐', image: '/assets/images/categories/category-berries.jpg' },
    { id: 5, name: 'Seeds & More', link: '/shop?category=seeds', icon: '🌰', image: '/assets/images/categories/category-seeds.jpg' },
    { id: 6, name: 'Gift Boxes', link: '/shop?category=gift-boxes', icon: '🎁', image: '/assets/images/categories/category-gift-boxes.jpg' },
  ]

  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Our Categories</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <Link key={category.id} to={category.link} className="category-card">
              <div className="category-image-wrapper">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="category-icon" style={{display: 'none'}}>{category.icon}</div>
              </div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
