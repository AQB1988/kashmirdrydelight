import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Premium Dry Fruits from Kashmir</h1>
        <p>Discover the finest selection of nuts, dates, berries, and more from the beautiful valleys of Kashmir</p>
        <Link to="/shop" className="btn btn-primary">Shop Now</Link>
      </div>
      <div className="hero-image">
        <div className="banner-video-thumbnail">
          <img 
            src="/assets/images/banners/banner-hero.jpg" 
            alt="Kashmir Dry Delight Premium Products"
            className="hero-banner-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="video-placeholder" style={{display: 'none'}}></div>
          <button className="play-button" aria-label="Play video">▶</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
