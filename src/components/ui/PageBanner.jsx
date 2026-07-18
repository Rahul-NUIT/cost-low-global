import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Breadcrumb from './Breadcrumb';
import { fadeIn, slideUp } from '../../utils/motion';
import { cn } from '../../utils/cn';

/**
 * Inner-page masthead. With `image` it renders as a dark photographic band that
 * parallaxes on scroll; without, as a light editorial header. Sits under the
 * fixed header, so the top padding clears it.
 *
 * The home page uses `sections/Hero` instead and is deliberately not parallaxed.
 */
export default function PageBanner({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = '',
  breadcrumb,
  parallax = true,
}) {
  const hasImage = Boolean(image);
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const enabled = hasImage && parallax && !reduceMotion;

  // Track this section from the moment its top hits the viewport top until it
  // has fully scrolled past.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // The plate is 130% tall and starts pulled up by the overflow, so it can drift
  // down 30% without ever exposing an edge.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44 lg:pb-24 lg:pt-52',
        hasImage ? 'bg-charcoal' : 'border-b border-line bg-surface',
      )}
    >
      {hasImage && (
        <>
          <motion.div
            style={enabled ? { y, scale } : undefined}
            className="absolute inset-x-0 top-[-15%] h-[130%] will-change-transform"
          >
            <img
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div aria-hidden="true" className="absolute inset-0 bg-ink/70" />
        </>
      )}

      <div className="container-page relative">
        {breadcrumb && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
            <Breadcrumb items={breadcrumb} light={hasImage} />
          </motion.div>
        )}

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={cn('eyebrow mb-6', hasImage && 'eyebrow-light')}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className={cn(
            'max-w-4xl text-display-sm text-balance sm:text-display lg:text-display-lg',
            hasImage && 'text-white',
          )}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideUp}
            transition={{ delay: 0.1 }}
            className={cn(
              'mt-7 max-w-3xl text-[0.9375rem] leading-relaxed sm:text-base',
              hasImage ? 'text-white/70' : 'text-body',
            )}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
