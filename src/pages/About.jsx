import PageBanner from '../components/ui/PageBanner';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import StatCounter from '../components/ui/StatCounter';
import Marquee from '../components/ui/Marquee';
import Timeline from '../components/ui/Timeline';
import CtaBanner from '../components/sections/CtaBanner';
import foodImage from '../assets/images/food.webp';
import bannerImage from '../assets/images/warehouse.webp';
import { getIcon } from '../utils/icons';
import { aboutPage, aboutStats, marqueeItems, processSection, seo } from '../data/site';
import { useSeo } from '../hooks/useSeo';

export default function About() {
  useSeo(seo['/about']);

  return (
    <>
      <PageBanner
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        subtitle={aboutPage.subtitle}
        image={bannerImage}
        imageAlt="Sacks of sourced goods in a trading warehouse"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src={foodImage}
                alt="Sourcing premium goods for global markets"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:pt-6">
            <Reveal>
              <p className="eyebrow mb-7">{aboutPage.story.eyebrow}</p>
              <h2 className="text-display-sm text-balance sm:text-display">
                {aboutPage.story.title}
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5">
              {aboutPage.story.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={0.06 * (index + 1)}>
                  <p className="text-[0.9375rem] leading-relaxed text-body sm:text-base">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10">
              {aboutStats.slice(0, 2).map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Marquee items={marqueeItems} />

      <Section tone="surface">
        <div className="grid gap-5 lg:grid-cols-3">
          {aboutPage.pillars.map((pillar, index) => {
            const Icon = getIcon(pillar.icon);
            return (
              <Reveal
                key={pillar.title}
                delay={index * 0.08}
                className="border border-line bg-canvas p-8 sm:p-10"
              >
                <Icon aria-hidden="true" className="h-7 w-7 text-brand" strokeWidth={1.5} />
                <h2 className="mt-8 text-2xl sm:text-[1.75rem]">{pillar.title}</h2>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                  {pillar.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="mb-12">
          <Reveal>
            <p className="eyebrow mb-7">{processSection.eyebrow}</p>
            <h2 className="text-display-sm text-balance sm:text-display">{processSection.title}</h2>
          </Reveal>
        </div>
        <Timeline steps={processSection.steps} />
      </Section>

      <CtaBanner />
    </>
  );
}
