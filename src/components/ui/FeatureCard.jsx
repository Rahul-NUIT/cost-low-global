import { motion } from 'framer-motion';
import { slideUp, viewport } from '../../utils/motion';
import { getIcon } from '../../utils/icons';
import { cn } from '../../utils/cn';

/**
 * Hairline-bordered panel with an outlined brand icon. On hover the border
 * turns brand-red and a left accent bar wipes in from the top.
 */
export default function FeatureCard({ icon, title, description, delay = 0, className }) {
  const Icon = getIcon(icon);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={slideUp}
      transition={{ delay }}
      className={cn(
        'group relative border border-line bg-canvas p-8 transition-colors duration-300 sm:p-10',
        'hover:border-brand focus-within:border-brand',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-brand',
          'transition-transform duration-400 ease-[var(--ease-out-expo)] group-hover:scale-y-100',
        )}
      />

      <Icon aria-hidden="true" className="h-7 w-7 text-brand" strokeWidth={1.5} />

      <h3 className="mt-8 text-2xl sm:text-[1.75rem]">{title}</h3>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">{description}</p>
    </motion.article>
  );
}
