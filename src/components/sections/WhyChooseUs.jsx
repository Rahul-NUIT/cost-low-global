import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import FeatureCard from '../ui/FeatureCard';
import StatCounter from '../ui/StatCounter';
import Button from '../ui/Button';
import { aboutStats, valueProps, whyChooseUs } from '../../data/site';

export default function WhyChooseUs() {
  return (
    <Section>
      <SectionTitle
        eyebrow={whyChooseUs.eyebrow}
        title={
          <>
            {whyChooseUs.titleLead} in <span className="text-brand">{whyChooseUs.titleAccent}</span>
          </>
        }
        body={whyChooseUs.body}
        action={
          <Button to={whyChooseUs.cta.to} variant="outline" size="sm">
            {whyChooseUs.cta.label}
          </Button>
        }
      />

      {/* Separated cards rather than a collapsed grid: five props into three
          columns would otherwise leave a visible empty sixth cell. */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {valueProps.map((prop, index) => (
          <FeatureCard key={prop.title} {...prop} delay={index * 0.06} />
        ))}
      </div>

      <div className="mt-20 grid grid-cols-2 gap-10 border-t border-line pt-14 sm:mt-24 sm:grid-cols-4">
        {aboutStats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </Section>
  );
}
