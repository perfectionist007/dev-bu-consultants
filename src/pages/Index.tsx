import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import InteractiveSection from "@/components/InteractiveSection";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSlider />
      <InteractiveSection />
      <InfiniteCarousel />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
