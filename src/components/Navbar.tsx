import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import logo from "@/assets/logo1.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null); 
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
        { name: "Government", href: "#" }      
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
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'var(--navbar-back)' }}>
  <div className="navbar-back border-b border-white/10">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/*<div className="flex-shrink-0">
          <img src={logo} alt="Bottom Up Consultant Logo" className="h-8 mr-2" />
              <div className="text-2xl font-bold text-white">
                Bottom Up Consultants
              </div>
        </div>*/}
        {/* Logo and Text */}
        <div className="flex items-center">
          <img src={logo} alt="Bottom Up Consultant Logo" className="h-12 mr-2" /> 
          <div className="text-xl font-bold text-white"> {/* Smaller Text */}
            Bottom Up Consultants
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
                  <button className="flex items-center space-x-1 text-foreground transition-colors font-600">
                      <span className="transition-all duration-300 inline-block after:block after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:scale-x-100">
                      {item.name}
                      </span>
                    {/*<ChevronDown className="h-4 w-4" />*/}
                  </button>

                  <AnimatePresence>
                    {hoveredMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="fixed top-16 left-0 w-full bg-black dark:bg-white z-50 motion-div"
                      >
                        <div className="mx-auto px-0 w-full">
                          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                            {item.submenu.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block p-8 transition-colors group hover:bg-white dark:hover:bg-black text-white dark:text-black hover:text-black dark:hover:text-white"
                              >
                                <h3 className="font-semibold transition-colors mb-1 font-500">
                                  {subItem.name}
                                </h3>
                                <p className="text-sm font-500">
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
              <a href="#" className="font-600 text-foreground hover:text-primary transition-colors">
                Careers
              </a>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:bg-muted/50 bg-transparent"
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
                        <button
                          className="flex items-center justify-between w-full text-left text-foreground"
                          onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)} // Toggle active menu
                        >
                          <span>{item.name}</span>
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        <AnimatePresence>
                          {activeMenu === item.name && ( // Only show submenu if activeMenu matches
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                    <a href="#" className="font-600 block text-foreground hover:text-primary">
                      Careers
                    </a>
                    <Button variant="outline" className="font-600 w-full">
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