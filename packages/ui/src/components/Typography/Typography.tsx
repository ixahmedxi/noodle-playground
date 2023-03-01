import { cva, type VariantProps } from 'class-variance-authority';
import { type FC, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const typographyStyles = cva(['text-base'], {
  variants: {
    variant: {
      h1: [
        'text-4xl',
        'lg:text-5xl',
        'font-extrabold',
        'tracking-tight',
        'scroll-m-20',
      ],
      h2: [
        'text-3xl',
        'font-semibold',
        'tracking-tight',
        'scroll-m-20',
        'border-b',
        'border-b-zinc-200',
        'dark:border-b-zinc-700',
        'pb-3',
        'transition-colors',
      ],
      h3: ['text-2xl', 'scroll-m-20', 'font-semibold', 'tracking-tight'],
      h4: ['scroll-m-20', 'text-xl', 'font-semibold', 'tracking-tight'],
      h5: ['scroll-m-20', 'text-lg', 'font-semibold', 'tracking-tight'],
      h6: [
        'scroll-m-20',
        'text-base',
        'font-semibold',
        'tracking-tight',
        'text-zinc-500',
        'dark:text-zinc-400',
      ],
      p: ['leading-7'],
    },
  },
});

type TypographyProps = {
  variant?: NonNullable<VariantProps<typeof typographyStyles>['variant']>;
  children: ReactNode;
  className?: string;
};

export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'p',
  className = '',
}) => {
  const As = variant;
  return (
    <As className={twMerge(typographyStyles({ variant }), className)}>
      {children}
    </As>
  );
};
