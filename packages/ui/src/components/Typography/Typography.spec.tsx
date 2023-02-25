import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Typography } from './Typography';

describe('Typography component', () => {
  it('should render', () => {
    render(<Typography>Hello World</Typography>);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
