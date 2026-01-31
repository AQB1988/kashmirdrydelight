import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SEO from '../components/SEO'
import { getAllProductsById } from '../utils/products'
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedWeight, setSelectedWeight] = useState('1 kg')

  const allProducts = getAllProductsById()
  const product = allProducts[parseInt(id)]

  const weightOptions = [
    { label: '100 gram', multiplier: 0.1 },
    { label: '250 gram', multiplier: 0.25 },
    { label: '500 gram', multiplier: 0.5 },
    { label: '1 kg', multiplier: 1 },
    { label: '2 Kg', multiplier: 2 },
    { label: '5 Kg', multiplier: 5 },
  ]

  const selectedWeightOption = weightOptions.find(w => w.label === selectedWeight)
  const currentPrice = selectedWeightOption 
    ? Math.round(product.basePrice * selectedWeightOption.multiplier)
    : product.basePrice

  // WhatsApp number
  const whatsappNumber = '916005324499' // Format: country code + number (no + or spaces)
  const siteUrl = 'https://kashmirdrydelights.vercel.app'

  const handleWhatsAppOrder = () => {
    const message = `Hello! I'm interested in ordering:

*${product.name}*
📦 Weight: ${selectedWeight}
💰 Price: ₹${currentPrice.toLocaleString('en-IN')}
📝 Description: ${product.description}

Product Link: ${siteUrl}/product/${product.id}

Please let me know about availability and delivery options. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (!product) {
    return (
      <main className="product-detail-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Product not found</h2>
            <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="product-detail-page">
      <SEO 
        title={`${product.name} - Buy Online | Premium Quality | Kashmir Dry Delight`}
        description={`Buy premium quality ${product.name} online from Kashmir Dry Delight. ${product.description} 100% quality guarantee, fast delivery across India. Best prices on ${product.name.toLowerCase()}.`}
        keywords={`${product.name}, buy ${product.name} online, ${product.name.toLowerCase()} price, premium ${product.name.toLowerCase()}, ${product.name.toLowerCase()} online india, best ${product.name.toLowerCase()}, quality ${product.name.toLowerCase()}, kashmir ${product.name.toLowerCase()}, ${product.category}, dry fruits, nuts, dates, berries, kashmir dry fruits, buy dry fruits online, online dry fruits, premium dry fruits, dry fruits india`}
        image={product.image}
        url={`/product/${product.id}`}
        type="product"
        product={{
          name: product.name,
          description: product.description,
          image: product.image,
          price: currentPrice,
          basePrice: product.basePrice
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Shop', url: '/shop' },
          { name: product.name, url: `/product/${product.id}` }
        ]}
      />
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/shop">Shop</Link>
          <span> / </span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-content">
          <div className="product-image-section">
            <div className="product-main-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-detail-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="product-placeholder" style={{display: 'none'}}>🥜</div>
            </div>
          </div>

          <div className="product-info-section">
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description">{product.description}</p>
            
            <div className="weight-selection">
              <label>Select Weight:</label>
              <div className="weight-options">
                {weightOptions.map(option => (
                  <button
                    key={option.label}
                    className={`weight-btn ${selectedWeight === option.label ? 'active' : ''}`}
                    onClick={() => setSelectedWeight(option.label)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-price-section">
              <span className="price-label">Price:</span>
              <span className="product-price">₹{currentPrice.toLocaleString('en-IN')}</span>
            </div>

            <div className="product-actions">
              <button 
                className="btn btn-whatsapp"
                onClick={handleWhatsAppOrder}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Order via WhatsApp
              </button>
            </div>

            <div className="product-features">
              <h3>Features:</h3>
              <ul>
                <li>✅ Premium Quality Guarantee</li>
                <li>✅ Fresh and Natural</li>
                <li>✅ Carefully Packed</li>
                <li>✅ Fast Delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail

