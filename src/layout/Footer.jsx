import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import Newsletter from '../components/ui/Newsletter';
import SocialIcon from '../components/ui/SocialIcons';
import logoLight from '../assets/images/logo.png';
import { company, footerLinks, socialLinks } from '../data/site';

// Headings default to the display serif; these small caps labels are sans by design.
const LABEL = 'mb-6 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent';

function Column({ title, links }) {
  return (
    <div>
      <h2 className={LABEL}>{title}</h2>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="container-page py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            {/* Charcoal surface — the white-wordmark lockup. */}
            <img
              src={logoLight}
              alt={company.name}
              width="480"
              height="163"
              className="h-16 w-auto sm:h-[4.5rem]"
            />
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/60">
              {company.description}
            </p>

            {socialLinks.length > 0 && (
              <ul className="mt-8 flex gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="grid h-11 w-11 place-items-center border border-line-dark text-white/70 transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      <SocialIcon name={social.icon} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-2">
            <Column title="Quick Links" links={footerLinks.quickLinks} />
          </div>

          <div className="lg:col-span-2">
            <Column title="Categories" links={footerLinks.categories} />
          </div>

          <div className="lg:col-span-4">
            <h2 className={LABEL}>Get in Touch</h2>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-white">
                  {company.phone}
                </a>
              </li>
            </ul>

            <div className="mt-8 max-w-xs">
              <Newsletter />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            © {company.founded} {company.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-xs text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
