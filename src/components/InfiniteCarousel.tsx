import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InfiniteCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: "Microsoft", logo: "🔷" },
    { name: "Amazon", logo: "📦" },
    { name: "Google", logo: "🌐" },
    { name: "Apple", logo: "🍎" },
    { name: "Netflix", logo: "📺" },
    { name: "Tesla", logo: "⚡" },
    { name: "Spotify", logo: "🎵" },
    { name: "Airbnb", logo: "🏠" },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with global organizations to deliver exceptional digital experiences
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-8 overflow-hidden"
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-64 h-32 bg-card rounded-lg shadow-md flex items-center justify-center group hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {client.logo}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {client.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default InfiniteCarousel;