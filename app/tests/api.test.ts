import { describe, it, expect, vi } from 'vitest';
import { fetchAPI, submitAPI } from '../utils/api';

describe('API Utility Functions', () => {
  describe('fetchAPI', () => {
    it('returns an array of available times', () => {
      const date = new Date('2025-12-28');
      const result = fetchAPI(date);
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });

    it('returns times in HH:MM format', () => {
      const date = new Date('2025-12-28');
      const result = fetchAPI(date);
      const timeRegex = /^\d{1,2}:\d{2}$/;
      
      result.forEach((time) => {
        expect(time).toMatch(timeRegex);
      });
    });

    it('returns times within operating hours', () => {
      const date = new Date('2025-12-28');
      const result = fetchAPI(date);
      
      result.forEach((time) => {
        const [hour] = time.split(':').map(Number);
        expect(hour).toBeGreaterThanOrEqual(17);
        expect(hour).toBeLessThanOrEqual(22);
      });
    });

    it('returns consistent results for the same date', () => {
      const date1 = new Date('2025-12-28');
      const date2 = new Date('2025-12-28');
      
      const result1 = fetchAPI(date1);
      const result2 = fetchAPI(date2);
      
      expect(result1).toEqual(result2);
    });

    it('may return different results for different dates', () => {
      const date1 = new Date('2025-12-28');
      const date2 = new Date('2025-12-15');
      
      const result1 = fetchAPI(date1);
      const result2 = fetchAPI(date2);
      
      // Both should be valid arrays
      expect(Array.isArray(result1)).toBe(true);
      expect(Array.isArray(result2)).toBe(true);
    });

    it('returns sorted times', () => {
      const date = new Date('2025-12-28');
      const result = fetchAPI(date);
      const sortedResult = [...result].sort();
      
      expect(result).toEqual(sortedResult);
    });
  });

  describe('submitAPI', () => {
    it('returns a promise', () => {
      const formData = {
        date: '2025-12-28',
        time: '18:00',
        guests: 4,
        occasion: 'Birthday',
      };
      
      const result = submitAPI(formData);
      expect(result).toBeInstanceOf(Promise);
    });

    it('resolves to true on successful submission', async () => {
      const formData = {
        date: '2025-12-28',
        time: '18:00',
        guests: 4,
        occasion: 'Birthday',
      };
      
      const result = await submitAPI(formData);
      expect(result).toBe(true);
    });

    it('logs the form data to console', async () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const formData = {
        date: '2025-12-28',
        time: '18:00',
        guests: 4,
        occasion: 'Birthday',
      };
      
      await submitAPI(formData);
      
      expect(consoleSpy).toHaveBeenCalledWith('Booking submitted:', formData);
      consoleSpy.mockRestore();
    });

    it('handles different form data', async () => {
      const formData1 = {
        date: '2025-12-28',
        time: '18:00',
        guests: 2,
        occasion: 'Anniversary',
      };
      
      const formData2 = {
        date: '2025-12-31',
        time: '20:00',
        guests: 8,
        occasion: 'Engagement',
      };
      
      const result1 = await submitAPI(formData1);
      const result2 = await submitAPI(formData2);
      
      expect(result1).toBe(true);
      expect(result2).toBe(true);
    });
  });
});

