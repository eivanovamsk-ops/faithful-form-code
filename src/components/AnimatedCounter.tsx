import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end?: number;
  text?: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  decimals?: number;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", duration = 2, label, decimals = 0 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = eased * end;
      setCount(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-brand-blue mb-2">
        {prefix}{display}{suffix}
      </div>
      <p className="text-muted-foreground text-sm sm:text-base">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
