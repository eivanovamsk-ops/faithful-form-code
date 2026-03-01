import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const priceCategories = [
  {
    title: "Первичная консультация",
    note: "Длительность до 60 минут",
    items: [
      { name: "Первичный осмотр врача стоматолога (осмотр, консультация, план лечения)", price: "3 500 ₽" },
      { name: "Компьютерная томография (КТ)", price: "7 600 ₽" },
      { name: "Панорамный снимок (ОПТГ)", price: "3 000 ₽" },
      { name: "Прицельный снимок", price: "850 ₽" },
    ],
  },
  {
    title: "Терапия",
    note: "Лечение под микроскопом с коффердамом",
    items: [
      { name: "Лечение кариеса", price: "от 9 300 ₽" },
      { name: "Лечение кариеса методом Icon", price: "7 200 ₽" },
      { name: "Герметизация фиссур", price: "от 5 300 ₽" },
      { name: "Лечение пульпита (1-канальный зуб)", price: "от 18 600 ₽" },
      { name: "Лечение пульпита (2-канальный зуб)", price: "от 28 000 ₽" },
      { name: "Лечение пульпита (3-канальный зуб)", price: "от 42 000 ₽" },
      { name: "Художественная реставрация зуба", price: "от 16 200 ₽" },
    ],
  },
  {
    title: "Хирургия. Удаление зубов",
    note: "Безболезненно с использованием современных анестетиков",
    items: [
      { name: "Простое удаление постоянных зубов", price: "от 7 500 ₽" },
      { name: "Сложное удаление постоянного зуба", price: "от 11 000 ₽" },
      { name: "Удаление зуба мудрости", price: "от 19 300 ₽" },
      { name: "Удаление временного зуба", price: "от 2 900 ₽" },
      { name: "Удаление новообразования", price: "от 10 500 ₽" },
    ],
  },
  {
    title: "Имплантация",
    note: "Имплантат + коронка = 1 день! Приживляемость 99,6%",
    items: [
      { name: "Имплантат Straumann (Швейцария)", price: "от 65 000 ₽" },
      { name: "Навигационный хирургический шаблон", price: "от 25 000 ₽" },
      { name: "Временная коронка на имплантат", price: "от 15 000 ₽" },
    ],
  },
  {
    title: "Профессиональная гигиена",
    note: "GBT протокол на аппарате Prophylaxis Master",
    items: [
      { name: "Комплексная гигиена полости рта (взрослые)", price: "от 9 500 ₽" },
      { name: "Комплексная гигиена полости рта (дети)", price: "от 5 500 ₽" },
      { name: "Отбеливание зубов", price: "от 25 000 ₽" },
    ],
  },
];

const PricesPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Цены</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6 mb-10 max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground text-sm leading-relaxed">
            Финальная стоимость зависит от конкретного клинического случая. После очной консультации 
            врач ответит на все вопросы и составит детальный план лечения с точными ценами.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {priceCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <div className="p-5 border-b border-border">
                <h2 className="font-display font-semibold text-foreground text-lg">{cat.title}</h2>
                {cat.note && <p className="text-muted-foreground text-xs mt-1">{cat.note}</p>}
              </div>
              <div className="divide-y divide-border">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-sm text-foreground pr-4">{item.name}</span>
                    <span className="text-sm font-semibold text-brand-blue whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-brand-blue text-primary-foreground font-semibold hover:bg-brand-blue/90">
            <Link to="/contacts">Записаться на консультацию</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
