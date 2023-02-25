import { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

export default {
  title: 'Design System / Typography',
  component: Typography,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {};
