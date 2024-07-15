import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cnBase, tv } from 'tailwind-variants';

import { Spinner } from '../spinner';

const buttonVariants = tv({
  base: `
  inline-flex items-center whitespace-nowrap justify-center rounded-md
  text-sm font-medium transition-colors focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-amber-500
  disabled:pointer-events-none disabled:opacity-50`,
  variants: {
    variant: {
      default: 'bg-blue-600 text-white shadow hover:bg-blue-600/80',
      destructive: 'shadow-sm bg-red-600 text-white hover:bg-red-600/80',
      outline:
        'border border-blue-400 bg-blue-400/10 shadow-sm hover:bg-blue-400/50',
      secondary: 'bg-purple-600 text-white shadow-sm hover:bg-purple-600/80',
      ghost: 'hover:bg-blue-600/20 ',
      link: 'text-blue-600 underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 rounded-md px-3 text-xs',
      lg: 'h-10 rounded-md px-8',
      icon: 'size-9',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    icon?: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      isLoading,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cnBase(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {isLoading && <Spinner size="sm" className="text-white" />}
        {!isLoading && icon && <span className="mr-2">{icon}</span>}
        <span className="mx-2">{children}</span>
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
