import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography component', () => {
  it('should render children', () => {
    render(<Typography>Hello World</Typography>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(
      <Typography variant="h1" className="text-blue-500">
        Hello World
      </Typography>,
    );

    expect(screen.getByText(/hello world/i)).toHaveClass('text-blue-500');
    expect(screen.getByText(/hello world/i)).toHaveClass('text-4xl');
  });

  it('should render h1 variant', () => {
    render(<Typography variant="h1">Hello World</Typography>);

    const element = screen.getByText(/hello world/i, { selector: 'h1' });

    expect(element).toBeInTheDocument();
  });

  it('should render h2 variant', () => {
    render(<Typography variant="h2">Hello World</Typography>);

    const element = screen.getByText(/hello world/i, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render h3 variant', () => {
    render(<Typography variant="h3">Hello World</Typography>);

    const element = screen.getByText(/hello world/i, { selector: 'h3' });

    expect(element).toBeInTheDocument();
  });

  it('should render h4 variant', () => {
    render(<Typography variant="h4">Hello World</Typography>);

    const element = screen.getByText(/hello world/i, { selector: 'h4' });

    expect(element).toBeInTheDocument();
  });

  it('should render h5 variant', () => {
    render(<Typography variant="h5">Hello World</Typography>);

    const element = screen.getByText(/hello world/i, { selector: 'h5' });

    expect(element).toBeInTheDocument();
  });

  it('should render h6 variant', () => {
    render(<Typography variant="h6">Hello World</Typography>);

    const element = screen.getByText(/hello world/i, { selector: 'h6' });

    expect(element).toBeInTheDocument();
  });

  it('should render p variant', () => {
    render(<Typography variant="p">Hello World</Typography>);

    const element = screen.getByText(/hello world/i, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
