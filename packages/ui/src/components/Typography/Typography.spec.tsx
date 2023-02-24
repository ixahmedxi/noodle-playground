import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Typography } from '.';

describe('Typography component', () => {
  it('should render', () => {
    render(<Typography />);

    expect(
      screen.getByText("Hello, I'm from the ui package"),
    ).toBeInTheDocument();
  });
});
