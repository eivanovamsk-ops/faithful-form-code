import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ChevronDown, Scan, Scissors, Leaf, Heart, Shield, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogArticle {
  icon: React.ElementType;
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  sections: { heading: string; paragraphs: string[] }[];
}

const articles: BlogArticle[] = [
  {
    icon: Scan,
    slug: "implantacija-po-shablonam",
    tag: "Имплантация",
    title: "Имплантация зубов по хирургическим шаблонам: точность до миллиметра",
    excerpt: "Цифровые технологии позволяют заранее изготовить навигационный шаблон — специальную капу с отверстиями для имплантатов, которая обеспечивает абсолютную прогнозируемость и безопасность процедуры.",
    sections: [
      {
        heading: "Что такое имплантация по шаблону",
        paragraphs: [
          "Навигационный хирургический шаблон — это индивидуальная капа с отверстиями, изготовленная на основе данных компьютерной томографии и цифрового сканирования челюстей. Шаблон фиксируется в полости рта перед операцией и направляет сверло строго в запланированную позицию — ни миллиметра вправо, ни миллиметра влево.",
          "Данные КТ и сканы челюстей объединяются в специальной программе, где зубной техник моделирует будущую коронку и виртуально устанавливает имплантат в идеальное положение. Файл согласовывается с ортопедом и хирургом, после чего изготавливается шаблон.",
        ],
      },
      {
        heading: "Преимущества навигационной имплантации",
        paragraphs: [
          "• Идеальное положение и глубина имплантата с учётом анатомии пациента и будущей коронки",
          "• Возможность установки временной коронки в день операции",
          "• Максимально точная смета лечения, рассчитанная заранее",
          "• Снижение рисков ошибок и послеоперационных осложнений",
          "• Более быстрая и менее травматичная операция",
          "• Ускоренное заживление и восстановление тканей",
        ],
      },
    ],
  },
  {
    icon: Scissors,
    slug: "udalenie-retinirovannogo-zuba",
    tag: "Хирургия",
    title: "Удаление ретинированного зуба: когда необходимо и как проходит операция",
    excerpt: "Ретинированный зуб — зуб, который не прорезался из-за недостатка места в челюсти. Если ортодонтически вернуть его в зубной ряд невозможно, плановое удаление обязательно.",
    sections: [
      {
        heading: "Почему нельзя откладывать удаление",
        paragraphs: [
          "Чем дольше вы откладываете удаление ретинированного зуба, тем выше вероятность острого воспаления и тем сложнее будет процедура. Своевременное обращение к хирургу-стоматологу позволяет провести операцию в плановом порядке с минимальными рисками.",
        ],
      },
      {
        heading: "Как проходит процедура",
        paragraphs: [
          "Перед операцией выполняется компьютерная томограмма для точного планирования хода вмешательства. Врач оценивает расположение зуба относительно соседних зубов и важных анатомических структур — верхнечелюстного синуса и нижнечелюстного канала с ветвью тройничного нерва.",
          "Ретинированные зубы удаляют сегментарно — по частям, чтобы минимизировать травму окружающих тканей. Чем меньше травматизация, тем легче послеоперационный период и меньше отёк.",
        ],
      },
    ],
  },
  {
    icon: Leaf,
    slug: "articon-berezhet-planetu",
    tag: "Экология",
    title: "Articon бережёт планету: экологичная стоматология без слепочных масс",
    excerpt: "Мы берём на себя ответственность за заботу об окружающей среде. Клиника отказалась от силиконовых слепочных масс, которые разлагаются более 20 лет, в пользу цифрового сканирования.",
    sections: [
      {
        heading: "Наш вклад в экологию",
        paragraphs: [
          "Команда клиники предпринимает ряд действий по снижению негативного воздействия на окружающую среду:",
          "• Разумное использование одноразовых расходных материалов — перчаток, микробрашей, кисточек",
          "• Полный отказ от слепочных масс. Силикон в составе традиционных оттисков разлагается более 20 лет, загрязняя окружающую среду. Представьте, сколько слепков делают стоматологические клиники по всему миру ежедневно!",
        ],
      },
      {
        heading: "Цифровая альтернатива",
        paragraphs: [
          "Центр цифровой стоматологии Articon использует интраоральный сканер для получения максимально точного 3D-снимка ротовой полости. Это не только устраняет неприятные ощущения для пациента, но и исключает необходимость в силиконовых слепках.",
          "Мы предлагаем начинать менять мир с себя. Каждый человек и каждое предприятие могут внести свой вклад в сохранность окружающей среды.",
        ],
      },
    ],
  },
  {
    icon: Heart,
    slug: "lechenie-pulpita",
    tag: "Терапия",
    title: "Лечение пульпита: симптомы, этапы и методы лечения воспаления нерва зуба",
    excerpt: "Если вовремя не вылечить кариес, бактерии проникают в пульпарную камеру и инфицируют нерв зуба. Появляются самопроизвольные боли, преимущественно ночные, которые невозможно снять обезболивающими.",
    sections: [
      {
        heading: "Как развивается пульпит",
        paragraphs: [
          "Бактерии активно размножаются, занимая всё большую площадь зуба и проникая в его глубокие слои. В центре зуба расположена пульпарная камера с нервом (пульпой). Когда инфекция достигает этой камеры, сначала появляется чувствительность на горячее и холодное, а затем — острые самопроизвольные боли, особенно по ночам.",
          "При остром пульпите боль практически невозможно купировать обычными анальгетиками в домашних условиях.",
        ],
      },
      {
        heading: "Этапы эндодонтического лечения",
        paragraphs: [
          "Лечение пульпита включает извлечение воспалённого нерва из зуба. Пульпа по форме напоминает осьминога — «голова» в камере и «щупальца» в корневых каналах. Нерв извлекается специальными тонкими инструментами.",
          "Далее корневые каналы тщательно расширяются, промываются антисептическими растворами и плотно пломбируются гуттаперчевыми штифтами со специальной пастой. После этого восстанавливается коронковая часть — пломбой или коронкой в зависимости от степени разрушения зуба.",
        ],
      },
    ],
  },
  {
    icon: Shield,
    slug: "profilaktika-kariesa",
    tag: "Профилактика",
    title: "Профилактика кариеса: домашний уход и профессиональная гигиена полости рта",
    excerpt: "Кариес вызывается бактериями, обитающими в мягком зубном налёте. Для предотвращения развития кариеса критически важна ежедневная гигиена и профессиональная чистка раз в полгода.",
    sections: [
      {
        heading: "Правила домашнего ухода",
        paragraphs: [
          "Чистите зубы дважды в день — утром и вечером — не менее трёх минут, тщательно прочищая каждый сегмент зубного ряда. После каждого приёма пищи ополаскивайте рот или используйте жевательную резинку без сахара.",
          "Уделяйте особое внимание межзубным промежуткам — самая частая локализация скрытого кариеса. Используйте зубную нить (флосс) и межзубные ёршики ежедневно.",
        ],
      },
      {
        heading: "Профессиональная гигиена в клинике",
        paragraphs: [
          "При скоплении зубных отложений необходима профессиональная чистка, которая состоит из четырёх этапов:",
          "1. Снятие твёрдых зубных отложений ультразвуковой насадкой",
          "2. Удаление пигментированного налёта пескоструйным методом (Air-Flow)",
          "3. Полирование эмали профессиональной пастой и вращающейся щёткой",
          "4. Фторирование эмали профессиональными растворами (по показаниям)",
        ],
      },
    ],
  },
  {
    icon: Stethoscope,
    slug: "profosmotr",
    tag: "Профилактика",
    title: "Зачем нужны регулярные профилактические осмотры у стоматолога",
    excerpt: "Даже если ничего не болит, это не означает отсутствие проблем с зубами. Регулярные визиты к стоматологу позволяют выявить патологии на ранней стадии и избежать дорогостоящего лечения.",
    sections: [
      {
        heading: "Что даёт профилактический осмотр",
        paragraphs: [
          "• Своевременное обнаружение зубного налёта и камня, предотвращение галитоза",
          "• Обучение правильному уходу за зубами",
          "• Профилактика кровоточивости дёсен, разрушения эмали и пародонтоза",
          "• Раннее выявление кариозного процесса и других патологий",
        ],
      },
      {
        heading: "Преимущества регулярных визитов",
        paragraphs: [
          "Щадящее лечение — патологии, диагностированные на ранних стадиях, лечатся малоинвазивными методиками. Чем раньше обнаружена болезнь, тем меньше усилий требуется для её лечения.",
          "Экономия времени и средств — раннее лечение требует меньшего количества материалов и позволяет максимально сохранить целостность тканей зуба, избежать масштабных реставраций.",
          "От состояния зубов напрямую зависит здоровье всего организма. Игнорирование профилактики может привести к серьёзным заболеваниям и потере зубов.",
        ],
      },
    ],
  },
];

const BlogCard = ({ article, index }: { article: BlogArticle; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-card rounded-2xl border border-border overflow-hidden hover:border-brand-teal/30 hover:shadow-[0_8px_40px_-12px_hsl(var(--brand-teal)/0.15)] transition-all duration-500"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-8"
      >
        <div className="flex items-start gap-5">
          <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500",
            isOpen ? "bg-brand-teal scale-110" : "bg-secondary"
          )}>
            <article.icon className={cn(
              "w-6 h-6 transition-colors duration-500",
              isOpen ? "text-primary-foreground" : "text-brand-blue"
            )} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-medium tracking-wider uppercase text-brand-teal bg-brand-teal/10 px-2.5 py-0.5 rounded-full">{article.tag}</span>
            </div>
            <h2 className={cn(
              "font-display font-semibold text-lg mb-2 transition-colors duration-300 pr-8",
              isOpen ? "text-brand-teal" : "text-foreground"
            )}>
              {article.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
          </div>
          <ChevronDown className={cn(
            "w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-300",
            isOpen && "rotate-180"
          )} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 space-y-8 border-t border-border pt-6 ml-[4.75rem]">
              {article.sections.map((section, si) => (
                <motion.div
                  key={section.heading}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: si * 0.05 }}
                >
                  <h3 className="font-display font-semibold text-base text-foreground mb-3">{section.heading}</h3>
                  <div className="space-y-3">
                    {section.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-sm text-foreground/80 leading-relaxed">{p}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const ArticlesPage = () => (
  <div>
    <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block text-xs font-medium tracking-[0.3em] uppercase text-brand-teal mb-6">Пациентам</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
            Блог
          </h1>
          <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
            Полезные статьи о стоматологии, цифровых технологиях и здоровье полости рта от специалистов Articon
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-primary-foreground/10 origin-left"
      />
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          {articles.map((article, i) => (
            <BlogCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ArticlesPage;
