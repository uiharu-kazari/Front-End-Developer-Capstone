import { Link } from "react-router";

/**
 * ConfirmedBooking component displayed after successful reservation
 */
export default function ConfirmedBooking() {
  return (
    <section className="confirmed-booking" aria-labelledby="confirmed-title">
      <div className="confirmed-container">
        <div className="confirmed-icon" aria-hidden="true">
          ✓
        </div>
        <h1 id="confirmed-title" className="confirmed-title">
          Booking Confirmed!
        </h1>
        <p className="confirmed-message">
          Thank you for your reservation at Little Lemon. We look forward to
          welcoming you!
        </p>
        <p className="confirmed-details">
          A confirmation email has been sent to your registered email address
          with all the details of your booking.
        </p>
        <div className="confirmed-actions">
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
          <Link to="/menu" className="btn btn-secondary">
            View Our Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

