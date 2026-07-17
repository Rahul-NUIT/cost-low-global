import { motion } from 'framer-motion';
import { slideUp, viewport } from '../../utils/motion';

/**
 * Editorial process list: oversized gold numeral, serif title, supporting copy,
 * separated by hairline rules.
 */
export default function Timeline({ steps }) {
  return (
    <ol className="border-t border-line">
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideUp}
          transition={{ delay: index * 0.06 }}
          className="group grid gap-4 border-b border-line py-10 sm:py-14 lg:grid-cols-12 lg:items-baseline lg:gap-8"
        >
          <span
            aria-hidden="true"
            className="font-display text-5xl leading-none text-accent-deep transition-colors duration-300 group-hover:text-brand sm:text-6xl lg:col-span-3 lg:text-7xl"
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <h3 className="text-3xl sm:text-4xl lg:col-span-4">{step.title}</h3>

          <p className="text-[0.9375rem] leading-relaxed text-body lg:col-span-5">
            {step.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
