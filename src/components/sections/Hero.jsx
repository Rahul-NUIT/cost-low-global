import { motion, useReducedMotion } from 'framer-motion';
import Button from '../ui/Button';
import StatCounter from '../ui/StatCounter';
import heroImage from '../../assets/images/hero.webp';
import { hero, heroStats } from '../../data/site';
import { slideUp, stagger } from '../../utils/motion';

// Lives in public/ rather than assets/ so it streams as a static file instead of
// being fingerprinted into the bundle. BASE_URL keeps it correct at any deploy path.
const HERO_VIDEO = `${import.meta.env.BASE_URL}videos/hero-video.mp4`;

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      {/* The poster shows immediately and stays put behind the video, so there is
          never a black frame while the first bytes arrive — and it is the whole
          background when the OS asks for reduced motion. */}
      <img
        src={heroImage}
        alt={hero.imageAlt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!reduceMotion && (
        <video
          key="hero-video"
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO}
          poster={heroImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}
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
