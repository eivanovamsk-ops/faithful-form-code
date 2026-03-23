import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Искренность", desc: "Искренняя заинтересованность в наилучшем результате для каждого пациента" },
  { icon: Award, title: "Профессионализм", desc: "Высочайший уровень квалификации и непрерывное развитие" },
  { icon: Sparkles, title: "Инновации", desc: "Цифровые технологии из Германии, США и Южной Кореи" },
  { icon: ShieldCheck, title: "Безопасность", desc: "100% стерилизация, многоступенчатая система обработки" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const AboutPage = () => {
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
              Артикон
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              О клинике
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Центр цифровой стоматологии с 15-летним опытом
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

      {/* Founder Quote */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="relative"
          >
            <div className="absolute -top-8 -left-4 text-8xl text-brand-teal/15 font-display font-bold select-none">«</div>
            <blockquote className="relative z-10 pl-8 border-l-2 border-brand-teal/30">
              <p className="text-xl sm:text-2xl text-foreground leading-relaxed font-light mb-6">
                Меня зовут <strong className="font-semibold">Елена Артемова</strong>, я основатель и главный врач Центра цифровой стоматологии Articon. В нашей семье, клинике Артикон, самое главное — искренность.
              </p>
              <footer className="text-muted-foreground text-sm">
                — Елена Артемова, основатель клиники
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue mb-4 block">История</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6 leading-tight">
                15 лет опыта, объединённых в одну клинику
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                За моими плечами пятнадцатилетний опыт работы с пациентами, я всегда старалась совершенствовать свои знания и стремилась вперед. В определенный момент пришло понимание, что пора воплотить накопленный опыт и создать клинику — клинику своей мечты!
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Группа компаний «Артикон» более 10 лет поставляет в Россию и страны СНГ CAD/CAM оборудование и расходные материалы из Германии, США и Южной Кореи для стоматологических клиник.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue mb-4 block">Подход</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6 leading-tight">
                Качество, а не массовость
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы не лечим «под ключ» и не заманиваем пациентов акциями. Высокий профессионализм наших врачей, индивидуальный подход к каждому пациенту, инновации, высокий уровень сервиса — на эти параметры мы делаем ставки.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Наша работа направлена не на массовость, а на качественное лечение и долгосрочные отношения с пациентом.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Ценности</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-foreground">Что нас определяет</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-5 group-hover:bg-brand-teal/10 group-hover:scale-110 transition-all duration-500">
                  <v.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-teal transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-brand-teal transition-colors duration-300">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
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
              Познакомьтесь с нами лично
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">
              Запишитесь на первичную консультацию — мы составим полный план лечения
            </p>
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-14 px-10 transition-all duration-500 hover:bg-background/90 hover:scale-[1.03] hover:shadow-xl">
              <Link to="/contacts">Записаться на приём <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
