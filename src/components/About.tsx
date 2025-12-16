import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimatedSection>
          <span className="section-title">About</span>
          <h2 className="heading-lg mb-8">
            Building Scalable, Thoughtful Software
          </h2>
          <div className="space-y-6 body-text">
            <p>
             I specialize in developing full-stack applications that are efficient,
             scalable, and user-focused. With hands-on experience across frontend
             interfaces and backend systems, I enjoy turning complex requirements
             into clean, functional solutions.
            </p>
            <p>
              My work spans building interactive web apps, designing RESTful APIs, and implementing reliable backend architectures using technologies like MERN and Django. I approach every project with a strong emphasis on clarity, maintainability, and performance.
            </p>
            
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4 md:gap-12">
            <div className="text-center md:text-left">
              <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground">3+</span>
              <p className="text-foreground-subtle text-xs sm:text-sm mt-1">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground">20+</span>
              <p className="text-foreground-subtle text-xs sm:text-sm mt-1">Projects Built</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-foreground">0</span>
              <p className="text-foreground-subtle text-xs sm:text-sm mt-1">Hackathon Wins</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div 
            className="relative aspect-square max-w-md mx-auto lg:mx-0"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Abstract visual placeholder */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-card to-background-elevated border border-card-border overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Geometric shapes */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-4 rounded-full border border-foreground-subtle/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/10 to-transparent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-light text-foreground/80">RC</span>
                  </div>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-primary/20 rounded-tl-xl" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-primary/20 rounded-br-xl" />
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/5 to-transparent -z-10 blur-xl" />
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
