import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import foodImage from '../../assets/images/food.webp';
import warehouseImage from '../../assets/images/warehouse.webp';
import importersImage from '../../assets/images/industry-importers.webp';
import restaurantsImage from '../../assets/images/industry-restaurants.webp';
import retailChainsImage from '../../assets/images/industry-retail-chains.webp';
import supermarketsImage from '../../assets/images/industry-supermarkets.webp';
import wholesalersImage from '../../assets/images/industry-wholesalers.webp';
import { industries, industriesAside } from '../../data/site';
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
 *
 * The copy panel is the last cell of the same grid and spans two columns, so it
 * absorbs whatever the tiles leave open — the two free columns beside a single
 * tile today, the tail of the last row once more industries are switched on.
 */
export default function IndustryGrid() {
  return (
    <Section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.article
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
          </motion.article>
        ))}

        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideUp}
          transition={{ delay: 0.12 }}
          className="flex flex-col justify-center border border-line bg-surface p-8 sm:p-10 lg:col-span-2 lg:p-14"
        >
          <p className="eyebrow">{industriesAside.eyebrow}</p>
          <h2 className="text-display-sm mt-6 text-balance">{industriesAside.title}</h2>
          <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-body sm:text-base">
            {industriesAside.body}
          </p>

          {/* <ul className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-x-10">
            {industriesAside.points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-brand" strokeWidth={1.5} />
                <div>
                  <h3 className="text-lg">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-body">{point.description}</p>
                </div>
              </li>
            ))}
          </ul> */}

          <div className="mt-10">
            <Button to={industriesAside.cta.to} variant="outline" size="sm">
              {industriesAside.cta.label}
            </Button>
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}
