import { CircleCheck } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import CtaBanner from '../components/sections/CtaBanner';
import bannerImage from '../assets/images/port-aerial.webp';
import { useSeo } from '../hooks/useSeo';
import { certifications, certificationsPage, seo } from '../data/site';

export default function Certifications() {
  useSeo(seo['/certifications']);

  return (
    <>
      <PageBanner
        eyebrow={certificationsPage.eyebrow}
        title={certificationsPage.title}
        subtitle={certificationsPage.subtitle}
        image={bannerImage}
        imageAlt="Container terminal at a shipping port"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Certifications' }]}
      />

      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal
              as="li"
              key={certification.name}
              delay={(index % 3) * 0.06}
              className="h-full border border-line p-8 transition-colors duration-500 hover:border-accent-deep"
            >
              <CircleCheck
                aria-hidden="true"
                className="mb-6 h-7 w-7 text-accent-deep"
                strokeWidth={1.4}
              />
              <h2 className="mb-2 text-3xl">{certification.name}</h2>
              <p className="text-sm leading-relaxed text-body">{certification.description}</p>
              <p className="mt-5 text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted">
                {certification.vertical}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaBanner />
    </>
  );
}
