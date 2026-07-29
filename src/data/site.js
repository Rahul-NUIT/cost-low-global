export const company = {
  name: 'Wholesale Hub',
  tagline: 'Global Sourcing & Trading',
  description:
    'A global trading partner sourcing premium food products and electronics for retailers, distributors and wholesalers worldwide.',
  address: '2937 Queen St. East Suite 1010, Brampton, ON L6T 5J1, Canada',
  email: 'info@costlowglobal.com',
  phone: '+1 365-356-0963',
  phoneHref: '+13653560963',
  hours: 'Mon – Fri, 09:00 am – 05:00 pm',
  founded: 2026,
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Food Products', to: '/food-products' },
  { label: 'Electronics', to: '/electronics' },
  { label: 'Import & Export', to: '/import-export' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
];

/**
 * The source site publishes no social profiles. These carry the footer's social
 * row from the design system — swap `href` for real URLs before launch, or set
 * the array to [] to drop the row entirely.
 */
export const socialLinks = [
  { label: 'LinkedIn', icon: 'Linkedin', href: '#' },
  { label: 'Twitter', icon: 'Twitter', href: '#' },
  { label: 'Facebook', icon: 'Facebook', href: '#' },
  { label: 'Instagram', icon: 'Instagram', href: '#' },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Import & Export', to: '/import-export' },
    { label: 'Industries', to: '/industries' },
    { label: 'Contact', to: '/contact' },
  ],
  categories: [
    { label: 'Food Products', to: '/food-products' },
    { label: 'Electronics', to: '/electronics' },
  ],
  legal: [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
  ],
};

export const hero = {
  eyebrow: 'Global Sourcing & Trading',
  titleLines: ['Bridging Markets.', 'Delivering Trust.'],
  subtitle:
    'A trusted import & export partner specializing in premium food products and consumer electronics — sourced responsibly, delivered reliably across continents.',
  primaryCta: { label: 'Explore Products', to: '/food-products' },
  secondaryCta: { label: 'Contact Us', to: '/contact' },
  imageAlt: 'Global trading port at dusk',
};

// Hero band and the About band ship different figures on the source site;
// both are reproduced as authored.
export const heroStats = [
  { value: 40, suffix: '+', label: 'Countries Served' },
  { value: 500, suffix: '+', label: 'Trade Partners' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Quality Assured' },
];

export const aboutStats = [
  { value: 30, suffix: '+', label: 'Countries Served', icon: 'Earth' },
  { value: 200, suffix: '+', label: 'Happy Clients', icon: 'Users' },
  { value: 500, suffix: '+', label: 'Products Exported', icon: 'Package' },
  { value: 10, suffix: '+', label: 'Years of Experience', icon: 'Award' },
];

export const whyChooseUs = {
  eyebrow: 'Why Choose Wholesale Hub',
  title: 'Your Trusted Partner in Global Trade.',
  titleLead: 'Your Trusted Partner',
  titleAccent: 'Global Trade.',
  body: 'We are committed to delivering the best food products and electronics with unmatched quality, reliability and integrity to our customers around the world.',
  cta: { label: 'Learn More About Us', to: '/about' },
};

export const valueProps = [
  {
    icon: 'ShieldCheck',
    title: 'Quality Assurance',
    description: 'We ensure the highest quality in every product.',
  },
  {
    icon: 'Globe2',
    title: 'Global Network',
    description: 'Strong network of trusted suppliers and buyers worldwide.',
  },
  {
    icon: 'Truck',
    title: 'Reliable Supply Chain',
    description: 'From sourcing to delivery, we ensure reliability.',
  },
  {
    icon: 'BadgeDollarSign',
    title: 'Competitive Pricing',
    description: 'Best quality products at the most competitive prices.',
  },
  {
    icon: 'Clock',
    title: 'Timely Delivery',
    description: 'On-time delivery, every time.',
  },
  {
    icon: 'Ship',
    title: 'Flexible Volumes',
    description: 'From a single container to full-vessel programmes and private-label packing.',
  },
];

/** Scrolling band copy — drawn from the value props so it stays on-message. */
export const marqueeItems = valueProps.map((item) => item.title);

export const categories = [
  {
    slug: 'food-products',
    title: 'Food Products',
    subCount: '3 Sub-categories',
    description: 'Pulses, spices and dry fruits sourced for global markets.',
    cta: 'Explore Range',
    imageAlt: 'Premium sourced goods',
  },
  {
    slug: 'electronics',
    title: 'Electronics',
    subCount: '5 Sub-categories',
    description:
      'Mobile accessories, consumer electronics, LED products, small appliances and components.',
    cta: 'Explore Range',
    imageAlt: 'Consumer electronics',
  },
];

export const categoriesSection = {
  eyebrow: 'Our Categories',
  title: 'Two verticals. Global reach.',
  body: 'Carefully curated portfolios in Food and Electronics — built for retailers, distributors and wholesalers.',
};

export const featuredSection = {
  eyebrow: 'Featured Products',
  title: 'A glimpse of our portfolio',
};

export const processSection = {
  eyebrow: 'How We Work',
  title: 'From enquiry to delivery.',
  steps: [
    {
      icon: 'Search',
      title: 'Enquiry & Sourcing',
      description: 'Share your requirement. We match it with vetted producers.',
    },
    {
      icon: 'Handshake',
      title: 'Negotiation & Sampling',
      description: 'Transparent pricing, samples and quality verification.',
    },
    {
      icon: 'ClipboardCheck',
      title: 'Quality Control',
      description: 'Pre-shipment inspection, quality checks and packaging.',
    },
    {
      icon: 'Ship',
      title: 'Global Dispatch',
      description: 'End-to-end logistics, documentation and on-time delivery.',
    },
  ],
};

export const helpBanner = {
  title: "Have Questions? We're Here to Help!",
  body: 'Get in touch with our team for inquiries or custom quotes.',
  cta: { label: 'Contact Us Today', to: '/contact' },
};

export const ctaBanner = {
  eyebrow: 'Ready to Source?',
  title: "Let's build your next shipment.",
  body: 'Share your requirement — our trade team will respond within one business day with samples and pricing.',
  primaryCta: { label: 'Request a Quote' },
  secondaryCta: { label: 'Contact Us', to: '/contact' },
};

export const aboutPage = {
  eyebrow: 'About Us',
  title: 'A trusted partner in global trade.',
  subtitle:
    'For over a decade, we have connected producers and buyers across continents — delivering premium food products and electronics with reliability and care.',
  story: {
    eyebrow: 'Our Story',
    title: 'Built by traders, for traders.',
    paragraphs: [
      'Wholesale Hub was founded with a single conviction: that international trade should feel as simple and dependable as buying locally.',
      'Today, we operate across 40+ countries with a focused portfolio in Food Products and Electronics — two verticals where consistency, quality standards and supply reliability are non-negotiable.',
      'Our team of sourcing specialists, logistics managers and quality auditors works as an extension of your procurement function — taking ownership from enquiry to delivery.',
    ],
  },
  pillars: [
    {
      icon: 'Target',
      title: 'Our Mission',
      description:
        'To simplify global trade by being the most reliable sourcing partner for our clients — quality, transparency and speed at every stage.',
    },
    {
      icon: 'Eye',
      title: 'Our Vision',
      description:
        "To be the bridge between premium producers and the world's leading distributors — one shipment, one partnership at a time.",
    },
    {
      icon: 'Heart',
      title: 'Our Values',
      description:
        'Integrity in dealings, accountability in execution, and lasting relationships built on consistent quality and fair pricing.',
    },
  ],
};

export const contactPage = {
  eyebrow: 'Contact',
  title: "Let's start a conversation.",
  subtitle:
    "Whether you're scoping a new programme or reordering a regular SKU — our trade team is ready to help.",
  details: [
    { icon: 'MapPin', label: 'Head Office', value: company.address },
    { icon: 'Mail', label: 'Email', value: company.email, href: `mailto:${company.email}` },
    { icon: 'Phone', label: 'Phone', value: company.phone, href: `tel:${company.phoneHref}` },
    { icon: 'Clock', label: 'Working Hours', value: company.hours },
  ],
  quickEnquiry: {
    eyebrow: 'Quick Enquiry',
    title: 'Skip the form. Open the enquiry panel.',
    body: "Tell us what you need and we'll come back to you with samples and pricing.",
    cta: 'Open Enquiry Form',
  },
};

export const foodPage = {
  eyebrow: 'Category',
  title: 'Food Products',
  subtitle:
    'From protein-rich pulses to specialty spices and premium dry fruits, our food portfolio is built on trusted origins, rigorous quality control and standards that meet international expectations.',
  intro: {
    title: 'Authentic origins. Export-grade quality.',
    body: 'We work directly with farms, mills and processors across India, South-East Asia, Africa and Canada. Every consignment is sampled, lab-tested and packed to client specifications — ready for wholesale, retail or HoReCa channels worldwide.',
  },
};

export const electronicsPage = {
  eyebrow: 'Category',
  title: 'Electronics',
  subtitle:
    'A curated electronics portfolio — from mobile accessories to LED lighting and small appliances — backed by established manufacturing partners and reliable lead times.',
  intro: {
    title: 'Quality products. Trusted manufacturers.',
    body: 'All products meet relevant safety and regulatory standards as applicable. We support private-label, OEM and standard catalog supply — with end-to-end logistics across air and sea freight.',
  },
};

/* ------------------------------------------------------------------
   Import & Export
------------------------------------------------------------------ */

export const importExportPage = {
  eyebrow: 'Connecting Continents',
  title: 'Import & export logistics, handled end-to-end',
  subtitle:
    'From Canadian ports to nine key destination markets — we manage freight, documentation and customs so your cargo moves without friction.',
  routes: {
    eyebrow: 'Global Shipping Routes',
    title: 'From Canadian ports to the world’s markets',
  },
  services: {
    eyebrow: 'Logistics Services',
    title: 'Everything your shipment needs',
  },
  cta: {
    title: 'Ready to move your next shipment?',
    label: 'Request a Quote',
  },
};

/**
 * Destination markets, as real port coordinates.
 *
 * The reference site hard-codes plate percentages instead, and they do not
 * correspond to any projection — its pins land in the wrong countries (the Gulf
 * ports plot across central Africa). Storing lat/lon and projecting in
 * `sections/ShippingRoutes` keeps the pins truthful; it assumes an
 * equirectangular map spanning the full globe, which world-map.webp is.
 */
export const shippingOrigin = { label: 'Canada · Origin', lat: 43.7, lon: -79.6 };

export const exportDestinations = [
  { country: 'United Arab Emirates', port: 'Jebel Ali', lat: 25.01, lon: 55.06 },
  { country: 'Saudi Arabia', port: 'Jeddah / Dammam', lat: 21.48, lon: 39.19 },
  { country: 'Oman', port: 'Sohar', lat: 24.47, lon: 56.63 },
  { country: 'Qatar', port: 'Hamad', lat: 25.03, lon: 51.6 },
  { country: 'Kuwait', port: 'Shuwaikh', lat: 29.35, lon: 47.93 },
  { country: 'Bahrain', port: 'Khalifa Bin Salman', lat: 26.15, lon: 50.66 },
  { country: 'India', port: 'Nhava Sheva / Mundra', lat: 18.95, lon: 72.95 },
  { country: 'United Kingdom', port: 'Felixstowe', lat: 51.96, lon: 1.35 },
  { country: 'United States', port: 'New York / Houston', lat: 40.68, lon: -74.05 },
];

export const logisticsServices = [
  {
    title: 'Sea Freight',
    description: 'FCL & LCL ocean freight to every major global port at competitive rates.',
  },
  {
    title: 'Air Freight',
    description: 'Expedited air cargo for time-sensitive and high-value consignments.',
  },
  {
    title: 'Container Shipping',
    description: '20ft & 40ft container loading, bagged or bulk, sealed to spec.',
  },
  {
    title: 'Documentation Assistance',
    description:
      'COO, phytosanitary, BL, packing lists and letters of credit handled end-to-end.',
  },
  {
    title: 'Customs Support',
    description: 'Export clearance and destination customs coordination via our broker network.',
  },
];

/* ------------------------------------------------------------------
   Industries
------------------------------------------------------------------ */

export const industriesPage = {
  eyebrow: 'Industries We Serve',
  title: 'Trusted across the global supply chain',
  subtitle:
    'Whatever your scale, we tailor grades, packaging and logistics to fit the way your business buys.',
};

/**
 * `image` is resolved in components/sections/IndustryGrid.jsx.
 *
 * Two entries use substitutes: the reference site illustrates "Food
 * Manufacturers" with a photo of a programmer at a monitor and "Distributors"
 * with Nintendo figurines. Neither depicts the industry (and the latter is
 * licensed character merchandise), so they carry our own imagery instead.
 */
export const industries = [
  {
    slug: 'wholesalers',
    name: 'Wholesalers',
    description: 'Volume pricing and reliable replenishment for regional distribution.',
  },
  // {
  //   slug: 'food-manufacturers',
  //   name: 'Food Manufacturers',
  //   description: 'Consistent, spec-driven raw materials for large-scale production lines.',
  // },
  // {
  //   slug: 'retail-chains',
  //   name: 'Retail Chains',
  //   description: 'Private-label packing and branded retail-ready goods.',
  // },
  // {
  //   slug: 'supermarkets',
  //   name: 'Supermarkets',
  //   description: 'Shelf-ready pack sizes with certified food-safety compliance.',
  // },
  // {
  //   slug: 'importers',
  //   name: 'Importers',
  //   description: 'Consolidated containers and full documentation support.',
  // },
  // {
  //   slug: 'distributors',
  //   name: 'Distributors',
  //   description: 'Dependable lead times and flexible Incoterm arrangements.',
  // },
  // {
  //   slug: 'restaurants',
  //   name: 'Restaurants',
  //   description: 'Premium-grade pulses, rice and spices for HoReCa kitchens.',
  // },
];

/**
 * Copy for the panel beside the industry tiles. It fills the columns the tiles
 * leave open while only one industry is live — see sections/IndustryGrid.jsx.
 */
export const industriesAside = {
  eyebrow: 'How We Work',
  title: 'Built around the way you buy',
  body: 'No two buyers order alike. We set each account up around its own volumes, grades and delivery rhythm rather than a fixed catalogue.',
  points: [
    {
      title: 'Volume-tiered pricing',
      description: 'Rates that improve with your order book, held for the agreed term.',
    },
    {
      title: 'Packed to your spec',
      description: 'Bulk sacks, shelf-ready pack sizes or private label — loaded bagged or in bulk.',
    },
    {
      title: 'Documentation handled',
      description: 'COO, phytosanitary, BL and packing lists prepared for every shipment.',
    },
    {
      title: 'Dependable lead times',
      description: 'Scheduled replenishment by sea or air, with flexible Incoterm arrangements.',
    },
  ],
  cta: { label: 'Talk to Our Team', to: '/contact' },
};

export const seo = {
  '/': {
    title: 'Wholesale Hub — Global Trading of Food Products & Electronics',
    description:
      'International import & export partner for premium food products and electronics. Trusted by retailers and distributors across 40+ countries.',
  },
  '/food-products': {
    title: 'Food Products — Wholesale Hub',
    description:
      'Premium pulses, spices, dry fruits, oilseeds and rice sourced from trusted origins and packed to export-grade standards.',
  },
  '/electronics': {
    title: 'Electronics — Wholesale Hub',
    description:
      'Mobile accessories, consumer electronics, LED products, home appliances and components from certified manufacturers.',
  },
  '/import-export': {
    title: 'Import & Export — Wholesale Hub',
    description:
      'Global sea, air and container freight with full documentation and customs support — shipping premium goods from Canada worldwide.',
  },
  '/industries': {
    title: 'Industries We Serve — Wholesale Hub',
    description:
      'From food manufacturers and wholesalers to retail chains, supermarkets, importers, distributors and restaurants.',
  },
  '/about': {
    title: 'About — Wholesale Hub',
    description:
      'For over a decade Wholesale Hub has connected producers and buyers across continents with reliability and care.',
  },
  '/contact': {
    title: 'Contact — Wholesale Hub',
    description:
      'Get in touch with our trade team for inquiries, samples or custom quotes.',
  },
  '/privacy': { title: 'Privacy — Wholesale Hub', description: 'Privacy policy for Wholesale Hub.' },
  '/terms': { title: 'Terms — Wholesale Hub', description: 'Terms of use for Wholesale Hub.' },
};
