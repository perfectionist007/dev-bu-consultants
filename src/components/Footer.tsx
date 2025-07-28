import { motion } from "framer-motion";

const Footer = () => {
  const footerSections = [
    {
      title: "Industries",
      links: [
        "Healthcare",
        "Banking & Financial Services",
        "Insurance",
        "Telecom",
        "Life Sciences",
      ],
    },
    {
      title: "Services",
      links: [
        "Application Services",
        "Cloud & Infrastructure",
        "Cybersecurity",
        "Data & Analytics",
        "Digital Engineering",
      ],
    },
    {
      title: "Solutions",
      links: [
        "BrassRing Solutions",
        "Small Business Solutions",
        "Infinite Convergence",
        "Enterprise Solutions",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Leadership",
        "Careers",
        "News & Events",
        "Contact Us",
      ],
    },
  ];

  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="text-2xl font-bold text-white mb-4">Bottom Up Consultants</div>
              <p className="text-white text-sm leading-relaxed">
                Digitally engineering tomorrow, today. Building future-ready enterprises through innovation and strategic partnerships.
              </p>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-foreground font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white">
              © 2025 Bottom Up Consultants. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;