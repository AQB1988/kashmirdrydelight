import { useSearchParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import './Shop.css'

const Shop = () => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category') || 'all'

  const allProducts = [
    { id: 1, name: 'Almonds', price: '₹999', category: 'nuts', image: '/assets/images/products/product-almonds.jpg' },
    { id: 2, name: 'Cashews', price: '₹899', category: 'nuts', image: '/assets/images/products/product-cashews.jpg' },
    { id: 3, name: 'Walnuts', price: '₹699', category: 'nuts', image: '/assets/images/products/product-walnuts.jpg' },
    { id: 4, name: 'Pistachios', price: '₹599', category: 'nuts', image: '/assets/images/products/product-pistachios.jpg' },
    { id: 5, name: 'Medjool Dates', price: '₹799', category: 'dates', image: '/assets/images/products/product-medjool-dates.jpg' },
    { id: 6, name: 'Deglet Noor Dates', price: '₹599', category: 'dates', image: '/assets/images/products/product-deglet-dates.jpg' },
    { id: 7, name: 'Kashmiri Premium Mix', price: '₹1,299', category: 'exclusives', image: '/assets/images/products/product-kashmiri-mix.jpg' },
    { id: 8, name: 'Special Gift Box', price: '₹1,599', category: 'exclusives', image: '/assets/images/gift-boxes/gift-box-special.jpg' },
    { id: 9, name: 'Blueberries', price: '₹499', category: 'berries', image: '/assets/images/products/product-blueberries.jpg' },
    { id: 10, name: 'Cranberries', price: '₹399', category: 'berries', image: '/assets/images/products/product-cranberries.jpg' },
    { id: 11, name: 'Sunflower Seeds', price: '₹299', category: 'seeds', image: '/assets/images/products/product-sunflower-seeds.jpg' },
    { id: 12, name: 'Pumpkin Seeds', price: '₹349', category: 'seeds', image: '/assets/images/products/product-pumpkin-seeds.jpg' },
    { id: 13, name: 'Festival Gift Box', price: '₹1,299', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-festival.jpg' },
    { id: 14, name: 'Premium Gift Hamper', price: '₹1,599', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-premium.jpg' },
    { id: 15, name: 'Deluxe Gift Collection', price: '₹1,999', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-deluxe.jpg' },
    { id: 16, name: 'Luxury Gift Box', price: '₹2,499', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-luxury.jpg' },
    { id: 17, name: 'Royal Gift Hamper', price: '₹2,999', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-royal.jpg' },
    { id: 18, name: 'Exclusive Gift Box', price: '₹3,499', category: 'gift-boxes', image: '/assets/images/gift-boxes/gift-box-exclusive.jpg' },
  ]

  const filteredProducts = category === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === category)

  // WhatsApp number
  const whatsappNumber = '916005324499' // Format: country code + number (no + or spaces)
  const siteUrl = 'https://kashmirdrydelights.vercel.app'

  const handleWhatsAppOrder = (product) => {
    const message = `Hello! I'm interested in ordering:

*${product.name}*
💰 Price: ${product.price}

Product Link: ${siteUrl}/product/${product.id}

Please let me know about availability and delivery options. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <main className="shop-page">
      <SEO 
        title="Shop Premium Dry Fruits Online - Buy Dry Fruits, Nuts, Dates & Berries | Kashmir Dry Delight"
        description="Browse our wide collection of premium dry fruits, nuts, dates, berries, and gift boxes. Best quality guaranteed with fast delivery across India. Shop almonds, cashews, walnuts, pistachios, dates, berries, and more at best prices."
        keywords="buy dry fruits online, shop dry fruits, dry fruits online shopping, premium nuts, almonds online, cashews online, dates online, berries online, gift boxes dry fruits, kashmir dry fruits, buy nuts online, online dry fruits store, best dry fruits online, premium dry fruits online, dry fruits shop, dry fruits store, wholesale dry fruits, dry fruits delivery, mamra almonds, kashmiri almonds, premium cashews, medjool dates, deglet noor dates, walnuts online, pistachios online, cranberries, blueberries, sunflower seeds, pumpkin seeds, dry fruits india"
        url="/shop"
      />
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
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="product-placeholder" style={{display: 'none'}}>🥜</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <div className="product-card-actions">
                  <Link 
                    to={`/product/${product.id}`}
                    className="btn btn-secondary"
                  >
                    View Details
                  </Link>
                  <button 
                    className="btn btn-whatsapp-small"
                    onClick={() => handleWhatsAppOrder(product)}
                    title="Order via WhatsApp"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
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
