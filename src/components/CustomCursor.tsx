import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    setVisible(true);
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, select, label") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setIsHovering(true);
      }
    };

    const out = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-foreground" />
      </motion.div>
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: pos.x - (isHovering ? 28 : 18),
          y: pos.y - (isHovering ? 28 : 18),
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
      >
        <div className="w-full h-full rounded-full border border-foreground/50" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
