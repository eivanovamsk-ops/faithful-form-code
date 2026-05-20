import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor — desktop only (min-width: 1024px and fine pointer).
 * Small emerald dot (12px) follows the mouse with lerp easing.
 * Enlarges to 40px and becomes semi-transparent over interactive elements.
 * Disabled automatically for users with prefers-reduced-motion.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const fineMq = window.matchMedia("(pointer: fine) and (min-width: 1024px)");
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fineMq.matches || reducedMq.matches) return;

    setEnabled(true);
    document.body.style.cursor = "none";

    const target = { x: -100, y: -100 };
    const current = { x: -100, y: -100 };
    let raf = 0;

    const move = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select, label")) {
        setIsHovering(true);
      }
    };
    const out = () => setIsHovering(false);

    const tick = () => {
      // lerp
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="custom-cursor-layer fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
      style={{
        width: isHovering ? 40 : 12,
        height: isHovering ? 40 : 12,
        backgroundColor: "hsl(var(--primary))",
        opacity: isHovering ? 0.35 : 1,
        transition: "width 0.25s ease, height 0.25s ease, opacity 0.25s ease",
        willChange: "transform, width, height",
      }}
    />
  );
};

export default CustomCursor;
