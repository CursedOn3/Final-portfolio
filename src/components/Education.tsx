import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
  degree: "Bachelor of Computer Engineering",
  institution: "Nepal Engineering College",
  location: "Bhaktapur, Nepal",
  period: "2021 - Present",
  description: "Focused on software development, full-stack web technologies, and problem-solving using modern programming languages and frameworks.",
  achievements: ["Academic Projects in MERN & Django", "Strong Foundation in Core Engineering Subjects"],
},
{
  degree: "+2 in Science",
  institution: "Kathmandu Model College",
  location: "Bagbazar, Kathmandu, Nepal",
  period: "2019 - 2021",
  description: "Studied Science with emphasis on Mathematics and Computer Science fundamentals.",
  achievements: ["Completed Higher Secondary Education in Science Stream"],
},

];

interface EducationCardProps {
  education: typeof educationData[0];
  index: number;
}

const EducationCard = ({ education, index }: EducationCardProps) => {
  return (
    <AnimatedSection delay={index * 0.15}>
      <motion.div
        className="bento-card p-6 md:p-8 relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
          <div className="icon-glow w-fit shrink-0">
            <GraduationCap size={24} className="text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-medium text-foreground mb-2">
              {education.degree}
            </h3>
            
            <p className="text-foreground-muted text-base mb-3">
              {education.institution}
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-foreground-subtle mb-4">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {education.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {education.period}
              </span>
            </div>
            
            <p className="body-text mb-4">
              {education.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {education.achievements.map((achievement) => (
                <span
                  key={achievement}
                  className="px-3 py-1.5 text-xs text-foreground-subtle bg-background-elevated rounded-full border border-border-subtle"
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export const Education = () => {
  return (
    <section id="education" className="section-container">
      <AnimatedSection>
        <span className="section-title">Education</span>
        <h2 className="heading-lg mb-12 md:mb-16">
          Academic background
        </h2>
      </AnimatedSection>

      <div className="space-y-4 md:space-y-6">
        {educationData.map((education, index) => (
          <EducationCard key={education.degree} education={education} index={index} />
        ))}
      </div>
    </section>
  );
};
