import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, Cpu, ScanLine, Zap, ShieldCheck, Sparkles } from "lucide-react";

const technologies = [
  {
    num: "01",
    title: "Лечение под микроскопом",
    desc: "Оптическое увеличение до 25 раз позволяет врачу видеть мельчайшие детали, обеспечивая высочайшую точность диагностики и лечения. Это мировой стандарт эндодонтии.",
    icon: Microscope,
  },
  {
    num: "02",
    title: "Цифровой дизайн улыбки",
    desc: "Моделируем вашу будущую улыбку на компьютере до начала лечения. Вы видите результат заранее и участвуете в его создании вместе с врачом.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "3D-сканирование и КТ",
    desc: "Внутриротовые сканеры и конусно-лучевая томография позволяют создать точную трёхмерную модель для планирования имплантации и протезирования.",
    icon: ScanLine,
  },
  {
    num: "04",
    title: "Навигационная имплантация",
    desc: "Имплантаты устанавливаются по хирургическим шаблонам, напечатанным на 3D-принтере. Это гарантирует точность позиционирования и минимальную травматичность.",
    icon: Zap,
  },
  {
    num: "05",
    title: "Протокол GBT-гигиены",
    desc: "Guided Biofilm Therapy — бережная и эффективная профессиональная гигиена по швейцарскому протоколу с использованием аппаратов EMS.",
    icon: ShieldCheck,
  },
  {
    num: "06",
    title: "Коронка + имплантат за 1 день",
    desc: "Благодаря цифровому workflow — сканирование, моделирование, фрезерование — вы получаете готовую коронку на имплантат за один визит.",
    icon: Sparkles,
  },
];

const TechnologiesSection = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = technologies[active].icon;

  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Инновации</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Технологии Articon
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* List */}
          <div className="space-y-0">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <button
                  onClick={() => setActive(i)}
                  className={`w-full text-left py-5 border-b border-border group transition-all duration-300 ${
                    active === i ? "border-brand-blue" : "hover:border-brand-blue/40"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-display text-2xl font-bold transition-colors duration-300 ${
                        active === i ? "text-brand-blue" : "text-muted-foreground/40 group-hover:text-muted-foreground"
                      }`}
                    >
                      {tech.num}
                    </span>
                    <span
                      className={`font-display font-semibold text-lg transition-colors duration-300 ${
                        active === i ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {tech.title}
                    </span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:sticky lg:top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-card rounded-2xl border border-border p-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-blue flex items-center justify-center mb-6">
                  <ActiveIcon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {technologies[active].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {technologies[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
