import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  { title: "Цифровая стоматология: как технологии меняют лечение", excerpt: "Узнайте, как CAD/CAM системы, 3D-сканирование и цифровое планирование делают лечение точнее и комфортнее.", date: "15 марта 2026" },
  { title: "Имплантация зубов: мифы и реальность", excerpt: "Развенчиваем популярные мифы об имплантации и рассказываем, как проходит процедура в современной клинике.", date: "2 марта 2026" },
  { title: "Виниры или коронки: что выбрать?", excerpt: "Подробное сравнение двух методов реставрации зубов — показания, преимущества и долговечность.", date: "18 февраля 2026" },
  { title: "Профессиональная гигиена: зачем и как часто", excerpt: "Почему домашнего ухода недостаточно и как профессиональная чистка защищает ваши зубы.", date: "5 февраля 2026" },
  { title: "Лечение во сне: седация в стоматологии", excerpt: "Для кого подходит лечение под седацией, как проходит процедура и насколько это безопасно.", date: "22 января 2026" },
  { title: "Как сохранить результат после отбеливания", excerpt: "Практические советы по уходу за зубами после профессионального отбеливания.", date: "10 января 2026" },
];

const ArticlesPage = () => (
  <div>
    <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-6">Пациентам</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
            Статьи
          </h1>
          <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
            Полезные материалы о стоматологии и здоровье зубов
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {a.date}
              </div>
              <h2 className="font-display font-semibold text-xl mb-3 text-foreground group-hover:text-brand-teal transition-colors duration-300">
                {a.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-blue group-hover:text-brand-teal transition-colors duration-300">
                Читать далее <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ArticlesPage;
