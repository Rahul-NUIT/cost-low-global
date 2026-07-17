import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import CategoryCard from '../ui/CategoryCard';
import foodImage from '../../assets/images/food.webp';
import electronicsImage from '../../assets/images/electronics.webp';
import { categories, categoriesSection } from '../../data/site';

const IMAGES = { 'food-products': foodImage, electronics: electronicsImage };

export default function Categories() {
  return (
    <Section tone="surface">
      <SectionTitle
        eyebrow={categoriesSection.eyebrow}
        title={categoriesSection.title}
        body={categoriesSection.body}
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.slug}
            category={category}
            image={IMAGES[category.slug]}
            delay={index * 0.08}
          />
        ))}
      </div>
    </Section>
  );
}
