import Hero from '../components/Hero'
import Categories from '../components/Categories'
import GiftBoxes from '../components/GiftBoxes'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import FeaturedProducts from '../components/FeaturedProducts'
import SignatureGiftBoxes from '../components/SignatureGiftBoxes'
import './Home.css'

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <GiftBoxes />
      <Features />
      <Testimonials />
      <Newsletter />
      <FeaturedProducts />
      <SignatureGiftBoxes />
    </main>
  )
}

export default Home

