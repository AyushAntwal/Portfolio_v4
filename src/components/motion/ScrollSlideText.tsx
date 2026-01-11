import { motion } from "motion/react";
import { type ReactNode, useRef } from "react";

type Direction = "left" | "right" | "up" | "down";

interface ScrollSlideTextProps {
  readonly children: ReactNode;
  readonly direction?: Direction;
  readonly distance?: number;
  readonly duration?: number;
  readonly once?: boolean;
  readonly className?: string;
}

export function ScrollSlideText({
  children,
  direction = "up",
  distance = 80,
  duration = 1,
  once = true,
  className,
}: ScrollSlideTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const initialTransform = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialTransform }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, ease: "easeOut" }}
      viewport={{
        once,
        margin: "-100px 0px -200px 0px",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
