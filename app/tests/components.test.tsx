import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import ConfirmedBooking from '../components/ConfirmedBooking';

// Wrapper for components that use react-router
const RouterWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

// Mock react-router for components using hooks
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useLocation: () => ({ pathname: '/' }),
    Link: ({ to, children, ...props }: any) => (
      <a href={to} {...props}>{children}</a>
    ),
  };
});

describe('Header Component', () => {
  it('renders the logo', () => {
    render(<Header />, { wrapper: RouterWrapper });
    const logo = screen.getByAltText(/little lemon restaurant logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />, { wrapper: RouterWrapper });
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  });

  it('has semantic header element', () => {
    const { container } = render(<Header />, { wrapper: RouterWrapper });
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });
});

describe('Footer Component', () => {
  it('renders the footer logo', () => {
    render(<Footer />, { wrapper: RouterWrapper });
    const logo = screen.getByAltText(/little lemon restaurant/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation section', () => {
    render(<Footer />, { wrapper: RouterWrapper });
    const nav = screen.getByRole('navigation', { name: /footer navigation/i });
    expect(nav).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />, { wrapper: RouterWrapper });
    expect(screen.getByText(/123 lemon street/i)).toBeInTheDocument();
    expect(screen.getByText(/chicago/i)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />, { wrapper: RouterWrapper });
    expect(screen.getByText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByText(/twitter/i)).toBeInTheDocument();
  });

  it('has semantic footer element', () => {
    const { container } = render(<Footer />, { wrapper: RouterWrapper });
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});

describe('CallToAction Component', () => {
  it('renders the restaurant name', () => {
    render(<CallToAction />, { wrapper: RouterWrapper });
    const heading = screen.getByRole('heading', { name: /little lemon/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the location', () => {
    render(<CallToAction />, { wrapper: RouterWrapper });
    expect(screen.getByText(/chicago/i)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<CallToAction />, { wrapper: RouterWrapper });
    expect(screen.getByText(/mediterranean restaurant/i)).toBeInTheDocument();
  });

  it('renders the reservation button', () => {
    render(<CallToAction />, { wrapper: RouterWrapper });
    const button = screen.getByRole('link', { name: /reserve a table/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/booking');
  });

  it('has semantic section element with aria-labelledby', () => {
    const { container } = render(<CallToAction />, { wrapper: RouterWrapper });
    const section = container.querySelector('section[aria-labelledby]');
    expect(section).toBeInTheDocument();
  });
});

describe('Specials Component', () => {
  it('renders the specials title', () => {
    render(<Specials />, { wrapper: RouterWrapper });
    const heading = screen.getByRole('heading', { name: /this week's specials/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders special items', () => {
    render(<Specials />, { wrapper: RouterWrapper });
    expect(screen.getByRole('heading', { name: /greek salad/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /bruschetta/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /lemon dessert/i })).toBeInTheDocument();
  });

  it('renders prices for special items', () => {
    render(<Specials />, { wrapper: RouterWrapper });
    expect(screen.getByText(/\$12\.99/)).toBeInTheDocument();
    expect(screen.getByText(/\$5\.99/)).toBeInTheDocument();
    expect(screen.getByText(/\$5\.00/)).toBeInTheDocument();
  });

  it('renders online menu button', () => {
    render(<Specials />, { wrapper: RouterWrapper });
    const button = screen.getByRole('link', { name: /online menu/i });
    expect(button).toBeInTheDocument();
  });
});

describe('Testimonials Component', () => {
  it('renders the testimonials title', () => {
    render(<Testimonials />);
    const heading = screen.getByRole('heading', { name: /what our customers say/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders customer testimonials', () => {
    render(<Testimonials />);
    expect(screen.getByText(/sarah m\./i)).toBeInTheDocument();
    expect(screen.getByText(/james l\./i)).toBeInTheDocument();
  });

  it('renders star ratings', () => {
    render(<Testimonials />);
    const ratings = screen.getAllByLabelText(/rating:/i);
    expect(ratings.length).toBeGreaterThan(0);
  });

  it('has semantic section element', () => {
    const { container } = render(<Testimonials />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });
});

describe('About Component', () => {
  it('renders the about title', () => {
    render(<About />);
    const heading = screen.getByRole('heading', { name: /little lemon/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the location subtitle', () => {
    render(<About />);
    expect(screen.getByText(/chicago/i)).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<About />);
    expect(screen.getByText(/neighborhood bistro/i)).toBeInTheDocument();
  });

  it('renders founder images', () => {
    render(<About />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(2);
  });
});

describe('ConfirmedBooking Component', () => {
  it('renders the confirmation title', () => {
    render(<ConfirmedBooking />, { wrapper: RouterWrapper });
    const heading = screen.getByRole('heading', { name: /booking confirmed/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the confirmation message', () => {
    render(<ConfirmedBooking />, { wrapper: RouterWrapper });
    expect(screen.getByText(/thank you for your reservation/i)).toBeInTheDocument();
  });

  it('renders return to home link', () => {
    render(<ConfirmedBooking />, { wrapper: RouterWrapper });
    const link = screen.getByRole('link', { name: /return to home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders view menu link', () => {
    render(<ConfirmedBooking />, { wrapper: RouterWrapper });
    const link = screen.getByRole('link', { name: /view our menu/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/menu');
  });
});

