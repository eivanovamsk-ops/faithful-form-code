import { Link } from "react-router-dom";
import priceListAsset from "@/assets/prajs2026.xlsx.asset.json";
import logoWhite from "@/assets/logo-white.png";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = [
  { label: "Услуги", href: "/uslugi" },
  { label: "Врачи", href: "/vrachi" },
  { label: "Цены", href: "/prices" },
  { label: "О клинике", href: "/about" },
  { label: "Контакты", href: "/contacts" },
  { label: "Пациентам", href: "/pacientam" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center mb-5 group">
              <img src={logoWhite} alt="Articon Dental Digital Solutions" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Центр цифровой стоматологии. 10 место в рейтинге StartsmileTop при поддержке Forbes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5 text-sm tracking-wide uppercase">Разделы</h4>
            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-5 text-sm tracking-wide uppercase">Контакты</h4>
            <div className="space-y-4 text-sm">
              <a href="tel:+74959759598" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                <Phone className="w-4 h-4 text-brand-blue" />
                +7 (495) 975-95-98
              </a>
              <a href="mailto:clinic@articon.pro" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300">
                <Mail className="w-4 h-4 text-brand-blue" />
                clinic@articon.pro
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/50">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                Москва, ул. Серпуховский вал 21, корп 4
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/50">
                <Clock className="w-4 h-4 text-brand-blue" />
                Ежедневно с 9:00 до 21:00
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/30 text-sm">© 2026 Articon. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href={priceListAsset.url} download="prajs2026.xlsx" className="text-primary-foreground/30 text-sm hover:text-primary-foreground/50 transition-colors duration-300">
              Прайс-лист 2026
            </a>
            <Link to="/patient-rules" className="text-primary-foreground/30 text-sm hover:text-primary-foreground/50 transition-colors duration-300">
              Правила поведения
            </Link>
            <Link to="/privacy" className="text-primary-foreground/30 text-sm hover:text-primary-foreground/50 transition-colors duration-300">
              Политика конфиденциальности
            </Link>
            <Link to="/consent" className="text-primary-foreground/30 text-sm hover:text-primary-foreground/50 transition-colors duration-300">
              Согласие на обработку ПД
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
