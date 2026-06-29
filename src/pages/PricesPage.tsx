import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const priceCategories = [
  { title: "Первичная консультация стоматолога", note: "Длительность до 60 минут", items: [
    { name: "Первичный осмотр врача стоматолога (осмотр, консультация, составление плана лечения)", price: "3 500 ₽" },
    { name: "Компьютерная томография (КТ)", price: "7 600 ₽" },
    { name: "Панорамный снимок (ортопантомограмма)", price: "3 000 ₽" },
    { name: "Прицельный снимок", price: "850 ₽" },
  ]},
  { title: "Терапия", note: "Лечение под микроскопом с коффердамом. Длительность до 60 минут", items: [
    { name: "Лечение кариеса", price: "от 9 300 ₽" },
    { name: "Лечение кариеса методом Icon", price: "7 200 ₽" },
    { name: "Герметизация фиссур", price: "от 5 300 ₽" },
    { name: "Лечение пульпита (1-канальный зуб)", price: "от 18 600 ₽" },
    { name: "Лечение пульпита (2-канальный зуб)", price: "от 28 000 ₽" },
    { name: "Лечение пульпита (3-канальный зуб)", price: "от 42 000 ₽" },
    { name: "Лечение пульпита (4-канальный зуб)", price: "от 47 800 ₽" },
    { name: "Художественная реставрация зуба", price: "от 16 200 ₽" },
  ]},
  { title: "Хирургия. Удаление зубов", note: "Безболезненно с использованием современных анестетиков. Длительность от 1 визита", items: [
    { name: "Простое удаление постоянных зубов", price: "от 7 500 ₽" },
    { name: "Сложное удаление постоянного зуба", price: "от 11 000 ₽" },
    { name: "Удаление зуба мудрости (ретинированного/дистопированного зуба)", price: "от 19 300 ₽" },
    { name: "Удаление временного зуба", price: "от 2 900 ₽" },
    { name: "Коррекция уздечки", price: "от 10 200 ₽" },
    { name: "Удаление новообразования", price: "от 10 500 ₽" },
  ]},
  { title: "Имплантация", note: "Имплантат + коронка = 1 день! Приживляемость до 99,6%", items: [
    { name: "Имплантация Osstem (Корея)", price: "61 900 ₽" },
    { name: "Имплантация Straumann (Швейцария)", price: "99 800 ₽" },
    { name: "Навигационный хирургический шаблон", price: "29 800 ₽" },
    { name: "Изготовление временных коронок на имплантат", price: "от 32 600 ₽" },
    { name: "Циркониевая коронка на имплантате (абатмент + коронка)", price: "от 99 300 ₽" },
    { name: "Металлокерамическая коронка на имплантате (абатмент + коронка)", price: "от 68 000 ₽" },
    { name: "Протезирование при имплантации All-on-4", price: "от 489 000 ₽" },
  ]},
  { title: "Костная пластика и синус-лифтинг", note: "Длительность 1 визит", items: [
    { name: "Синус-лифтинг открытый", price: "от 56 200 ₽" },
    { name: "Синус-лифтинг закрытый", price: "от 38 000 ₽" },
    { name: "Аутотрансплантация кости", price: "от 72 000 ₽" },
  ]},
  { title: "Виниры", note: "Длительность от 2х визитов", items: [
    { name: "Композитные виниры", price: "от 16 200 ₽" },
    { name: "Керамические виниры", price: "от 58 900 ₽" },
  ]},
  { title: "Протезирование", note: "Длительность от 2х визитов", items: [
    { name: "Изготовление бюгельного протеза", price: "от 112 800 ₽" },
    { name: "Ремонт протеза: приварка кламмера / зуба / лабораторная перебазировка", price: "12 600 / 14 600 / 19 600 ₽" },
    { name: "Изготовление полного съемного протеза", price: "от 69 700 ₽" },
    { name: "Металлокерамическая коронка", price: "от 36 700 ₽" },
    { name: "Циркониевая коронка", price: "от 42 500 ₽" },
    { name: "Коронка керамическая", price: "от 52 700 ₽" },
    { name: "Коронка E-max", price: "от 64 500 ₽" },
    { name: "Временные коронки (лабораторные, пластмасса)", price: "от 13 200 ₽" },
    { name: "Временные композитные лабораторные коронки", price: "от 29 500 ₽" },
    { name: "Восстановление зуба керамической вкладкой", price: "от 46 500 ₽" },
    { name: "Керамический винир", price: "от 58 900 ₽" },
  ]},
  { title: "Антистресс лечение зубов", note: "Длительность от 30 минут", items: [
    { name: "Лечение во сне (с препаратом Пропофол) (30 минут)", price: "13 900 ₽" },
    { name: "Лечение во сне (с препаратом Севоран) (30 минут)", price: "18 500 ₽" },
  ]},
  { title: "Ортодонтия", note: "Длительность от 10 визитов", items: [
    { name: "Первичный прием пациента, проходящего лечение в другой клинике", price: "6 800 ₽" },
    { name: "Лечение металлическими брекетами (1 челюсть)", price: "от 178 000 ₽" },
    { name: "Лечение керамическими брекетами на одну челюсть", price: "от 196 000 ₽" },
    { name: "Лечение брекетами Damon-Q (1 челюсть)", price: "от 216 000 ₽" },
    { name: "Лечение брекетами Damon Clear (1 челюсть)", price: "от 241 000 ₽" },
    { name: "Лечение на элайнерах", price: "от 240 000 ₽" },
    { name: "Пластины", price: "от 40 000 ₽" },
    { name: "Ретейнер", price: "от 25 700 ₽" },
    { name: "Аппарат Хааса", price: "от 79 000 ₽" },
  ]},
  { title: "Пародонтология", note: "Лечение тканей, окружающих зуб", items: [
    { name: "Лоскутная операция в области 1-го квадранта (половина челюсти) / 1 зуба", price: "от 27 000 / 6 700 ₽" },
    { name: "Закрытый кюретаж в области 1-го зуба", price: "от 4 900 ₽" },
    { name: "Пластика мягких тканей", price: "от 18 000 ₽" },
    { name: "Гингивэктомия", price: "от 7 400 ₽" },
  ]},
  { title: "Диагностика", note: "Точная и безопасная диагностика на новейшем оборудовании", items: [
    { name: "Прицельный снимок", price: "850 ₽" },
    { name: "Ортопантомограмма (панорамный снимок)", price: "3 000 ₽" },
    { name: "Компьютерная томография зубов (КТ)", price: "7 600 ₽" },
  ]},
  { title: "Детская стоматология", note: "Длительность 1 визит", items: [
    { name: "Первичный адаптационный прием детского стоматолога", price: "3 600 ₽" },
    { name: "Профилактический осмотр (повторный) детского стоматолога", price: "1 500 ₽" },
    { name: "Герметик (неинвазивное запечатывание)", price: "от 5 300 ₽" },
    { name: "Герметик (инвазивное запечатывание)", price: "от 6 500 ₽" },
    { name: "Лечение детского кариеса", price: "от 8 100 ₽" },
    { name: "Лечение детского пульпита", price: "от 18 400 ₽" },
    { name: "Восстановление жевательного зуба металлической коронкой", price: "от 10 200 ₽" },
    { name: "Восстановление зуба композитной коронкой", price: "от 12 600 ₽" },
    { name: "Удаление молочного зуба", price: "от 4 900 ₽" },
    { name: "Детская профгигиена classic (паста + щётка) (до 5 лет)", price: "6 600 ₽" },
    { name: "Детская гигиена Prophylaxis Master при сменном прикусе с 6 до 13 лет", price: "11 900 ₽" },
  ]},
  { title: "Профессиональная гигиена и отбеливание", note: "Длительность от 60 минут", items: [
    { name: "Профессиональная чистка зубов CLASSIC (первичная / поддерживающая)", price: "11 900 / 8 100 ₽" },
    { name: "Профессиональная гигиена при заболеваниях пародонта", price: "от 14 100 ₽" },
    { name: "SPA гигиена AirFlow Prophylaxis Master", price: "19 900 ₽" },
    { name: "Поддерживающая SPA-гигиена", price: "15 600 ₽" },
    { name: "Отбеливание Zoom 4", price: "48 900 ₽" },
    { name: "Профессиональное домашнее отбеливание", price: "от 20 550 ₽" },
    { name: "Детская профгигиена classic (паста + щётка) (до 5 лет)", price: "6 600 ₽" },
    { name: "Детская гигиена Prophylaxis Master при сменном прикусе с 6 до 13 лет", price: "11 900 ₽" },
    { name: "Профилактический осмотр", price: "1 500 ₽" },
  ]},
];

const PricesPage = () => {
  const [openCategories, setOpenCategories] = useState<Set<number>>(new Set(priceCategories.map((_, i) => i)));

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
