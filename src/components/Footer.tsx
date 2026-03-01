import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = [
  { label: "Услуги", href: "/uslugi" },
  { label: "Врачи", href: "/vrachi" },
  { label: "Цены", href: "/ceny" },
  { label: "О клинике", href: "/about" },
  { label: "Контакты", href: "/contacts" },
  { label: "Пациентам", href: "/pacientam" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoIcon} alt="Articon" className="h-10 w-auto" />
              <div>
                <span className="font-display text-lg font-bold text-primary-foreground">ARTICON</span>
                <p className="text-primary-foreground/40 text-[10px] tracking-wider uppercase">Dental Digital Solutions</p>
              </div>
            </Link>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Центр цифровой стоматологии. 10 место в рейтинге StartsmileTop при поддержке Forbes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Разделы</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:+74959759598" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 text-brand-blue" />
                +7 (495) 975-95-98
              </a>
              <a href="mailto:clinic@articon.pro" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 text-brand-blue" />
                clinic@articon.pro
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/50">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                Москва, ул. Серпуховский вал 21, корп 4
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/50">
                <Clock className="w-4 h-4 text-brand-blue" />
                Ежедневно с 9:00 до 21:00
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/30 text-sm">
            © 2025 Articon. Все права защищены.
          </p>
          <Link to="/privacy" className="text-primary-foreground/30 text-sm hover:text-primary-foreground/50 transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
