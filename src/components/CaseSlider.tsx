import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CaseSlide = {
  src: string;
  title?: string;
  caption?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

interface CaseSliderProps {
  slides: CaseSlide[];
  className?: string;
}

const positionClasses: Record<NonNullable<CaseSlide["position"]>, string> = {
  "top-left": "top-6 left-6 items-start text-left",
  "top-right": "top-6 right-6 items-end text-right",
  "bottom-left": "bottom-6 left-6 items-start text-left",
  "bottom-right": "bottom-6 right-6 items-end text-right",
};

const CaseSlider = ({ slides, className }: CaseSliderProps) => {
  const [active, setActive] = useState(0);
  const [ratios, setRatios] = useState<Record<number, number>>({});
  const total = slides.length;

  if (total === 0) return null;

  const go = (i: number) => setActive((i + total) % total);

  const activeRatio = ratios[active] ?? 16 / 10;

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl overflow-hidden bg-foreground/5 group transition-[aspect-ratio] duration-500",
        className
      )}
      style={{ aspectRatio: activeRatio }}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            {/* blurred backdrop fills any letterbox area without cropping the real photo */}
            <img
              src={s.src}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60"
            />
            <img
              src={s.src}
              alt={s.title ?? `Кейс ${i + 1}`}
              onLoad={(e) => {
                const img = e.currentTarget;
                if (img.naturalWidth && img.naturalHeight) {
                  setRatios((r) =>
                    r[i] ? r : { ...r, [i]: img.naturalWidth / img.naturalHeight }
                  );
                }
              }}
              className="relative w-full h-full object-contain"
              loading="lazy"
            />
            {(s.title || s.caption) && (
              <div
                className={cn(
                  "absolute flex flex-col gap-1 max-w-[70%] z-10",
                  positionClasses[s.position ?? "bottom-left"]
                )}
              >
                {s.title && (
                  <h3 className="text-primary-foreground text-lg sm:text-xl font-display font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {s.title}
                  </h3>
                )}
                {s.caption && (
                  <p className="text-primary-foreground/85 text-sm drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    {s.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(active - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/85 backdrop-blur text-foreground flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-blue hover:text-primary-foreground hover:scale-110"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/85 backdrop-blur text-foreground flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-blue hover:text-primary-foreground hover:scale-110"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Перейти к фото ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === active ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/80"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CaseSlider;
