import { useEffect, useRef, useState } from "react";
import img1 from "@/assets/clinic-IMG_4528.jpg.asset.json";
import img2 from "@/assets/clinic-IMG_4282.jpg.asset.json";
import img3 from "@/assets/clinic-IMG_5277.jpg.asset.json";
import img4 from "@/assets/clinic-IMG_4304.jpg.asset.json";

const slides = [
  { url: img1.url, alt: "Фасад клиники Articon" },
  { url: img2.url, alt: "Ресепшн Articon" },
  { url: img3.url, alt: "Администратор Articon" },
  { url: img4.url, alt: "Зона ожидания" },
];

const AboutHeroSlider = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setActive(idx);
          }
        });
      },
      { root: gallery, threshold: 0.6 }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <section
      className="w-full bg-foreground overflow-hidden"
      style={{ height: "100vh", display: "grid", gridTemplateColumns: "1fr 5fr", gap: "10px" }}
    >
      {/* Vertical thumbnail nav */}
      <nav
        className="overflow-y-auto overflow-x-hidden scrollbar-hide bg-foreground"
        aria-label="Навигация по слайдам"
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="block w-full mb-[10px] overflow-hidden focus:outline-none"
            style={{ height: "200px" }}
            aria-label={`Перейти к слайду ${i + 1}`}
          >
            <img
              src={s.url}
              alt={s.alt}
              className="w-full h-full object-cover transition-all duration-300 ease-out hover:scale-105"
              style={{
                filter: active === i ? "saturate(1)" : "saturate(0)",
              }}
            />
          </button>
        ))}
      </nav>

      {/* Horizontal scroll-snap gallery */}
      <div
        ref={galleryRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth", display: "flex" }}
      >
        {slides.map((s, i) => (
          <img
            key={i}
            ref={(el) => (slideRefs.current[i] = el)}
            data-idx={i}
            src={s.url}
            alt={s.alt}
            className="block object-cover flex-shrink-0"
            style={{
              scrollSnapAlign: "start",
              width: "100%",
              height: "100vh",
              marginRight: "10px",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutHeroSlider;
