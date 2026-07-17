import LegalPage from './LegalPage';
import { useSeo } from '../hooks/useSeo';
import { seo } from '../data/site';

export default function Terms() {
  useSeo(seo['/terms']);
  return <LegalPage eyebrow="Legal" title="Terms of Use" />;
}
