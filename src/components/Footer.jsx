import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Kashmir Dry Delight brings you a collection of carefully selected
              premium dry fruits from Kashmir and across the world.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/bulk-order">Bulk Ordering</Link>
              </li>
              <li>
                <Link to="/shop">Shopping</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Account Info</h3>
            <ul>
              <li>
                <Link to="#">My Account</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Return Policy</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Details</h3>
            <p>📍 Kashmir Valley, Srinagar, Jammu & Kashmir - 190001</p>
            <p>✉️ info@kashmirdrydelight.com</p>
            <p>📞 +916005324499</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 Kashmir Dry Delight. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
