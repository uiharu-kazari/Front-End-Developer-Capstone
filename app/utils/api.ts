import type { BookingFormData } from "../components/BookingForm";

/**
 * API utility functions for booking system
 * These simulate API calls - in production, replace with actual API endpoints
 */

// Seeded random number generator for consistent results
const seededRandom = (seed: number): number => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => {
    s = (s * a) % m;
    return s / m;
  };
};

/**
 * Fetches available booking times for a given date
 * @param date - Date object for the reservation date
 * @returns Array of available time slots
 */
export const fetchAPI = (date: Date): string[] => {
  const result: string[] = [];
  const random = seededRandom(date.getDate());

  // Generate random available times between 17:00 and 22:00
  for (let i = 17; i <= 22; i++) {
    if (random() < 0.5) {
      result.push(`${i}:00`);
    }
    if (random() < 0.5) {
      result.push(`${i}:30`);
    }
  }

  // Ensure at least some times are available
  if (result.length === 0) {
    result.push("18:00", "19:00", "20:00");
  }

  return result.sort();
};

/**
 * Submits booking form data to the API
 * @param formData - Booking form data
 * @returns Promise resolving to true if submission successful
 */
export const submitAPI = (formData: BookingFormData): Promise<boolean> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // In a real app, this would make an actual API call
      console.log("Booking submitted:", formData);
      resolve(true);
    }, 500);
  });
};

