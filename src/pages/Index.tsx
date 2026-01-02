import Hero from "@/components/sections/Hero";
import Offerings from "@/components/sections/Offerings";
import HowItWorks from "@/components/sections/HowItWorks";
import CorporateGifting from "@/components/sections/CorporateGifting";
import GiftConcierge from "@/components/sections/GiftConcierge";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Offerings />
      <HowItWorks />
      <CorporateGifting />
      <GiftConcierge />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
