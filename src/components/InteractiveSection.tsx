import { useState } from "react";
import { motion } from "framer-motion";

const InteractiveSection = () => {
  const [activeItem, setActiveItem] = useState(0);

  const leftItems = [
    {
      id: 0,
      title: "Application Services",
      description: "End-to-end application development and maintenance services",
      icon: "💻",
    },
    {
      id: 1,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud solutions and infrastructure management",
      icon: "☁️",
    },
    {
      id: 2,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and threat protection",
      icon: "🔒",
    },
    {
      id: 3,
      title: "Data & Analytics",
      description: "Advanced data insights and analytics platforms",
      icon: "📊",
    },
  ];

  const rightContent = [
    {
      id: 0,
      title: "Application Services Excellence",
      content: "Our application services team delivers cutting-edge solutions that transform your business processes. From legacy system modernization to new application development, we ensure your technology stack drives business value.",
      features: ["Legacy Modernization", "API Development", "Mobile Applications", "Microservices Architecture"],
    },
    {
      id: 1,
      title: "Cloud Infrastructure Solutions",
      content: "Transform your infrastructure with our comprehensive cloud services. We help organizations migrate, optimize, and manage their cloud environments for maximum efficiency and scalability.",
      features: ["Cloud Migration", "Multi-Cloud Strategy", "DevOps Automation", "Infrastructure as Code"],
    },
    {
      id: 2,
      title: "Advanced Cybersecurity",
      content: "Protect your digital assets with our robust cybersecurity solutions. Our comprehensive approach covers threat detection, prevention, and response to keep your business secure.",
      features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"],
    },
    {
      id: 3,
      title: "Data-Driven Analytics",
      content: "Unlock the power of your data with our advanced analytics solutions. We help organizations make informed decisions through comprehensive data insights and predictive analytics.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Machine Learning"],
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Interactive Menu */}
          <div className="space-y-4">
            {leftItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeItem === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-muted/50"
                }`}
                onMouseEnter={() => setActiveItem(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className={`text-sm ${
                      activeItem === index ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Dynamic Content */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {rightContent[activeItem].title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {rightContent[activeItem].content}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {rightContent[activeItem].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;