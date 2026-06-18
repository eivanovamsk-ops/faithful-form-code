import { motion } from "framer-motion";
import { ClipboardList, AlertCircle, Ban, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const generalRules = [
  "Перед подписанием договора об оказании медицинских услуг просьба внимательно ознакомиться со всей информацией.",
  "Для соблюдения всех мер безопасности и асептики просим вас не приводить в клинику ваших домашних питомцев.",
  "Пожалуйста, выключайте мобильный телефон на время приема.",
  "Наша главная задача — проведение качественного медицинского лечения в комфортной обстановке. Мы всегда уважительно относимся ко всем сотрудникам и гостям клиники и призываем вас тоже придерживаться правил вежливого общения.",
  "Несовершеннолетние лица в возрасте до 15 лет могут находиться в зданиях и служебных помещениях Клиники только в сопровождении родителей, близких родственников или законных представителей.",
  "Просим принять во внимание, что врач вправе отказать в лечении, если: пациент не следует его предписаниям, не соблюдает внутренний распорядок и указанные выше правила медицинского учреждения.",
  "Данные правила могут изменяться и дополняться в зависимости от изменения в законодательстве на федеральном и местном уровнях.",
  "Если вы почувствовали недомогание накануне приема, пожалуйста сообщите об этом по телефону администраторам клиники и мы перенесем прием.",
  "При посещении медицинских кабинетов просьба надевать на обувь бахилы или переобуваться в сменную обувь.",
];

const prohibitedItems = [
  "проносить в здания и служебные помещения Клиники огнестрельное, газовое и холодное оружие, ядовитые, радиоактивные, химические и взрывчатые вещества, спиртные напитки и иные предметы и средства, наличие которых у посетителя либо их применение (использование) может представлять угрозу для безопасности окружающих",
  "находиться в служебных помещениях Клиники без разрешения",
  "употреблять пищу в коридорах, на лестничных маршах и других помещениях",
  "курить на крыльце, лестничных площадках, в коридорах, кабинетах, фойе и др. помещениях Клиники",
  "играть в азартные игры в помещениях и на территории Клиники",
  "громко разговаривать, шуметь, хлопать дверями",
  "выносить из помещения документы, полученные для ознакомления",
  "изымать какие-либо документы из медицинских карт, со стендов и из папок информационных стендов",
  "размещать в помещениях и на территории клиники объявления без разрешения администрации Клиники",
  "производить фото- и видеосъемку без предварительного разрешения администрации Клиники",
  "выполнять в помещениях клиники функции торговых агентов, представителей и находиться в помещениях",
  "находиться в помещениях Клиники в верхней одежде, грязной обуви",
  "преграждать проезд санитарного транспорта к зданиям Клиники",
  "оставлять малолетних детей без присмотра",
  "приходить на прием к врачу в алкогольном, наркотическом, ином токсическом опьянении",
];

const PatientRulesPage = () => {
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
              <ClipboardList className="w-4 h-4" />
              <span>Правила клиники</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Правила поведения пациентов при нахождении в медицинской клинике
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Дорогие гости! На данной странице вы можете ознакомиться с правилами поведения в «Центре цифровой стоматологии «Артикон». Очень просим вас их придерживаться.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-sm space-y-10">
            {/* General Rules */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <h2 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-brand-blue shrink-0" />
                Общие правила
              </h2>
              <ul className="space-y-4">
                {generalRules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Prohibited */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
            >
              <h2 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <Ban className="w-5 h-5 text-red-500 shrink-0" />
                Пациентам запрещается
              </h2>
              <ul className="space-y-4">
                {prohibitedItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Note */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              className="bg-secondary/50 rounded-xl p-6 border border-border"
            >
              <p className="text-muted-foreground leading-relaxed text-sm">
                В ситуации, если опоздания регулярны (более 2-ух раз за план лечения), мы оставляем за собой право предложить вам следующие приемы без предварительной записи, «день в день» (в день обращения при наличии свободного времени у доктора).
              </p>
            </motion.div>

            {/* Contact reminder */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              className="flex items-center gap-3 text-sm text-muted-foreground"
            >
              <Phone className="w-4 h-4 text-brand-blue" />
              <span>
                По всем вопросам обращайтесь по телефону{" "}
                <a href="tel:+74959759598" className="text-brand-blue hover:underline font-medium">+7 (495) 975-95-98</a>
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientRulesPage;
