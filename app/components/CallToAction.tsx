import { Link } from "react-router";

/**
 * Hero/CallToAction component showcasing Little Lemon
 * Includes restaurant info and reservation button
 */
export default function CallToAction() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist. Experience the warmth of our
            hospitality and the richness of our flavors.
          </p>
          <Link to="/booking" className="btn btn-primary" aria-label="Reserve a table at Little Lemon">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="/restauranfood.jpg"
            alt="Delicious Mediterranean dish being served at Little Lemon"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

