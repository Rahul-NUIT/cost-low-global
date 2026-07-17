export const company = {
  name: 'Wholesale Hub',
  tagline: 'Global Sourcing & Trading',
  description:
    'A global trading partner sourcing premium food products and electronics for retailers, distributors and wholesalers worldwide.',
  address: '2937 Queen St. East Suite 1010, Brampton, ON L6T 5J1, Canada',
  email: 'info@costlowglobal.com',
  phone: '+1 365-356-0963',
  phoneHref: '+13653560963',
  hours: 'Sun – Thu, 9:00 – 18:00 GST',
  founded: 2026,
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Food Products', to: '/food-products' },
  { label: 'Electronics', to: '/electronics' },
  { label: 'About', to: '/about' },
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
      description: 'Pre-shipment inspection, certification and packaging.',
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
  body: 'Share your requirement — our trade team will respond within one business day with samples, certifications and pricing.',
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
      'Today, we operate across 40+ countries with a focused portfolio in Food Products and Electronics — two verticals where consistency, certifications and supply reliability are non-negotiable.',
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
    body: "Tell us what you need and we'll come back to you with samples, certifications and pricing.",
    cta: 'Open Enquiry Form',
  },
};

export const foodPage = {
  eyebrow: 'Category',
  title: 'Food Products',
  subtitle:
    'From protein-rich pulses to specialty spices and premium dry fruits, our food portfolio is built on trusted origins, rigorous quality control and certifications that meet international standards.',
  intro: {
    title: 'Authentic origins. Export-grade quality.',
    body: 'We work directly with farms, mills and processors across India, South-East Asia, Africa and Canada. Every consignment is sampled, lab-tested and packed to client specifications — ready for wholesale, retail or HoReCa channels worldwide.',
  },
};

export const electronicsPage = {
  eyebrow: 'Category',
  title: 'Electronics',
  subtitle:
    'A curated electronics portfolio — from mobile accessories to LED lighting and small appliances — backed by certified manufacturing partners and reliable lead times.',
  intro: {
    title: 'Certified products. Trusted manufacturers.',
    body: 'All products meet CE, RoHS, BIS or FCC standards as applicable. We support private-label, OEM and standard catalog supply — with end-to-end logistics across air and sea freight.',
  },
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
  '/about': {
    title: 'About — Wholesale Hub',
    description:
      'For over a decade Wholesale Hub has connected producers and buyers across continents with reliability and care.',
  },
  '/contact': {
    title: 'Contact — Wholesale Hub',
    description:
      'Get in touch with our trade team for inquiries, samples, certifications or custom quotes.',
  },
  '/privacy': { title: 'Privacy — Wholesale Hub', description: 'Privacy policy for Wholesale Hub.' },
  '/terms': { title: 'Terms — Wholesale Hub', description: 'Terms of use for Wholesale Hub.' },
};
