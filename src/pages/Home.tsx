import Hero from '@/components/sections/Hero';
import Commitments from '@/components/sections/Commitments';
import FullManagement from '@/components/sections/FullManagement';
import Partner from '@/components/sections/Partner';
import Solutions from '@/components/sections/Solutions';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Commitments />
      <FullManagement />
      <Partner />
      <Solutions />
      <Services />
      <Pricing />
      <WhyUs />
      <Contact />
    </>
  );
}
