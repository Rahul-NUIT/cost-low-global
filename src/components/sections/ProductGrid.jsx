import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Section from '../ui/Section';
import ProductCard from '../ui/ProductCard';
import Reveal from '../ui/Reveal';
import { groupsFor } from '../../data/products';
import { cn } from '../../utils/cn';

/**
 * Filterable catalogue grid. Filtering is client-side over a fixed list, so it
 * stays in component state rather than the URL.
 */
export default function ProductGrid({ products, intro }) {
  const [active, setActive] = useState('All');
  const groups = useMemo(() => groupsFor(products), [products]);

  const visible = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.group === active)),
    [products, active],
  );

  return (
    <Section>
      {intro && (
        <div className="mb-14 grid gap-6 border-b border-line pb-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-display-sm text-balance">{intro.title}</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="text-[0.9375rem] leading-relaxed text-body sm:text-base">{intro.body}</p>
          </Reveal>
        </div>
      )}

      <Reveal className="mb-12">
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-3">
          {groups.map((group) => {
            const isActive = group === active;
            return (
              <button
                key={group}
                type="button"
                onClick={() => setActive(group)}
                aria-pressed={isActive}
                className={cn(
                  'border px-5 py-2.5 text-[0.8125rem] font-medium tracking-wide transition-all duration-300',
                  isActive
                    ? 'border-brand bg-brand text-white'
                    : 'border-line text-body hover:border-ink hover:text-ink',
                )}
              >
                {group}
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
        <AnimatePresence mode="popLayout">
          {visible.map((product) => (
            <motion.div key={product.id} layout exit={{ opacity: 0, scale: 0.96 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p aria-live="polite" className="sr-only">
        Showing {visible.length} products in {active}.
      </p>
    </Section>
  );
}
