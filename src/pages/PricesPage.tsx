import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } } };

const PricesPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Стоимость</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Цены</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="bg-card border border-border rounded-xl p-7 mb-14 max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            Финальная стоимость зависит от конкретного клинического случая. После очной консультации
            врач ответит на все вопросы и составит детальный план лечения с точными ценами.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-8 max-w-4xl mx-auto">
          {priceCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 border-b border-border">
                <h2 className="font-display font-semibold text-foreground text-lg">{cat.title}</h2>
                {cat.note && <p className="text-muted-foreground text-xs mt-1">{cat.note}</p>}
              </div>
              <div className="divide-y divide-border">
                {cat.items.map((it) => (
                  <div key={it.name} className="flex items-center justify-between px-6 py-4 hover:bg-secondary/50 transition-colors duration-200">
                    <span className="text-sm text-foreground pr-4">{it.name}</span>
                    <span className="text-sm font-semibold text-brand-blue whitespace-nowrap">{it.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <Button asChild size="lg" className="bg-brand-blue text-primary-foreground font-semibold h-12 px-8 hover:bg-brand-blue/90 transition-colors">
            <Link to="/contacts">Записаться на консультацию</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
