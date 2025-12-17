import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <span className="section-title">Contact</span>
          <h2 className="heading-lg mb-8">
            Let's work together
          </h2>
          <p className="body-text mb-12">
            Open to discussing new opportunities, collaborations, or just chatting 
            about security and technology.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.a
            href="mailto:rishavchaudhary111199@gmail.com"
            className="btn-glow inline-flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              // Try to open Gmail compose in a new tab; fall back to mailto if blocked
              try {
                e.preventDefault();
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  "rishavchaudhary111199@gmail.com"
                )}`;
                const newWin = window.open(gmailUrl, "_blank");
                if (!newWin) {
                  // Popup blocked — navigate to mailto
                  window.location.href = "mailto:rishavchaudhary111199@gmail.com";
                }
              } catch (err) {
                // Fallback to mailto on any error
                window.location.href = "mailto:rishavchaudhary111199@gmail.com";
              }
            }}
          >
            <Mail size={18} />
            <span>Get in Touch</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};
