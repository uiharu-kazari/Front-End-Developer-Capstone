import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

/**
 * Links function for preconnecting to font services
 */
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700;800&family=Markazi+Text:wght@400;500;700&display=swap",
  },
];

/**
 * Root layout component with proper HTML structure
 * Includes semantic markup and accessibility features
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Default Title - will be overridden by route meta */}
        <title>Little Lemon - Mediterranean Restaurant</title>
        {/* SEO Meta Tags */}
        <meta name="description" content="Little Lemon is a family-owned Mediterranean restaurant in Chicago, offering traditional recipes with a modern twist." />
        <meta name="keywords" content="Mediterranean restaurant, Chicago, Little Lemon, Greek food, Italian food, reservations, fine dining" />
        <meta name="author" content="Little Lemon Restaurant" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#495E57" />
        {/* Open Graph Protocol Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Little Lemon" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Little Lemon - Mediterranean Restaurant in Chicago" />
        <meta property="og:description" content="Family-owned Mediterranean restaurant serving traditional recipes with a modern twist." />
        <meta property="og:image" content="https://littlelemon.com/og-image.jpg" />
        <meta property="og:url" content="https://littlelemon.com" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@littlelemon" />
        <meta name="twitter:title" content="Little Lemon - Mediterranean Restaurant" />
        <meta name="twitter:description" content="Family-owned Mediterranean restaurant serving traditional recipes with a modern twist." />
        <meta name="twitter:image" content="https://littlelemon.com/og-image.jpg" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Root App component - renders the outlet for child routes
 */
export default function App() {
  return <Outlet />;
}

/**
 * Error boundary for handling errors gracefully
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="error-page" role="main" aria-labelledby="error-title">
      <div className="error-container">
        <h1 id="error-title" className="error-title">{message}</h1>
        <p className="error-details">{details}</p>
        {stack && (
          <pre className="error-stack">
            <code>{stack}</code>
          </pre>
        )}
        <a href="/" className="btn btn-primary">
          Return to Home
        </a>
      </div>
    </main>
  );
}
