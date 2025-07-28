"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"
import car1 from "@/assets/car1.jpg";
import car2 from "@/assets/car2.png";
import car3 from "@/assets/car3.png";
import car4 from "@/assets/car4.jpg";
import car5 from "@/assets/car5.png";
import car6 from "@/assets/car6.png";

// Carousel items data
const carouselItems = [
  { id: 1, title: "Mountain Adventure", description: "Experience breathtaking views and challenging trails in the heart of nature's wilderness", backgroundImage: car1 },
  { id: 2, title: "Ocean Exploration", description: "Dive into crystal clear waters and discover the hidden treasures beneath the waves", backgroundImage: car2 },
  { id: 3, title: "Forest Discovery", description: "Walk through ancient forests and connect with the peaceful sounds of nature", backgroundImage: car3 },
  { id: 4, title: "Desert Journey", description: "Explore vast sand dunes and witness stunning sunsets in the endless desert", backgroundImage: car4 },
  { id: 5, title: "City Lights", description: "Experience the vibrant energy and endless possibilities of urban exploration", backgroundImage: car5 },
  { id: 6, title: "Arctic Wonder", description: "Witness the magical northern lights and pristine beauty of the frozen wilderness", backgroundImage: car6 },
  { id: 7, title: "Tropical Paradise", description: "Relax on pristine beaches and enjoy the warm embrace of tropical paradise", backgroundImage: car3 },
  { id: 8, title: "Valley Serenity", description: "Find peace in rolling green valleys where time seems to stand perfectly still", backgroundImage: car4 },
]

export default function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const itemsPerView = 4
  const totalItems = carouselItems.length

  // Create infinite loop by duplicating items
  const infiniteItems = [...carouselItems, ...carouselItems, ...carouselItems]

  // Start auto-animation
  const startAnimation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1
        if (nextIndex >= totalItems) {
          return 0
        }
        return nextIndex
      })
    }, 3000)
  }

  // Stop auto-animation
  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  // Auto-animate when not hovered
  useEffect(() => {
    if (!isHovered) {
      startAnimation()
    } else {
      stopAnimation()
    }

    return () => stopAnimation()
  }, [isHovered])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1
      if (nextIndex >= totalItems) {
        return 0
      }
      return nextIndex
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1
      if (prevIndex < 0) {
        return totalItems - 1
      }
      return prevIndex
    })
  }

  // Calculate the transform value
  const getTransformValue = () => {
    const itemWidth = 23 // Adjusted width to fit exactly 4 items
    const gapWidth = 1.5 // 1.5rem gap converted to percentage equivalent
    return `calc(-${currentIndex * itemWidth}% - ${currentIndex * gapWidth}rem)`
  }

  // Make carousel draggable
  return (
    <div className="p-8 min-h-screen">
      {/* Carousel Section */}
      <div className="mt-2">
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-3xl font-bold text-white dark:text-black mb-2">Future Ready Services</h3>
            <p className="text-white dark:text-black text-lg">Transforming enterprises with innovative digital solutions

</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Previous items"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700 hover:text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Next items"
            >
              <ChevronRight className="w-5 h-5 text-gray-700 hover:text-blue-600" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false)
            setHoveredItem(null)
          }}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: getTransformValue(),
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            drag="x" // Enable horizontal drag
            dragConstraints={{ left: -100, right: 0 }} // Set drag boundaries
            dragElastic={0.2} // Controls how "elastic" the drag is
            onDrag={(event, info) => {
              // Calculate drag sensitivity and update index accordingly
              const delta = Math.round(info.offset.x / 200)
              setCurrentIndex((prev) => {
                let newIndex = prev - delta
                if (newIndex < 0) newIndex = totalItems - 1
                if (newIndex >= totalItems) newIndex = 0
                return newIndex
              })
            }}
          >
            {infiniteItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex-shrink-0"
                style={{ width: `calc(23%)`, height: '24rem' }} 
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Background Image */}
                <div className="relative h-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.backgroundImage})`,
                    }}
                    animate={{
                      scale: hoveredItem === item.id ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h4 className="text-2xl font-bold text-white mb-2 z-10">{item.title}</h4>

                    {/* Animated Description */}
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{
                        y: hoveredItem === item.id ? 0 : 100,
                        opacity: hoveredItem === item.id ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                      className="bg-black/60 backdrop-blur-sm rounded-lg p-4 mt-2"
                    >
                      <p className="text-white text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
