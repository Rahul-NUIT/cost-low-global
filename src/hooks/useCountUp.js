import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { prefersReducedMotion } from '../utils/motion';

/**
 * Counts 0 -> `end` once the element scrolls into view.
 * Returns [ref, displayValue]; jumps straight to `end` when reduced motion is on.
 */
export function useCountUp(end, { duration = 1800 } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion()) {
      setValue(end);
      return;
    }

    let frame;
    const start = performance.now();
    // easeOutExpo — fast start, settled landing.
    const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(ease(progress) * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return [ref, value];
}
