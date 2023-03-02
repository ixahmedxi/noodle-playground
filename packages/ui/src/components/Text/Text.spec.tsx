import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text component', () => {
  it('should render children', () => {
    render(<Text>Hello World</Text>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(
      <Text variant="h1" className="text-blue-500">
        Hello World
      </Text>,
    );

    expect(screen.getByText(/hello world/i)).toHaveClass('text-blue-500');
    expect(screen.getByText(/hello world/i)).toHaveClass('text-4xl');
  });

  it('should render h1 variant', () => {
    render(<Text variant="h1">Hello World</Text>);

    const element = screen.getByText(/hello world/i, { selector: 'h1' });

    expect(element).toBeInTheDocument();
  });

  it('should render h2 variant', () => {
    render(<Text variant="h2">Hello World</Text>);

    const element = screen.getByText(/hello world/i, { selector: 'h2' });

    expect(element).toBeInTheDocument();
  });

  it('should render h3 variant', () => {
    render(<Text variant="h3">Hello World</Text>);

    const element = screen.getByText(/hello world/i, { selector: 'h3' });

    expect(element).toBeInTheDocument();
  });

  it('should render h4 variant', () => {
    render(<Text variant="h4">Hello World</Text>);

    const element = screen.getByText(/hello world/i, { selector: 'h4' });

    expect(element).toBeInTheDocument();
  });

  it('should render h5 variant', () => {
    render(<Text variant="h5">Hello World</Text>);

    const element = screen.getByText(/hello world/i, { selector: 'h5' });

    expect(element).toBeInTheDocument();
  });

  it('should render h6 variant', () => {
    render(<Text variant="h6">Hello World</Text>);

    const element = screen.getByText(/hello world/i, { selector: 'h6' });

    expect(element).toBeInTheDocument();
  });

  it('should render p variant', () => {
    render(<Text variant="p">Hello World</Text>);

    const element = screen.getByText(/hello world/i, { selector: 'p' });

    expect(element).toBeInTheDocument();
  });
});
