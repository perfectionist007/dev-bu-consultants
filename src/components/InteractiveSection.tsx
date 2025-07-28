import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"


const InteractiveSection = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const leftItems = [
    {
      id: 0,
      title: "Application Services",
      icon: "💻",
    },
    {
      id: 1,
      title: "Cloud & Infrastructure",
      icon: "☁️",
    },
    {
      id: 2,
      title: "Cybersecurity",
      icon: "🔒",
    },
    {
      id: 3,
      title: "Data & Analytics",
      icon: "📊",
    },
  ];

  const rightContent = [
    {
      id: 0,
      title: "Optimizing, modernizing, and scaling the technology landscape to reimagine care for payers and providers",
      backgroundImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80",

    },
    {
      id: 1,
      title: "Creating smarter products and processes through an innovative platformization approach",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",

    },
    {
      id: 2,
      title: "Bottom Up Consultant's approach to Revolutionizing the Insurance Landscape with AI-First Solutions",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",

    },
    {
      id: 3,
      title: "Next-gen digital platforms and differentiated offerings for 5G technologies",
      backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",

    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-white dark:text-black max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid lg:grid-cols-[38%_1fr] gap-12 items-start">
          <div className="space-y-4">
            {leftItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`p-6 border border-black rounded-lg cursor-pointer transition-all duration-300 ${
                  activeItem === index
                    ? "bg-card text-white dark:text-white shadow-lg"
                    : "bg-white text-black"
                }`}
              onMouseEnter={() => {
                setActiveItem(index)
                setHoveredItem(index)
              }}
              onMouseLeave={() => {
                setHoveredItem(null)
              }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  </div>
                </div>

                 {/* Animated Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10, scale: 0.8 }}
                  animate={{
                    opacity: hoveredItem === index ? 1 : 0,
                    x: hoveredItem === index ? 0 : -10,
                    scale: hoveredItem === index ? 1 : 0.8,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="flex items-center"
                >
                  <div
                    className={`p-1 rounded-full transition-colors duration-300 ${
                      activeItem === index ? "bg-white/20" : "bg-blue-100"
                    }`}
                  >
                    <ChevronRight
                      className={`w-5 h-5 transition-colors duration-300 ${
                        activeItem === index ? "text-white" : "text-blue-600"
                      }`}
                    />
                  </div>
                </motion.div>
                </div>      
              </motion.div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <motion.div
              key={activeItem}
              initial={{ x: 5 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.1 }}
              className="relative bg-card/80 p-8 rounded-lg shadow-lg border border-border/50 overflow-hidden h-96"
            >
              {/* Background Image Overlay */}
              <motion.div 
                key={`bg-${activeItem}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `url(${rightContent[activeItem].backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0" />
              </motion.div>

              {/* Content */}
              <div className="absolute z-10 p-4 bottom-0 mr-8 mb-8" style={{ backgroundColor: "rgba(29, 78, 216, 0.5)" }}>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {rightContent[activeItem].title}
                </h3>
                
                {/* Read More Button */}
                <div>
                  <Button 
                    variant="outline" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;