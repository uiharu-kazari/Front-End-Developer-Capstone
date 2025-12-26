import { useState } from "react";
import type { Route } from "./+types/login";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Little Lemon" },
    { name: "description", content: "Login to your Little Lemon account to manage reservations and orders." },
  ];
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login functionality would go here
    console.log("Login attempt:", { email });
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="page-section">
          <div className="page-container">
            <h1 className="page-title">Login</h1>
            <form onSubmit={handleSubmit} className="login-form" aria-labelledby="login-title">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-required="true"
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  aria-required="true"
                  autoComplete="current-password"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-submit">
                Sign In
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

