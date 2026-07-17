import { useCountUp } from '../../hooks/useCountUp';
import { cn } from '../../utils/cn';

/**
 * Display-serif figure that counts up when scrolled into view, over a
 * letterspaced label.
 */
export default function StatCounter({ value, suffix = '', label, light = false, className }) {
  const [ref, current] = useCountUp(value);

  return (
    <div ref={ref} className={cn('text-center sm:text-left', className)}>
      <p
        className={cn(
          'font-display text-4xl leading-none sm:text-5xl lg:text-6xl',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {current}
        <span className={light ? 'text-accent' : 'text-brand'}>{suffix}</span>
      </p>
      <p
        className={cn(
          'mt-3 text-[0.6875rem] font-medium uppercase tracking-[0.2em]',
          light ? 'text-white/60' : 'text-muted',
        )}
      >
        {label}
      </p>
    </div>
  );
}
