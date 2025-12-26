import type { Route } from "./+types/order";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Order Online - Little Lemon" },
    { name: "description", content: "Order delicious Mediterranean food online from Little Lemon for pickup or delivery." },
  ];
}

export default function OrderPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="page-section">
          <div className="page-container">
            <h1 className="page-title">Order Online</h1>
            <p className="page-description">
              Order your favorite Mediterranean dishes for pickup or delivery.
              Coming soon!
            </p>
            <div className="coming-soon">
              <span className="coming-soon-icon" aria-hidden="true">🛵</span>
              <p>Online ordering is coming soon. For now, please call us at (312) 555-1234 to place your order.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

