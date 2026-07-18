import PageBanner from '../components/ui/PageBanner';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import ShippingRoutes from '../components/sections/ShippingRoutes';
import portImage from '../assets/images/port-aerial.webp';
import cargoImage from '../assets/images/cargo-ship.webp';
import { useEnquiry } from '../hooks/useEnquiry';
import { useSeo } from '../hooks/useSeo';
import { importExportPage, logisticsServices, seo } from '../data/site';

export default function ImportExport() {
  useSeo(seo['/import-export']);
  const { open } = useEnquiry();

  return (
    <>
      <PageBanner
        eyebrow={importExportPage.eyebrow}
        title={importExportPage.title}
        subtitle={importExportPage.subtitle}
        image={portImage}
        imageAlt="Container terminal at a shipping port"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Import & Export' }]}
      />

      <ShippingRoutes />

      <Section>
        <Reveal>
          <p className="eyebrow mb-8">{importExportPage.services.eyebrow}</p>
          <h2 className="mb-14 max-w-2xl text-display-sm text-balance sm:text-display">
            {importExportPage.services.title}
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-12">
          {logisticsServices.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.05}
              // First two run half-width, the rest thirds — fills 5 items evenly.
              className={index < 2 ? 'md:col-span-6' : 'md:col-span-4'}
            >
              <div className="h-full border border-line p-8 transition-colors duration-500 hover:border-brand">
                <span aria-hidden="true" className="font-display text-3xl text-accent-deep">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-2 mt-4 text-2xl">{service.title}</h3>
                <p className="text-sm leading-relaxed text-body">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden">
        <img
          src={cargoImage}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-charcoal/85" />

        <div className="container-page relative py-24 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-display-sm text-white text-balance sm:text-display lg:text-display-lg">
              {importExportPage.cta.title}
            </h2>
            <div className="mt-8 flex justify-center">
              <Button onClick={() => open()} size="lg">
                {importExportPage.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
