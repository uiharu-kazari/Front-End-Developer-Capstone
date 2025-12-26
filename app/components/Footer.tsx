import { Link } from "react-router";

/**
 * Footer component with navigation, contact info, and social links
 * Uses semantic <footer> element for accessibility
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-section">
          <img
            src="/logo.svg"
            alt="Little Lemon Restaurant"
            className="footer-logo"
            width="150"
            height="40"
          />
        </div>

        {/* Doormat Navigation */}
        <nav className="footer-section" aria-label="Footer navigation">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <address className="footer-contact">
            <p>123 Lemon Street</p>
            <p>Chicago, IL 60601</p>
            <p>
              <a href="tel:+13125551234" aria-label="Call Little Lemon">
                (312) 555-1234
              </a>
            </p>
            <p>
              <a href="mailto:info@littlelemon.com" aria-label="Email Little Lemon">
                info@littlelemon.com
              </a>
            </p>
          </address>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Connect With Us</h3>
          <ul className="footer-social" aria-label="Social media links">
            <li>
              <a
                href="https://facebook.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Little Lemon on Facebook"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Little Lemon on Instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/littlelemon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Little Lemon on Twitter"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

