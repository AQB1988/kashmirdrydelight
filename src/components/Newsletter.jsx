import { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for subscribing with ${email}!`)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h4>Want to offer regularly?</h4>
          <h2>Subscribe Our Newsletter</h2>
          <h3>for Get Daily Update</h3>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

