import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Cpu, Stethoscope, ScanLine, Syringe, HeartPulse, Baby,
  Smile, Sparkles, ShieldCheck, Scissors, ArrowRight, ChevronRight
} from "lucide-react";

const services = [
  { icon: Cpu, title: "Цифровая стоматология", desc: "Новые зубы максимально быстро. Цифровые технологии делают лечение точным, быстрым и безопасным.", items: ["Цифровой дизайн улыбки", "Имплантация по навигационным шаблонам", "Коронка + имплантат = 1 день"], accent: "brand-teal" },
  { icon: Stethoscope, title: "Ортопедия", desc: "Восстановление сильно разрушенных зубов с идеальной эстетикой.", items: ["Протезирование зубов", "Виниры", "Протезирование на имплантатах", "Съемное протезирование", "Антивозрастная стоматология"], accent: "brand-blue" },
  { icon: ScanLine, title: "Диагностика", desc: "Все виды диагностики в одном месте для точной картины вашего здоровья.", items: ["Прицельные снимки", "Компьютерная томография", "Панорамные снимки (ОПТГ)", "ТРГ", "КТ ВНЧС"], accent: "brand-orange" },
  { icon: Syringe, title: "Хирургия и имплантация", desc: "Имплантация по хирургическим навигационным шаблонам — гарантия безопасности. Приживляемость 99,6%.", items: ["Имплантация зубов", "Костная пластика", "Удаление кисты зуба", "Удаление зубов"], accent: "brand-teal" },
  { icon: HeartPulse, title: "Терапия", desc: "Лечение под микроскопом — современный мировой стандарт.", items: ["Лечение кариеса", "Лечение пульпита", "Реставрация зубов"], accent: "brand-blue" },
  { icon: Baby, title: "Детская стоматология", desc: "Особый подход к детям: адаптация, лечение в игровой форме.", items: ["Адаптационный визит", "Лечение кариеса у детей", "Лечение во сне", "Профилактика"], accent: "brand-orange" },
  { icon: Scissors, title: "Пародонтология", desc: "Профессиональное лечение заболеваний дёсен.", items: ["Пародонтологическое лечение", "Лечение дёсен"], accent: "brand-teal" },
  { icon: ShieldCheck, title: "Антистресс лечение", desc: "Лечение зубов без страха и боли.", items: ["Седация", "Лечение во сне", "Безболезненная анестезия"], accent: "brand-blue" },
  { icon: Smile, title: "Ортодонтия", desc: "Ровные зубы и правильный прикус.", items: ["Исправление прикуса брекетами", "Элайнеры"], accent: "brand-orange" },
  { icon: Sparkles, title: "Проф. гигиена и отбеливание", desc: "Spa-гигиена по протоколу GBT.", items: ["GBT-гигиена", "Отбеливание"], accent: "brand-teal" },
];

const ServicesPage = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10 origin-left"
        />
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-4">
            {services.map((s, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div
                    onClick={() => setExpandedIndex(isExpanded ? null : i)}
                    className={`group cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden ${
                      isExpanded
                        ? 'border-brand-teal/30 bg-card shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)]'
                        : 'border-border bg-card hover:border-brand-teal/20 hover:shadow-lg'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-5 p-7">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                        isExpanded ? 'bg-brand-teal scale-110' : 'bg-secondary group-hover:bg-brand-teal/10'
                      }`}>
                        <s.icon className={`w-6 h-6 transition-colors duration-500 ${
                          isExpanded ? 'text-primary-foreground' : 'text-brand-blue group-hover:text-brand-teal'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className={`font-display font-semibold text-lg transition-colors duration-300 ${
                          isExpanded ? 'text-brand-teal' : 'text-foreground group-hover:text-brand-teal'
                        }`}>
                          {s.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mt-1 line-clamp-1">{s.desc}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                          isExpanded ? 'text-brand-teal' : 'text-muted-foreground'
                        }`} />
                      </motion.div>
                    </div>

                    {/* Expandable content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <div className="px-7 pb-7 pt-0">
                            <div className="border-t border-border pt-6">
                              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                              <div className="grid sm:grid-cols-2 gap-3">
                                {s.items.map((it, j) => (
                                  <motion.div
                                    key={it}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: j * 0.05 }}
                                    className="flex items-center gap-3 text-sm text-foreground"
                                  >
                                    <span className="w-2 h-2 rounded-full bg-brand-teal shrink-0" />
                                    {it}
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
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
