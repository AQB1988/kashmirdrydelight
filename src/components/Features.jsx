import './Features.css'

const Features = () => {
  const features = [
    { icon: '🛟', title: 'Customer Support', description: 'Support every time' },
    { icon: '🔒', title: 'Secure Shopping', description: 'Safe and secure transactions' },
    { icon: '🚚', title: 'Swift Shipping', description: 'Delivering across India' },
    { icon: '↩️', title: 'Money Return', description: 'Refer return policy' },
  ]

  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

