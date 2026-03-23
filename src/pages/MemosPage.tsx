import { motion } from "framer-motion";
import { FileText, ShieldCheck, Smile, Clock, Pill, AlertTriangle } from "lucide-react";

const memos = [
  { icon: FileText, title: "Перед первым визитом", items: ["Возьмите с собой паспорт и результаты предыдущих обследований", "За 2 часа до приёма воздержитесь от обильной пищи", "Сообщите врачу о принимаемых лекарствах и аллергиях"] },
  { icon: Pill, title: "После лечения зубов", items: ["Не принимайте пищу 2 часа после анестезии", "Избегайте горячих напитков в день лечения", "При болевых ощущениях примите рекомендованный врачом препарат"] },
  { icon: ShieldCheck, title: "После имплантации", items: ["Прикладывайте холод к щеке первые 3-4 часа", "Исключите физические нагрузки на 3-5 дней", "Принимайте назначенные антибиотики строго по схеме"] },
  { icon: Smile, title: "После установки виниров", items: ["Избегайте красящих продуктов первые 48 часов", "Не откусывайте твёрдую пищу передними зубами", "Используйте мягкую зубную щётку"] },
  { icon: Clock, title: "После профессиональной чистки", items: ["Воздержитесь от еды и напитков 30 минут", "Исключите красящие продукты на 24 часа", "Замените зубную щётку на новую"] },
  { icon: AlertTriangle, title: "Когда обратиться срочно", items: ["Сильная боль, не снимаемая обезболивающими", "Отёк, увеличивающийся после 3-го дня", "Кровотечение, не останавливающееся более 30 минут"] },
];

const MemosPage = () => (
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
            Памятки и рекомендации
          </h1>
          <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
            Следуйте рекомендациям для быстрого и комфортного восстановления
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6">
          {memos.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0 group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-500">
                  <m.icon className="w-6 h-6 text-brand-blue group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-3 text-foreground">{m.title}</h3>
                  <ul className="space-y-2.5">
                    {m.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="w-2 h-2 rounded-full bg-brand-blue/50 shrink-0 mt-1.5 group-hover:bg-brand-teal transition-colors duration-300" />
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
    </section>
  </div>
);

export default MemosPage;
