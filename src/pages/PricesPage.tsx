import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const priceCategories = [
  { title: "Первичная консультация", note: "Длительность до 60 минут", items: [
    { name: "Первичный осмотр врача стоматолога (осмотр, консультация, план лечения)", price: "3 500 ₽" },
    { name: "Компьютерная томография (КТ)", price: "7 600 ₽" },
    { name: "Панорамный снимок (ОПТГ)", price: "3 000 ₽" },
    { name: "Прицельный снимок", price: "850 ₽" },
  ]},
  { title: "Терапия", note: "Лечение под микроскопом с коффердамом", items: [
    { name: "Лечение кариеса", price: "от 9 300 ₽" },
    { name: "Лечение кариеса методом Icon", price: "7 200 ₽" },
    { name: "Герметизация фиссур", price: "от 5 300 ₽" },
    { name: "Лечение пульпита (1-канальный зуб)", price: "от 18 600 ₽" },
    { name: "Лечение пульпита (2-канальный зуб)", price: "от 28 000 ₽" },
    { name: "Лечение пульпита (3-канальный зуб)", price: "от 42 000 ₽" },
    { name: "Художественная реставрация зуба", price: "от 16 200 ₽" },
  ]},
  { title: "Хирургия. Удаление зубов", note: "Безболезненно с использованием современных анестетиков", items: [
    { name: "Простое удаление постоянных зубов", price: "от 7 500 ₽" },
    { name: "Сложное удаление постоянного зуба", price: "от 11 000 ₽" },
    { name: "Удаление зуба мудрости", price: "от 19 300 ₽" },
    { name: "Удаление временного зуба", price: "от 2 900 ₽" },
    { name: "Удаление новообразования", price: "от 10 500 ₽" },
  ]},
  { title: "Имплантация", note: "Имплантат + коронка = 1 день! Приживляемость 99,6%", items: [
    { name: "Имплантат Straumann (Швейцария)", price: "от 65 000 ₽" },
    { name: "Навигационный хирургический шаблон", price: "от 25 000 ₽" },
    { name: "Временная коронка на имплантат", price: "от 15 000 ₽" },
  ]},
  { title: "Профессиональная гигиена", note: "GBT протокол на аппарате Prophylaxis Master", items: [
    { name: "Комплексная гигиена полости рта (взрослые)", price: "от 9 500 ₽" },
    { name: "Комплексная гигиена полости рта (дети)", price: "от 5 500 ₽" },
    { name: "Отбеливание зубов", price: "от 25 000 ₽" },
  ]},
];

const PricesPage = () => {
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set([0]));

  const toggleCategory = (index: number) => {
    setOpenCategories(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

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
              Стоимость
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              Цены
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Прозрачное ценообразование без скрытых доплат
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

      {/* Disclaimer */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-muted-foreground text-sm max-w-2xl mx-auto"
          >
            Финальная стоимость зависит от конкретного клинического случая. После очной консультации
            врач составит детальный план лечения с точными ценами.
          </motion.p>
        </div>
      </section>

      {/* Price Accordion */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {priceCategories.map((cat, i) => {
              const isOpen = openCategories.has(i);
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`rounded-2xl border overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? 'border-brand-teal/30 shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.12)]'
                      : 'border-border hover:border-brand-teal/20'
                  }`}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(i)}
                    className="w-full flex items-center justify-between p-7 bg-card text-left group"
                  >
                    <div>
                      <h2 className={`font-display font-semibold text-lg transition-colors duration-300 ${
                        isOpen ? 'text-brand-teal' : 'text-foreground group-hover:text-brand-teal'
                      }`}>{cat.title}</h2>
                      {cat.note && <p className="text-muted-foreground text-xs mt-1">{cat.note}</p>}
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-5 h-5 shrink-0 transition-colors duration-300 ${
                        isOpen ? 'text-brand-teal' : 'text-muted-foreground'
                      }`} />
                    </motion.div>
                  </button>

                  {/* Price Items */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <div className="border-t border-border">
                          {cat.items.map((it, j) => (
                            <motion.div
                              key={it.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.04 }}
                              className="flex items-center justify-between px-7 py-4 hover:bg-secondary/50 transition-colors duration-200 border-b border-border last:border-0"
                            >
                              <span className="text-sm text-foreground pr-4">{it.name}</span>
                              <span className="text-sm font-bold text-brand-teal whitespace-nowrap">{it.price}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              Узнайте точную стоимость
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">
              Запишитесь на консультацию — составим план с точными ценами
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

export default PricesPage;
