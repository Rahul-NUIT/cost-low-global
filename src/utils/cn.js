import { twMerge } from 'tailwind-merge';

/**
 * Join conditional class names, dropping falsy values.
 *
 * Runs through tailwind-merge so a caller's utility beats a component's default
 * for the same CSS property. Plain concatenation cannot do this: conflicts like
 * `inline-flex` vs `hidden` are resolved by stylesheet order, not string order.
 */
export const cn = (...classes) => twMerge(classes.filter(Boolean).join(' '));
