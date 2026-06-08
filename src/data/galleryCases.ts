import type { CaseSlide } from "@/components/CaseSlider";
import ortho11 from "@/assets/gallery/ortho-1-1.jpg.asset.json";
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
  slides: CaseSlide[];
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
      },
    ],
  },
  {
    id: "ortodontiya",
    title: "Ортодонтия",
    description: "Брекет-системы и элайнеры",
    cases: [],
  },
  {
    id: "otbelivanie",
    title: "Отбеливание",
    description: "Профессиональное отбеливание зубов",
    cases: [],
  },
  {
    id: "gigiena",
    title: "Профессиональная гигиена",
    description: "Чистка Air Flow и ультразвук",
    cases: [],
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
