import type { CaseSlide } from "@/components/CaseSlider";
import type { BeforeAfterPair } from "@/components/BeforeAfterSlider";
import type { CinematicSlide } from "@/components/CinematicSlider";
import ortodont1Before from "@/assets/gallery/ortodont-1-before.jpg.asset.json";
import ortodont1After from "@/assets/gallery/ortodont-1-after.jpg.asset.json";
import ortodont1Articon from "@/assets/gallery/ortodont-1-articon.jpg.asset.json";
import ortodont1Do from "@/assets/gallery/ortodont-1-do.jpg.asset.json";
import ortodont1Process from "@/assets/gallery/ortodont-1-process.jpg.asset.json";
import ortodont1Final from "@/assets/gallery/ortodont-1-final.jpg.asset.json";
import ortodont1DoPosle from "@/assets/gallery/ortodont-1-doposle.jpg.asset.json";
import ortho11 from "@/assets/gallery/ortho-1-1.jpg.asset.json";
import otbel1 from "@/assets/gallery/otbel-1.jpeg.asset.json";
import otbel2 from "@/assets/gallery/otbel-2.jpeg.asset.json";
import otbel3 from "@/assets/gallery/otbel-3.jpeg.asset.json";
import otbel4 from "@/assets/gallery/otbel-4.jpeg.asset.json";
import gigiena21 from "@/assets/gallery/gigiena-2-1.jpeg.asset.json";
import gigiena22 from "@/assets/gallery/gigiena-2-2.jpeg.asset.json";
import gigiena23 from "@/assets/gallery/gigiena-2-3.jpeg.asset.json";
import gigiena24 from "@/assets/gallery/gigiena-2-4.jpeg.asset.json";
import ortho12 from "@/assets/gallery/ortho-1-2.jpg.asset.json";
import ortho13 from "@/assets/gallery/ortho-1-3.jpg.asset.json";
import ortho14 from "@/assets/gallery/ortho-1-4.jpg.asset.json";
import ortho15 from "@/assets/gallery/ortho-1-5.jpg.asset.json";
import ortho16 from "@/assets/gallery/ortho-1-6.png.asset.json";
import orthoE26 from "@/assets/gallery/ortho-1-extra-26.jpg.asset.json";
import orthoE28 from "@/assets/gallery/ortho-1-extra-28.jpg.asset.json";
import orthoE29 from "@/assets/gallery/ortho-1-extra-29.jpg.asset.json";
import orthoE30 from "@/assets/gallery/ortho-1-extra-30.jpg.asset.json";
import orthoE31 from "@/assets/gallery/ortho-1-extra-31.jpg.asset.json";
import orthoE32 from "@/assets/gallery/ortho-1-extra-32.jpg.asset.json";
import orthoE33 from "@/assets/gallery/ortho-1-extra-33.jpg.asset.json";
import ortho21 from "@/assets/gallery/ortho-2-1.jpg.asset.json";
import ortho22 from "@/assets/gallery/ortho-2-2.jpg.asset.json";
import ortho23 from "@/assets/gallery/ortho-2-3.jpg.asset.json";
import ortho24 from "@/assets/gallery/ortho-2-4.jpg.asset.json";
import ortho25 from "@/assets/gallery/ortho-2-5.jpg.asset.json";
import ortho26 from "@/assets/gallery/ortho-2-6.jpg.asset.json";
import ortho27 from "@/assets/gallery/ortho-2-7.jpg.asset.json";
import gigiena11 from "@/assets/gallery/gigiena-1-1.jpeg.asset.json";
import gigiena12 from "@/assets/gallery/gigiena-1-2.jpeg.asset.json";
import gigiena13 from "@/assets/gallery/gigiena-1-3.jpeg.asset.json";
import gigiena14 from "@/assets/gallery/gigiena-1-4.jpeg.asset.json";

export type CaseDetailsBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "highlight"; text: string };

export type CaseDetails = {
  tagline?: string;
  duration?: string;
  blocks: CaseDetailsBlock[];
};

export type GalleryCase = {
  id: string;
  title: string;
  description?: string;
  slides?: CaseSlide[];
  comparisons?: BeforeAfterPair[];
  cinematic?: CinematicSlide[];
  details?: CaseDetails;
};

export type GalleryCategory = {
  id: string;
  title: string;
  description?: string;
  cases: GalleryCase[];
};

// Кейсы будут добавляться по мере загрузки фото.
// Пока разделы пустые — отображается placeholder "Скоро".
export const galleryCategories: GalleryCategory[] = [
  {
    id: "ortopediya",
    title: "Ортопедия",
    description: "Виниры, коронки, протезирование на имплантах",
    cases: [
      {
        id: "ortho-case-1",
        title: "Кейс 1 — Тотальная реабилитация",
        description: "Комплексное протезирование верхней и нижней челюсти",
        slides: [
          { src: ortho11.url, title: "Улыбка после", caption: "Финальный результат", position: "top-left" },
          { src: ortho12.url, title: "До / После", caption: "Фронтальный вид", position: "top-left" },
          { src: ortho13.url, title: "До / После", caption: "Боковой вид справа", position: "top-left" },
          { src: ortho14.url, title: "До / После", caption: "Боковой вид слева", position: "top-left" },
          { src: ortho15.url, title: "Улыбка крупно", caption: "Эстетика фронтальной зоны", position: "bottom-right" },
          { src: ortho16.url, title: "Модель и результат", caption: "Цифровое планирование", position: "top-left" },
          { src: orthoE26.url, title: "Имплантация", caption: "По навигационным шаблонам в седации", position: "top-left" },
          { src: orthoE28.url, title: "SmileCloud", caption: "Моделирование улыбки", position: "bottom-right" },
          { src: orthoE29.url, title: "3D моделирование", caption: "AI-планирование в SmileCloud", position: "top-left" },
          { src: orthoE30.url, title: "До / После", caption: "Фронтальный вид", position: "top-left" },
          { src: orthoE31.url, title: "До / После", caption: "Боковой вид справа", position: "top-left" },
          { src: orthoE32.url, title: "До / После", caption: "Боковой вид слева", position: "top-left" },
          { src: orthoE33.url, title: "Этапы лечения", caption: "До → 3D → После", position: "bottom-right" },
        ],
        details: {
          tagline: "Умная стоматология: искусственный интеллект + команда Articon = точное попадание 🎯",
          duration: "1,5 года",
          blocks: [
            { type: "paragraph", text: "К нам обратился пациент с жалобами на отсутствие зубов и эстетику улыбки." },
            { type: "paragraph", text: "Задача: не просто решить проблему, а сделать всё быстро, комфортно и чётко." },
            { type: "heading", text: "Этапы лечения" },
            {
              type: "list",
              items: [
                "Исправление прикуса на элайнерах",
                "Имплантация по навигационным шаблонам во сне для максимального комфорта пациента",
                "Моделирование будущей улыбки",
                "Одновременная обточка верхней и нижней челюстей",
                "Изготовление цельноциркониевых реставраций",
                "С момента препарирования до фиксации постоянных реставраций — всего 2 недели",
              ],
            },
            {
              type: "paragraph",
              text: "Особенный этап — первичное моделирование улыбки с помощью искусственного интеллекта в Smile Cloud. Технология предполагает тесное сотрудничество пациента, стоматолога и зубного техника при планировании лечения. Искусственный интеллект в онлайн-режиме позволяет создать огромное количество вариантов улыбки, ориентируясь на черты лица, образ жизни и пожелания пациента. Это гарантирует результат, который полностью удовлетворит пациента 👍",
            },
            {
              type: "highlight",
              text: "Интересно 🧐: в этом кейсе вариант, который пациент выбрал из предложенных ИИ, в итоге на 99% совпал с финальной работой. Цифровые технологии + опыт врача и зубного техника = мощный тандем.",
            },
            {
              type: "paragraph",
              text: "✨ Финал: та самая улыбка, которую пациент видел заранее. Без неожиданностей. Без компромиссов. Только вау-результат!",
            },
          ],
        },
      },
      {
        id: "ortho-case-2",
        title: "Кейс 2 — Замена несостоятельных коронок",
        description: "Полная реабилитация: 14 коронок на верхней и 5 на нижней челюсти",
        slides: [
          { src: ortho21.url, title: "До / После", caption: "Замена коронок с имплантацией", position: "top-left" },
          { src: ortho22.url, title: "Улыбка До / После", caption: "Эстетика фронтальной зоны", position: "top-left" },
          { src: ortho23.url, title: "Smile Design", caption: "До → Smile Design → Wax-up → После", position: "top-left" },
          { src: ortho24.url, title: "3D моделирование", caption: "Цифровое планирование реставраций", position: "top-left" },
          { src: ortho25.url, title: "Этапы лечения", caption: "До → 3D моделирование → После", position: "top-left" },
          { src: ortho26.url, title: "Результат", caption: "До → улыбка → крупный план", position: "top-left" },
          { src: ortho27.url, title: "До / После", caption: "Цельноциркониевые реставрации", position: "top-left" },
        ],
        details: {
          tagline: "Полная эстетическая реабилитация с заменой несостоятельных коронок 🦷✨",
          duration: "от 3 посещений",
          blocks: [
            {
              type: "paragraph",
              text: "К нам обратилась пациентка с целью улучшить эстетику улыбки. В процессе диагностики была выявлена несостоятельность ранее установленных (в сторонней клинике) ортопедических конструкций.",
            },
            { type: "heading", text: "Этапы лечения" },
            {
              type: "list",
              items: [
                "Диагностика",
                "Санация полости рта и профессиональная гигиена",
                "Снятие старых несостоятельных коронок",
                "Имплантация по навигационному шаблону с немедленной нагрузкой",
                "Через полгода — 3D моделирование будущей улыбки с согласованием формы и цвета зубов",
                "Mock-up — примерка будущей улыбки с помощью быстротвердеющей пластмассы",
                "После согласования — бережное препарирование и цифровое сканирование",
                "Финальный штрих: фиксация 14 коронок на верхней челюсти и 5 на нижней, изготовленных по цифровым протоколам в зуботехнической лаборатории Articon",
              ],
            },
            {
              type: "highlight",
              text: "Все реставрации изготовлены in-house по цифровым протоколам — точная посадка, предсказуемая эстетика и единый стиль улыбки.",
            },
          ],
        },
      },
    ],
  },
  {
    id: "ortodontiya",
    title: "Ортодонтия",
    description: "Брекет-системы и элайнеры",
    cases: [
      {
        id: "ortodont-case-1",
        title: "Кейс 1 — Исправление прикуса",
        description: "Выравнивание зубных рядов и нормализация окклюзии",
        slides: [
          { src: ortodont1Articon.url, title: "Кейс Articon", caption: "До и после ортодонтического лечения", position: "bottom-right" },
          { src: ortodont1DoPosle.url, title: "До / После", caption: "Фронтальный вид", position: "top-left" },
          { src: ortodont1Do.url, title: "До лечения", caption: "Боковой вид — исходная ситуация", position: "top-left" },
          { src: ortodont1Process.url, title: "Процесс лечения", caption: "На брекет-системе", position: "top-left" },
          { src: ortodont1Final.url, title: "Финальный результат", caption: "Ровные зубные ряды, корректная окклюзия", position: "top-left" },
        ],
        comparisons: [
          {
            before: ortodont1Before.url,
            after: ortodont1After.url,
            title: "До / Финальный результат",
            caption: "Потяните ползунок, чтобы сравнить",
          },
        ],
      },
    ],
  },
  {
    id: "otbelivanie",
    title: "Отбеливание",
    description: "Профессиональное отбеливание зубов",
    cases: [
      {
        id: "otbel-case-1",
        title: "Кейс 1 — Отбеливание зубов",
        slides: [
          { src: otbel1.url, position: "top-left" },
          { src: otbel2.url, position: "top-left" },
          { src: otbel3.url, position: "top-left" },
          { src: otbel4.url, position: "top-left" },
        ],
      },
    ],
  },
  {
    id: "gigiena",
    title: "Профессиональная гигиена",
    description: "Чистка Air Flow и ультразвук",
    cases: [
      {
        id: "gigiena-case-1",
        title: "Кейс 1 — Профессиональная гигиена",
        description: "Удаление поддесневого камня за 1 посещение",
        cinematic: [
          {
            src: gigiena11.url,
            title: "У пациентки хороший уровень гигиены",
            subhead: "Но есть жалобы на кровоточивость десны",
          },
          {
            src: gigiena12.url,
            title: "Причина на фото — поддесневой камень",
            subhead: "Выявлен при диагностике",
          },
          {
            src: gigiena13.url,
            title: "Избавиться от него самостоятельно невозможно",
            subhead: "Только профессиональная чистка",
          },
          {
            src: gigiena14.url,
            title: "Срок лечения — 1 посещение",
            subhead: "Результат сразу после процедуры",
          },
        ],
      },
    ],
  },
  {
    id: "hirurgiya",
    title: "Хирургия",
    description: "Имплантация и удаление",
    cases: [],
  },
  {
    id: "endodontiya",
    title: "Эндодонтия",
    description: "Лечение каналов под микроскопом",
    cases: [],
  },
  {
    id: "terapiya",
    title: "Терапия",
    description: "Лечение кариеса и реставрации",
    cases: [],
  },
  {
    id: "detskaya",
    title: "Детская стоматология",
    description: "Лечение зубов у детей",
    cases: [],
  },
];
