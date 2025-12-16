import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/CursedOn3", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rishavkumarchaudhary-098169285", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/reesh.av18/", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border-subtle">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-foreground-subtle text-sm">
            © {new Date().getFullYear()} CursedOn3. All rights reserved.
          </span>
          
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="text-foreground-subtle hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
