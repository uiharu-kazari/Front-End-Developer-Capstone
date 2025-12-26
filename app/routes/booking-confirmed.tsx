import type { Route } from "./+types/booking-confirmed";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConfirmedBooking from "../components/ConfirmedBooking";

/**
 * Meta tags for the booking confirmation page
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Booking Confirmed - Little Lemon" },
    { name: "description", content: "Your table reservation at Little Lemon has been confirmed." },
  ];
}

/**
 * BookingConfirmedPage - displays after successful reservation
 */
export default function BookingConfirmedPage() {
  return (
    <>
      <Header />
      <main className="main">
        <ConfirmedBooking />
      </main>
      <Footer />
    </>
  );
}

