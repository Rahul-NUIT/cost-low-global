import PageBanner from '../components/ui/PageBanner';
import ProductGrid from '../components/sections/ProductGrid';
import CtaBanner from '../components/sections/CtaBanner';
import foodImage from '../assets/images/food.webp';
import { foodProducts } from '../data/products';
import { foodPage, seo } from '../data/site';
import { useSeo } from '../hooks/useSeo';

export default function FoodProducts() {
  useSeo(seo['/food-products']);

  return (
    <>
      <PageBanner
        eyebrow={foodPage.eyebrow}
        title={foodPage.title}
        subtitle={foodPage.subtitle}
        image={foodImage}
        imageAlt="Premium sourced goods"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Food Products' }]}
      />
      <ProductGrid products={foodProducts} intro={foodPage.intro} />
      <CtaBanner />
    </>
  );
}
