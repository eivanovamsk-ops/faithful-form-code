import { motion } from "framer-motion";
import { Sparkles, Shield, Smile, ScanLine, HeartPulse, Crown } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Эстетическая стоматология",
    description: "Виниры, отбеливание, художественная реставрация — создаём идеальную улыбку.",
  },
  {
    icon: Shield,
    title: "Имплантация",
    description: "Передовые системы имплантов с пожизненной гарантией и минимальной реабилитацией.",
  },
  {
    icon: Smile,
    title: "Ортодонтия",
    description: "Невидимые элайнеры и брекет-системы для ровных зубов в любом возрасте.",
  },
  {
    icon: ScanLine,
    title: "Диагностика",
    description: "3D-сканирование, цифровые снимки и компьютерная томография.",
  },
  {
    icon: HeartPulse,
    title: "Терапия",
    description: "Безболезненное лечение кариеса, пульпита и заболеваний дёсен.",
  },
  {
    icon: Crown,
    title: "Протезирование",
    description: "Коронки, мосты и съёмные протезы из лучших материалов.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-brand-blue">Наши услуги</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Полный спектр стоматологической помощи
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-brand-blue/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-blue flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
