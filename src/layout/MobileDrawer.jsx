import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, MapPin, Phone, X } from 'lucide-react';
import Logo from './Logo';
import Button from '../components/ui/Button';
import { company, navLinks } from '../data/site';
import { cn } from '../utils/cn';

/**
 * Off-canvas navigation. Closes on Escape, locks background scroll while open,
 * and moves focus to the close button so keyboard users land inside the panel.
 */
export default function MobileDrawer({ open, onClose, onEnquire }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="xl:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-canvas"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-5">
              <Logo onClick={onClose} />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="grid h-10 w-10 place-items-center border border-line text-ink transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col px-5 py-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'border-b border-line py-4 font-display text-2xl transition-colors duration-200',
                      isActive ? 'text-brand' : 'text-ink hover:text-brand',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto space-y-5 px-5 py-8">
              <Button
                onClick={() => {
                  onClose();
                  onEnquire();
                }}
                className="w-full"
              >
                Enquire Now
              </Button>

              <ul className="space-y-3 text-sm text-body">
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{company.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
                  <a href={`mailto:${company.email}`} className="hover:text-brand">
                    {company.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
                  <a href={`tel:${company.phoneHref}`} className="hover:text-brand">
                    {company.phone}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
