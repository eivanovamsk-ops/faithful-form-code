import { motion } from "framer-motion";
import { FileText, CreditCard, Shield, Gift, Heart, Phone } from "lucide-react";

const sections = [
  { icon: FileText, title: "Первичный приём", desc: "На первичном приёме вы получите ответы на все интересующие вопросы и уйдёте домой с полным пониманием всех этапов лечения.", details: ["Знакомство с доктором", "Тщательный осмотр полости рта", "Предварительный анализ клинической ситуации", "Фотопротокол (по показаниям)", "Составление плана лечения"] },
  { icon: CreditCard, title: "Оплата лечения", desc: "Мы принимаем наличные, банковские карты. Доступна рассрочка и кредит на лечение.", details: ["Наличный и безналичный расчёт", "Рассрочка на лечение", "Возможность получения налогового вычета"] },
  { icon: Gift, title: "Программа лояльности", desc: "Для постоянных пациентов и их семей действует специальная система скидок и привилегий.", details: ["Скидки для всей семьи", "Специальные предложения", "Бонусная программа"] },
  { icon: Shield, title: "Гарантии", desc: "Мы предоставляем гарантии на все виды выполненных работ.", details: ["Гарантия на все виды работ", "Сертифицированные материалы", "Оборудование ведущих мировых производителей"] },
  { icon: Heart, title: "Антистресс лечение", desc: "Применяем все методы — от седации до лечения во сне.", details: ["Непрерывный контроль анестезиологов", "Передовое оборудование мониторинга", "Объёмное лечение в одно посещение"] },
  { icon: Phone, title: "Как нас найти", desc: "Москва, ул. Серпуховский вал 21, корп 4. Ежедневно с 9:00 до 21:00.", details: ["Телефон: +7 (495) 975-95-98", "Email: clinic@articon.pro", "Удобная парковка рядом с клиникой"] },
];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } } };

const PatientsPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Информация</span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Пациентам</h1>
          <p className="mt-4 text-muted-foreground text-lg">Полезная информация для наших пациентов</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sections.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="group bg-card rounded-xl border border-border p-7 hover:border-brand-blue/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-foreground mb-2 group-hover:text-brand-blue transition-colors duration-300">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                        {d}
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

export default PatientsPage;
