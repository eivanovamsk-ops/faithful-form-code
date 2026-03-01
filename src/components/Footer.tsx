const Footer = () => {
  return (
    <footer className="bg-gradient-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl font-bold text-primary-foreground">
              Art<span className="text-gradient-gold">icon</span>
            </span>
            <p className="text-primary-foreground/60 text-sm mt-2">
              Премиум стоматология в центре Москвы
            </p>
          </div>

          <div className="flex gap-8 text-sm">
            {["Услуги", "О клинике", "Врачи", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item === "Услуги" ? "services" : item === "О клинике" ? "about" : item === "Врачи" ? "doctors" : "contacts"}`}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
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
