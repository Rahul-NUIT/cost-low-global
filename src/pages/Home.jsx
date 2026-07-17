import Hero from '../components/sections/Hero';
import Marquee from '../components/ui/Marquee';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import HelpBanner from '../components/sections/HelpBanner';
import Categories from '../components/sections/Categories';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import Process from '../components/sections/Process';
import CtaBanner from '../components/sections/CtaBanner';
import { useSeo } from '../hooks/useSeo';
import { marqueeItems, seo } from '../data/site';

export default function Home() {
  useSeo(seo['/']);

  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <WhyChooseUs />
      <HelpBanner />
      <Categories />
      <FeaturedProducts />
      <Process />
      <CtaBanner />
    </>
  );
}
