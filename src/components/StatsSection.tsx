import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: "500+", label: "Global Clients", icon: "🌍" },
    { number: "25+", label: "Years Experience", icon: "📅" },
    { number: "10000+", label: "Projects Delivered", icon: "🚀" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-brand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Delivering Excellence Globally
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Our track record speaks for itself with consistent delivery of innovative solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;