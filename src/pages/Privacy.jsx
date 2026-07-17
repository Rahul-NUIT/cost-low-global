import LegalPage from './LegalPage';
import { useSeo } from '../hooks/useSeo';
import { seo } from '../data/site';

export default function Privacy() {
  useSeo(seo['/privacy']);
  return <LegalPage eyebrow="Legal" title="Privacy Policy" />;
}
