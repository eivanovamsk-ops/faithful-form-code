import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Users, Microscope, ShieldCheck, Baby, Zap, Sparkles, Heart, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
import { useRef } from "react";

const advantages = [
  { icon: Zap, title: "Цифровой дизайн улыбки", desc: "Планирование результата до начала лечения" },
  { icon: Microscope, title: "Лечение под микроскопом", desc: "Высочайшая точность и качество" },
  { icon: ShieldCheck, title: "Обеспечение безопасности", desc: "100% стерилизация инструментов" },
  { icon: Baby, title: "Детская стоматология", desc: "Особый подход к маленьким пациентам" },
  { icon: Sparkles, title: "Коронка + имплантат = 1 день", desc: "Цифровые технологии ускоряют лечение" },
  { icon: Heart, title: "Антистресс лечение", desc: "Седация и лечение во сне" },
];

const services = [
  { title: "Цифровая стоматология", desc: "Новые зубы максимально быстро", link: "/uslugi" },
  { title: "Ортопедия", desc: "Протезирование, виниры, коронки", link: "/uslugi" },
  { title: "Хирургия и имплантация", desc: "Имплантация по навигационным шаблонам", link: "/uslugi" },
  { title: "Терапия", desc: "Лечение кариеса, пульпита под микроскопом", link: "/uslugi" },
  { title: "Детская стоматология", desc: "Адаптация, лечение в игровой форме", link: "/uslugi" },
  { title: "Ортодонтия", desc: "Брекеты и элайнеры", link: "/uslugi" },
  { title: "Пародонтология", desc: "Лечение дёсен", link: "/uslugi" },
  { title: "Диагностика", desc: "КТ, панорамные снимки, 3D-сканирование", link: "/uslugi" },
  { title: "Проф. гигиена", desc: "GBT протокол, отбеливание", link: "/uslugi" },
  { title: "Антистресс лечение", desc: "Седация, лечение во сне", link: "/uslugi" },
];

const reviews = [
  { name: "Римкевич Т.Г.", date: "01.06.2025", text: "Отличный центр стоматологии. Тёплая, душевная, уютная атмосфера." },
  { name: "Рябова Нина Николаевна", date: "03.11.2024", text: "Замечательная стоматологическая клиника, лечусь с 2019 года. Считаю её одной из лучших." },
  { name: "Максимова Юлия Н.", date: "01.12.2024", text: "Записалась по острой боли — быстро помогли. Профессиональный подход." },
  { name: "Балалаечникова Виктория", date: "25.05.2022", text: "Прекрасная, чистая клиника. Внимательнейший персонал, высший уровень обслуживания." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* Hero — fullscreen */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img src={heroImage} alt="Клиника Articon" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </motion.div>

        <motion.div
          className="container mx-auto px-4 relative z-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-2xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-block mb-6 text-xs font-medium tracking-[0.25em] uppercase text-brand-orange"
            >
              Центр цифровой стоматологии
            </motion.span>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] text-primary-foreground mb-8"
            >
              Улыбка — это просто
            </motion.h1>
            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="space-y-3 text-primary-foreground/80 mb-10 text-sm sm:text-base"
            >
              <li className="flex items-center gap-3"><Star className="w-4 h-4 text-brand-orange shrink-0" /> Рейтинг 5.0 — более 1 000 отзывов</li>
              <li className="flex items-center gap-3"><Award className="w-4 h-4 text-brand-orange shrink-0" /> 10 место StartsmileTop × Forbes</li>
              <li className="flex items-center gap-3"><Users className="w-4 h-4 text-brand-orange shrink-0" /> 70% пациентов приходят по рекомендации</li>
            </motion.ul>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-brand-blue text-primary-foreground font-semibold text-base h-14 px-10 hover:bg-brand-blue/90 transition-colors">
                <Link to="/contacts">Запись на приём <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground bg-primary-foreground/10 h-14 px-10 hover:bg-primary-foreground/20 transition-colors">
                <Link to="/uslugi">Наши услуги</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-primary-foreground/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* About snippet */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
            >
              <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">О нас</span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Семейная стоматология в Москве
              </h2>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
            >
              <p className="text-muted-foreground leading-relaxed text-lg mb-5">
                Меня зовут Елена Артемова, я основатель и главный врач Центра цифровой стоматологии Articon.
                В нашей семье, клинике Articon, самое главное — искренность.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10">
                Высокий профессионализм врачей, индивидуальный подход,
                инновации и высокий уровень сервиса — на эти параметры мы делаем ставки.
              </p>
              <Button asChild variant="outline" size="lg" className="h-12 px-8">
                <Link to="/about">Читать полностью</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Мы поможем вам</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Наши услуги</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={staggerItem}>
                <Link
                  to={s.link}
                  className="group block p-6 bg-background rounded-xl border border-border hover:border-brand-blue/40 transition-all duration-300 h-full hover:shadow-lg hover:-translate-y-1"
                >
                  <h3 className="font-display font-semibold text-foreground mb-2 text-sm group-hover:text-brand-blue transition-colors duration-300">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link to="/uslugi">Все услуги</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Преимущества</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Почему выбирают нас</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {advantages.map((a) => (
              <motion.div
                key={a.title}
                variants={staggerItem}
                className="group flex items-start gap-5 p-7 rounded-xl bg-card border border-border hover:border-brand-blue/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <a.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Отзывы</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Что говорят пациенты</h2>
            <p className="mt-4 text-muted-foreground text-lg">Рейтинг 5.0 из 5 на Яндекс, Google, Zoon, ProDoctorov</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {reviews.map((r) => (
              <motion.div
                key={r.name}
                variants={staggerItem}
                className="bg-background rounded-xl p-7 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">«{r.text}»</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{r.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Запишитесь на приём
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-lg mx-auto text-lg">
              Первичная консультация — 3 500 ₽. Составим полный план лечения с точными ценами.
            </p>
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-14 px-10 hover:bg-background/90 transition-colors">
              <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
