import Nav from "./Nav";

/**
 * Header component containing the Little Lemon logo and navigation
 * Uses semantic <header> element for accessibility
 */
export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo-link" aria-label="Little Lemon Home">
          <img
            src="/logo.svg"
            alt="Little Lemon Restaurant Logo"
            className="logo"
            width="200"
            height="50"
          />
        </a>
        <Nav />
      </div>
    </header>
  );
}

