import { motion } from "motion/react";

type Direction = "left" | "right" | "up" | "down";
type Split = "word" | "letter";

interface BreakingSlideTextProps {
  text: string;
  split?: Split;
  direction?: Direction;
  distance?: number;
  stagger?: number;
  duration?: number;
  className?: string;
}

export function BreakingSlideText({
  text,
  split = "word",
  direction = "up",
  distance = 40,
  stagger = 0.06,
  duration = 0.5,
  className,
}: Readonly<BreakingSlideTextProps>) {
  const items = split === "letter" ? text.split("") : text.split(" ");

  const axis = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  }[direction];

  return (
    <motion.span
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px 0px -200px 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              ...axis,
            },
            show: {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                duration,
                ease: "easeOut",
              },
            },
          }}
          style={{
            display: "inline-block",
            marginRight: split === "word" ? "0.25em" : undefined,
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
