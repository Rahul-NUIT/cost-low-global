import { useId } from 'react';
import { cn } from '../../utils/cn';

/**
 * Label + control + error, wired for a11y: the control points at its error via
 * aria-describedby and flags aria-invalid, so screen readers announce it.
 * Renders input, textarea or select from `as`.
 */
export default function Field({
  label,
  name,
  as = 'input',
  error,
  touched,
  required = false,
  className,
  children,
  light = false,
  ...props
}) {
  const id = useId();
  const errorId = `${id}-error`;
  const showError = Boolean(touched && error);

  const controlClasses = cn(
    'w-full border bg-transparent px-4 py-3 text-sm transition-colors duration-200',
    'placeholder:text-muted focus:outline-none',
    light
      ? 'border-white/25 text-white focus:border-accent'
      : 'border-line text-ink focus:border-brand',
    showError && 'border-danger focus:border-danger',
    as === 'textarea' && 'min-h-36 resize-y',
    className,
  );

  const Control = as;

  return (
    <div>
      <label
        htmlFor={id}
        className={cn(
          'mb-2.5 block text-[0.6875rem] font-medium uppercase tracking-[0.16em]',
          light ? 'text-white/70' : 'text-muted',
        )}
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-brand">
            *
          </span>
        )}
      </label>

      <Control
        id={id}
        name={name}
        aria-invalid={showError || undefined}
        aria-describedby={showError ? errorId : undefined}
        className={controlClasses}
        {...props}
      >
        {children}
      </Control>

      {showError && (
        <p id={errorId} role="alert" className="mt-2 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
