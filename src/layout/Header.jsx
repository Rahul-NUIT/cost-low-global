import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import MobileDrawer from './MobileDrawer';
import Button from '../components/ui/Button';
import { useScrolled } from '../hooks/useScrolled';
import { useEnquiry } from '../hooks/useEnquiry';
import { navLinks } from '../data/site';
import { cn } from '../utils/cn';

/**
 * Routes whose masthead is a dark photograph — the header floats transparent
 * over these until scrolled. Every other page needs the solid bar immediately
 * or the light-on-light text would be unreadable.
 */
const DARK_MASTHEAD_ROUTES = ['/', '/food-products', '/electronics'];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const scrolled = useScrolled(24);
  const { open } = useEnquiry();

  const overDarkMasthead = DARK_MASTHEAD_ROUTES.includes(pathname) && !scrolled;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          overDarkMasthead
            ? 'bg-transparent py-5'
            : 'border-b border-line bg-canvas/95 py-3 backdrop-blur-md',
        )}
      >
        <div className="container-page flex items-center justify-between gap-6">
          <Logo light={overDarkMasthead} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'relative text-[0.9375rem] transition-colors duration-300',
                        isActive
                          ? 'text-brand'
                          : overDarkMasthead
                            ? 'text-white/85 hover:text-white'
                            : 'text-ink hover:text-brand',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Button onClick={() => open()} size="sm" className="hidden sm:inline-flex">
              Enquire Now
            </Button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation"
              aria-expanded={drawerOpen}
              className={cn(
                'grid h-10 w-10 place-items-center border transition-colors duration-300 lg:hidden',
                overDarkMasthead
                  ? 'border-white/40 text-white hover:bg-white hover:text-ink'
                  : 'border-line text-ink hover:border-brand hover:text-brand',
              )}
            >
              <Menu aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onEnquire={open} />
    </>
  );
}
