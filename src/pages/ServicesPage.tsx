import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cpu, Stethoscope, ScanLine, Syringe, HeartPulse, Baby, Smile, Sparkles, ShieldCheck, Scissors } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Цифровая стоматология",
    desc: "Новые зубы максимально быстро. Цифровые технологии делают лечение точным, быстрым и безопасным.",
    items: ["Цифровой дизайн улыбки", "Имплантация по навигационным шаблонам", "Коронка + имплантат = 1 день"],
  },
  {
    icon: Stethoscope,
    title: "Ортопедия",
    desc: "Восстановление сильно разрушенных зубов с идеальной эстетикой.",
    items: ["Протезирование зубов", "Виниры", "Протезирование на имплантатах", "Съемное протезирование", "Антивозрастная стоматология"],
  },
  {
    icon: ScanLine,
    title: "Диагностика",
    desc: "Все виды диагностики в одном месте для точной картины вашего здоровья.",
    items: ["Прицельные снимки", "Компьютерная томография", "Панорамные снимки (ОПТГ)", "ТРГ", "КТ ВНЧС"],
  },
  {
    icon: Syringe,
    title: "Хирургия и имплантация",
    desc: "Имплантация по хирургическим навигационным шаблонам — гарантия безопасности. Приживляемость 99,6%.",
    items: ["Имплантация зубов", "Костная пластика", "Удаление кисты зуба", "Удаление зубов"],
  },
  {
    icon: HeartPulse,
    title: "Терапия",
    desc: "Лечение под микроскопом — современный мировой стандарт. Высочайшая точность и безупречное качество.",
    items: ["Лечение кариеса", "Лечение пульпита", "Реставрация зубов"],
  },
  {
    icon: Baby,
    title: "Детская стоматология",
    desc: "Особый подход к детям: адаптация, лечение в игровой форме, подарок после приёма.",
    items: ["Адаптационный визит", "Лечение кариеса у детей", "Лечение во сне", "Профилактика"],
  },
  {
    icon: Scissors,
    title: "Пародонтология",
    desc: "Профессиональное лечение заболеваний дёсен для здоровья всей полости рта.",
    items: ["Пародонтологическое лечение", "Лечение дёсен"],
  },
  {
    icon: ShieldCheck,
    title: "Антистресс лечение",
    desc: "Лечение зубов без страха и боли. Все методы — от седации до лечения во сне.",
    items: ["Седация", "Лечение во сне", "Безболезненная анестезия"],
  },
  {
    icon: Smile,
    title: "Ортодонтия",
    desc: "Ровные зубы и правильный прикус для красивой улыбки и здоровья.",
    items: ["Исправление прикуса брекетами", "Элайнеры"],
  },
  {
    icon: Sparkles,
    title: "Профессиональная гигиена и отбеливание",
    desc: "Spa-гигиена на аппарате Prophylaxis Master по протоколу GBT — самый эффективный вид гигиены.",
    items: ["GBT-гигиена", "Отбеливание"],
  },
];

const ServicesPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Наши услуги</h1>
          <p className="mt-3 text-lg text-muted-foreground">Мы поможем вам…</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-brand-blue/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-brand-blue flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-semibold text-foreground text-lg mb-2">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.desc}</p>
                  <ul className="space-y-1">
                    {s.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
