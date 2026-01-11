import { motion } from "framer-motion";

export function VerticalSlidingColumn({
  children,
  reverse = false,
  duration = 20,
}: Readonly<{
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
}>) {
  return (
    <div className="relative overflow-hidden h-[500px]">
      <motion.div
        className="flex flex-col gap-2"
        animate={{
          y: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
        {/* duplicate content for infinite loop */}
        {children}
      </motion.div>
    </div>
  );
}
