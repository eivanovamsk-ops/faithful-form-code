import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import iconDigital from "@/assets/service-icons/digital.png.asset.json";
import iconOrthopedics from "@/assets/service-icons/orthopedics.png.asset.json";
import iconDiagnostics from "@/assets/service-icons/diagnostics.png.asset.json";
import iconSurgery from "@/assets/service-icons/surgery.png.asset.json";
import iconTherapy from "@/assets/service-icons/therapy.png.asset.json";
import iconPediatric from "@/assets/service-icons/pediatric.png.asset.json";
import iconPeriodontology from "@/assets/service-icons/periodontology.png.asset.json";
import iconSedation from "@/assets/service-icons/sedation.png.asset.json";
import iconOrthodontics from "@/assets/service-icons/orthodontics.png.asset.json";
import iconHygiene from "@/assets/service-icons/hygiene.png.asset.json";
import { categoryToPrimarySlug } from "@/data/services";

const services = [
  {
    iconUrl: iconDigital.url,
    title: "Цифровая стоматология",
    hook: "нужны новые зубы максимально быстро",
    desc: "Цифровые технологии делают лечение точным, быстрым и безопасным.",
    items: ["Цифровой дизайн улыбки", "Имплантация по навигационным шаблонам", "Коронка + имплантат = 1 день"],
    stat: "1 день",
    statLabel: "коронка на имплантате",
    gradient: "from-[hsl(var(--brand-teal))] to-[hsl(213,55%,40%)]",
  },
  {
    iconUrl: iconOrthopedics.url,
    title: "Ортопедия",
    hook: "сильно разрушены зубы",
    desc: "Восстановление зубов с идеальной эстетикой и функцией.",
    items: ["Протезирование зубов", "Виниры", "Протезирование на имплантатах", "Съемное протезирование", "Антивозрастная стоматология"],
    stat: "5+",
    statLabel: "видов протезирования",
    gradient: "from-[hsl(var(--brand-blue))] to-[hsl(210,60%,30%)]",
  },
  {
    iconUrl: iconDiagnostics.url,
    title: "Диагностика",
    hook: "нужно сделать снимки",
    desc: "Все виды диагностики в одном месте для точной картины здоровья.",
    items: ["Прицельные снимки", "Компьютерная томография (КТ)", "Панорамные снимки (ОПТГ)", "ТРГ", "КТ ВНЧС"],
    stat: "5",
    statLabel: "видов снимков",
    gradient: "from-[hsl(var(--brand-teal))] to-[hsl(200,50%,35%)]",
  },
  {
    iconUrl: iconSurgery.url,
    title: "Хирургия и имплантация",
    hook: "нужна хирургия или имплантация",
    desc: "Имплантация по хирургическим навигационным шаблонам — приживляемость 99,6%.",
    items: ["Имплантация зубов", "Костная пластика", "Удаление кисты зуба", "Удаление зубов"],
    stat: "99,6%",
    statLabel: "приживляемость",
    gradient: "from-[hsl(var(--brand-blue))] to-[hsl(220,65%,25%)]",
  },
  {
    iconUrl: iconTherapy.url,
    title: "Терапия",
    hook: "болит зуб",
    desc: "Лечение под микроскопом — современный мировой стандарт.",
    items: ["Лечение кариеса", "Лечение пульпита", "Лечение периодонтита", "Реставрация зубов"],
    stat: "×25",
    statLabel: "увеличение микроскопом",
    gradient: "from-[hsl(var(--brand-teal))] to-[hsl(195,50%,35%)]",
  },
  {
    iconUrl: iconPediatric.url,
    title: "Детская стоматология",
    hook: "лечиться будет ребёнок",
    desc: "Адаптация, лечение в игровой форме, возможность лечения во сне.",
    items: ["Адаптационный визит", "Лечение кариеса у детей", "Лечение во сне", "Профилактика"],
    stat: "0+",
    statLabel: "возраст пациентов",
    gradient: "from-[hsl(var(--brand-blue))] to-[hsl(210,55%,35%)]",
  },
  {
    iconUrl: iconPeriodontology.url,
    title: "Пародонтология",
    hook: "требуется лечение дёсен",
    desc: "Профессиональное лечение заболеваний дёсен и мягких тканей.",
    items: ["Пародонтологическое лечение", "Лечение дёсен"],
    stat: "100%",
    statLabel: "индивидуальный подход",
    gradient: "from-[hsl(var(--brand-teal))] to-[hsl(205,50%,30%)]",
  },
  {
    iconUrl: iconSedation.url,
    title: "Антистресс лечение",
    hook: "нужно лечение зубов без боли",
    desc: "Лечение без страха: седация, лечение во сне, безболезненная анестезия.",
    items: ["Седация", "Лечение во сне (наркоз)", "Безболезненная анестезия"],
    stat: "0",
    statLabel: "боли",
    gradient: "from-[hsl(var(--brand-blue))] to-[hsl(215,60%,28%)]",
  },
  {
    iconUrl: iconOrthodontics.url,
    title: "Ортодонтия",
    hook: "нужно выровнять зубы",
    desc: "Ровные зубы и правильный прикус с помощью современных систем.",
    items: ["Исправление прикуса брекетами", "Исправление прикуса элайнерами"],
    stat: "2",
    statLabel: "системы выравнивания",
    gradient: "from-[hsl(var(--brand-teal))] to-[hsl(200,45%,38%)]",
  },
  {
    iconUrl: iconHygiene.url,
    title: "Гигиена и отбеливание",
    hook: "хотите свежее дыхание и белоснежную улыбку",
    desc: "SPA-гигиена по протоколу GBT и профессиональное отбеливание.",
    items: ["GBT-гигиена", "Профессиональное отбеливание"],
    stat: "GBT",
    statLabel: "протокол гигиены",
    gradient: "from-[hsl(var(--brand-blue))] to-[hsl(210,50%,32%)]",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-full rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-brand-teal/30 hover:shadow-[0_12px_48px_-12px_hsl(var(--brand-teal)/0.12)]">
        {/* Top accent gradient bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Stat badge — top right */}
        <div className="absolute top-5 right-5 text-right">
          <motion.div
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <span className="block text-2xl font-display font-bold text-brand-teal leading-none">
              {service.stat}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 block">
              {service.statLabel}
            </span>
          </motion.div>
        </div>

        <div className="p-6 pt-5 flex flex-col h-full">
          {/* Icon */}
          <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-brand-teal/10 group-hover:scale-105">
            <img src={service.iconUrl} alt={service.title} className="w-8 h-8 object-contain" />
          </div>

          {/* Hook */}
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-brand-teal/70 mb-2">
            если {service.hook}
          </p>

          {/* Title */}
          <h2 className="font-display font-bold text-foreground text-lg leading-tight mb-2 transition-colors duration-300 group-hover:text-brand-teal">
            {service.title}
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
            {service.desc}
          </p>

          {/* Items — revealed on hover */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex flex-wrap gap-1.5 pb-5">
                {service.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: j * 0.04 }}
                    className="inline-block px-3 py-1.5 bg-secondary text-foreground text-xs rounded-full border border-border"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA row */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">
              {service.items.length} {service.items.length > 4 ? 'направлений' : service.items.length > 1 ? 'направления' : 'направление'}
            </span>
            <motion.div
              animate={{ x: isHovered ? 0 : -4, opacity: isHovered ? 1 : 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-4 h-4 text-brand-teal" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-6">
              Мы поможем вам
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              Наши услуги
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Полный спектр стоматологических услуг с использованием цифровых технологий
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10 origin-left"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm uppercase tracking-[0.2em] mb-12"
          >
            Мы поможем вам, если…
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <ServiceCard key={s.title} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-teal">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-6">
              Нужна консультация?
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">
              Запишитесь на первичный приём — составим полный план лечения
            </p>
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-14 px-10 transition-all duration-500 hover:bg-background/90 hover:scale-[1.03] hover:shadow-xl">
              <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
