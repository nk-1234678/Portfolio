import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const skills = [
  { name: "HTML", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-9294881-7578024.png", level: 95, category: "frontend"  },
  { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=Nkym0Ujb8VGI&format=png&color=000000", level: 90, category: "frontend" },
  { name: "React", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png?f=webp", level: 90, category: "frontend" },
  { name: "CSS", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-css-9294881-7578024.png", level: 85, category: "frontend" },
  { name: "Tailwind CSS", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-11492968-9325303.png", level: 90, category: "frontend" },
  { name: "Next.js", icon: "🚀", level: 80, category: "frontend" },
  { name: "Node.js", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png?f=webp", level: 80, category: "backend" },
  { name: "Express", icon: "https://cdn.buttercms.com/8am8PZECScDawQa33Lv2", level: 75, category: "backend" },
  { name: "MongoDB", icon: "https://w7.pngwing.com/pngs/169/258/png-transparent-mongodb-compass-macos-bigsur-icon-thumbnail.png", level: 70, category: "backend" },
  { name: "C", icon: "https://png.pngtree.com/png-vector/20250705/ourlarge/pngtree-d-letter-c-inside-modern-blue-hexagon-with-shadow-on-transparent-png-image_16606943.webp", level: 65, category: "backend" },
  { name: "C++", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-s-9294872-7578015.png", level: 60, category: "backend" },
  { name: "Git/GitHub", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-github-2950150-2447911.png", level: 90, category: "tools" },
  { name: "Python", icon: "https://w7.pngwing.com/pngs/252/43/png-transparent-python-programming-language-high-level-interpreted-python-logo-web-applications-3d-icon.png", level: 70, category: "tools" },
  { name: "Figma", icon: "https://w7.pngwing.com/pngs/468/813/png-transparent-figma-macos-bigsur-icon.png", level: 85, category: "tools" },
  { name: "VS Code", icon: "https://w7.pngwing.com/pngs/210/953/png-transparent-microsoft-visual-studio-code-alt-macos-bigsur-icon-thumbnail.png", level: 95, category: "tools" },
];


const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const directions = [
    { x: -50, y: 0 },
    { x: 50, y: 0 },
    { x: 0, y: -50 },
    { x: 0, y: 50 },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredSkills.map((skill, key) => {
            const dir = directions[key % directions.length];

            return (
              <motion.div
              key={key}
              initial={{ opacity: 0, x: dir.x, y: dir.y }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ rotateX: 5, scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: key * 0.05 }}
              viewport={{ once: true }}
             className=" p-6 rounded-lg shadow-xs border border-secondary/50  "

            >   
                <div className="flex items-center justify-between mb-4">
                <div className="text-left mb-4 ">
                  <img src={skill.icon} alt="" className="w-10 h-10"/>
                </div>
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                </div>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="bg-primary h-2 rounded-full"
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
