import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type FC, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

const textStyles = cva(['text-base'], {
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
      b: ['font-semibold'],
      i: ['font-italic'],
      u: ['underline'],
      cite: ['font-italic'],
      del: ['line-through'],
      em: ['font-italic'],
      ins: ['underline'],
      kbd: ['font-mono'],
      mark: ['bg-amber-200', 'rounded'],
      s: ['line-through'],
      samp: ['font-mono'],
      sub: ['text-sm'],
      sup: ['text-sm'],
      abbr: ['uppercase'],
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textStyles> {}

export const Text: FC<TextProps> = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant, className, ...props }, ref) => {
    const As = variant ?? 'p';
    return (
      <As
        ref={ref}
        className={cn(textStyles({ variant }), className)}
        {...props}
      />
    );
  },
);

Text.displayName = 'Text';
