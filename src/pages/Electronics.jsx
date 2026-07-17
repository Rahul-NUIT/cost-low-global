import PageBanner from '../components/ui/PageBanner';
import ProductGrid from '../components/sections/ProductGrid';
import CtaBanner from '../components/sections/CtaBanner';
import electronicsImage from '../assets/images/electronics.webp';
import { electronicsProducts } from '../data/products';
import { electronicsPage, seo } from '../data/site';
import { useSeo } from '../hooks/useSeo';

export default function Electronics() {
  useSeo(seo['/electronics']);

  return (
    <>
      <PageBanner
        eyebrow={electronicsPage.eyebrow}
        title={electronicsPage.title}
        subtitle={electronicsPage.subtitle}
        image={electronicsImage}
        imageAlt="Consumer electronics"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Electronics' }]}
      />
      <ProductGrid products={electronicsProducts} intro={electronicsPage.intro} />
      <CtaBanner />
    </>
  );
}
