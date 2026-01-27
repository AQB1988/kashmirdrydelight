import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Roshan Prajwal',
      text: 'Excellent quality dry fruits and delicious chocolates! Fresh, flavorful, and perfect for gifting.',
      rating: 5,
      image: '/assets/images/testimonials/testimonial-roshan.jpg'
    },
    {
      id: 2,
      name: 'Bilal Abdullah',
      text: 'A delightful mix of premium dry fruits and irresistible chocolates. Great quality and taste!',
      rating: 5,
      image: '/assets/images/testimonials/testimonial-bilal.jpg'
    },
    {
      id: 3,
      name: 'Prashanth Kumar',
      text: 'Top-notch quality with amazing flavor combinations. A must-visit for dry fruit and chocolate lovers!',
      rating: 5,
      image: '/assets/images/testimonials/testimonial-prashanth.jpg'
    },
    {
      id: 4,
      name: 'Lucent Yt',
      text: 'Good quality of dry fruits. I used to take dry fruits from this shop from last 1 year no quality issue.',
      rating: 5,
      image: '/assets/images/testimonials/testimonial-lucent.jpg'
    },
    {
      id: 5,
      name: 'Devraj Talwar',
      text: 'A shop dedicated to dry fruits and chocolates. Wonderfully maintained and kept store.',
      rating: 5,
      image: '/assets/images/testimonials/testimonial-devraj.jpg'
    },
    {
      id: 6,
      name: 'Rajkumar Visvalingam',
      text: 'Wow! Very nice collections of nuts and dry fruits of various kind, be it Indian or Foreign.',
      rating: 5,
      image: '/assets/images/testimonials/testimonial-rajkumar.jpg'
    },
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Words From Our Delighted Customers</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-avatar">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="testimonial-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="testimonial-placeholder" style={{display: 'none'}}>👤</div>
              </div>
              <div className="testimonial-rating">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
