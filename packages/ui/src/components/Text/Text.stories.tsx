import { type Meta, type StoryObj } from '@storybook/react';
import { Text, type TextProps } from './Text';

export default {
  title: 'Design System / Text',
  component: Text,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'p',
  },
} satisfies Meta<TextProps>;

type Story = StoryObj<TextProps>;

export const Default: Story = {} as const;
