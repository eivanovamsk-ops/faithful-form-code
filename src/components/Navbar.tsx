import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "О клинике", href: "#about" },
  { label: "Врачи", href: "#doctors" },
  { label: "Контакты", href: "#contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tight text-foreground">
            Art<span className="text-gold">icon</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="w-4 h-4 text-gold" />
            +7 (495) 123-45-67
          </a>
          <Button asChild className="bg-gradient-gold text-foreground font-semibold hover:opacity-90 transition-opacity">
            <a href="#contacts">Записаться</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+74951234567" className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="w-4 h-4 text-gold" />
                +7 (495) 123-45-67
              </a>
              <Button asChild className="bg-gradient-gold text-foreground font-semibold w-full">
                <a href="#contacts">Записаться</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
