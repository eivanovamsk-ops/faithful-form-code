import { motion } from "framer-motion";
import { FileSignature, CheckCircle, Mail, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const sections = [
  {
    title: "1. Перечень персональных данных",
    intro: "Согласие даётся на обработку следующих персональных данных:",
    items: [
      "Фамилия, имя, отчество",
      "Номер контактного телефона",
      "Адрес электронной почты (e-mail)",
      "Почтовый адрес (адрес доставки)",
      "Наименование организации, должность (для юридических лиц)",
      "Иные данные, добровольно предоставленные Пользователем",
    ],
  },
  {
    title: "2. Цели обработки",
    intro: "Персональные данные обрабатываются в целях:",
    items: [
      "Оформления и исполнения заказов на товары и услуги",
      "Доставки товаров по указанному адресу",
      "Регистрации и участия в образовательных программах и курсах",
      "Обработки обращений и предоставления консультаций",
      "Направления информационных и рекламных сообщений (с возможностью отказа)",
      "Улучшения качества обслуживания",
      "Исполнения требований законодательства Российской Федерации",
    ],
  },
  {
    title: "3. Перечень действий с персональными данными",
    content: [
      "Настоящим согласием Пользователь разрешает Оператору совершать следующие действия с персональными данными: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение.",
      "Обработка осуществляется с использованием средств автоматизации и без использования таких средств (смешанная обработка).",
    ],
  },
  {
    title: "4. Передача персональных данных",
    intro: "Пользователь соглашается с тем, что Оператор вправе передавать персональные данные третьим лицам, в том числе:",
    items: [
      "Курьерским и транспортным компаниям для доставки заказов (СДЭК, Boxberry и др.)",
      "Платёжным системам и банкам для обработки оплаты",
      "Партнёрам для оказания услуг по поручению Оператора",
      "Государственным органам в случаях, предусмотренных законом",
    ],
  },
  {
    title: "5. Срок действия согласия",
    content: [
      "Согласие действует со дня его предоставления и до момента его отзыва Пользователем, но не более 5 (пяти) лет с момента последнего взаимодействия с Оператором, если иное не предусмотрено законодательством.",
      "По истечении указанного срока согласие считается продлённым на каждые следующие 5 лет при отсутствии заявления об отзыве.",
    ],
  },
  {
    title: "6. Порядок отзыва согласия",
    content: [
      "Пользователь вправе отозвать настоящее согласие в любой момент путём направления письменного заявления по адресу: 115191, г. Москва, ул. Серпуховский вал, д. 21, корп. 4, эт. 1, пом. II, или по электронной почте: clinic@articon.pro",
      "В заявлении необходимо указать: Фамилию, имя, отчество; контактные данные, указанные при регистрации; требование о прекращении обработки персональных данных.",
      "Оператор прекращает обработку персональных данных в течение 30 дней с момента получения отзыва, за исключением случаев, когда обработка необходима для исполнения требований законодательства или договорных обязательств.",
    ],
  },
  {
    title: "7. Права субъекта персональных данных",
    intro: "В соответствии с ФЗ-152 Пользователь имеет право:",
    items: [
      "Получать информацию об обработке своих персональных данных",
      "Требовать уточнения своих персональных данных",
      "Требовать блокирования или уничтожения персональных данных",
      "Обжаловать действия или бездействие Оператора в Роскомнадзор",
      "Защищать свои права в судебном порядке",
    ],
  },
  {
    title: "8. Заключительные положения",
    content: [
      "Предоставляя свои персональные данные при использовании Сайта, оформлении заказа, регистрации на курс или заполнении формы обратной связи, Пользователь подтверждает, что ознакомлен с настоящим Согласием и Политикой конфиденциальности Оператора и принимает их условия.",
      "Оператор оставляет за собой право вносить изменения в настоящее Согласие. Актуальная редакция размещается на Сайте.",
    ],
  },
];

const ConsentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-16 pb-12 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-medium mb-6">
              <FileSignature className="w-4 h-4" />
              <span>Юридические документы</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Согласие на обработку персональных данных
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Редакция от 01 января 2026 года
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-sm"
          >
            {/* Intro */}
            <div className="mb-10 pb-8 border-b border-border">
              <p className="text-muted-foreground leading-relaxed">
                Настоящим я, субъект персональных данных (далее — «Пользователь»), свободно, своей волей и в своем интересе даю согласие Обществу с ограниченной ответственностью Центр цифровой стоматологии «Артикон» (ИНН / КПП 7725496942 / 772501001, ОГРН 1187746789867, адрес: 115191, г. Москва, ул. Серпуховский вал, д. 21, корп. 4, эт. 1, пом. II) (далее — «Оператор») на обработку моих персональных данных на следующих условиях.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <motion.div
                  key={section.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.05}
                >
                  <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                    {section.title}
                  </h2>
                  <div className="pl-8 space-y-3">
                    {section.intro && (
                      <p className="text-muted-foreground leading-relaxed">{section.intro}</p>
                    )}
                    {section.items && (
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.content && section.content.map((paragraph, j) => (
                      <p key={j} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="mt-12 pt-8 border-t border-border"
            >
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">Контактная информация Оператора</h3>
              <div className="grid sm:grid-cols-2 gap-4 pl-8">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>clinic@articon.pro</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>115191, г. Москва, ул. Серпуховский вал, д. 21, корп. 4</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConsentPage;
