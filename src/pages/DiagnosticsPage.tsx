import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ScanLine,
  Layers3,
  ShieldCheck,
  Baby,
  HeartPulse,
  Leaf,
  Sparkles,
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  Info,
  Zap,
  Database,
  Aperture,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const DiagnosticsPage = () => {
  useEffect(() => {
    document.title = "Диагностика зубов в Москве | Клиника Articon";
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Диагностика в цифровой стоматологии Articon: фотопротокол, КТ Vatec, интраоральные сканеры Runyes и Medit. Полное обследование за один визит.",
    );
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6" aria-label="Хлебные крошки">
            <Link to="/" className="hover:text-brand-teal transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/uslugi" className="hover:text-brand-teal transition-colors">Услуги</Link>
            <span>/</span>
            <span className="text-primary-foreground/90">Диагностика</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-5">
              Клиника Articon · Москва
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-[1.1]">
              Все необходимые виды диагностики зубов в клинике Articon
            </h1>
            <p className="mt-5 text-primary-foreground/70 text-lg leading-relaxed">
              Когда пациент приходит к нам не с острой болью, а чтобы разобраться в ситуации и выстроить план — процесс начинается с диагностики.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-brand-teal text-primary-foreground font-semibold h-12 px-7 hover:bg-brand-teal">
                <Link to="/contacts">Записаться на диагностику <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/uslugi"><ArrowLeft className="mr-2 w-4 h-4" /> Все услуги</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GEO bar */}
      <section className="bg-secondary border-y border-border">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-foreground/80">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-teal" /> Москва, ул. Серпуховский вал 21, корп 4</span>
            <a href="tel:+74959759598" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
              <Phone className="w-4 h-4 text-brand-teal" /> +7 (495) 975-95-98
            </a>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-teal" /> Ежедневно с 9:00 до 21:00</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-foreground/85 text-lg leading-relaxed">
              Когда пациент приходит к нам не с острой болью, а чтобы разобраться в ситуации и выстроить план — процесс начинается с диагностики.
              Без неё план лечения просто невозможен. Это основа{" "}
              <Link to="/uslugi/implantatsiya-zubov" className="text-brand-teal underline underline-offset-4 hover:opacity-80">
                цифрового протокола
              </Link>{" "}
              клиники: сначала собираем достоверные данные, анализируем клиническую ситуацию, ставим диагноз — и только потом думаем, какие варианты лечения возможны и какой прогноз у каждого из них.
            </p>
            <p className="text-foreground/85 text-lg leading-relaxed">
              Всё обследование — в одном месте, за один визит. На выходе: варианты лечения, прозрачный финансовый план и реальная картина того, что происходит.
            </p>
          </div>
        </div>
      </section>

      {/* Three sources */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-3">Что входит в диагностику</span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Три источника данных для полной картины
              </h2>
              <p className="mt-4 text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                На этапе сбора данных мы используем три источника: фотопротокол, 3D-снимок (КТ) и данные интраорального сканера вместо традиционных слепков. Каждый даёт свою часть картины — вместе они дают полную.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Camera, title: "Фотопротокол", desc: "Фиксация ситуации и материал для планирования" },
                { icon: Layers3, title: "КТ Vatec 15×17", desc: "Трёхмерный снимок зубов, кости и анатомии челюсти" },
                { icon: ScanLine, title: "Интраоральный сканер", desc: "Цифровые оттиски Runyes и Medit — без слепочной массы" },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-7 rounded-2xl bg-background border border-border hover:border-brand-teal/40 hover:shadow-[0_12px_36px_-12px_hsl(var(--brand-teal)/0.2)] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                    <c.icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">{c.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo protocol */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-brand-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Фотопротокол</h2>
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed">Зачем он нужен:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Фиксирует ситуацию на момент обращения — у врачей есть материал для обсуждения, не нужно каждый раз возвращать пациента в кресло",
                "Помогает проанализировать случай и составить комплексный план лечения",
                "Документирует выполненную работу — после лечения сравниваете с исходной ситуацией",
                "Пациенту проще увидеть свои проблемы на фото, чем в зеркале",
                "Даёт возможность отправить материал для индивидуальной моделировки улыбки",
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/85 text-sm leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CT scan */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <Layers3 className="w-6 h-6 text-brand-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">КТ — компьютерная томография зубов</h2>
            </div>

            <div className="space-y-5 text-foreground/85 text-lg leading-relaxed">
              <p>
                Трёхмерный снимок: зубы, костная ткань вокруг них, анатомия челюсти. На основе КТ делаются математические расчёты — например, где ставить имплантат и хватит ли там объёма кости.
              </p>
              <p>
                В Articon используется томограф <strong>Vatec (Корея) с матрицей 15×17</strong> — одна из самых крупных в стоматологии. Это позволяет совместить данные о костной ткани с данными о движениях нижней челюсти и провести анализ состояния ВНЧС в специализированной программе. Другой уровень точности по сравнению со стандартными аппаратами.
              </p>
            </div>

            {/* Safety callout */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-background border border-brand-teal/30 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">Про безопасность КТ</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Доза облучения при одном КЛКТ-снимке зубов — <strong>40–60 мкЗв</strong>. Для сравнения: КТ лёгких, которое многие делали во время COVID, даёт 400–600 мкЗв в зависимости от аппарата и протокола — в 8–10 раз больше. Допустимая норма облучения в год по СанПиН — 1000 мкЗв. Один снимок зубов забирает из этой нормы примерно столько же, сколько перелёт Москва — Лондон. Всем пациентам надевается свинцовый фартук — стандарт защиты остальных областей тела.
                  </p>
                </div>
              </div>
            </div>

            {/* Dose comparison */}
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { value: "40–60", unit: "мкЗв", label: "КТ зубов в Articon" },
                { value: "400–600", unit: "мкЗв", label: "КТ лёгких (COVID)" },
                { value: "1000", unit: "мкЗв", label: "Годовая норма СанПиН" },
              ].map((d, i) => (
                <div key={i} className="p-5 rounded-2xl bg-background border border-border text-center">
                  <div className="font-display font-bold text-2xl text-brand-teal">
                    {d.value} <span className="text-base text-foreground/60 font-normal">{d.unit}</span>
                  </div>
                  <div className="mt-1 text-sm text-foreground/70">{d.label}</div>
                </div>
              ))}
            </div>

            {/* Kids & pregnancy */}
            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                    <Baby className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground">Детям</h4>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  КТ назначают с учётом реальной необходимости. С 6 лет, когда начинается смена прикуса, томография часто нужна: она показывает зачатки постоянных зубов, их положение, сверхкомплектные зубы, которые мешают нормальному росту. Без этой информации ортодонтическое лечение строится вслепую.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground">При беременности</h4>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  Первый триместр — только по серьёзным показаниям. Во втором и третьем, если без снимка правильный диагноз не поставить, возможно сделать КТ сегмента или отдельного зуба, а не всей челюсти — это значительно снижает лучевую нагрузку. Именно поэтому вопрос о беременности в анкете здоровья — не формальность.
                </p>
              </div>
            </div>

            {/* CT advantages */}
            <div className="mt-10">
              <h3 className="font-display font-semibold text-xl text-foreground mb-5">Преимущества КТ</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Zap, text: "Исследование занимает меньше минуты" },
                  { icon: Aperture, text: "Сканирование в трёхмерном пространстве — изучить область можно под любым углом и в любой плоскости" },
                  { icon: CheckCircle2, text: "Минимум противопоказаний" },
                  { icon: Database, text: "Данные хранятся в цифровом виде — при необходимости можно вернуться в любой момент" },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                    <b.icon className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85 text-sm leading-relaxed">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intraoral scanner */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                <ScanLine className="w-6 h-6 text-brand-teal" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Сканирование интраоральным сканером</h2>
            </div>

            <div className="space-y-5 text-foreground/85 text-lg leading-relaxed">
              <p>
                В большинстве случаев слепки уже уступили место сканеру. Бывают ситуации, когда традиционный оттиск всё ещё нужен — например, при определённых особенностях мягких тканей. Но в повседневной практике сканер стал основным инструментом. Особенно это ценно для детей и пациентов с выраженным рвотным рефлексом — для них традиционный слепок каждый раз был отдельным испытанием.
              </p>
              <p>
                В клинике используются два сканера — <strong>Runyes (Китай)</strong> и <strong>Medit (Корея)</strong>.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-display font-semibold text-xl text-foreground mb-5">Что это даёт</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Sparkles, text: "Ещё на этапе сканирования можно «примерить» будущую улыбку — предсказуемость лечения видна сразу" },
                  { icon: CheckCircle2, text: "Высокая точность: нет зависимости от времени выдержки, материала и человеческого фактора" },
                  { icon: Zap, text: "Данные мгновенно уходят в зуботехническую лабораторию — время ожидания сокращается" },
                  { icon: HeartPulse, text: "Комфортная процедура без неприятных ощущений" },
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                    <b.icon className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85 text-sm leading-relaxed">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eco callout */}
            <div className="mt-8 p-6 rounded-2xl bg-brand-teal/5 border border-brand-teal/20">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-teal/15 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">Про экологию</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Силиконовая масса для традиционных слепков не разлагается биологически — она остаётся в земле десятилетиями. Каждый оттиск — это отход с очень долгой жизнью на свалке. Отказ от слепков там, где это возможно, — небольшой, но реальный вклад.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-teal/15 mb-6">
              <Info className="w-7 h-7 text-brand-teal" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground mb-5">Почему это важно</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Фраза «подойдёт — не подойдёт» или «на глазок, а там подправим» здесь просто невозможна. Для пациента это означает конкретное: вы заранее знаете, что именно будет сделано, почему именно так и чего ожидать в итоге. Никаких сюрпризов в процессе, никаких «ну, посмотрим». Только план с понятным прогнозом — и результат, который был виден ещё до начала лечения.
            </p>
            <p className="mt-6 text-primary-foreground/70">
              Посмотреть, как это выглядит на практике, можно в{" "}
              <Link to="/foto-rabot" className="text-brand-teal underline underline-offset-4 hover:opacity-80">
                фото наших работ
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-3">
            Записаться на диагностику
          </h2>
          <p className="text-primary-foreground/85 mb-8">Первичная консультация — бесплатно</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-12 px-8 hover:bg-background/90">
              <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/prices">Узнать стоимость <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:+74959759598"><Phone className="mr-2 w-4 h-4" /> +7 (495) 975-95-98</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticsPage;
