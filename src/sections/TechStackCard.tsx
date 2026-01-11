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
  SiJest,
  SiGraphql,
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
  { icon: <SiJest size={28} />, x: 200, y: 150 },
  { icon: <FaDocker size={28} />, x: -40, y: 170 },
  { icon: <SiExpress size={28} />, x: -250, y: -190 },
  { icon: <SiGraphql size={28} />, x: -180, y: 170 },
  { icon: <FaNodeJs size={28} />, x: -180, y: 170 },
  { icon: <SiMongodb size={28} />, x: 180, y: -190 },
  { icon: <SiTypescript size={28} />, x: 90, y: -60 },
  { icon: <SiTailwindcss size={28} />, x: 250, y: 0 },
  { icon: <SiFramer size={28} />, x: 120, y: 60 },
  { icon: <FaGithub size={28} />, x: -150, y: -120 },
  { icon: <SiFigma size={28} />, x: -290, y: 60 },
  { icon: <SiNextdotjs size={28} />, x: -100, y: 70 },
  { icon: <SiRedux size={28} />, x: -190, y: 190 },
  { icon: <SiVite size={28} />, x: 290, y: -100 },
  { icon: <SiJest size={28} />, x: 200, y: 150 },
  { icon: <FaDocker size={28} />, x: -40, y: 170 },
  { icon: <SiExpress size={28} />, x: -250, y: -190 },
  { icon: <SiGraphql size={28} />, x: -180, y: 170 },
  { icon: <FaNodeJs size={28} />, x: -180, y: 170 },
  { icon: <SiMongodb size={28} />, x: 180, y: -190 },
];

export default function TechStackCard() {
  return (
    <div className="grid grid-cols-4 absolute opacity-45 -top-1/2 -right-1/2 w-md -rotate-40">
      {techIcons.map((tech, i) => (
        <div
          key={i}
          className="border shadow-gray-300/60 bg-gray-900 shadow flex justify-center aspect-square text-blue-500 opacity-90 blur-[1px] items-center"
        >
          {tech.icon}
        </div>
      ))}
    </div>
  );
}
