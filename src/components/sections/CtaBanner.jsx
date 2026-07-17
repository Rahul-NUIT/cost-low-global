import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ctaImage from '../../assets/images/hero-poster.webp';
import { ctaBanner } from '../../data/site';
import { useEnquiry } from '../../hooks/useEnquiry';
import { slideUp, stagger, viewport } from '../../utils/motion';

/** Full-bleed photographic closing band. */
export default function CtaBanner() {
  const { open } = useEnquiry();

  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src={ctaImage}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/75" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(0.1)}
        className="container-page relative py-24 sm:py-32 lg:py-40"
      >
        <motion.p variants={slideUp} className="eyebrow eyebrow-light mb-8">
          {ctaBanner.eyebrow}
        </motion.p>

        <motion.h2
          variants={slideUp}
          className="max-w-4xl text-display-sm text-white text-balance sm:text-display lg:text-display-lg"
        >
          {ctaBanner.title}
        </motion.h2>

        <motion.p
          variants={slideUp}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/70"
        >
          {ctaBanner.body}
        </motion.p>

        <motion.div variants={slideUp} className="mt-11 flex flex-col gap-4 sm:flex-row">
          <Button onClick={() => open()} size="lg">
            {ctaBanner.primaryCta.label}
          </Button>
          <Button to={ctaBanner.secondaryCta.to} variant="ghost" size="lg">
            {ctaBanner.secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
