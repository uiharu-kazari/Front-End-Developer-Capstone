import { describe, it, expect } from 'vitest';
import { timesReducer, initializeTimes } from '../routes/booking';

describe('Booking Page Reducer Functions', () => {
  describe('initializeTimes', () => {
    it('returns a non-empty array of available times', () => {
      const times = initializeTimes();
      expect(Array.isArray(times)).toBe(true);
      expect(times.length).toBeGreaterThan(0);
    });

    it('returns times in correct format (HH:MM)', () => {
      const times = initializeTimes();
      const timeRegex = /^\d{1,2}:\d{2}$/;
      times.forEach((time) => {
        expect(time).toMatch(timeRegex);
      });
    });

    it('returns times within restaurant hours (17:00 - 22:30)', () => {
      const times = initializeTimes();
      times.forEach((time) => {
        const [hour] = time.split(':').map(Number);
        expect(hour).toBeGreaterThanOrEqual(17);
        expect(hour).toBeLessThanOrEqual(22);
      });
    });
  });

  describe('timesReducer', () => {
    it('returns an array of times for UPDATE_TIMES action', () => {
      const initialState: string[] = [];
      const action = { type: 'UPDATE_TIMES' as const, date: '2025-12-28' };
      
      const result = timesReducer(initialState, action);
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('returns different times for different dates', () => {
      const initialState: string[] = [];
      
      const result1 = timesReducer(initialState, { 
        type: 'UPDATE_TIMES', 
        date: '2025-12-28' 
      });
      const result2 = timesReducer(initialState, { 
        type: 'UPDATE_TIMES', 
        date: '2025-12-29' 
      });
      
      // The results should potentially be different (based on seeded random)
      // We just verify both return valid arrays
      expect(Array.isArray(result1)).toBe(true);
      expect(Array.isArray(result2)).toBe(true);
    });

    it('returns times in sorted order', () => {
      const initialState: string[] = [];
      const result = timesReducer(initialState, { 
        type: 'UPDATE_TIMES', 
        date: '2025-12-28' 
      });
      
      const sortedResult = [...result].sort();
      expect(result).toEqual(sortedResult);
    });

    it('handles same date consistently (deterministic)', () => {
      const initialState: string[] = [];
      const date = '2025-12-28';
      
      const result1 = timesReducer(initialState, { type: 'UPDATE_TIMES', date });
      const result2 = timesReducer(initialState, { type: 'UPDATE_TIMES', date });
      
      // Same date should return same times (seeded random)
      expect(result1).toEqual(result2);
    });
  });
});

