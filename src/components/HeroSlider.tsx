import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "DIGITALLY ENGINEERING TOMORROW, TODAY",
      subtitle: "Building future-ready enterprises through innovation and strategic partnerships",
      backgroundImage: heroBg1,
    },
    {
      id: 2,
      title: "TRANSFORMING BUSINESS WITH TECHNOLOGY",
      subtitle: "Empowering organizations with cutting-edge digital solutions and expertise",
      backgroundImage: heroBg2,
    },
    {
      id: 3,
      title: "INNOVATING FOR THE DIGITAL FUTURE",
      subtitle: "Creating seamless digital experiences that drive growth and success",
      backgroundImage: heroBg3,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-brand/50" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;