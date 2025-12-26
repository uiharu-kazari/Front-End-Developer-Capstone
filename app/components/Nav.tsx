import { Link, useLocation } from "react-router";
import { useState } from "react";

/**
 * Navigation component with responsive menu
 * Uses semantic <nav> element and proper ARIA attributes
 */
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/menu", label: "Menu" },
    { to: "/booking", label: "Reservations" },
    { to: "/order", label: "Order Online" },
    { to: "/login", label: "Login" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav" aria-label="Main navigation">
      <button
        className="nav-toggle"
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      >
        <span className="hamburger-icon">☰</span>
      </button>
      <ul
        id="nav-menu"
        className={`nav-menu ${isMenuOpen ? "nav-menu--open" : ""}`}
        role="menubar"
      >
        {navLinks.map((link) => (
          <li key={link.to} role="none">
            <Link
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "nav-link--active" : ""}`}
              role="menuitem"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

