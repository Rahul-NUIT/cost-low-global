import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import { featuredElectronics, featuredFood } from '../../data/products';
import { featuredSection } from '../../data/site';

const GROUPS = [
  { label: 'Food', products: featuredFood, to: '/food-products' },
  { label: 'Electronics', products: featuredElectronics, to: '/electronics' },
];

export default function FeaturedProducts() {
  return (
    <Section>
      <SectionTitle
        eyebrow={featuredSection.eyebrow}
        title={featuredSection.title}
        action={
          <Button to="/food-products" variant="outline" size="sm">
            View all products
          </Button>
        }
      />

      <div className="space-y-16 sm:space-y-20">
        {GROUPS.map((group) => (
          <div key={group.label}>
            <div className="mb-8 flex items-center gap-5">
              <h3 className="text-2xl sm:text-3xl">{group.label}</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
              <Button to={group.to} variant="outline" size="sm" className="hidden sm:inline-flex">
                Explore Range
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {group.products.map((product, index) => (
                <ProductCard key={product.id} product={product} delay={index * 0.06} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
