import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Building Intelligent/i);
  expect(heading).toBeInTheDocument();
});
