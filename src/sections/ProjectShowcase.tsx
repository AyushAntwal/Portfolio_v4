import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { button } from "framer-motion/client";
const projects = [
  {
    title: "Componentry UI",
    description:
      "A composable and themeable UI system built with React and TypeScript. Designed for scalability, accessibility, and design consistency across applications.",
    role: "Sole Frontend Developer",
    tech: ["React", "TypeScript", "Tailwind CSS", "MUI"],
    status: "In Progress",
    year: "2024",
    bg: " bg-teal-900/90 backdrop-blur-3xl",
    links: [
      { label: "Live Preview", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  {
    title: "Portfolio v2",
    description:
      "A modern developer portfolio focused on minimal design, smooth animations, and modular architecture with dark mode support.",
    role: "Designer & Frontend Developer",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Completed",
    year: "2024",
    bg: "bg-gradient-to-br from-indigo-950 via-blue-950/40 to-slate-900/40",
    links: [
      { label: "Live Site", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
  {
    title: "Headless Commerce",
    description:
      "A high-performance headless storefront integrated with Sanity CMS and Stripe Checkout, featuring responsive product views and lightweight cart logic.",
    role: "Frontend Developer",
    tech: ["Next.js", "Sanity CMS", "Stripe", "Tailwind CSS"],
    status: "Completed",
    year: "2023",
    bg: "bg-gradient-to-br from-slate-950 via-zinc-900/50 to-zinc-900/40",
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
];

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 100,
        damping: 30,
      });
    }
  }, [index, x]);

  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-3">
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div className="flex" style={{ x }}>
            {projects.map((item) => (
              <div
                key={item.title}
                className={`shrink-0 relative w-full h-[450px]`}
              >
                <div className="flex flex-col space-y-2 px-16 py-10  h-full">
                  <div className="text-light text-xs">
                    Year - {item.year}
                    <span className="border bg-gray-500/30 text-white mx-2 px-2 py-.5 rounded-xl">
                      {item.status}
                    </span>
                    <div>
                      <div className="h3 my-3 font-bold border-b inline-block">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 body2">{item.description}</div>
                  <div className="flex gap-2">
                    {item.links.map((i) => (
                      <a href={i.href} key={i.label}>
                        <button className="button p-1 text-gray-200 hover:scale-105 hover:underline hover:text-indigo-400   ">
                          {i.label}
                        </button>
                      </a>
                    ))}
                  </div>
                  <div className="caption">※ {item.role}</div>
                  <div className="flex mt-1 flex-wrap gap-1 ">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="border small bg-gray-900/30 text-white px-2 py-0.5 rounded-xl"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-transparent flex items-center justify-center transition-transform z-10
              ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : " hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === projects.length - 1}
            onClick={() =>
              setIndex((i) => Math.min(projects.length - 1, i + 1))
            }
            className={`absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-transparent flex projects-center justify-center transition-transform z-10
              ${
                index === projects.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
          {/* Progress Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  i === index ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
