import { motion } from 'framer-motion';
import Section from '../ui/Section';
import foodImage from '../../assets/images/food.webp';
import warehouseImage from '../../assets/images/warehouse.webp';
import importersImage from '../../assets/images/industry-importers.webp';
import restaurantsImage from '../../assets/images/industry-restaurants.webp';
import retailChainsImage from '../../assets/images/industry-retail-chains.webp';
import supermarketsImage from '../../assets/images/industry-supermarkets.webp';
import wholesalersImage from '../../assets/images/industry-wholesalers.webp';
import { industries } from '../../data/site';
import { slideUp, viewport } from '../../utils/motion';

// food-manufacturers and distributors use our own imagery — see the note on
// `industries` in data/site.js.
const IMAGES = {
  'food-manufacturers': foodImage,
  wholesalers: wholesalersImage,
  'retail-chains': retailChainsImage,
  supermarkets: supermarketsImage,
  importers: importersImage,
  distributors: warehouseImage,
  restaurants: restaurantsImage,
};

/**
 * Portrait image tiles. The description is hidden until hover on pointer
 * devices; on touch there is no hover, so it stays visible there.
 */
export default function IndustryGrid() {
  return (
    <Section>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.li
            key={industry.slug}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideUp}
            transition={{ delay: (index % 3) * 0.06 }}
            className="group relative aspect-[4/5] overflow-hidden border border-line"
          >
            <img
              src={IMAGES[industry.slug]}
              alt={industry.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/25 to-transparent"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
              <h2 className="text-3xl text-white">{industry.name}</h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/75 transition-all duration-500 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-32 md:group-hover:opacity-100">
                {industry.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
