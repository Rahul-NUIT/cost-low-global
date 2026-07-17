import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { slideUp, viewport } from '../../utils/motion';

/** Full-bleed image tile with copy laid over a bottom-weighted scrim. */
export default function CategoryCard({ category, image, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={slideUp}
      transition={{ delay }}
    >
      <Link
        to={`/${category.slug}`}
        className="group relative block aspect-[5/4] overflow-hidden sm:aspect-[16/11]"
      >
        <img
          src={image}
          alt={category.imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/5"
        />

        <div className="absolute inset-0 flex flex-col justify-end p-7 text-white sm:p-10">
          <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-accent">
            {category.subCount}
          </p>
          <h3 className="mt-3 text-3xl text-white sm:text-4xl">{category.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/75">
            {category.description}
          </p>

          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 group-hover:gap-3.5">
            {category.cta}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
