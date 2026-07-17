import { cn } from '../../utils/cn';

const SIZES = { sm: 'h-4 w-4', md: 'h-6 w-6', lg: 'h-9 w-9' };

export default function Spinner({ size = 'md', className, label = 'Loading' }) {
  return (
    <span
      role="status"
      aria-live="polite"
      className={cn('inline-flex items-center justify-center', className)}
    >
      <span
        className={cn(
          'animate-spin rounded-full border-2 border-current border-t-transparent',
          SIZES[size],
        )}
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}

/** Full-viewport fallback for lazily loaded routes. */
export function PageLoader() {
  return (
    <div className="grid min-h-[70vh] place-items-center text-brand">
      <Spinner size="lg" label="Loading page" />
    </div>
  );
}
