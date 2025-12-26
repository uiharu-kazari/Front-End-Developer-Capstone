import { useReducer, useCallback } from "react";
import { useNavigate } from "react-router";
import type { Route } from "./+types/booking";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingForm, { type BookingFormData } from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";

/**
 * Meta tags for the booking page
 */
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reserve a Table - Little Lemon" },
    { name: "description", content: "Book a table at Little Lemon restaurant. Experience authentic Mediterranean cuisine in Chicago." },
    { property: "og:title", content: "Reserve a Table - Little Lemon" },
    { property: "og:description", content: "Book a table at Little Lemon restaurant. Experience authentic Mediterranean cuisine in Chicago." },
    { property: "og:type", content: "website" },
  ];
}

/**
 * Reducer action type for available times
 */
type TimesAction = { type: "UPDATE_TIMES"; date: string };

/**
 * Reducer function for managing available booking times
 */
function timesReducer(_state: string[], action: TimesAction): string[] {
  switch (action.type) {
    case "UPDATE_TIMES": {
      const selectedDate = new Date(action.date);
      return fetchAPI(selectedDate);
    }
    default:
      return _state;
  }
}

/**
 * Initialize available times with today's date
 */
function initializeTimes(): string[] {
  return fetchAPI(new Date());
}

/**
 * BookingPage component - contains the booking form and manages state
 */
export default function BookingPage() {
  const navigate = useNavigate();

  // Use reducer for available times state management
  const [availableTimes, dispatchTimes] = useReducer(
    timesReducer,
    null,
    initializeTimes
  );

  // Dispatch function to update times based on selected date
  const handleDispatchTimes = useCallback((date: string) => {
    dispatchTimes({ type: "UPDATE_TIMES", date });
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(
    async (formData: BookingFormData) => {
      const success = await submitAPI(formData);
      if (success) {
        navigate("/booking/confirmed");
      }
    },
    [navigate]
  );

  return (
    <>
      <Header />
      <main className="main">
        <section className="booking-page" aria-labelledby="booking-page-title">
          <div className="booking-container">
            <div className="booking-hero">
              <h1 id="booking-page-title" className="booking-page-title">
                Table Reservations
              </h1>
              <p className="booking-page-description">
                Reserve your table at Little Lemon and enjoy an unforgettable
                Mediterranean dining experience. We recommend booking in advance
                to ensure availability.
              </p>
            </div>
            <BookingForm
              availableTimes={availableTimes}
              dispatchTimes={handleDispatchTimes}
              onSubmit={handleSubmit}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Export reducer and initializer for testing
export { timesReducer, initializeTimes };

