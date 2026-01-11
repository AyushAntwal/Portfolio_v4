import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiVercel,
  SiNginx,
  SiMui,
} from "react-icons/si";

export const techStack = [
  {
    category: "Frontend Engineering",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Material UI", icon: <SiMui /> },
    ],
  },
  {
    category: "Backend Engineering",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Nginx", icon: <SiNginx /> },
    ],
  },
  {
    category: "Databases & Persistence",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    category: "DevOps, Cloud & Tooling",
    items: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="space-y-6">
      {techStack.map((section) => (
        <div key={section.category}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {section.category}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
            {section.items.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 pt-2 hover:bg-white/10 transition"
              >
                <span className="text-2xl text-teal-300">{tech.icon}</span>
                <small className="text-[10px] font-light text-white">
                  {tech.name}
                </small>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
