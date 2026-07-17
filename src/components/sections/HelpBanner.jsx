import { Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import { company, helpBanner } from '../../data/site';

const DETAILS = [
  { icon: Phone, value: company.phone, href: `tel:${company.phoneHref}` },
  { icon: Mail, value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, value: company.address },
];

/** Charcoal contact band sitting between the editorial sections. */
export default function HelpBanner() {
  return (
    <section className="bg-charcoal py-16 sm:py-20">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl text-white text-balance sm:text-4xl">{helpBanner.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{helpBanner.body}</p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-4">
            <ul className="space-y-4">
              {DETAILS.map(({ icon: Icon, value, href }) => (
                <li key={value} className="flex items-start gap-3.5 text-sm text-white/75">
                  <Icon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {href ? (
                    <a href={href} className="transition-colors duration-200 hover:text-white">
                      {value}
                    </a>
                  ) : (
                    <span>{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-3 lg:justify-self-end">
            <Button to={helpBanner.cta.to} size="lg">
              {helpBanner.cta.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
