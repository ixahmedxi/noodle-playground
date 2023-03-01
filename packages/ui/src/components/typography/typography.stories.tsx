import { type Meta, type StoryObj } from '@storybook/react';
import { Typography } from './Typography';

export default {
  title: 'Design System / Typography',
  component: Typography,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'p',
  },
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis venenatis urna, nec porttitor urna. Quisque tincidunt vehicula ex, ut auctor ipsum venenatis a. Pellentesque pellentesque nisi vel vestibulum elementum. Quisque ipsum purus, finibus vitae finibus a, rutrum a risus. Nulla vel mi sed dolor congue porttitor. Morbi ullamcorper tortor erat, id ullamcorper ligula molestie ac. Mauris aliquet magna eu suscipit porta. Vivamus sollicitudin dolor quis risus vehicula, ut ullamcorper lectus malesuada. Nam pretium, tellus in scelerisque lacinia, nisl lorem iaculis sapien, sit amet maximus urna turpis sed augue. Maecenas ut convallis velit, eget finibus orci. Etiam sit amet orci porta, feugiat augue vitae, lobortis eros. Morbi risus nisl, vulputate vel arcu ut, interdum accumsan est. Sed iaculis lacinia efficitur. Duis ut hendrerit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
} as const;

export const Heading1: Story = {
  args: {
    variant: 'h1',
  },
} as const;

export const Heading2: Story = {
  args: {
    variant: 'h2',
  },
} as const;

export const Heading3: Story = {
  args: {
    variant: 'h3',
  },
} as const;

export const Heading4: Story = {
  args: {
    variant: 'h4',
  },
} as const;

export const Heading5: Story = {
  args: {
    variant: 'h5',
  },
} as const;

export const Heading6: Story = {
  args: {
    variant: 'h6',
  },
} as const;
