import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Receipt, MapPin, Phone, Clock, CheckCircle } from "lucide-react";
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
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className="text-brand-teal underline underline-offset-4 hover:opacity-80">
          {label}
        </a>
      )
    );
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
};

const TaxDeductionPage = () => {
  useEffect(() => {
    document.title = "Налоговый вычет - стоматология Артикон";

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
      "Оформите налоговый вычет в стоматологической клинике Артикон. Верните часть потраченных на лечение средств. Список документов для предоставления в налоговую. По всем вопросам обращайтесь к нашим администраторам."
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
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6" aria-label="Хлебные крошки">
            <Link to="/" className="hover:text-brand-teal transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/pacientam" className="hover:text-brand-teal transition-colors">Пациентам</Link>
            <span>/</span>
            <span className="text-primary-foreground/90">Налоговый вычет</span>
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
              Налоговый вычет за стоматологическое лечение
            </h1>
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
              <p className="mb-4">
                Пациенты стоматологических клиник согласно Налоговому кодексу имеют право вернуть 13 % от суммы лечения.
              </p>
              <p>
                {renderWithLinks("Подробнее читайте [здесь](https://www.nalog.gov.ru/rn77/taxation/taxes/ndfl/nalog_vichet/soc_nv/soc_nv_pm/).")}
              </p>
            </div>

            <div className="bg-secondary/40 rounded-2xl border border-border p-6">
              <p className="text-foreground">
                Социальный вычет поможет сэкономить на стоматологических услугах. Многие думают, что это долгий, сложный и энергозатратный процесс, но на самом деле все проще, чем кажется, если вы знаете алгоритм действий.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Кто может получить налоговый вычет на лечение?
              </h2>
              <p className="mb-4">У вас есть возможность вернуть часть средств при соблюдении следующих условий:</p>
              <ul className="space-y-3">
                {[
                  "Ваш заработок был официальным в том году, когда была оказана стоматологическая услуга. Компенсация выплачивается за счет ранее уплаченного НДФЛ",
                  "Если вы оплачивали лечение только за себя или близких родственников: родителей, супругов, несовершеннолетних детей",
                  renderWithLinks("Предоставляемые услуги входят в [специальный перечень медицинских услуг](https://normativ.kontur.ru/document?moduleId=1&documentId=351257)."),
                  "Заявление можно подать не позднее трех лет с момента лечения",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Сколько денег получится вернуть?
              </h2>
              <p className="mb-6">Медицинские услуги делятся на 2 списка:</p>

              <div className="bg-card rounded-2xl border border-border p-6 mb-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Список 1 — код “1” — лечение не является дорогостоящим
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Пример таких услуг:</p>
                <ul className="space-y-2.5 mb-4">
                  {[
                    "Удаление зубов",
                    "Лечение десны",
                    "Исправление прикуса брекетами",
                    "Лечение кариеса",
                    "Профессиональная гигиена и т.д.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/80">
                  Правительство РФ ограничило сумму налогового вычета на услуги из данного списка стоимостью лечения до 120 000 рублей. Таким образом, если на лечение вы потратили более 300 000 рублей, сумма вычета будет рассчитываться из 120 000 рублей.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 mb-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Список №2 — код “2” — дорогостоящее лечение
                </h3>
                <p className="text-sm text-muted-foreground mb-4">В этот список входят следующие услуги:</p>
                <ul className="space-y-2.5 mb-4">
                  {[
                    "имплантация",
                    "реконструктивные хирургические и костно-пластические операции на челюстях",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-brand-blue shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/80">
                  Сумма налогового вычета по данному списку не ограничена. То есть вы можете претендовать на возврат 13% даже от суммы, превышающей 120 000.
                </p>
              </div>

              <p className="text-base">
                {renderWithLinks("[Постановление Правительства РФ от 8 апреля 2020г. №458](https://www.consultant.ru/document/cons_doc_LAW_349790/)")}
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Пример расчета налогового вычета за стоматологическое лечение
              </h2>
              <p className="mb-4">К примеру, ваша ежемесячная зарплата — 80 000 руб.</p>
              <div className="bg-secondary/40 rounded-2xl border border-border p-6 space-y-3 text-base text-foreground/80">
                <p>Суммарный доход за год: <span className="font-semibold text-foreground">80 000 руб. × 12 мес. = 960 000 руб.</span></p>
                <p>Из этой суммы вычитался подоходный налог (НДФЛ) — 13%: <span className="font-semibold text-foreground">960 000 руб. × 13% = 124 800 руб.</span></p>
                <p>
                  В этом периоде вы прошли стоматологическое лечение на сумму 160 000 руб. Например, лечение множественного кариеса, заболеваний десен и удаление зубов мудрости.
                </p>
                <p>
                  Поскольку данные услуги относятся к Списку №1 (не дорогостоящее лечение), сумма налогового вычета ограничена стоимостью лечения до 120 000 рублей.
                </p>
                <p>
                  Сумма НДФЛ, подлежащая возврату из бюджета, может составить 13% от стоимости лечения: <span className="font-semibold text-foreground">120 000 × 13% = 15 600 руб.</span>
                </p>
                <p>
                  Эту сумму за стоматологические услуги из Списка №1 вы получите из тех самых 124 800 руб. — подоходного налога за год, который отчислялся из вашей зарплаты в налоговую.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Как оформить налоговый вычет на лечение?
              </h2>
              <p className="mb-4">
                Есть два способа: через налоговую или через работодателя. В первом случае вы получите сумму из уже уплаченных налогов за прошлый год. Это наиболее распространенный и простой способ.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Сохраняйте чеки и договор с клиникой, в которой вы проходили лечение. В случае потери чеков за медицинские услуги, у вас сохраняется право на получение вычета. В таком случае факт оплаты лечения можно будет подтвердить с помощью справки об оказании медицинских услуг, либо вы можете запросить в клинике копии чеков.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Документы, необходимые для оформления налогового вычета через налоговую
              </h3>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Паспорт РФ",
                  "Договор с медучреждением",
                  "Декларация по форме 3-НДФЛ",
                  "Справка 2-НДФЛ со всех мест работы за тот год, в котором была оказана медицинская услуга",
                  "Заявление на возврат налога с указанием реквизитов счета, на который должны будут поступить денежные средства",
                  "Заверенная копия лицензии медучреждения",
                  "Документы, которые смогут подтвердить расходы",
                  "Документы, подтверждающие родство, если вы получаете вычет за родственника",
                  "Справка об оплате услуг",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                Набор документов и заполненную декларацию можно лично отнести в налоговую по месту жительства, подать через сайт налоговой онлайн или отправить заказным письмом. Документы можно подавать в налоговую службу по окончании года, в котором вы проходили лечение.
              </p>
            </div>

            <div className="bg-foreground rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-display font-semibold text-primary-foreground mb-4">
                Обратите внимание!
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Договор может быть оформлен на родственника или на вас, а платежные документы только на того, кто будет подавать декларацию на налоговый вычет.
              </p>
              <p className="text-primary-foreground/80 mb-4">
                Например, лечение проходит папа, за него платит сын. Если справку об оплате выпишут на папу, сын уже не сможет получить деньги. Чтобы не было путаницы, лучше все документы сразу оформлять на того, кто планирует в будущем получать выплату.
              </p>
              <p className="text-primary-foreground/80">
                Обычно налоговая проверяет документы в течение трех месяцев. Если проверка пройдет успешно, в течение месяца денежные средства должны поступить на указанный вами счет.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Получение налогового вычета через работодателя
              </h2>
              <p className="text-foreground/85">
                Предоставьте в налоговую документы, которые подтверждают право на получение налогового вычета с заявлением на получение специального уведомления. После проверки налоговая вам предоставит уведомление, которое нужно будет передать работодателю. На основании этой бумаги в последующие месяцы с вас не будут удерживать подоходный налог до компенсации полагающейся суммы вычета.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Сколько раз можно воспользоваться налоговым вычетом за лечение?
              </h2>
              <p className="text-foreground/85 mb-4">
                Вычет можно получать неограниченное количество раз в течение всей жизни, но не чаще чем 1 раз в год.
              </p>
              <p className="text-foreground/85">
                У работодателя налоговый вычет за лечение зубов можно получить только в том году, в котором предоставлена медицинская услуга. Через налоговые органы заявление на возврат можно подать в течение трех лет с момента оказания услуги.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Как мы можем вам помочь?
              </h2>
              <p className="text-foreground/85 mb-4">
                По вашему запросу мы подготовим документы, касающиеся нашей деятельности, в течение 10 рабочих дней.
              </p>
              <p className="text-foreground/85 mb-4">
                Обращаем Ваше внимание, на то, что налоговый вычет за детей, можно оформить только до достижения ребенком 18 лет. (Налоговый Кодекс РФ ст.219)
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                Какие документы нам необходимы?
              </h2>
              <p className="mb-4">Для получения налогового вычета, если плательщиком является сам пациент:</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "копия паспорта",
                  "копия ИНН (в случае отсутствия копии документа предоставить номер ИНН)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                Вышеуказанные документы можно предоставить в регистратуру или направить по электронной почте {renderWithLinks("[clinic@articon.pro](mailto:clinic@articon.pro)")}. В текстовом сообщении укажите, пожалуйста: за какой период обслуживания необходимо предоставить справку; ФИО пациента; контактный телефон.
              </p>

              <p className="mb-4">Пакет документов для получения налогового вычета, если плательщиком не является пациент, заявителю (плательщику) необходимо предоставить следующие документы:</p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "копии паспортов (плательщика и пациента)",
                  "копия ИНН плательщика (в случае отсутствия копии документа предоставить номер ИНН)",
                  "свидетельство о рождении ребенка (если пациент ребенок)",
                  "свидетельство о браке (если пациент супруг или супруга)",
                  "свидетельство о рождении плательщика (если пациент-родитель)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground/80">
                    <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                Вышеуказанные документы можно предоставить в регистратуру или направить по электронной почте {renderWithLinks("[clinic@articon.pro](mailto:clinic@articon.pro)")}. В текстовом сообщении укажите, пожалуйста: за какой период обслуживания необходимо предоставить справку; ФИО плательщика; ФИО пациента; степень родства; контактный телефон.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5">
                По любым вопросам свяжитесь с нами удобным способом
              </h2>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-base text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                  {renderWithLinks("по электронной почте [clinic@articon.pro](mailto:clinic@articon.pro)")}
                </li>
                <li className="flex items-start gap-3 text-base text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-1" />
                  по телефону <a href="tel:+74959759598" className="text-brand-teal underline underline-offset-4 hover:opacity-80">+7 (495) 975-95-98</a>
                </li>
              </ul>
              <p className="mt-6 font-medium text-foreground">
                С заботой о вас,<br />
                Центр цифровой стоматологии Артикон
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground mb-3">
            Остались вопросы по налоговому вычету?
          </h2>
          <p className="text-primary-foreground/85 mb-8 max-w-md mx-auto">Наши администраторы помогут подготовить необходимые документы</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-background text-foreground font-semibold h-12 px-8 hover:bg-background/90">
              <Link to="/contacts">Связаться <ArrowRight className="ml-2 w-4 h-4" /></Link>
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

export default TaxDeductionPage;
