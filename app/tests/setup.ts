import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock the react-router module
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
    useLocation: () => ({ pathname: '/' }),
  };
});

