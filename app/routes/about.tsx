import type { Route } from "./+types/about";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - Little Lemon" },
    { name: "description", content: "Learn about Little Lemon, a family-owned Mediterranean restaurant in Chicago founded by Mario and Adrian." },
  ];
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="main">
        <section className="page-section">
          <div className="page-container">
            <h1 className="page-title">About Little Lemon</h1>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}

