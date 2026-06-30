import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Star, Award, Users, Microscope, ShieldCheck, Baby,
  Zap, Sparkles, Heart, ChevronDown, HelpCircle,
} from "lucide-react";
import iconDigital from "@/assets/service-icons/digital.png.asset.json";
import iconOrthopedics from "@/assets/service-icons/orthopedics.png.asset.json";
import iconSurgery from "@/assets/service-icons/surgery.png.asset.json";
import iconTherapy from "@/assets/service-icons/therapy.png.asset.json";
import iconPediatric from "@/assets/service-icons/pediatric.png.asset.json";
import iconOrthodontics from "@/assets/service-icons/orthodontics.png.asset.json";
import iconPeriodontology from "@/assets/service-icons/periodontology.png.asset.json";
import iconDiagnostics from "@/assets/service-icons/diagnostics.png.asset.json";
import iconHygiene from "@/assets/service-icons/hygiene.png.asset.json";
import iconSedation from "@/assets/service-icons/sedation.png.asset.json";
import { symptoms } from "@/data/symptoms";
const heroReception = "/cdn-assets/hero-main.jpg";
import guseynovaAsset from "@/assets/guseynova.jpg.asset.json";
import AnimatedCounter from "@/components/AnimatedCounter";
import TechnologiesSection from "@/components/TechnologiesSection";
import AwardBanner from "@/components/AwardBanner";
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
  { icon: iconDigital.url, title: "Цифровая стоматология", desc: "Новые зубы максимально быстро", link: "/uslugi" },
  { icon: iconOrthopedics.url, title: "Ортопедия", desc: "Протезирование, виниры, коронки", link: "/uslugi" },
  { icon: iconSurgery.url, title: "Хирургия и имплантация", desc: "Имплантация по навигационным шаблонам", link: "/uslugi" },
  { icon: iconTherapy.url, title: "Терапия", desc: "Лечение кариеса, пульпита под микроскопом", link: "/uslugi" },
  { icon: iconPediatric.url, title: "Детская стоматология", desc: "Адаптация, лечение в игровой форме", link: "/uslugi" },
  { icon: iconOrthodontics.url, title: "Ортодонтия", desc: "Брекеты и элайнеры", link: "/uslugi" },
  { icon: iconPeriodontology.url, title: "Пародонтология", desc: "Лечение дёсен", link: "/uslugi" },
  { icon: iconDiagnostics.url, title: "Диагностика", desc: "КТ, панорамные снимки, 3D-сканирование", link: "/uslugi" },
  { icon: iconHygiene.url, title: "Проф. гигиена", desc: "GBT протокол, отбеливание", link: "/uslugi" },
  { icon: iconSedation.url, title: "Антистресс лечение", desc: "Седация, лечение во сне", link: "/uslugi" },
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
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* Hero — fullscreen video */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-[110px]">
        <motion.div className="absolute inset-0 bg-foreground" style={{ scale: heroScale }}>
          <img
            src={heroReception}
            alt="Ресепшн клиники Articon"
            className="absolute inset-x-0 top-[96px] h-[calc(100%+24px)] w-full object-cover object-[center_top]"
          />
          <div className="absolute inset-0 bg-foreground/55" />
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
              Центр цифровой стоматологии АРТИКОН
            </motion.span>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05] text-primary-foreground mb-8"
            >
              Цифровые технологии — предсказуемый результат
            </motion.h1>
            <motion.ul
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="space-y-3 text-primary-foreground/80 mb-10 text-sm sm:text-base"
            >
              <li className="flex items-center gap-3"><Star className="w-4 h-4 text-brand-orange shrink-0" /> Рейтинг 5.0 — более 1 000 отзывов</li>
              <li className="flex items-center gap-3"><Award className="w-4 h-4 text-brand-orange shrink-0" /> в ТОП рейтинга StartsmileTop × Forbes</li>
              <li className="flex items-center gap-3"><Users className="w-4 h-4 text-brand-orange shrink-0" /> 70% пациентов приходят по рекомендации</li>
            </motion.ul>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-brand-teal text-primary-foreground font-semibold text-base h-14 px-10 transition-all duration-500 hover:bg-brand-teal/85 hover:shadow-[0_0_30px_hsl(174,72%,46%,0.3)] hover:scale-[1.03]">
                <Link to="/contacts">Запись на приём <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-teal text-primary-foreground bg-transparent h-14 px-10 transition-all duration-500 hover:bg-brand-teal hover:text-primary-foreground hover:border-brand-teal hover:shadow-[0_0_30px_hsl(174,72%,46%,0.2)]">
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

      {/* Award banner — StartSmile TOP 2026 */}
      <AwardBanner />

      {/* Animated counters */}
      <section className="py-20 bg-secondary">

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <AnimatedCounter end={5} label="Рейтинг на Яндекс и Google" decimals={1} />
            <AnimatedCounter text="ТОП" label="StartsmileTop × Forbes" />
            <AnimatedCounter end={1000} suffix="+" label="отзывов пациентов" />
            <AnimatedCounter end={70} suffix="%" label="приходят по рекомендации" />
          </div>
        </div>
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
              <Button asChild variant="outline" size="lg" className="h-12 px-8 transition-all duration-300 hover:scale-[1.03]">
                <Link to="/about">Читать полностью</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services with icons */}
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
                  className="group block p-6 bg-background rounded-xl border border-border hover:border-brand-teal/40 transition-all duration-300 h-full hover:shadow-xl hover:scale-[1.04]"
                >
                  <div className="w-14 h-14 rounded-lg bg-brand-blue/5 flex items-center justify-center mb-4 group-hover:bg-brand-blue/10 group-hover:scale-110 transition-all duration-300">
                    <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-sm group-hover:text-brand-teal transition-colors duration-300">{s.title}</h3>
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
            <Button asChild variant="outline" size="lg" className="h-12 px-8 transition-all duration-300 hover:scale-[1.03]">
              <Link to="/uslugi">Все услуги</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-14"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Справочник пациента</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">Что вас беспокоит?</h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              Найдите свою проблему и узнайте, как мы можем помочь
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto"
          >
            {symptoms.map((s) => (
              <motion.div key={s.id} variants={staggerItem}>
                <Link
                  to={`/symptoms#${s.id}`}
                  className="group flex flex-col items-start gap-4 h-full p-6 bg-card rounded-2xl border border-border hover:border-brand-blue/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-brand-blue/5 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:scale-110 transition-all duration-300">
                    {s.iconImage ? (
                      <img src={s.iconImage} alt={s.cardTitle} className="w-12 h-12 object-contain" />
                    ) : (
                      <s.icon className="w-6 h-6 text-brand-blue" />
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-base leading-snug group-hover:text-brand-blue transition-colors duration-300">
                    {s.cardTitle}
                  </h3>
                  <span className="mt-auto text-xs font-medium text-brand-blue inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Подробнее <ArrowRight className="w-3.5 h-3.5" />
                  </span>
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
            <Button asChild variant="outline" size="lg" className="h-12 px-8 transition-all duration-300 hover:scale-[1.03]">
              <Link to="/symptoms"><HelpCircle className="mr-2 w-4 h-4" /> Все симптомы</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Treatment Coordinator */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-brand-blue">Персональный подход</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
              Ваш координатор лечения
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center bg-background rounded-2xl border border-border p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-60 rounded-xl overflow-hidden mb-6 bg-secondary shadow-md">
                  <img src={guseynovaAsset.url} alt="Гусейнова Эльмира" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-display font-bold text-foreground text-xl mb-2">Гусейнова Эльмира</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Заместитель главного врача по работе с пациентами, координатор лечения
                </p>
              </div>

              <div className="relative">
                <svg className="absolute -top-4 -left-2 w-10 h-10 text-brand-blue/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-foreground text-base sm:text-lg leading-relaxed pl-8">
                  Для меня важно обеспечить комфортное лечение для наших пациентов. Подберу для вас команду специалистов, у которых вы будете в надежных руках. На всех этапах вашего лечения с большим удовольствием буду вас сопровождать и поддерживать. Предлагаю пройти путь к здоровой улыбке вместе!
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies — interactive */}
      <TechnologiesSection />

      {/* Advantages */}
      <section className="py-28 bg-secondary">
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
                className="group flex items-start gap-5 p-7 rounded-xl bg-background border border-border hover:border-brand-teal/30 hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-teal transition-all duration-300">
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
      <section className="py-28 bg-background">
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
                className="bg-card rounded-xl p-7 border border-border hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
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
      <section className="py-28 bg-brand-teal">
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
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-14 px-10 transition-all duration-500 hover:bg-background/90 hover:scale-[1.03] hover:shadow-xl">
              <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
