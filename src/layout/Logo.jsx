import { Link } from 'react-router-dom';
import logoLight from '../assets/images/logo.png';
import logoBlack from '../assets/images/logo-black.png';
import { company } from '../data/site';
import { cn } from '../utils/cn';

/**
 * Brand lockup. Both files carry the full wordmark, so no live text is needed.
 *
 * `light` means the logo sits on a dark surface: logo.png sets its wordmark in
 * white. On light surfaces that wordmark would vanish, so logo-black.png is
 * used instead. (logo-dark.png — red mark, black wordmark — is the colour
 * alternative for light surfaces if the flat black ever reads too plain.)
 */
export default function Logo({ light = false, onClick, className }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group inline-flex items-center"
      aria-label={`${company.name} — home`}
    >
      <img
        src={light ? logoLight : logoBlack}
        alt={company.name}
        width="480"
        height="163"
        // Three stacked lines: the lower two need ~56px of overall height before
        // they resolve at all. Smaller than this and they turn to grey mush.
        className={cn(
          'h-11 w-auto transition-transform duration-500 group-hover:scale-[1.03] sm:h-14',
          className,
        )}
      />
    </Link>
  );
}
