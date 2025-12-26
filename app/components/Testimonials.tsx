/**
 * Testimonials component displaying customer reviews
 */

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    review: "Amazing food and atmosphere! The Greek salad is to die for. Will definitely be back!",
    image: "/customer1.jpg",
  },
  {
    id: 2,
    name: "James L.",
    rating: 5,
    review: "Best Mediterranean restaurant in Chicago. The bruschetta is authentic and delicious!",
    image: "/customer2.jpg",
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 4,
    review: "Lovely family restaurant with great service. The lemon dessert is heavenly!",
    image: "/customer3.jpg",
  },
  {
    id: 4,
    name: "Michael D.",
    rating: 5,
    review: "Perfect for date night! The ambiance and food are both exceptional.",
    image: "/customer4.jpg",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating" aria-label={`Rating: ${rating} out of 5 stars`}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? "star--filled" : ""}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card" aria-labelledby={`testimonial-${testimonial.id}`}>
      <StarRating rating={testimonial.rating} />
      <div className="testimonial-author">
        <div className="testimonial-avatar" aria-hidden="true">
          {testimonial.name.charAt(0)}
        </div>
        <h3 id={`testimonial-${testimonial.id}`} className="testimonial-name">
          {testimonial.name}
        </h3>
      </div>
      <blockquote className="testimonial-quote">
        <p>"{testimonial.review}"</p>
      </blockquote>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-container">
        <h2 id="testimonials-title" className="testimonials-title">
          What Our Customers Say
        </h2>
        <div className="testimonials-grid" role="list">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} role="listitem">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

