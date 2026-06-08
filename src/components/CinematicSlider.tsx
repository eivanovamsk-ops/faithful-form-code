import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

export type CinematicSlide = {
  src: string;
  title: string;
  subhead?: string;
};

type Props = {
  slides: CinematicSlide[];
  autoplayMs?: number;
};

/**
 * Cinematic vertical slider — grayscale background slide scales on enter,
 * next slide peeks with a clip-path wedge from below, captions slide in.
 */
const CinematicSlider = ({ slides, autoplayMs = 5500 }: Props) => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);

  const total = slides.length;
  const nextIdx = (index + 1) % total;
  const prevIdx = (index - 1 + total) % total;

  const advance = useCallback(() => {
    setPrevIndex((p) => (p === null ? index : p));
    setAnimating(true);
    setIndex((i) => (i + 1) % total);
    window.setTimeout(() => {
      setAnimating(false);
      setPrevIndex(null);
    }, 1200);
  }, [index, total]);

  useEffect(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(advance, autoplayMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [advance, autoplayMs]);

  const handleClick = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    advance();
    timerRef.current = window.setInterval(advance, autoplayMs);
  };

  if (!slides.length) return null;

  return (
    <div className="relative w-full h-[78vh] min-h-[520px] bg-foreground rounded-2xl overflow-hidden">
      {/* Slide stage */}
      <div className="absolute inset-6 overflow-hidden rounded-xl">
        {slides.map((s, i) => {
          const isCurrent = i === index;
          const isNext = i === nextIdx && i !== index;
          const isPrevious = prevIndex !== null && i === prevIndex;

          let cls = "absolute inset-0 bg-center bg-cover bg-no-repeat will-change-transform";
          let style: React.CSSProperties = {
            backgroundImage: `url(${s.src})`,
            filter: "grayscale(100%)",
            opacity: 0,
            transform: "translateY(-100%)",
            transition:
              "transform 1100ms cubic-bezier(.7,.04,.35,1), clip-path 1100ms cubic-bezier(.68,-.55,.27,1.55), opacity 600ms ease",
            zIndex: 0,
          };

          if (isCurrent) {
            style = {
              ...style,
              opacity: 1,
              transform: "translateY(0) scale(1.18)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              zIndex: 2,
            };
          } else if (isNext) {
            style = {
              ...style,
              opacity: 1,
              transform: "translateY(-100%)",
              clipPath: "polygon(0 0, 100% 0, 100% 92%, 0% 100%)",
              zIndex: 3,
            };
          } else if (isPrevious) {
            style = {
              ...style,
              opacity: 1,
              transform: animating ? "translateY(45%)" : "translateY(0)",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              zIndex: 1,
              transition:
                "transform 1100ms cubic-bezier(.7,.04,.35,1), opacity 800ms ease",
            };
          }

          return <div key={i} className={cls} style={style} aria-hidden={!isCurrent} />;
        })}

        {/* Soft gradient for caption legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent z-[4]" />
      </div>

      {/* Captions */}
      <div className="absolute inset-y-0 left-0 z-[5] flex items-center pl-10 sm:pl-16 lg:pl-20 pr-8 max-w-2xl pointer-events-none">
        {slides.map((s, i) => {
          const isCurrent = i === index;
          const isPrevious = prevIndex !== null && i === prevIndex;
          let style: React.CSSProperties = {
            opacity: 0,
            transform: "translateY(60px)",
            transition: "opacity 600ms ease, transform 600ms ease",
            transitionDelay: "0ms",
          };
          if (isCurrent) {
            style = {
              opacity: 1,
              transform: "translateY(0)",
              transition: "opacity 700ms ease, transform 700ms ease",
              transitionDelay: "700ms",
            };
          } else if (isPrevious) {
            style = {
              ...style,
              transform: "translateY(-60px)",
              opacity: 0,
            };
          }
          return (
            <div key={i} className="absolute left-10 sm:left-16 lg:left-20 right-8 top-1/2 -translate-y-1/2" style={style}>
              <h3 className="font-display font-light uppercase tracking-[0.18em] text-primary-foreground text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
                {s.title}
              </h3>
              {s.subhead && (
                <p className="text-xs sm:text-sm uppercase tracking-[0.32em] text-primary-foreground/80 font-light">
                  {s.subhead}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Counter + control */}
      <div className="absolute bottom-6 right-8 z-[6] flex items-center gap-6">
        <div className="text-primary-foreground/70 text-xs tracking-[0.3em] font-light tabular-nums">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-2 text-primary-foreground/30">/</span>
          {String(total).padStart(2, "0")}
        </div>
        <button
          onClick={handleClick}
          aria-label="Следующий слайд"
          className="w-12 h-12 rounded-full border border-primary-foreground/30 text-primary-foreground/90 flex items-center justify-center hover:bg-primary-foreground hover:text-foreground transition-colors duration-300"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CinematicSlider;
