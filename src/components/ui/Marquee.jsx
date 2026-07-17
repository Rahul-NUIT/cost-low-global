/**
 * Charcoal band of display-serif phrases separated by gold diamonds.
 * The item list is rendered twice so the -50% keyframe loops seamlessly;
 * the duplicate is hidden from assistive tech.
 */
export default function Marquee({ items }) {
  const Track = ({ ariaHidden }) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 sm:gap-16">
          <span className="whitespace-nowrap font-display text-xl text-white sm:text-3xl">
            {item}
          </span>
          <span aria-hidden="true" className="text-accent">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative flex overflow-hidden bg-charcoal py-5 sm:py-7">
      <div className="marquee-track flex min-w-max">
        <Track />
        <Track ariaHidden />
      </div>
    </div>
  );
}
