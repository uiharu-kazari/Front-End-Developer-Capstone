import { useState, useEffect } from "react";

/**
 * BookingForm component for table reservations
 * Uses controlled inputs with HTML5 and React validation
 */

export interface BookingFormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

interface BookingFormProps {
  availableTimes: string[];
  dispatchTimes: (date: string) => void;
  onSubmit: (formData: BookingFormData) => void;
}

export default function BookingForm({
  availableTimes,
  dispatchTimes,
  onSubmit,
}: BookingFormProps) {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Form state
  const [date, setDate] = useState(today);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");

  // Validation state
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  // Update available times when date changes
  useEffect(() => {
    if (date) {
      dispatchTimes(date);
    }
  }, [date, dispatchTimes]);

  // Set default time when available times change
  useEffect(() => {
    if (availableTimes.length > 0 && !time) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes, time]);

  // Validation functions
  const isDateValid = () => date >= today;
  const isTimeValid = () => time !== "" && availableTimes.includes(time);
  const isGuestsValid = () => guests >= 1 && guests <= 10;
  const isOccasionValid = () => occasion !== "";

  const isFormValid = () =>
    isDateValid() && isTimeValid() && isGuestsValid() && isOccasionValid();

  // Error messages
  const getDateError = () => {
    if (!touched.date) return null;
    if (!date) return "Please select a date";
    if (!isDateValid()) return "Date cannot be in the past";
    return null;
  };

  const getTimeError = () => {
    if (!touched.time) return null;
    if (!time) return "Please select a time";
    if (!isTimeValid()) return "Please select an available time";
    return null;
  };

  const getGuestsError = () => {
    if (!touched.guests) return null;
    if (guests < 1) return "At least 1 guest is required";
    if (guests > 10) return "Maximum 10 guests per reservation";
    return null;
  };

  const getOccasionError = () => {
    if (!touched.occasion) return null;
    if (!occasion) return "Please select an occasion";
    return null;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      date: true,
      time: true,
      guests: true,
      occasion: true,
    });

    if (!isFormValid()) {
      return;
    }

    onSubmit({
      date,
      time,
      guests,
      occasion,
    });
  };

  // Handle field blur
  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      aria-labelledby="booking-form-title"
      noValidate
    >
      <h2 id="booking-form-title" className="booking-form-title">
        Reserve a Table
      </h2>

      {/* Date Field */}
      <div className="form-group">
        <label htmlFor="res-date" className="form-label">
          Choose Date <span aria-hidden="true">*</span>
        </label>
        <input
          type="date"
          id="res-date"
          name="date"
          className={`form-input ${getDateError() ? "form-input--error" : ""}`}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          onBlur={() => handleBlur("date")}
          min={today}
          required
          aria-required="true"
          aria-invalid={!!getDateError()}
          aria-describedby={getDateError() ? "date-error" : undefined}
        />
        {getDateError() && (
          <span id="date-error" className="form-error" role="alert">
            {getDateError()}
          </span>
        )}
      </div>

      {/* Time Field */}
      <div className="form-group">
        <label htmlFor="res-time" className="form-label">
          Choose Time <span aria-hidden="true">*</span>
        </label>
        <select
          id="res-time"
          name="time"
          className={`form-input ${getTimeError() ? "form-input--error" : ""}`}
          value={time}
          onChange={(e) => setTime(e.target.value)}
          onBlur={() => handleBlur("time")}
          required
          aria-required="true"
          aria-invalid={!!getTimeError()}
          aria-describedby={getTimeError() ? "time-error" : undefined}
        >
          <option value="" disabled>
            Select a time
          </option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
        {getTimeError() && (
          <span id="time-error" className="form-error" role="alert">
            {getTimeError()}
          </span>
        )}
      </div>

      {/* Number of Guests Field */}
      <div className="form-group">
        <label htmlFor="guests" className="form-label">
          Number of Guests <span aria-hidden="true">*</span>
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          className={`form-input ${getGuestsError() ? "form-input--error" : ""}`}
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
          onBlur={() => handleBlur("guests")}
          min={1}
          max={10}
          required
          aria-required="true"
          aria-invalid={!!getGuestsError()}
          aria-describedby={getGuestsError() ? "guests-error" : "guests-hint"}
        />
        <span id="guests-hint" className="form-hint">
          Between 1 and 10 guests
        </span>
        {getGuestsError() && (
          <span id="guests-error" className="form-error" role="alert">
            {getGuestsError()}
          </span>
        )}
      </div>

      {/* Occasion Field */}
      <div className="form-group">
        <label htmlFor="occasion" className="form-label">
          Occasion <span aria-hidden="true">*</span>
        </label>
        <select
          id="occasion"
          name="occasion"
          className={`form-input ${getOccasionError() ? "form-input--error" : ""}`}
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          onBlur={() => handleBlur("occasion")}
          required
          aria-required="true"
          aria-invalid={!!getOccasionError()}
          aria-describedby={getOccasionError() ? "occasion-error" : undefined}
        >
          <option value="" disabled>
            Select an occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Business">Business Meeting</option>
          <option value="Other">Other</option>
        </select>
        {getOccasionError() && (
          <span id="occasion-error" className="form-error" role="alert">
            {getOccasionError()}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-primary btn-submit"
        disabled={!isFormValid()}
        aria-disabled={!isFormValid()}
        aria-label="Make Your Reservation"
      >
        Make Your Reservation
      </button>
    </form>
  );
}

