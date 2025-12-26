/**
 * About/Chicago component describing Little Lemon restaurant
 */
export default function About() {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-content">
          <h2 id="about-title" className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-description">
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. The restaurant
            features a locally-sourced menu with daily specials.
          </p>
          <p className="about-description">
            Based on our family's recipes and conveying the essence of a true
            Mediterranean experience, we bring together old-world charm with
            contemporary cooking techniques for a dining experience unlike any
            other. Founded by Mario and Adrian, two brothers with a passion for
            authentic Mediterranean cuisine.
          </p>
        </div>
        <div className="about-images">
          <img
            src="/mario-adrian-a.jpg"
            alt="Mario and Adrian, the founders of Little Lemon"
            className="about-image about-image--primary"
            loading="lazy"
          />
          <img
            src="/mario-adrian-b.jpg"
            alt="Mario and Adrian preparing food in the kitchen"
            className="about-image about-image--secondary"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

