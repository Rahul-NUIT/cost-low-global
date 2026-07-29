// Product catalogue. Images resolve through a static map so Vite fingerprints
// them at build time — a dynamic `new URL(name)` would not be bundled.
import airPurifiers from '../assets/images/air-purifiers.webp';
import basmatiRice from '../assets/images/basmati-rice.webp';
import cables from '../assets/images/cables.webp';
import californiaAlmonds from '../assets/images/california-almonds.webp';
import cardamomGreen from '../assets/images/cardamom-green.webp';
import cashewNuts from '../assets/images/cashew-nuts.webp';
import chickpeas from '../assets/images/chickpeas.webp';
import electronicsFallback from '../assets/images/electronics.webp';
import fan from '../assets/images/fan.webp';
import flaxseeds from '../assets/images/flaxseeds.webp';
import foodFallback from '../assets/images/food.webp';
import greenLentils from '../assets/images/green-lentils.webp';
import greenPeas from '../assets/images/green-peas.webp';
import laptops from '../assets/images/laptops.webp';
import ledTubes from '../assets/images/led-tubes.webp';
import mobilePhones from '../assets/images/mobile-phones.webp';
import mustardSeeds from '../assets/images/mustard-seeds.webp';
import playstations from '../assets/images/playstations.webp';
import redChiliPowder from '../assets/images/red-chili-powder.webp';
import redLentils from '../assets/images/red-lentils.webp';
import router from '../assets/images/router.webp';
import schneiderComponents from '../assets/images/schneider-components.webp';
import solarPanels from '../assets/images/solar-panels.webp';
import soybean from '../assets/images/soybean.webp';
import turmericPowder from '../assets/images/turmeric-powder.webp';
import waterHeater from '../assets/images/water-heater.webp';
import yellowLentils from '../assets/images/yellow-lentils.webp';
import yellowPeas from '../assets/images/yellow-peas.webp';

const IMAGES = {
  f1: yellowLentils,
  f3: turmericPowder,
  f4: redChiliPowder,
  f5: cardamomGreen,
  f6: californiaAlmonds,
  f7: cashewNuts,
  f8: redLentils,
  f9: greenLentils,
  f10: yellowPeas,
  f11: greenPeas,
  f12: chickpeas,
  f13: soybean,
  f14: mustardSeeds,
  f15: flaxseeds,
  f16: basmatiRice,
  e1: mobilePhones,
  e2: cables,
  e3: router,
  e4: laptops,
  e5: playstations,
  e6: ledTubes,
  e7: fan,
  e8: airPurifiers,
  e9: waterHeater,
  e10: schneiderComponents,
  e11: solarPanels,
};

export const foodProducts = [
  {
    id: 'f1',
    name: 'Yellow Lentils',
    description: 'High-protein pulses, cleaned and export-grade packed.',
    category: 'food',
    group: 'Pulses',
    country: 'Canada',
  },
  {
    id: 'f3',
    name: 'Turmeric Powder',
    description: 'High-curcumin turmeric, lab-tested for purity.',
    category: 'food',
    group: 'Spices',
    country: 'India',
  },
  {
    id: 'f4',
    name: 'Red Chilli Powder',
    description: 'Vibrant color, balanced heat — Stemless variety available.',
    category: 'food',
    group: 'Spices',
    country: 'India',
  },
  {
    id: 'f5',
    name: 'Cardamom (Green)',
    description: 'Bold-size aromatic cardamom from highland estates.',
    category: 'food',
    group: 'Spices',
    country: 'India',
  },
  {
    id: 'f6',
    name: 'California Almonds',
    description: 'Whole, raw almonds packed for retail or bulk dispatch.',
    category: 'food',
    group: 'Dry Fruits',
    country: 'India',
  },
  {
    id: 'f7',
    name: 'Cashew Nuts',
    description: 'Premium white wholes, vacuum-packed for freshness.',
    category: 'food',
    group: 'Dry Fruits',
    country: 'India',
  },
  {
    id: 'f8',
    name: 'Red Lentils',
    description: 'Sun-cleaned red lentils, sized and graded for export.',
    category: 'food',
    group: 'Pulses',
    country: 'Canada',
  },
  {
    id: 'f9',
    name: 'Green Lentils',
    description: 'Whole green lentils with consistent color and low breakage.',
    category: 'food',
    group: 'Pulses',
    country: 'Canada',
  },
  {
    id: 'f10',
    name: 'Yellow Peas',
    description: 'High-protein yellow peas, cleaned and export-grade packed.',
    category: 'food',
    group: 'Pulses',
    country: 'Canada',
  },
  {
    id: 'f11',
    name: 'Green Peas',
    description: 'Premium whole green peas, sized for bulk and retail packing.',
    category: 'food',
    group: 'Pulses',
    country: 'Canada',
  },
  {
    id: 'f12',
    name: 'Chickpeas',
    description: 'Uniform, sun-dried chickpeas packed to export standards.',
    category: 'food',
    group: 'Pulses',
    country: 'Canada',
  },
  {
    id: 'f13',
    name: 'Soybean',
    description: 'Non-GMO soybean, cleaned and graded for food and feed markets.',
    category: 'food',
    group: 'Oilseeds',
    country: 'Canada',
  },
  {
    id: 'f14',
    name: 'Mustard Seeds',
    description: 'Bold, oil-rich mustard seeds cleaned to export specification.',
    category: 'food',
    group: 'Oilseeds',
    country: 'Canada',
  },
  {
    id: 'f15',
    name: 'Flaxseeds',
    description: 'Golden and brown flaxseeds, cleaned and packed for global markets.',
    category: 'food',
    group: 'Oilseeds',
    country: 'Canada',
  },
  {
    id: 'f16',
    name: 'Basmati Rice',
    description: 'Long-grain aged basmati rice, sortexed and packed to export standards.',
    category: 'food',
    group: 'Rice',
    country: 'India',
  },
];

export const electronicsProducts = [
  {
    id: 'e1',
    name: 'Mobile Phones',
    description:
      'Latest-generation smartphones across multiple brands and price tiers for wholesale distribution.',
    category: 'electronics',
    group: 'Mobile & Networking',
  },
  {
    id: 'e2',
    name: 'Cables',
    description:
      'USB-C, HDMI & networking cables in bulk, tested for signal integrity and durability.',
    category: 'electronics',
    group: 'Mobile & Networking',
  },
  {
    id: 'e3',
    name: 'Router',
    description: 'Wi-Fi routers and network switches for home and enterprise connectivity.',
    category: 'electronics',
    group: 'Mobile & Networking',
  },
  {
    id: 'e4',
    name: 'Laptops',
    description:
      'Business and consumer laptops sourced from leading brands, available in bulk configurations.',
    category: 'electronics',
    group: 'Consumer Electronics',
  },
  {
    id: 'e5',
    name: 'Playstations',
    description: 'Gaming consoles and accessories sourced through authorized distribution channels.',
    category: 'electronics',
    group: 'Consumer Electronics',
  },
  {
    id: 'e6',
    name: 'LED Tubes',
    description:
      'Energy-efficient LED tube lights for commercial and residential fittings, BIS approved.',
    category: 'electronics',
    group: 'LED Products',
  },
  {
    id: 'e7',
    name: 'Fan',
    description: 'Table, pedestal and ceiling fans engineered for high airflow and energy efficiency.',
    category: 'electronics',
    group: 'Home Appliances',
  },
  {
    id: 'e8',
    name: 'Air Purifiers',
    description:
      'HEPA and activated-carbon purifiers for home and office, multiple room-coverage sizes.',
    category: 'electronics',
    group: 'Home Appliances',
  },
  {
    id: 'e9',
    name: 'Water Heater',
    description: 'Instant and storage water heaters designed for dependable performance in global markets.',
    category: 'electronics',
    group: 'Home Appliances',
  },
  {
    id: 'e10',
    name: 'Schneider Components',
    description: 'Genuine Schneider Electric switchgear, breakers and control components.',
    category: 'electronics',
    group: 'Components',
  },
  {
    id: 'e11',
    name: 'Solar Panels',
    description:
      'Monocrystalline and polycrystalline solar panels for residential and commercial installations.',
    category: 'electronics',
    group: 'Green Energy',
  },
];

export const allProducts = [...foodProducts, ...electronicsProducts];

export const getProductImage = (product) =>
  IMAGES[product.id] ?? (product.category === 'food' ? foodFallback : electronicsFallback);

/** Distinct `group` values in catalogue order, prefixed with "All". */
export const groupsFor = (products) => ['All', ...new Set(products.map((p) => p.group))];

export const featuredFood = foodProducts.filter((p) => ['f1', 'f3', 'f4'].includes(p.id));
export const featuredElectronics = electronicsProducts.filter((p) =>
  ['e1', 'e2', 'e3'].includes(p.id),
);
