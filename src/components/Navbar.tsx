import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
                        className="absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-md border border-border rounded-lg shadow-lg overflow-hidden"
                      >
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
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