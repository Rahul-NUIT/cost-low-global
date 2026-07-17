import Reveal from './Reveal';
import { cn } from '../../utils/cn';

/**
 * The recurring section header: gold-ruled eyebrow, display-serif title on the
 * left, and optional supporting copy or action sitting to the right on wide
 * screens. Stacks on mobile.
 */
export default function SectionTitle({
  eyebrow,
  title,
  body,
  action,
  light = false,
  className,
  titleClassName,
}) {
  return (
    <div className={cn('mb-12 sm:mb-16', className)}>
      {eyebrow && (
        <Reveal>
          <p className={cn('eyebrow mb-6 sm:mb-8', light && 'eyebrow-light')}>{eyebrow}</p>
        </Reveal>
      )}

      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
        <Reveal delay={0.05} className="lg:col-span-7">
          <h2
            className={cn(
              'text-display-sm sm:text-display text-balance',
              light && 'text-white',
              titleClassName,
            )}
          >
            {title}
          </h2>
        </Reveal>

        {(body || action) && (
          <Reveal delay={0.12} className="lg:col-span-5 lg:pb-2">
            {body && (
              <p
                className={cn(
                  'text-[0.9375rem] leading-relaxed sm:text-base lg:text-right',
                  light ? 'text-white/70' : 'text-body',
                )}
              >
                {body}
              </p>
            )}
            {action && <div className="mt-5 lg:flex lg:justify-end">{action}</div>}
          </Reveal>
        )}
      </div>
    </div>
  );
}
