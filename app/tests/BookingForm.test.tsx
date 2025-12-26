import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from '../components/BookingForm';

// Mock functions
const mockDispatchTimes = vi.fn();
const mockOnSubmit = vi.fn();

// Default available times for testing
const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

// Helper to render BookingForm with default props
const renderBookingForm = (props = {}) => {
  const defaultProps = {
    availableTimes,
    dispatchTimes: mockDispatchTimes,
    onSubmit: mockOnSubmit,
    ...props,
  };
  return render(<BookingForm {...defaultProps} />);
};

describe('BookingForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Static Content Rendering', () => {
    it('renders the booking form title', () => {
      renderBookingForm();
      const heading = screen.getByRole('heading', { name: /reserve a table/i });
      expect(heading).toBeInTheDocument();
    });

    it('renders the date label', () => {
      renderBookingForm();
      const label = screen.getByText(/choose date/i);
      expect(label).toBeInTheDocument();
    });

    it('renders the time label', () => {
      renderBookingForm();
      const label = screen.getByText(/choose time/i);
      expect(label).toBeInTheDocument();
    });

    it('renders the guests label', () => {
      renderBookingForm();
      const label = screen.getByText(/number of guests/i);
      expect(label).toBeInTheDocument();
    });

    it('renders the occasion label', () => {
      renderBookingForm();
      const label = screen.getByLabelText(/occasion/i);
      expect(label).toBeInTheDocument();
    });

    it('renders the submit button', () => {
      renderBookingForm();
      const button = screen.getByRole('button', { name: /make your reservation/i });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Form Input Fields', () => {
    it('renders a date input field', () => {
      renderBookingForm();
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toBeInTheDocument();
      expect(dateInput).toHaveAttribute('type', 'date');
    });

    it('renders a time select field', () => {
      renderBookingForm();
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toBeInTheDocument();
    });

    it('renders all available time options', () => {
      renderBookingForm();
      availableTimes.forEach((time) => {
        expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
      });
    });

    it('renders a guests number input field', () => {
      renderBookingForm();
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toBeInTheDocument();
      expect(guestsInput).toHaveAttribute('type', 'number');
    });

    it('renders an occasion select field', () => {
      renderBookingForm();
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).toBeInTheDocument();
    });

    it('renders all occasion options', () => {
      renderBookingForm();
      const occasions = ['Birthday', 'Engagement', 'Anniversary', 'Business Meeting', 'Other'];
      occasions.forEach((occasion) => {
        expect(screen.getByRole('option', { name: occasion })).toBeInTheDocument();
      });
    });
  });

  describe('HTML5 Validation Attributes', () => {
    it('date input has min attribute set to today or later', () => {
      renderBookingForm();
      const dateInput = screen.getByLabelText(/choose date/i);
      const today = new Date().toISOString().split('T')[0];
      expect(dateInput).toHaveAttribute('min', today);
    });

    it('date input has required attribute', () => {
      renderBookingForm();
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('required');
    });

    it('time select has required attribute', () => {
      renderBookingForm();
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveAttribute('required');
    });

    it('guests input has min attribute set to 1', () => {
      renderBookingForm();
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('min', '1');
    });

    it('guests input has max attribute set to 10', () => {
      renderBookingForm();
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('max', '10');
    });

    it('guests input has required attribute', () => {
      renderBookingForm();
      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('required');
    });

    it('occasion select has required attribute', () => {
      renderBookingForm();
      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).toHaveAttribute('required');
    });
  });

  describe('Accessibility Attributes', () => {
    it('form has aria-labelledby pointing to title', () => {
      renderBookingForm();
      const form = screen.getByRole('form', { hidden: true }) || 
                   document.querySelector('form');
      expect(form).toHaveAttribute('aria-labelledby', 'booking-form-title');
    });

    it('date input has aria-required attribute', () => {
      renderBookingForm();
      const dateInput = screen.getByLabelText(/choose date/i);
      expect(dateInput).toHaveAttribute('aria-required', 'true');
    });

    it('submit button has aria-label', () => {
      renderBookingForm();
      const button = screen.getByRole('button', { name: /make your reservation/i });
      expect(button).toHaveAttribute('aria-label', 'Make Your Reservation');
    });
  });

  describe('Form State Management', () => {
    it('calls dispatchTimes when date changes', async () => {
      renderBookingForm();
      const dateInput = screen.getByLabelText(/choose date/i);
      
      fireEvent.change(dateInput, { target: { value: '2025-12-31' } });
      
      await waitFor(() => {
        expect(mockDispatchTimes).toHaveBeenCalledWith('2025-12-31');
      });
    });

    it('updates guests value when changed', async () => {
      renderBookingForm();
      const guestsInput = screen.getByLabelText(/number of guests/i) as HTMLInputElement;
      
      fireEvent.change(guestsInput, { target: { value: '5' } });
      
      expect(guestsInput.value).toBe('5');
    });

    it('updates occasion value when changed', async () => {
      renderBookingForm();
      const occasionSelect = screen.getByLabelText(/occasion/i) as HTMLSelectElement;
      
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
      
      expect(occasionSelect.value).toBe('Birthday');
    });
  });

  describe('Form Submission', () => {
    it('submit button is disabled when form is invalid', () => {
      renderBookingForm({ availableTimes: [] });
      const button = screen.getByRole('button', { name: /make your reservation/i });
      expect(button).toBeDisabled();
    });

    it('calls onSubmit with form data when form is valid', async () => {
      renderBookingForm();
      
      const dateInput = screen.getByLabelText(/choose date/i);
      const timeSelect = screen.getByLabelText(/choose time/i);
      const guestsInput = screen.getByLabelText(/number of guests/i);
      const occasionSelect = screen.getByLabelText(/occasion/i);
      
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 7);
      const futureDateStr = futureDate.toISOString().split('T')[0];
      
      fireEvent.change(dateInput, { target: { value: futureDateStr } });
      fireEvent.change(timeSelect, { target: { value: '18:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
      
      const button = screen.getByRole('button', { name: /make your reservation/i });
      fireEvent.click(button);
      
      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith({
          date: futureDateStr,
          time: '18:00',
          guests: 4,
          occasion: 'Birthday',
        });
      });
    });

    it('does not call onSubmit when form is invalid', async () => {
      renderBookingForm({ availableTimes: [] });
      
      const button = screen.getByRole('button', { name: /make your reservation/i });
      fireEvent.click(button);
      
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  describe('Validation Error Messages', () => {
    it('shows error when date is in the past', async () => {
      renderBookingForm();
      
      const dateInput = screen.getByLabelText(/choose date/i);
      fireEvent.change(dateInput, { target: { value: '2020-01-01' } });
      fireEvent.blur(dateInput);
      
      await waitFor(() => {
        expect(screen.getByText(/date cannot be in the past/i)).toBeInTheDocument();
      });
    });

    it('shows error when guests is less than 1', async () => {
      renderBookingForm();
      
      const guestsInput = screen.getByLabelText(/number of guests/i);
      fireEvent.change(guestsInput, { target: { value: '0' } });
      fireEvent.blur(guestsInput);
      
      await waitFor(() => {
        expect(screen.getByText(/at least 1 guest is required/i)).toBeInTheDocument();
      });
    });

    it('shows error when guests is more than 10', async () => {
      renderBookingForm();
      
      const guestsInput = screen.getByLabelText(/number of guests/i);
      fireEvent.change(guestsInput, { target: { value: '15' } });
      fireEvent.blur(guestsInput);
      
      await waitFor(() => {
        expect(screen.getByText(/maximum 10 guests/i)).toBeInTheDocument();
      });
    });

    it('shows error when occasion is not selected after blur', async () => {
      renderBookingForm();
      
      const occasionSelect = screen.getByLabelText(/occasion/i);
      fireEvent.focus(occasionSelect);
      fireEvent.blur(occasionSelect);
      
      await waitFor(() => {
        expect(screen.getByText(/please select an occasion/i)).toBeInTheDocument();
      });
    });
  });
});

