import type { CaseSlide } from "@/components/CaseSlider";

export type GalleryCase = {
  id: string;
  title: string;
  description?: string;
  slides: CaseSlide[];
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
    cases: [],
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
