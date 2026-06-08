import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type BeforeAfterPair = {
  before: string;
  after: string;
  title?: string;
  caption?: string;
};

interface Props {
  pair: BeforeAfterPair;
  className?: string;
}

const BeforeAfterSlider = ({ pair, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [ratio, setRatio] = useState(4 / 3);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "touches" in e ? e.touches[0]?.clientX ?? 0 : (e as MouseEvent).clientX;
      updateFromClientX(clientX);
    };
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full select-none overflow-hidden rounded-2xl bg-foreground/5 shadow-sm",
        dragging ? "cursor-grabbing" : "cursor-grab",
        className
      )}
      style={{ aspectRatio: ratio }}
      onMouseDown={(e) => {
        setDragging(true);
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        setDragging(true);
        if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
      }}
    >
      {/* AFTER (base layer) */}
      <img
        src={pair.after}
        alt={pair.title ? `${pair.title} — После` : "После"}
        draggable={false}
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.naturalWidth && img.naturalHeight) {
            setRatio(img.naturalWidth / img.naturalHeight);
          }
        }}
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      {/* BEFORE (clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${pos}%` }}
      >
        <img
          src={pair.before}
          alt={pair.title ? `${pair.title} — До` : "До"}
          draggable={false}
          className="absolute inset-0 h-full w-auto max-w-none object-contain pointer-events-none"
          style={{ width: containerRef.current?.clientWidth ?? "100%" }}
        />
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/85 backdrop-blur text-xs font-semibold tracking-wider uppercase text-foreground shadow-sm">
        До
      </div>
      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-blue text-primary-foreground text-xs font-semibold tracking-wider uppercase shadow-sm">
        После
      </div>

      {/* Scroller line + thumb */}
      <div
        className="absolute top-0 bottom-0 w-px bg-primary-foreground/90 pointer-events-none"
        style={{ left: `calc(${pos}% - 0.5px)` }}
      />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
        style={{ left: `${pos}%` }}
      >
        <div className="w-12 h-12 rounded-full bg-brand-blue text-primary-foreground shadow-lg flex items-center justify-center ring-4 ring-primary-foreground/80">
          <svg width="24" height="24" viewBox="0 0 100 100" aria-hidden>
            <polygon points="0 50 37 68 37 32 0 50" fill="currentColor" />
            <polygon points="100 50 64 32 64 68 100 50" fill="currentColor" />
          </svg>
        </div>
      </div>

      {(pair.title || pair.caption) && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 max-w-[80%] text-center px-4 py-2 rounded-xl bg-background/85 backdrop-blur shadow-sm">
          {pair.title && (
            <p className="font-display font-semibold text-foreground text-sm">
              {pair.title}
            </p>
          )}
          {pair.caption && (
            <p className="text-xs text-muted-foreground">{pair.caption}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
