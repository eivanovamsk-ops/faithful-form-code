import { motion } from "framer-motion";
import { Award, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "лет опыта" },
  { icon: Users, value: "10 000+", label: "довольных пациентов" },
  { icon: Clock, value: "24/7", label: "онлайн-запись" },
  { icon: Star, value: "4.9", label: "рейтинг" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-gold">О клинике</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Стоматология нового поколения
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Articon — это премиальная стоматологическая клиника, где передовые технологии сочетаются с
              индивидуальным подходом к каждому пациенту. Мы создаём атмосферу комфорта и доверия, чтобы
              визит к стоматологу стал приятным опытом.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Наша команда — это врачи с международными сертификатами и многолетним опытом. Мы используем
              только сертифицированные материалы и оборудование ведущих мировых производителей.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="bg-card rounded-xl p-6 text-center border border-border"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
