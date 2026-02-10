import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">
            </span>
          </div>
          <span
            className={`font-display font-bold text-xl ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <img src="mrlogo1.jpeg" alt="MR Technologies" className="h-16 rounded-lg " />
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant={isScrolled ? "outline" : "heroOutline"}
            size="sm"
            asChild
          >
            <a
              href="https://www.medhatest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Training
            </a>
          </Button>
          <Button variant={isScrolled ? "default" : "hero"} size="sm" asChild>
            <a
              href="https://www.rubiksbs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hiring
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={isScrolled ? "text-foreground" : "text-primary-foreground"}
              size={24}
            />
          ) : (
            <Menu
              className={isScrolled ? "text-foreground" : "text-primary-foreground"}
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground font-medium py-2 hover:text-secondary transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-3 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a
                    href="https://www.medhatest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Training
                  </a>
                </Button>
                <Button variant="default" size="sm" className="flex-1" asChild>
                  <a
                    href="https://www.rubiksbs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hiring
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
