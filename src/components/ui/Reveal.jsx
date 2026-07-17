import { motion } from 'framer-motion';
import { slideUp, viewport } from '../../utils/motion';

/**
 * Scroll-triggered reveal. Wraps children in a motion element that plays once
 * when it enters the viewport; `delay` staggers siblings.
 */
export default function Reveal({
  children,
  delay = 0,
  variants = slideUp,
  as = 'div',
  className,
  ...props
}) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
