import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

/** `items`: [{ label, to? }] — the final entry renders as current page. */
export default function Breadcrumb({ items, light = false, className }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-xs">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {isLast || !item.to ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={light ? 'text-white' : 'text-ink'}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={cn(
                    'transition-colors duration-200',
                    light ? 'text-white/60 hover:text-white' : 'text-muted hover:text-brand',
                  )}
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <ChevronRight
                  aria-hidden="true"
                  className={cn('h-3.5 w-3.5', light ? 'text-white/40' : 'text-muted/60')}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
