import { motion } from 'framer-motion';
import Button from '../ui/Button';
import StatCounter from '../ui/StatCounter';
import heroImage from '../../assets/images/hero.webp';
import { hero, heroStats } from '../../data/site';
import { slideUp, stagger } from '../../utils/motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt={hero.imageAlt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Weighted to the left so the display type keeps contrast over the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20"
      />

      <div className="container-page relative w-full pb-20 pt-36 sm:pb-24 sm:pt-40">
        <motion.div initial="hidden" animate="visible" variants={stagger(0.1)}>
          <motion.p variants={slideUp} className="eyebrow eyebrow-light mb-8">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            variants={slideUp}
            className="max-w-5xl text-display-sm text-white sm:text-display lg:text-display-xl"
          >
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div variants={slideUp} className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Button to={hero.primaryCta.to} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button to={hero.secondaryCta.to} variant="ghost" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/15 pt-10 sm:mt-24 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <StatCounter key={stat.label} {...stat} light />
          ))}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-24 right-6 hidden text-[0.625rem] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl] lg:block"
      >
        Scroll
      </span>
    </section>
  );
}
