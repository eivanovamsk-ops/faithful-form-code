import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Articon" className="h-10 w-auto" />
            <div>
              <span className="font-display text-lg font-bold text-primary-foreground">ARTICON</span>
              <p className="text-primary-foreground/50 text-xs tracking-wider">Dental Digital Solutions</p>
            </div>
          </div>

          <div className="flex gap-8 text-sm">
            {["Услуги", "О клинике", "Врачи", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item === "Услуги" ? "services" : item === "О клинике" ? "about" : item === "Врачи" ? "doctors" : "contacts"}`}
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © 2025 Articon. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
