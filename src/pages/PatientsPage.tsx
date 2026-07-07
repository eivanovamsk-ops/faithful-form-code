import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, Shield, Gift, Heart, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

const sections = [
  { icon: FileText, title: "Первичный приём", href: "/pacientam/pervichnyj-priem", desc: "На первичном приёме вы получите ответы на все интересующие вопросы и уйдёте домой с полным пониманием всех этапов лечения.", details: ["Знакомство с доктором", "Тщательный осмотр полости рта", "Предварительный анализ клинической ситуации", "Фотопротокол (по показаниям)", "Составление плана лечения"] },
  { icon: CreditCard, title: "Оплата лечения", desc: "Мы принимаем наличные, банковские карты. Доступна рассрочка и кредит на лечение.", details: ["Наличный и безналичный расчёт", "Рассрочка на лечение", "Возможность получения налогового вычета"] },
  { icon: Gift, title: "Программа лояльности", href: "/pacientam/loyalnost", desc: "Для постоянных пациентов и их семей действует специальная система скидок и привилегий.", details: ["Скидки для всей семьи", "Специальные предложения", "Бонусная программа"] },
  { icon: Shield, title: "Гарантии", desc: "Мы предоставляем гарантии на все виды выполненных работ.", details: ["Гарантия на все виды работ", "Сертифицированные материалы", "Оборудование ведущих мировых производителей"] },
  { icon: Heart, title: "Антистресс лечение", desc: "Применяем все методы — от седации до лечения во сне.", details: ["Непрерывный контроль анестезиологов", "Передовое оборудование мониторинга", "Объёмное лечение в одно посещение"] },
  { icon: Phone, title: "Как нас найти", desc: "Москва, ул. Серпуховский вал 21, корп 4. Ежедневно с 9:00 до 21:00.", details: ["Телефон: +7 (495) 975-95-98", "Email: clinic@articon.pro", "Удобная парковка рядом с клиникой"] },
];

const PatientsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              Информация
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              Пациентам
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Полезная информация для наших пациентов
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

      {/* Info Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-card rounded-2xl border p-8 overflow-hidden transition-all duration-500 ${
                  hoveredIndex === i
                    ? 'border-brand-teal/30 shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] scale-[1.02]'
                    : 'border-border hover:border-brand-teal/20'
                }`}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-brand-teal/[0.03] transition-opacity duration-500 ${
                  hoveredIndex === i ? 'opacity-100' : 'opacity-0'
                }`} />

                <div className="relative z-10">
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                      hoveredIndex === i ? 'bg-brand-teal scale-110' : 'bg-secondary'
                    }`}>
                      <s.icon className={`w-6 h-6 transition-colors duration-500 ${
                        hoveredIndex === i ? 'text-primary-foreground' : 'text-brand-blue'
                      }`} />
                    </div>
                    <div>
                      <h2 className={`font-display font-semibold text-lg mb-2 transition-colors duration-300 ${
                        hoveredIndex === i ? 'text-brand-teal' : 'text-foreground'
                      }`}>{s.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                      <ul className="space-y-2.5">
                        {s.details.map((d, j) => (
                          <motion.li
                            key={d}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + j * 0.05 }}
                            className="flex items-start gap-3 text-sm text-foreground/80"
                          >
                            <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 transition-colors duration-300 ${
                              hoveredIndex === i ? 'bg-brand-teal' : 'bg-brand-blue/50'
                            }`} />
                            {d}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
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
              Остались вопросы?
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">
              Свяжитесь с нами — ответим на все ваши вопросы
            </p>
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-14 px-10 transition-all duration-500 hover:bg-background/90 hover:scale-[1.03] hover:shadow-xl">
              <Link to="/contacts">Связаться <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PatientsPage;
