import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, GraduationCap, Award, Star, Briefcase } from "lucide-react";

import artemovaPhoto from "@/assets/doctors/artemova.jpg";
import borisovPhoto from "@/assets/doctors/borisov.jpg";
import vasilenkoPhoto from "@/assets/doctors/vasilenko.jpg";
import zhivlyukPhoto from "@/assets/doctors/zhivlyuk.jpg";
import kozlovaPhoto from "@/assets/doctors/kozlova.jpg";
import krasnoslobodtsevaPhoto from "@/assets/doctors/krasnoslobodtseva.jpg";
import mamedovPhoto from "@/assets/doctors/mamedov.jpg";
import milyutinaPhoto from "@/assets/doctors/milyutina.jpg";
import mishchenkoPhoto from "@/assets/doctors/mishchenko.jpg";
import odintsovPhoto from "@/assets/doctors/odintsov.jpg";

interface Doctor {
  name: string;
  role: string;
  photo?: string;
  highlight?: boolean;
  experience?: string;
  skills?: string[];
  education?: string;
  additionalEducation?: string;
  reviews?: { author: string; text: string }[];
}

const doctors: Doctor[] = [
  {
    name: "Артемова Елена Юрьевна",
    role: "Главный врач клиники Артикон, стоматолог-хирург",
    photo: artemovaPhoto,
    experience: "20 лет",
    skills: [
      "Проведение в условиях седации всех амбулаторных хирургических вмешательств",
      "Удаление зубов любой сложности, зубосохраняющие операции, имплантация, костная пластика",
      "Автор 18 печатных работ, 9 статей в ведущих научных журналах ВАК РФ",
      "Проводит обучающие курсы для врачей по цифровым технологиям",
    ],
    education: "Омская Государственная Медицинская Академия, 1998–2003",
    additionalEducation: "2013 — присвоена первая врачебная категория. 2016 — защита кандидатской диссертации",
  },
  {
    name: "Гусейнова Эльмира",
    role: "Заместитель главного врача, координатор лечения",
    highlight: true,
  },
  {
    name: "Живлюк Марина Евгеньевна",
    role: "Стоматолог-ортодонт",
    photo: zhivlyukPhoto,
    experience: "28 лет",
    skills: [
      "Лечение пациентов с аномалиями прикуса в любом возрасте",
      "Профилактика ортодонтических нарушений",
      "Владение современными видами съёмной и несъёмной техники (брекет-системы, элайнеры, эластопозиционеры, пластинки)",
    ],
    education: "Московский Медицинский Стоматологический Институт (ММСИ), 1994",
    additionalEducation: "1994–1995 — интернатура на базе ДСП №26, г. Москва. 1995–1998 — ординатура на кафедре ортодонтии РМАПО",
    reviews: [
      { author: "Минаева Елена", text: "Поставила элайнеры в этой клинике. Хороший ортодонт, приятный персонал." },
      { author: "Горячкина А.", text: "Уже год исправляю прикус у Марины Евгеньевны и очень рада, что попала именно к ней. Всегда отзывчива и внимательна." },
      { author: "Казанцева Ирина", text: "Прекрасный врач! Моя дочь проходила у неё лечение на элайнерах в течение 1 года. Отзывчивая, внимательная." },
    ],
  },
  {
    name: "Василенко Анастасия Валерьевна",
    role: "Стоматолог-ортопед",
    photo: vasilenkoPhoto,
    experience: "12 лет",
    skills: [
      "Несъёмное протезирование (металлокерамика, диоксид циркония, EMAX)",
      "Протезирование винирами и керамическими вкладками",
      "Протезирование на имплантатах, в том числе при полном отсутствии зубов",
      "Съёмное и бюгельное протезирование, Квадротти",
    ],
    education: "МГМСУ им. А.И. Евдокимова, 2009–2012",
    reviews: [
      { author: "Шишкова А.Ю.", text: "Установила 2 керамические вкладки. Всё очень комфортно и безболезненно." },
      { author: "Киреев М.В.", text: "У Анастасии Валерьевны лечились мой муж и родители. Она профессионал своего дела." },
      { author: "Константин М.", text: "Анастасия В. провела имплантацию с протезированием All on 4. Рад, что попал в такую клинику." },
    ],
  },
  {
    name: "Борисов Александр Александрович",
    role: "Стоматолог-терапевт",
    photo: borisovPhoto,
    experience: "10 лет",
    skills: [
      "Прямые эстетические реставрации",
      "Лечение кариеса с применением оптического увеличения и микроскопа",
      "Эндодонтическое лечение (пульпит, периодонтит), перелечивание каналов",
      "Извлечение фрагментов инструментов, штифтов, вкладок из зубов",
      "Отбеливание зубов ZOOM",
    ],
    education: "Смоленская государственная медицинская академия, 2009–2014",
    additionalEducation: "2014–2015 — интернатура. 2015 — первичная специализация по терапевтической стоматологии",
    reviews: [
      { author: "Королева Ирина", text: "Очень всё понравилось! Лечение прошло комфортно и быстро, буду рекомендовать друзьям." },
      { author: "Ольга М.", text: "Компетентный многопрофильный врач, которому сложность лечения только в радость." },
    ],
  },
  {
    name: "Мамедов Джейхун Романович",
    role: "Стоматолог-хирург, имплантолог",
    photo: mamedovPhoto,
    skills: [
      "Хирургическая стоматология и имплантология",
      "Пародонтология",
      "Ортопедическая стоматология",
    ],
    education: "Башкирский государственный медицинский университет, 2013",
    additionalEducation: "2013–2014 — интернатура (Уфа). 2014–2016 — ординатура по челюстно-лицевой хирургии (МГМСУ им. Евдокимова)",
  },
  {
    name: "Одинцов Семён Олегович",
    role: "Стоматолог-ортопед, гнатолог",
    photo: odintsovPhoto,
    experience: "более 11 лет",
    skills: [
      "Несъёмное протезирование (металлокерамика, диоксид циркония, EMAX)",
      "Протезирование винирами и керамическими вкладками",
      "Протезирование на имплантатах, «всё на 4/6»",
      "Цифровые технологии в ортопедии",
    ],
    education: "РУДН, 2015, стоматология",
    additionalEducation: "Интернатура на кафедре ортопедической стоматологии РУДН",
    reviews: [
      { author: "Анастасия Г.", text: "Огромная благодарность доктору Семёну Олеговичу! Ставили 3 коронки — это просто высший уровень." },
      { author: "Лима Шарипова", text: "Очень впечатлена подходом ортопеда-гнатолога Семёна Олеговича. Превосходная работа." },
    ],
  },
  {
    name: "Мищенко Александра Александровна",
    role: "Стоматолог-ортодонт, гнатолог",
    photo: mishchenkoPhoto,
    experience: "более 5 лет",
    skills: [
      "Ортодонтическое лечение детей, подростков и взрослых",
      "Ранняя детская ортодонтия (HAAS, Марко Росса, лицевая маска, MARPE)",
      "Взрослое лечение в гнатологической концепции с брекет-системами",
      "Диагностика функционирования ВНЧС",
    ],
    education: "Первый СПбГМУ им. И.П. Павлова, 2019. Ординатура — ЦНИИСиЧЛХ, 2021",
    reviews: [
      { author: "Веретельник И.", text: "Была на консультации перед ортодонтическим лечением. Она ответила на все вопросы." },
      { author: "Петин И.В.", text: "Оба ребёнка проходят лечение у Александры Александровны. Очень профессиональный врач." },
    ],
  },
  {
    name: "Козлова Ксения Александровна",
    role: "Стоматолог-ортодонт",
    photo: kozlovaPhoto,
    skills: [
      "Система Damon",
      "Функциональные несъёмные аппараты при дистальной окклюзии",
      "Ортодонтическое лечение с эластопозиционером «Корректор»",
    ],
    education: "Самарский государственный медицинский университет, 2010, ортодонтия",
    additionalEducation: "2011 — профессиональная переподготовка по ортопедической стоматологии. Интернатура по стоматологии общей практики",
  },
  {
    name: "Романенко Анастасия Николаевна",
    role: "Стоматолог-терапевт, детский стоматолог",
    experience: "более 6 лет",
    skills: [
      "Лечение кариеса и его осложнений у взрослых и детей",
      "Эндодонтическое лечение с операционным микроскопом",
      "Прямая реставрация зубов",
      "Установка металлических коронок на молочные зубы",
      "Профессиональная гигиена и лечение пародонтита",
    ],
    education: "Смоленский государственный медицинский университет, 2013–2018",
    additionalEducation: "2018 — аккредитация по стоматологии общей практики. Повышение квалификации по терапевтической и детской стоматологии",
  },
  {
    name: "Краснослободцева Елена Павловна",
    role: "Стоматолог-терапевт",
    photo: krasnoslobodtsevaPhoto,
    experience: "более 15 лет",
    skills: [
      "Прямая реставрация зубов",
      "Эндодонтическое лечение с операционным микроскопом",
      "Лечение взрослых под наркозом",
      "Комплексная реабилитация",
    ],
    education: "ММА им. И.М. Сеченова, 2007",
    additionalEducation: "Интернатура и ординатура по терапевтической стоматологии. МГМСУ им. А.И. Евдокимова",
    reviews: [
      { author: "Петина Юлия", text: "Лечила зубы у Елены Павловны — всё отлично, профессиональный подход." },
      { author: "Гаукин Иван", text: "Клиника — класс. Врачи замечательные! Был приятно удивлён профессионализмом." },
    ],
  },
  {
    name: "Таквель Виктория Александровна",
    role: "Стоматолог-хирург, пародонтолог",
  },
  {
    name: "Милютина Алла Андреевна",
    role: "Стоматолог-терапевт, детский стоматолог",
    photo: milyutinaPhoto,
    experience: "более 14 лет",
    skills: [
      "Ведение терапевтического приёма у взрослых и детей",
      "Детский адаптационный приём",
      "Эндодонтическое лечение корневых каналов",
      "Эстетическое восстановление всех групп зубов",
      "Профессиональная гигиена полости рта",
    ],
    education: "Новосибирский государственный медицинский университет, 2008",
    additionalEducation: "2009 — интернатура. 2012 — переподготовка по терапевтической стоматологии. 2017 — повышение квалификации РУДН",
    reviews: [
      { author: "Федосеева К.", text: "Обратилась с острой болью. Попала к Алле Андреевне и даже не почувствовала никаких неприятных ощущений." },
      { author: "Павлова М.", text: "Прошла профессиональную гигиену зубов. Обычно откладываю, но здесь всё прошло легко." },
    ],
  },
];

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
};

const DoctorCard = ({ doc, index }: { doc: Doctor; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = doc.skills || doc.education || doc.reviews;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
        {doc.photo ? (
          <img src={doc.photo} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-brand-teal/10">
            <span className="text-4xl text-brand-teal font-display font-bold">{getInitials(doc.name)}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-1 group-hover:text-brand-teal transition-colors duration-300">{doc.name}</h3>
      <p className="text-brand-teal font-medium text-sm">{doc.role}</p>
      {doc.experience && (
        <p className="text-muted-foreground text-xs mt-1 flex items-center gap-1">
          <Briefcase className="w-3 h-3" /> Стаж: {doc.experience}
        </p>
      )}
      {hasDetails && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-sm text-brand-teal/80 hover:text-brand-teal flex items-center gap-1 transition-colors"
        >
          {expanded ? 'Свернуть' : 'Подробнее'}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
        </button>
      )}

      <AnimatePresence>
        {expanded && hasDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t border-border space-y-4">
              {doc.skills && (
                <div>
                  <h4 className="text-xs font-semibold text-foreground flex items-center gap-1.5 mb-2">
                    <Award className="w-3.5 h-3.5 text-brand-teal" /> Специализация
                  </h4>
                  <ul className="space-y-1">
                    {doc.skills.map((skill, i) => (
                      <li key={i} className="text-xs text-muted-foreground leading-relaxed pl-3 relative before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-brand-teal/50">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {doc.education && (
                <div>
                  <h4 className="text-xs font-semibold text-foreground flex items-center gap-1.5 mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-teal" /> Образование
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{doc.education}</p>
                  {doc.additionalEducation && (
                    <p className="text-xs text-muted-foreground/70 leading-relaxed mt-1">{doc.additionalEducation}</p>
                  )}
                </div>
              )}
              {doc.reviews && doc.reviews.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-foreground flex items-center gap-1.5 mb-2">
                    <Star className="w-3.5 h-3.5 text-brand-teal" /> Отзывы
                  </h4>
                  <div className="space-y-2">
                    {doc.reviews.map((review, i) => (
                      <div key={i} className="bg-muted/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground leading-relaxed italic">"{review.text}"</p>
                        <p className="text-xs text-brand-teal/80 font-medium mt-1">— {review.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DoctorsPage = () => {
  const leaders = doctors.filter(d => d.highlight);
  const specialists = doctors.filter(d => !d.highlight);

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
              Команда
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-[1.1] max-w-xl">
              Наши врачи
            </h1>
            <p className="mt-6 text-primary-foreground/60 text-lg max-w-lg leading-relaxed">
              Сплочённая команда профессионалов — главная гордость клиники Articon
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

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {leaders.map((doc, i) => (
              <DoctorCard key={doc.name} doc={doc} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-muted-foreground">Специалисты</span>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {specialists.map((doc, i) => (
              <DoctorCard key={doc.name} doc={doc} index={i} />
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
              Запишитесь к специалисту
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-md mx-auto">
              Подберём врача под вашу задачу и составим план лечения
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

export default DoctorsPage;
