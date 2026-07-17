import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const VARIANTS = {
  primary: 'bg-brand text-white border border-brand hover:bg-brand-dark hover:border-brand-dark',
  outline: 'bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink hover:text-white',
  // For dark photographic backgrounds.
  ghost: 'bg-transparent text-white border border-white/40 hover:bg-white hover:text-ink hover:border-white',
  light: 'bg-white text-brand border border-white hover:bg-transparent hover:text-white',
};

const SIZES = {
  sm: 'px-5 py-2.5 text-[0.8125rem]',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-[0.9375rem]',
};

/**
 * Renders a Link when `to` is set, an anchor when `href` is set, else a button.
 * `withArrow` appends the ↗ mark used across the design system.
 */
const Button = forwardRef(function Button(
  {
    variant = 'primary',
    size = 'md',
    withArrow = true,
    to,
    href,
    className,
    children,
    type = 'button',
    ...props
  },
  ref,
) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2.5 font-medium tracking-wide',
    'transition-all duration-300 disabled:opacity-60 disabled:pointer-events-none',
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} className={classes} {...props}>
      {content}
    </button>
  );
});

export default Button;
