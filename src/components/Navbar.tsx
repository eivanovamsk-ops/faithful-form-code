import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoFull from "@/assets/logo-full.png";
import logoWhite from "@/assets/logo-white.png";
import { cn } from "@/lib/utils";

const patientSubLinks = [
  { label: "Симптомы", href: "/symptoms" },
  { label: "Программа лояльности", href: "/pacientam/loyalnost" },
  { label: "Памятки и рекомендации", href: "/pacientam/pamyatki" },
  { label: "Блог", href: "/pacientam/blog" },
];

const navLinks = [
  { label: "Услуги", href: "/uslugi" },
  { label: "Цены", href: "/prices" },
  { label: "Врачи", href: "/vrachi" },
  { label: "Фото работ", href: "/foto-rabot" },
  { label: "Пациентам", href: "/pacientam", subLinks: patientSubLinks },
  { label: "О клинике", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolid = scrolled || !isHome;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div
        className={cn(
          "transition-all duration-500",
          showSolid ? "bg-foreground" : "bg-foreground/40 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-xs">
          <span className="hidden sm:block text-primary-foreground/60">
            Цифровые технологии — предсказуемый результат лечения
          </span>
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <span className="flex items-center gap-1.5 text-primary-foreground/60">
              <Clock className="w-3 h-3" />
              Ежедневно с 9:00 до 21:00
            </span>
            <a href="mailto:clinic@articon.pro" className="flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
              <Mail className="w-3 h-3" />
              clinic@articon.pro
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-all duration-500 border-b",
          showSolid
            ? "bg-background/95 backdrop-blur-lg border-border shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-background/10 backdrop-blur-md border-primary-foreground/10"
        )}
      >
        <div className={cn("container mx-auto flex items-center justify-between px-4 transition-all duration-500", showSolid ? "h-14" : "h-16")}>
          <Link to="/" className="flex items-center group">
            <img
              src={showSolid ? logoFull : logoWhite}
              alt="Articon Dental Digital Solutions"
              className="h-10 w-auto transition-all duration-500 group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => 
              link.subLinks ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                    setDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
                  }}
                >
                  <button
                    className={cn(
                      "text-sm font-medium transition-colors duration-300 flex items-center gap-1",
                      showSolid
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground",
                      location.pathname.startsWith(link.href) && "text-brand-blue"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", dropdownOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[220px]">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              to={sub.href}
                              className={cn(
                                "block px-5 py-2.5 text-sm transition-colors duration-200 hover:bg-secondary hover:text-brand-blue",
                                location.pathname === sub.href ? "text-brand-blue font-medium" : "text-muted-foreground"
                              )}
                              onClick={() => setDropdownOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-blue after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left",
                    showSolid
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground",
                    location.pathname === link.href && "after:scale-x-100"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+74959759598" className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors duration-500",
              showSolid ? "text-foreground" : "text-primary-foreground"
            )}>
              <Phone className="w-4 h-4 text-brand-blue" />
              +7(495)975-95-98
            </a>
            <Button asChild className="bg-brand-teal text-primary-foreground font-semibold transition-all duration-500 hover:bg-brand-teal/85 hover:shadow-[0_0_20px_hsl(174,72%,46%,0.3)] hover:scale-[1.03]">
              <Link to="/contacts">Запись на приём</Link>
            </Button>
          </div>

          <button
            className={cn(
              "lg:hidden transition-colors duration-500",
              showSolid ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
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
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.subLinks ? (
                    <div>
                      <button
                        onClick={() => setMobileSubOpen(!mobileSubOpen)}
                        className={cn(
                          "text-base font-medium transition-colors py-1 flex items-center gap-1 w-full",
                          location.pathname.startsWith(link.href) ? "text-brand-blue" : "text-muted-foreground"
                        )}
                      >
                        {link.label}
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", mobileSubOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {mobileSubOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pt-1 flex flex-col gap-2">
                              {link.subLinks.map((sub) => (
                                <Link
                                  key={sub.href}
                                  to={sub.href}
                                  onClick={() => { setIsOpen(false); setMobileSubOpen(false); }}
                                  className={cn(
                                    "text-sm py-1 transition-colors",
                                    location.pathname === sub.href ? "text-brand-blue font-medium" : "text-muted-foreground hover:text-foreground"
                                  )}
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-medium transition-colors py-1 block",
                        location.pathname === link.href ? "text-brand-blue" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <a href="tel:+74959759598" className="flex items-center gap-2 text-sm font-semibold text-foreground pt-2">
                <Phone className="w-4 h-4 text-brand-blue" />
                +7(495)975-95-98
              </a>
              <Button asChild className="bg-brand-teal text-primary-foreground font-semibold w-full mt-2 transition-all duration-300">
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
