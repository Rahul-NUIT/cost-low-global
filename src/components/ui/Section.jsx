import { cn } from '../../utils/cn';

const TONES = {
  canvas: 'bg-canvas',
  surface: 'bg-surface',
  charcoal: 'bg-charcoal',
};

/** Section shell owning the vertical rhythm and page container. */
export default function Section({
  children,
  tone = 'canvas',
  className,
  containerClassName,
  as: Tag = 'section',
  ...props
}) {
  return (
    <Tag className={cn('py-20 sm:py-28 lg:py-36', TONES[tone], className)} {...props}>
      <div className={cn('container-page', containerClassName)}>{children}</div>
    </Tag>
  );
}
