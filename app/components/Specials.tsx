import { Link } from "react-router";

/**
 * Specials/Highlights component showing weekly special dishes
 */

interface SpecialItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

const specials: SpecialItem[] = [
  {
    id: 1,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: "/greek-salad.jpg",
  },
  {
    id: 2,
    name: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: "/bruschetta.jpg",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: "/lemon-dessert.jpg",
  },
];

function SpecialCard({ item }: { item: SpecialItem }) {
  return (
    <article className="special-card" aria-labelledby={`special-${item.id}`}>
      <img
        src={item.image}
        alt={item.name}
        className="special-card-image"
        loading="lazy"
      />
      <div className="special-card-content">
        <header className="special-card-header">
          <h3 id={`special-${item.id}`} className="special-card-title">
            {item.name}
          </h3>
          <span className="special-card-price" aria-label={`Price: ${item.price}`}>
            {item.price}
          </span>
        </header>
        <p className="special-card-description">{item.description}</p>
        <Link
          to="/order"
          className="special-card-link"
          aria-label={`Order ${item.name} for delivery`}
        >
          Order a delivery 🛵
        </Link>
      </div>
    </article>
  );
}

export default function Specials() {
  return (
    <section className="specials" aria-labelledby="specials-title">
      <div className="specials-container">
        <header className="specials-header">
          <h2 id="specials-title" className="specials-title">
            This Week's Specials!
          </h2>
          <Link to="/menu" className="btn btn-primary">
            Online Menu
          </Link>
        </header>
        <div className="specials-grid" role="list">
          {specials.map((item) => (
            <div key={item.id} role="listitem">
              <SpecialCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

