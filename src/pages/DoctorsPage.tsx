import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const doctors = [
  { name: "Артемова Елена Юрьевна", role: "Главный врач клиники Артикон", highlight: true },
  { name: "Гусейнова Эльмира", role: "Заместитель главного врача, координатор лечения", highlight: true },
  { name: "Василенко Анастасия Валерьевна", role: "Стоматолог-ортопед" },
  { name: "Борисов Александр Александрович", role: "Стоматолог-терапевт" },
  { name: "Мамедов Джейхун Романович", role: "Стоматолог-хирург, имплантолог, пародонтолог" },
  { name: "Одинцов Семён Олегович", role: "Стоматолог-ортопед, гнатолог" },
  { name: "Живлюк Марина Евгеньевна", role: "Стоматолог-ортодонт" },
  { name: "Мищенко Александра Александровна", role: "Стоматолог-ортодонт, гнатолог" },
  { name: "Козлова Ксения Александровна", role: "Стоматолог-ортодонт" },
  { name: "Романенко Анастасия Николаевна", role: "Стоматолог-терапевт, детский стоматолог" },
  { name: "Краснослободцева Елена Павловна", role: "Стоматолог-терапевт" },
  { name: "Таквель Виктория Александровна", role: "Стоматолог-хирург, пародонтолог" },
  { name: "Милютина Алла Андреевна", role: "Стоматолог-терапевт, детский стоматолог" },
];

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
};

const DoctorsPage = () => {
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
              Команда
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              Наши врачи
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Сплочённая команда профессионалов — главная гордость клиники Articon
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10 origin-left"
        />
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16"
          >
            {doctors.filter(d => d.highlight).map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-card rounded-2xl border border-border p-10 text-center overflow-hidden transition-all duration-500 hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)]"
              >
                {/* Subtle background glow on hover */}
                <div className={`absolute inset-0 bg-brand-teal/5 transition-opacity duration-500 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`} />
                <div className="relative z-10">
                  <div className="w-24 h-24 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-brand-teal/20 transition-all duration-500">
                    <span className="text-brand-teal font-display font-bold text-2xl">{getInitials(doc.name)}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-brand-teal transition-colors duration-300">{doc.name}</h3>
                  <p className="text-brand-teal text-sm font-medium">{doc.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Rest of the team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">Специалисты</span>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {doctors.filter(d => !d.highlight).map((doc, i) => (
              <motion.div
                key={doc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group bg-card rounded-xl border border-border p-6 text-center hover:border-brand-blue/30 hover:shadow-lg transition-all duration-400"
              >
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-brand-blue/10 transition-all duration-400">
                  <span className="text-brand-blue font-display font-semibold text-lg">{getInitials(doc.name)}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-1.5 group-hover:text-brand-blue transition-colors duration-300">{doc.name}</h3>
                <p className="text-muted-foreground text-xs font-medium leading-relaxed">{doc.role}</p>
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
              Запишитесь к специалисту
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">
              Подберём врача под вашу задачу и составим план лечения
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

export default DoctorsPage;
