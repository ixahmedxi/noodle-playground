import { render, screen } from '@testing-library/react';
import { Text, type TextProps } from './Text';

const allVariants = [
  'h1',
  'h2',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'b',
  'i',
  'u',
  'cite',
  'del',
  'em',
  'ins',
  'kbd',
  'mark',
  's',
  'samp',
  'sub',
  'sup',
  'abbr',
];

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

  it.each(allVariants)('should render %s variant', (variant) => {
    render(<Text variant={variant as TextProps['variant']}> Hello world</Text>);

    expect(
      screen.getByText(/hello world/i, { selector: variant }),
    ).toBeInTheDocument();
  });
});
