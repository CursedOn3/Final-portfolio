import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PROJECT_IMAGES, PROJECT_IMAGE_MAP } from "@/data/projects-images";
import { CANVAS_IMAGES } from "@/data/canvas-image";

const projects = [
  {
    title: "Academia – E-Learning Platform",
    description: "Developed a scalable e-learning platform that allows users to enroll in courses, stream video content, and track learning progress. Implemented JWT-based authentication and role-based access control.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    live: "https://academia-1-two.vercel.app/",
    github: "https://github.com/CursedOn3/Academia-1",
    featured: true,
  },
  {
    title: "CineDol",
    description: "A movie streaming platform that allows user to watch movies and series online.",
    tech: ["Typescript", "Angular", "PostgreSQL"],
    live: "https://cine-dol.vercel.app/",
    github: "https://github.com/CursedOn3/CineDol",
    featured: true,
  },
  {
    title: "DeepFake Detection",
    description: "AI/ML based python program that can detects deepfake images.",
    tech: ["Python", "Keras", "Tensorflow", "AI/ML"],
    live: "#",
    github: "https://github.com/CursedOn3/DeepFake-Detection-for-Image",
    featured: true,
  },
  {
    title: "Music Downloader",
    description: "A python script that allows you to download YouTube videos with lyrics.",
    tech: ["Python", "ytdlp"],
    live: "#",
    github: "https://github.com/CursedOn3/MusicDownloader-with-lyrics",
    featured: false,
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured }: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <AnimatedSection 
      delay={index * 0.15} 
      className={featured ? "md:col-span-2" : "md:col-span-1"}
    >
      <motion.div
        className="bento-card group h-full"
        onMouseMove={handleMouseMove}
        style={{
          "--mouse-x": `${mousePosition.x}%`,
          "--mouse-y": `${mousePosition.y}%`,
        } as React.CSSProperties}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Project preview area */}
        <div className={`relative overflow-hidden ${featured ? "h-64 md:h-80" : "h-48 md:h-56"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-background-elevated to-card flex items-center justify-center overflow-hidden rounded-t-2xl">
            {/* Use image if title matches; otherwise leave a subtle placeholder */}
            {PROJECT_IMAGE_MAP[project.title] ? (
              <img
                src={PROJECT_IMAGE_MAP[project.title]}
                alt={project.title + " preview"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-background-elevated to-card" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>
          
          {/* Hover overlay */}
          <motion.div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform duration-200"
              aria-label="View live project"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/40 hover:scale-110 transition-all duration-200"
              aria-label="View source code"
            >
              <Github size={18} />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-medium text-foreground">
              {project.title}
            </h3>
            <motion.div
              className="text-foreground-subtle group-hover:text-primary transition-colors duration-300"
              whileHover={{ x: 2, y: -2 }}
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </div>
          
          <p className="body-text mb-6 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs text-foreground-subtle bg-background-elevated rounded-full border border-border-subtle"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-container">
      <AnimatedSection>
        <span className="section-title">Projects</span>
        <h2 className="heading-lg mb-16">
          Selected work
        </h2>
      </AnimatedSection>

      {/* Featured projects - larger cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={index}
            featured
          />
        ))}
      </div>

      {/* Other projects - smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {otherProjects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            project={project} 
            index={index + featuredProjects.length}
          />
        ))}
      </div>
    </section>
  );
};
