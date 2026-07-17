import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { getProductImage } from '../../data/products';
import { useEnquiry } from '../../hooks/useEnquiry';
import { slideUp, viewport } from '../../utils/motion';

/**
 * Square image over a serif name — no card chrome, per the design system.
 * The group/origin badges carry the catalogue's provenance data.
 */
export default function ProductCard({ product, delay = 0 }) {
  const { open } = useEnquiry();
  const image = getProductImage(product);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={slideUp}
      transition={{ delay }}
      className="group flex h-full flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-surface">
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
        />

        <span className="absolute left-0 top-0 bg-charcoal/90 px-3 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-white">
          {product.group}
        </span>

        {product.country && (
          <span className="absolute right-0 top-0 bg-white/92 px-3 py-1.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-ink">
            Product of {product.country}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl transition-colors duration-300 group-hover:text-brand sm:text-2xl">
        {product.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-body">{product.description}</p>

      <button
        type="button"
        onClick={() => open(product.name)}
        className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-brand transition-all duration-300 hover:gap-3.5"
      >
        Enquire Now
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        <span className="sr-only">about {product.name}</span>
      </button>
    </motion.article>
  );
}
