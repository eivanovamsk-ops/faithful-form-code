import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Услуги", href: "/uslugi" },
  { label: "Врачи", href: "/vrachi" },
  { label: "Фото работ", href: "/foto-rabot" },
  { label: "Цены", href: "/ceny" },
  { label: "Пациентам", href: "/pacientam" },
  { label: "О клинике", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-foreground text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-xs">
          <span className="hidden sm:block text-primary-foreground/70">
            Цифровые технологии — предсказуемый результат лечения
          </span>
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <span className="flex items-center gap-1.5 text-primary-foreground/70">
              <Clock className="w-3 h-3" />
              Ежедневно с 9:00 до 21:00
            </span>
            <a href="mailto:clinic@articon.pro" className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Mail className="w-3 h-3" />
              clinic@articon.pro
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIcon} alt="Articon" className="h-9 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">ARTICON</span>
              <span className="text-[9px] tracking-[0.15em] text-muted-foreground uppercase">Dental Digital Solutions</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-brand-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+74959759598" className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="w-4 h-4 text-brand-blue" />
              +7(495)975-95-98
            </a>
            <Button asChild className="bg-brand-blue text-primary-foreground font-semibold hover:bg-brand-blue/90 transition-colors">
              <Link to="/contacts">Запись на приём</Link>
            </Button>
          </div>

          <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-brand-blue transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+74959759598" className="flex items-center gap-2 text-sm font-semibold text-foreground pt-2">
                <Phone className="w-4 h-4 text-brand-blue" />
                +7(495)975-95-98
              </a>
              <Button asChild className="bg-brand-blue text-primary-foreground font-semibold w-full mt-2">
                <Link to="/contacts" onClick={() => setIsOpen(false)}>Запись на приём</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
