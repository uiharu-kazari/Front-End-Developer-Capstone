import type { Route } from "./+types/menu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Specials from "../components/Specials";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Menu - Little Lemon" },
    { name: "description", content: "Explore our Mediterranean menu featuring fresh salads, authentic bruschetta, and homemade desserts." },
  ];
}

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="page-section">
          <div className="page-container">
            <h1 className="page-title">Our Menu</h1>
            <p className="page-description">
              Discover our carefully crafted Mediterranean dishes, made with the
              freshest ingredients and traditional family recipes.
            </p>
          </div>
        </section>
        <Specials />
      </main>
      <Footer />
    </>
  );
}

