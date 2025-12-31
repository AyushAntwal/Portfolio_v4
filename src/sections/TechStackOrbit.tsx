import { motion } from "framer-motion";
import { FaNodeJs, FaReact, FaGithub, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiFigma,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVite,
} from "react-icons/si";

const techIcons = [
  { icon: <FaReact size={28} />, x: 0, y: -170 },
  { icon: <SiTypescript size={28} />, x: 90, y: -60 },
  { icon: <SiTailwindcss size={28} />, x: 250, y: 0 },
  { icon: <SiFramer size={28} />, x: 120, y: 60 },
  { icon: <FaGithub size={28} />, x: -150, y: -120 },
  { icon: <SiFigma size={28} />, x: -290, y: 60 },
  { icon: <SiNextdotjs size={28} />, x: -100, y: 70 },
  { icon: <SiRedux size={28} />, x: -190, y: 190 },
  { icon: <SiVite size={28} />, x: 290, y: -100 },
  //   { icon: <SiJest size={28} />, x: 200, y: 150 },
  { icon: <FaDocker size={28} />, x: -40, y: 170 },
  { icon: <SiExpress size={28} />, x: -250, y: -190 },
  //   { icon: <SiGraphql size={28} />, x: -180, y: 170 },
  { icon: <SiMongodb size={28} />, x: 180, y: -190 },
];

export default function TechStackOrbit() {
  return (
    <div className="relative w-80 h-80 mx-auto my-16">
      {/* Background disk */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-500/30 to-slate-900/20 blur-2xl z-0" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-500/30 to-slate-900/20 blur-2xl z-0" />
      <div className="absolute inset-0 rounded-full border border-slate-600/30 z-0" />
      <div className="absolute inset-0 rounded-full border border-slate-600/30 z-0" />

      {/* Center Icon */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-black p-4 rounded-full shadow-xl"
      >
        <FaNodeJs size={40} color="white" />
      </motion.div>

      {/* Orbiting Icons with manual positions */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className={`absolute p-3 rounded-full shadow-md left-[calc(80% + ${tech.x}px)] md:left-[calc(50% + ${tech.x}px)]`}
          style={{
            left: `calc(50% + ${tech.x}px)`,
            top: `calc(50% + ${tech.y}px)`,
          }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 2 + index * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {tech.icon}
        </motion.div>
      ))}
    </div>
  );
}
