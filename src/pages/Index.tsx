import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Award, Users, Microscope, ShieldCheck, Baby, Zap, Sparkles, Heart } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

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

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Клиника Articon" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 text-sm font-medium tracking-widest uppercase text-brand-orange"
            >
              Центр цифровой стоматологии
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-primary-foreground mb-6"
            >
              ARTICON
            </motion.h1>
            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2 text-primary-foreground/80 mb-8 text-sm sm:text-base"
            >
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-brand-orange shrink-0" /> Рейтинг 5.0 на основании более 1 000 отзывов</li>
              <li className="flex items-center gap-2"><Award className="w-4 h-4 text-brand-orange shrink-0" /> 10 место в рейтинге StartsmileTop при поддержке Forbes</li>
              <li className="flex items-center gap-2"><Users className="w-4 h-4 text-brand-orange shrink-0" /> 70% первичных пациентов приходят по рекомендации</li>
              <li className="flex items-center gap-2"><Heart className="w-4 h-4 text-brand-orange shrink-0" /> Сделали счастливыми более 10 000 пациентов</li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-brand-blue text-primary-foreground font-semibold text-base hover:bg-brand-blue/90">
                <Link to="/contacts">Запись на приём <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/uslugi">Наши услуги</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-sm font-medium tracking-widest uppercase text-brand-blue">О нас</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">Семейная стоматология в Москве</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Меня зовут Елена Артемова, я основатель и главный врач Центра цифровой стоматологии Articon.
                В нашей семье, клинике Articon, самое главное — искренность. Искренняя заинтересованность 
                в наилучшем результате для пациента.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Мы не лечим «под ключ» и не заманиваем акциями. Высокий профессионализм врачей, индивидуальный подход, 
                инновации и высокий уровень сервиса — на эти параметры мы делаем ставки.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Читать полностью</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium tracking-widest uppercase text-brand-blue">Мы поможем вам</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">Наши услуги</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={s.link} className="block p-5 bg-background rounded-xl border border-border hover:border-brand-blue/40 hover:shadow-md transition-all h-full">
                  <h3 className="font-display font-semibold text-foreground mb-1.5 text-sm">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/uslugi">Все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium tracking-widest uppercase text-brand-blue">Преимущества</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">Наши преимущества</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-blue flex items-center justify-center shrink-0">
                  <a.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">{a.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium tracking-widest uppercase text-brand-blue">Отзывы</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">Что говорят пациенты</h2>
            <p className="mt-2 text-muted-foreground">Рейтинг 5.0 из 5 на Яндекс, Google, Zoon, ProDoctorov</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">«{r.text}»</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-xs">{r.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-4">
            Запишитесь на приём
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Первичная консультация — 3 500 ₽. Составим полный план лечения с точными ценами.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground font-semibold hover:bg-background/90">
            <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
