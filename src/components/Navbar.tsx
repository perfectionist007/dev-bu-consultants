import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const getSubmenuDescription = (name: string) => {
    const descriptions: { [key: string]: string } = {
      "Healthcare": "Digital solutions for healthcare providers and patients",
      "Banking & Financial Services": "Innovative fintech and banking solutions",
      "Insurance": "Modern insurance technology and platforms",
      "Telecom": "Next-generation telecommunications services",
      "Life Sciences": "Advanced solutions for pharmaceutical and biotech",
      "High Technology": "Cutting-edge technology implementations",
      "Media & Entertainment": "Digital media and entertainment platforms",
      "Government": "Public sector digital transformation",
      "Manufacturing": "Industry 4.0 and smart manufacturing",
      "Application Services": "End-to-end application development and maintenance",
      "Cloud & Infrastructure": "Scalable cloud solutions and infrastructure",
      "Cybersecurity": "Comprehensive security and threat protection",
      "Data & Analytics": "Advanced analytics and business intelligence",
      "Digital Engineering Services": "Modern engineering and development practices",
      "Intelligent Automation": "AI-powered automation and process optimization",
      "Quality Engineering": "Comprehensive testing and quality assurance",
      "BrassRing Solutions": "Talent acquisition and HR technology",
      "Small Business Solutions": "Tailored solutions for growing businesses",
      "Infinite Convergence": "Unified communications and collaboration",
    };
    return descriptions[name] || "Innovative solutions and services";
  };

  const menuItems = [
    {
      name: "Industries",
      submenu: [
        { name: "Healthcare", href: "#" },
        { name: "Banking & Financial Services", href: "#" },
        { name: "Insurance", href: "#" },
        { name: "Telecom", href: "#" },
        { name: "Life Sciences", href: "#" },
        { name: "High Technology", href: "#" },
        { name: "Media & Entertainment", href: "#" },
        { name: "Government", href: "#" },
        { name: "Manufacturing", href: "#" },
      ]
    },
    {
      name: "Services",
      submenu: [
        { name: "Application Services", href: "#" },
        { name: "Cloud & Infrastructure", href: "#" },
        { name: "Cybersecurity", href: "#" },
        { name: "Data & Analytics", href: "#" },
        { name: "Digital Engineering Services", href: "#" },
        { name: "Intelligent Automation", href: "#" },
        { name: "Quality Engineering", href: "#" },
      ]
    },
    {
      name: "Solutions",
      submenu: [
        { name: "BrassRing Solutions", href: "#" },
        { name: "Small Business Solutions", href: "#" },
        { name: "Infinite Convergence", href: "#" },
      ]
    },
    {
      name: "About Us",
      submenu: [
        { name: "Company", href: "#" },
        { name: "Leadership", href: "#" },
        { name: "Careers", href: "#" },
        { name: "News", href: "#" },
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-glass-navbar border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-primary">
                Infinite
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {hoveredMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="fixed top-16 left-0 w-full bg-white dark:bg-card border-t border-border shadow-xl z-50"
                      >
                        <div className="container mx-auto px-4 py-8">
                          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                              >
                                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                  {subItem.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {getSubmenuDescription(subItem.name)}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Careers
              </a>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:bg-muted/50"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>

              <Button variant="outline" className="hidden lg:inline-flex">
                Contact Us
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                {menuItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <button className="flex items-center justify-between w-full text-left text-foreground">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
                <a href="#" className="block text-foreground hover:text-primary">
                  Careers
                </a>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;