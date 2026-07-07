import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const renderWithLinks = (text: string): React.ReactNode => {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIdx = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > lastIdx) parts.push(text.slice(lastIdx, m.index));
    const [, label, href] = m;
    const isInternal = href.startsWith("/");
    parts.push(
      isInternal ? (
        <Link key={key++} to={href} className="text-brand-teal underline underline-offset-4 hover:opacity-80">
          {label}
        </Link>
      ) : (
        <a key={key++} href={href} className="text-brand-teal underline underline-offset-4 hover:opacity-80">
          {label}
        </a>
      )
    );
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
};

const PrimaryAppointmentPage = () => {
  useEffect(() => {
    document.title = "Первичный прием (осмотр, консультация) врача-стоматолога в цифровой стоматологии Артикон метро Тульская/Шаболовская";

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
      "Первичный прием (осмотр, консультация) врача-стоматолога в цифровой стоматологии Артикон метро Тульская/Шаболовская: цифровые технологии, высокий профессионализм врачей"
    );
    setMeta(
      "keywords",
      "первичный прием стоматологии, консультация стоматолога, диагностика зубов, лечение кариеса, план лечения зубов, цифровая стоматология, ортодонт, имплантация, детский стоматолог, профилактика стоматологических заболеваний, запись на прием стоматолог"
    );
  }, []);

  const memoItems = [
    renderWithLinks("Диагностика. Рекомендуя пройти тот или иной вид диагностики, врач объясняет для чего это необходимо и отвечает на все вопросы. Подробно о том какие виды обследований проводятся в стоматологии можно прочитать [здесь](/uslugi/diagnostika)."),
  ];

  const tipsItems = [
    "На первичную консультацию просим вас приходить заранее на 15 минут, чтобы было время для заполнения документов.",
    "Чтобы у вас была возможность выбирать удобное для вас время, мы рекомендуем записываться сразу после приема на следующий визит: продолжение лечения, плановый осмотр, поддерживающую гигиену.",
    "Если вы задерживаетесь или не сможете прийти на прием, пожалуйста, предупредите нас об этом заранее. Накануне приема мы обязательно свяжемся с вами и напомним о визите.",
    "При острых вирусных и (или) бактериальных заболеваниях горла и дыхательных путей, при «герпетических» высыпаниях следует перенести свой визит в клинику до момента выздоровления.",
    "Не рекомендуется принимать алкоголь перед визитом к врачу, так как в этом случае снижается действие обезболивающих препаратов.",
    "Мы понимаем, что некоторые пациенты по разным причинам чувствуют тревогу и переживают во время первичного приема. Чтобы ничего не забыть, мы рекомендуем подготовить вопросы к специалисту заранее, чтобы ваш прием прошел максимально эффективно и комфортно.",
    renderWithLinks("После приема администраторы предложат вам подключиться к нашей программе лояльности и к чат-боту [«Личный помощник»](/pacientam/loyalnost). Рекомендуем использовать эти полезные инструменты, чтобы ваше лечение было максимально выгодным и удобным. Подробнее можно прочитать [здесь](/pacientam/loyalnost)."),
    "После визита наш отдел заботы пришлет сообщение с оценкой качества обслуживания. Пожалуйста, ответьте на него, чтобы мы понимали, что вам все понравилось или связались с вами, чтобы получить подробную обратную связь и решить возникшие вопросы. Для нас важно ваше мнение, вы помогаете нам развиваться и улучшать наш сервис и качество лечения.",
  ];

  const bookingItems = [
    renderWithLinks("Через чат-бот [«Личный помощник»](/pacientam/loyalnost)"),
    "По телефону +7 (495) 975-95-98",
    "Написать в Whatsapp +7 (916) 500-11-20",
    "Оставить заявку на любой странице сайта через кнопку “Запись на прием”",
  ];

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
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6" aria-label="Хлебные крошки">
            <Link to="/" className="hover:text-brand-teal transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/pacientam" className="hover:text-brand-teal transition-colors">Пациентам</Link>
            <span>/</span>
            <span className="text-primary-foreground/90">Первичный приём</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-5">
              Пациентам
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-[1.1]">
              Первичный прием в Центре цифровой стоматологии Артикон
            </h1>
            <p className="mt-5 text-primary-foreground/70 text-lg leading-relaxed">
              Первичная консультация — это важный шаг к красивой и здоровой улыбке. Чтобы ваше посещение прошло комфортно и эффективно, ниже мы расскажем о том, как проходит первичный прием, что нужно подготовить и к какому специалисту записаться в вашем случае.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-brand-teal text-primary-foreground font-semibold h-12 px-7 hover:bg-brand-teal">
                <Link to="/contacts">Записаться на приём <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8 text-foreground/85 text-lg leading-relaxed">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Зачем нужна первичная консультация стоматолога?
              </h2>
              <p className="mb-4">{renderWithLinks("Первичная консультация помогает пациенту получить максимально подробную информацию по поводу состояния полости рта, причинах возникновения заболевания, методах лечения, профилактики, а также стоимости лечения.")}</p>
              <p>{renderWithLinks("Чтобы ответить на эти вопросы, стоматолог проводит первичное обследование и диагностику, а также при необходимости привлекает для обсуждения смежных специалистов. В ходе первичной консультации пациент получает ответы на все интересующие вопросы. Результатом первичного приема является комплексный план лечения с подробным описанием этапов и стоимости лечения.")}</p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Как проходит первичный прием в Центре цифровой стоматологии Артикон?
              </h2>
              <p className="mb-4">
                Администратор клиники встретит вас в холле, подскажет как пользоваться автоматом для бахил, где можно снять одежду, где находится уборная, зона ожидания, предложит напитки.
              </p>
              <p className="mb-8">
                В уборной находятся одноразовые зубные щетки, с уже нанесенной на них зубной пастой, при желании можно освежиться перед приемом.
              </p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Заполнение первичной медицинской документации
              </h3>
              <p className="mb-4">
                В соответствии с законодательством РФ перед приемом необходимо заполнить и подписать ряд документов (Согласно п.1, ст. 20 Федерального закона от 21.11.2011г. № 323-ФЗ «Об основах охраны здоровья граждан в Российской Федерации»):
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Анкета здоровья",
                  "Информированное добровольное согласие",
                  "Согласие на обработку персональных данных",
                  "Договор на оказание медицинских услуг",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mb-8">Это займет всего несколько минут, администраторы помогут с заполнением.</p>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Первичная консультация предполагает следующие этапы:
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Сбор анамнеза. Стоматолог проводит с пациентом беседу: выслушивает жалобы, собирает информацию по поводу общего состояния здоровья, хронических заболеваниях, о применяемых препаратах, аллергии, об истории лечения и тд.",
                  "Визуальный осмотр зубов и полости рта. Врач исследует общее состояние зубов, мягких тканей, оценивает качество домашней гигиены, проводит перкуссию (постукивание), пальпацию (прощупывание), зондирование, проводит оценку ранее проведенного лечения, обследует при наличии установленные ортопедические конструкции: имплантаты, коронки и т.д.",
                  "Оценка скрытых новообразований – онконастороженность",
                  "Фотопротокол помогает зафиксировать информацию на момент обращения пациента, привлечь к обсуждению плана лечения всех необходимых специалистов, проанализировать и составить комплексный план лечения, задокументировать выполненную работу и продемонстрировать пациенту результат лечения, дает возможность отправлять фото и видео для индивидуальной моделировки улыбки",
                  memoItems[0],
                  "Предварительный план лечения. На основе проведенного обследования, доктор составит предварительный план лечения и даст рекомендации. На консультации вы сможете задать доктору все интересующие вас вопросы.",
                  "Через некоторое время после первичной консультации вас пригласят на презентацию плана лечения.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <span className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal text-primary-foreground text-xs font-display font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Зачем нужен комплексный план лечения?
              </h2>
              <p className="mb-4">
                Мы применяем комплексный подход, что позволяет подходить к лечению системно и эффективно решать даже самые сложные клинические случаи. Когда речь идет о сложных восстановлениях и предстоит объемное и длительное лечение, пациенту очень легко запутаться и растеряться.
              </p>
              <p className="mb-4">Комплексный план лечения поможет вам:</p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Четко видеть, что и когда нужно делать",
                  "Экономить деньги и время",
                  "Исполнять план поэтапно, не теряясь в многообразии процедур",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <span className="text-brand-teal font-bold">–</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Что входит в комплексный план лечения?
              </h3>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Подробное описание клинической ситуации в полости рта: пломбы, кариозные полости, отсутствующие зубы, состояние десны, ортопедические конструкции, прикус пациента.",
                  "Варианты решения текущих ситуаций, в которых на основе пожеланий пациента, сроков, финансовых возможностей и целесообразности указывается порядок проведения процедур.",
                  "Благодаря плану лечения пациент понимает какие ситуации в полости рта требуют срочного лечения, а какие временно можно отложить, чтобы вы шаг за шагом двигались в сторону здоровой улыбки в комфортном для себя темпе.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-secondary/40 rounded-2xl border border-border p-6 mb-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  Подсказка: как понять к какому специалисту записаться?
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Терапевт: лечит кариес, каналы, занимается гигиеной, отбеливанием.",
                    "Хирург: удаление зубов, имплантация.",
                    "Детский стоматолог: лечение молочных и постоянных зубов у детей.",
                    "Ортодонт: исправление прикуса.",
                    "Ортопед: установка коронок, протезов, виниров.",
                    "Пародонтолог: лечение десны.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                      <Stethoscope className="w-4 h-4 text-brand-blue shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-medium text-foreground">
                P.S. — Не забудьте принести рентгеновские снимки, например, КТ или ОПТГ, если есть. В нашей клинике они могут быть сделаны на месте.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Советы перед визитом
              </h2>
              <ul className="space-y-3">
                {tipsItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-foreground rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground mb-5">
                Детский прием
              </h2>
              <p className="text-primary-foreground/80 mb-5">
                Внимание! На первичный прием несовершеннолетнего в обязательном порядке должны сопровождать родители или законные представители (опекуны, попечители, усыновители. Бабушки, дедушки, няни таковыми не являются).
              </p>
              <p className="text-primary-foreground/80 mb-5">
                Согласно ст. 64 Семейного кодекса РФ законными представителями своих детей являются родители, либо опекуны.
              </p>
              <p className="text-primary-foreground/80 mb-5">
                Полномочия других лиц, представляющих интересы ребенка с согласия родителей, должны быть выражены в доверенности, выданной и оформленной в соответствии с законом: статья 53 ГПК РФ; статья 185 ГК РФ. Только законные представители имеют право подписывать договор и согласие на медицинское вмешательство в присутствии сотрудника медицинского учреждения.
              </p>
              <p className="text-primary-foreground/80 mb-3">Родителям необходимо иметь при себе следующие документы:</p>
              <ul className="space-y-2.5 mb-5">
                {[
                  "Паспорт родителя",
                  "Паспорт или свидетельство о рождении ребенка",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-primary-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-primary-foreground/80 mb-3">Если несовершеннолетнего сопровождает законный представитель:</p>
              <ul className="space-y-2.5">
                {[
                  "Паспорт",
                  "Паспорт или свидетельство о рождении ребенка",
                  "Нотариально заверенная доверенность",
                  "Постановление органов опеки/свидетельство о государственной регистрации акта усыновления",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-primary-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Как записаться на прием в Центр цифровой стоматологии Артикон?
              </h2>
              <p className="mb-4">
                Записаться на прием в клинику Артикон можно любым удобным для вас способом:
              </p>
              <ul className="space-y-2.5 mb-8">
                {bookingItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-4">
                С нетерпением ждем знакомства с вами, до встречи на приеме!
              </p>
              <p className="font-medium text-foreground mb-4">
                С заботой о вас,<br />
                команда Центра цифровой стоматологии Артикон
              </p>
              <p className="text-lg">
                {renderWithLinks("[Ознакомиться с ценами](/prices)")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-3">
            Записаться на первичный приём
          </h2>
          <p className="text-primary-foreground/85 mb-8">Первичная консультация — бесплатно</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-12 px-8 hover:bg-background/90">
              <Link to="/contacts">Записаться <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default PrimaryAppointmentPage;
