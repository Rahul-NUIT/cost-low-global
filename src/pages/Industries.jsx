import PageBanner from '../components/ui/PageBanner';
import IndustryGrid from '../components/sections/IndustryGrid';
import CtaBanner from '../components/sections/CtaBanner';
// Not warehouse.webp: that already appears below as the Distributors tile.
import bannerImage from '../assets/images/cargo-ship.webp';
import { useSeo } from '../hooks/useSeo';
import { industriesPage, seo } from '../data/site';

export default function Industries() {
  useSeo(seo['/industries']);

  return (
    <>
      <PageBanner
        eyebrow={industriesPage.eyebrow}
        title={industriesPage.title}
        subtitle={industriesPage.subtitle}
        image={bannerImage}
        imageAlt="Container ship under way at sea"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      />
      <IndustryGrid />
      <CtaBanner />
    </>
  );
}
