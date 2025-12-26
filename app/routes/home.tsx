import type { Route } from "./+types/home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

/**
 * Meta tags for the home page - SEO and OGP
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Little Lemon - Mediterranean Restaurant in Chicago" },
    {
      name: "description",
      content:
        "Little Lemon is a family-owned Mediterranean restaurant in Chicago, offering traditional recipes with a modern twist. Reserve your table today!",
    },
    { property: "og:title", content: "Little Lemon - Mediterranean Restaurant in Chicago" },
    {
      property: "og:description",
      content:
        "Experience authentic Mediterranean cuisine at Little Lemon. Family-owned restaurant serving traditional recipes with a modern twist.",
    },
    { property: "og:type", content: "restaurant" },
    { property: "og:image", content: "/og-image.jpg" },
    { property: "og:url", content: "https://littlelemon.com" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Little Lemon - Mediterranean Restaurant" },
    {
      name: "twitter:description",
      content: "Experience authentic Mediterranean cuisine at Little Lemon in Chicago.",
    },
  ];
}

/**
 * HomePage component - main landing page with all sections
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="main">
        <CallToAction />
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}
