import Home from '@/pages';
import { render, screen } from '@testing-library/react';

describe('home page', () => {
  it('should render title', () => {
    render(<Home />);

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });
});
