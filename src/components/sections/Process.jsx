import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Timeline from '../ui/Timeline';
import { processSection } from '../../data/site';

export default function Process() {
  return (
    <Section tone="surface">
      <SectionTitle eyebrow={processSection.eyebrow} title={processSection.title} />
      <Timeline steps={processSection.steps} />
    </Section>
  );
}
