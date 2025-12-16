import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { 
  Shield, 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  Terminal,
  Lock,
  Code2,
  Boxes,
  Workflow
} from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    size: "large",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python","Express.js", "PostgreSQL", "REST APIs"],
    size: "medium",
  },
  {
    title: "Full-Stack",
    icon: Cloud,
    skills: ["MERN", "RESTful APIs", "Authentication & Authorization"],
    size: "medium",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "SQLite"],
    size: "small",
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "VSCode", "Docker"],
    size: "small",
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
    size: "small",
  },
];

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  skills: string[];
  size: string;
  index: number;
}

const SkillCard = ({ title, icon: Icon, skills, size, index }: SkillCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <AnimatedSection delay={index * 0.1} className={sizeClasses[size as keyof typeof sizeClasses]}>
      <motion.div
        className="bento-card h-full p-6 md:p-8 cursor-default"
        onMouseMove={handleMouseMove}
        style={{
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
        } as React.CSSProperties}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="h-full flex flex-col">
          <motion.div 
            className="icon-glow w-fit mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Icon size={size === "small" ? 20 : 24} className="text-primary" />
          </motion.div>
          
          <h3 className="text-lg md:text-xl font-medium text-foreground mb-4">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1.5 text-xs md:text-sm text-foreground-muted bg-background-elevated rounded-full border border-border-subtle"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <AnimatedSection>
        <span className="section-title">Capabilities</span>
        <h2 className="heading-lg mb-16">
          Technical expertise across the stack
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.title} {...category} index={index} />
        ))}
      </div>
    </section>
  );
};
