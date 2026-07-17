import PageBanner from '../components/ui/PageBanner';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import GoogleMap from '../components/ui/GoogleMap';
import ContactForm from '../components/sections/ContactForm';
import { getIcon } from '../utils/icons';
import { useEnquiry } from '../hooks/useEnquiry';
import { useSeo } from '../hooks/useSeo';
import { company, contactPage, seo } from '../data/site';

export default function Contact() {
  useSeo(seo['/contact']);
  const { open } = useEnquiry();

  return (
    <>
      <PageBanner
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        subtitle={contactPage.subtitle}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {contactPage.details.map((detail, index) => {
                const Icon = getIcon(detail.icon);
                return (
                  <Reveal
                    key={detail.label}
                    as="li"
                    delay={index * 0.06}
                    className="border border-line bg-canvas p-6 sm:p-7"
                  >
                    <div className="flex items-start gap-4">
                      <Icon
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-brand"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-muted">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="mt-2 block text-[0.9375rem] text-ink transition-colors duration-200 hover:text-brand"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delay={0.2} className="mt-10 border border-line p-7 sm:p-8">
              <p className="eyebrow mb-6">{contactPage.quickEnquiry.eyebrow}</p>
              <h2 className="text-2xl sm:text-[1.75rem]">{contactPage.quickEnquiry.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-body">
                {contactPage.quickEnquiry.body}
              </p>
              <Button onClick={() => open()} className="mt-7">
                {contactPage.quickEnquiry.cta}
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <Reveal>
        <GoogleMap address={company.address} title={`${company.name} head office`} />
      </Reveal>
    </>
  );
}
