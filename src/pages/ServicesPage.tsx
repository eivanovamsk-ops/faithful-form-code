import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Stethoscope, ScanLine, Syringe, HeartPulse, Baby, Smile, Sparkles, ShieldCheck, Scissors } from "lucide-react";

const services = [
  { icon: Cpu, title: "Цифровая стоматология", desc: "Новые зубы максимально быстро. Цифровые технологии делают лечение точным, быстрым и безопасным.", items: ["Цифровой дизайн улыбки", "Имплантация по навигационным шаблонам", "Коронка + имплантат = 1 день"] },
  { icon: Stethoscope, title: "Ортопедия", desc: "Восстановление сильно разрушенных зубов с идеальной эстетикой.", items: ["Протезирование зубов", "Виниры", "Протезирование на имплантатах", "Съемное протезирование", "Антивозрастная стоматология"] },
  { icon: ScanLine, title: "Диагностика", desc: "Все виды диагностики в одном месте для точной картины вашего здоровья.", items: ["Прицельные снимки", "Компьютерная томография", "Панорамные снимки (ОПТГ)", "ТРГ", "КТ ВНЧС"] },
  { icon: Syringe, title: "Хирургия и имплантация", desc: "Имплантация по хирургическим навигационным шаблонам — гарантия безопасности. Приживляемость 99,6%.", items: ["Имплантация зубов", "Костная пластика", "Удаление кисты зуба", "Удаление зубов"] },
  { icon: HeartPulse, title: "Терапия", desc: "Лечение под микроскопом — современный мировой стандарт.", items: ["Лечение кариеса", "Лечение пульпита", "Реставрация зубов"] },
  { icon: Baby, title: "Детская стоматология", desc: "Особый подход к детям: адаптация, лечение в игровой форме.", items: ["Адаптационный визит", "Лечение кариеса у детей", "Лечение во сне", "Профилактика"] },
  { icon: Scissors, title: "Пародонтология", desc: "Профессиональное лечение заболеваний дёсен.", items: ["Пародонтологическое лечение", "Лечение дёсен"] },
  { icon: ShieldCheck, title: "Антистресс лечение", desc: "Лечение зубов без страха и боли.", items: ["Седация", "Лечение во сне", "Безболезненная анестезия"] },
  { icon: Smile, title: "Ортодонтия", desc: "Ровные зубы и правильный прикус.", items: ["Исправление прикуса брекетами", "Элайнеры"] },
  { icon: Sparkles, title: "Профессиональная гигиена и отбеливание", desc: "Spa-гигиена по протоколу GBT.", items: ["GBT-гигиена", "Отбеливание"] },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } } };

const ServicesPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Мы поможем вам</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Наши услуги</h1>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group p-7 rounded-xl bg-card border border-border hover:border-brand-blue/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-brand-blue transition-colors duration-300">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.items.map((it) => (
                      <li key={it} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
