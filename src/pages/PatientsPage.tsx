import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, CreditCard, Shield, Gift, Heart, Phone } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Первичный приём",
    desc: "На первичном приёме вы получите ответы на все интересующие вопросы и уйдёте домой с полным пониманием всех этапов лечения и финансовой составляющей.",
    details: [
      "Знакомство с доктором",
      "Тщательный осмотр полости рта",
      "Предварительный анализ клинической ситуации",
      "Фотопротокол (по показаниям)",
      "Составление плана лечения",
    ],
  },
  {
    icon: CreditCard,
    title: "Оплата лечения",
    desc: "Мы принимаем наличные, банковские карты. Доступна рассрочка и кредит на лечение.",
    details: [
      "Наличный и безналичный расчёт",
      "Рассрочка на лечение",
      "Возможность получения налогового вычета",
    ],
  },
  {
    icon: Gift,
    title: "Программа лояльности",
    desc: "Для постоянных пациентов и их семей действует специальная система скидок и привилегий.",
    details: [
      "Скидки для всей семьи",
      "Специальные предложения",
      "Бонусная программа",
    ],
  },
  {
    icon: Shield,
    title: "Гарантии",
    desc: "Мы предоставляем гарантии на все виды выполненных работ. Используем только сертифицированные материалы и оборудование.",
    details: [
      "Гарантия на все виды работ",
      "Сертифицированные материалы",
      "Оборудование ведущих мировых производителей",
    ],
  },
  {
    icon: Heart,
    title: "Антистресс лечение",
    desc: "Применяем все методы — от седации до лечения во сне. Наш приоритет — предельная безопасность.",
    details: [
      "Непрерывный контроль анестезиологов",
      "Передовое оборудование мониторинга",
      "Объёмное лечение в одно посещение",
    ],
  },
  {
    icon: Phone,
    title: "Как нас найти",
    desc: "Москва, ул. Серпуховский вал 21, корп 4. Ежедневно с 9:00 до 21:00.",
    details: [
      "Телефон: +7 (495) 975-95-98",
      "Email: clinic@articon.pro",
      "Удобная парковка рядом с клиникой",
    ],
  },
];

const PatientsPage = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground">Пациентам</h1>
          <p className="mt-3 text-muted-foreground">Полезная информация для наших пациентов</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-brand-blue flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display font-semibold text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.desc}</p>
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
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
