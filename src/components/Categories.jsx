import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = () => {
  const categories = [
    { id: 1, name: 'Nuts & Dry Fruits', link: '/shop?category=nuts', icon: '🥜' },
    { id: 2, name: 'Dates', link: '/shop?category=dates', icon: '📅' },
    { id: 3, name: 'KDD Exclusives', link: '/shop?category=exclusives', icon: '⭐' },
    { id: 4, name: 'Berries', link: '/shop?category=berries', icon: '🫐' },
    { id: 5, name: 'Seeds & More', link: '/shop?category=seeds', icon: '🌰' },
    { id: 6, name: 'Gift Boxes', link: '/shop?category=gift-boxes', icon: '🎁' },
  ]

  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Our Categories</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <Link key={category.id} to={category.link} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

