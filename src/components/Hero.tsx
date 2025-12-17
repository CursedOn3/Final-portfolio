import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { BiChevronsDown } from "react-icons/bi";
import Canvas from "./Canvas";
import { characters } from "../data/animation-characters";
import { useLayoutEffect, useRef, useState } from "react";

export const Hero = () => {
  // Define translations array in the component scope
  const [translations, setTranslations] = useState<number[]>([]);
  const [scale, setScale] = useState<number>(1);
  const groupRefs = useRef<Array<SVGGElement | null>>([]);

  useLayoutEffect(() => {
    const viewBoxWidth = 320;
    const count = characters.length;
    const bboxes: Array<{ x: number; width: number }> = [];

    for (let i = 0; i < count; i++) {
      const g = groupRefs.current[i];
      if (!g) return; // wait until all refs present
      const path = g.querySelector("path");
      if (!path) return;
      const bbox = (path as SVGPathElement).getBBox();
      bboxes.push({ x: bbox.x, width: bbox.width });
    }

    if (bboxes.length !== count) return;

    // compute the gap between first two characters (R and I)
    const gapRI = bboxes[1].x - (bboxes[0].x + bboxes[0].width);
    const desiredGap = isFinite(gapRI) && gapRI > 0 ? gapRI : 8;

    // compute total width when gaps applied
    const totalWidths = bboxes.reduce((s, b) => s + b.width, 0);
    const totalGaps = desiredGap * (count - 1);
    const totalNeeded = totalWidths + totalGaps;

    // If the content is wider than the viewBox, compute a scale so it fits
    const computedScale = totalNeeded > viewBoxWidth ? viewBoxWidth / totalNeeded : 1;
    // When scaling, compute start X in unscaled coordinates so that after scaling it's centered
    const startX = (viewBoxWidth / computedScale - totalNeeded) / 2;

    const newTranslations: number[] = [];
    let cursor = startX;
    // tweak: reduce gap between A (index 4) and V (index 5)
    const gapAdjustmentBetweenAandV = -18; // px, negative to reduce gap
    for (let i = 0; i < count; i++) {
      // we want left edge of glyph i to be at cursor
      const left = cursor;
      const tx = left - bboxes[i].x;
      newTranslations.push(tx);
      // apply adjustment after glyph 4 so the gap before glyph 5 is smaller
      const adjustment = i === 4 ? gapAdjustmentBetweenAandV : 0;
      cursor += bboxes[i].width + desiredGap + adjustment;
    }

    setScale(computedScale);
    setTranslations(newTranslations);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Canvas />
      {/* Ambient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02]"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground-subtle)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground-subtle)) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="section-title block mb-6">Welcome to Portfolio of</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6"
          style={{ letterSpacing: "-0.02em" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/*
            Move translations array outside of JSX so it's accessible here
          */}
          <svg viewBox="0 0 320 80" className="inline-block text-foreground">
            <g transform={`scale(${scale})`}>
              {characters.map((d, i) => (
                <g
                  key={i}
                  ref={(el) => (groupRefs.current[i] = el)}
                  transform={`translate(${translations[i] ?? 0}, 0)`}
                >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: i / 10, duration: 1 }}
                  d={d}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <motion.path
                  // use fillOpacity so the actual color comes from CSS `currentColor`
                  fill="currentColor"
                  initial={{ fillOpacity: 0 }}
                  animate={{ fillOpacity: 1 }}
                  transition={{ delay: 0.7 + i / 10, duration: 0.6 }}
                  d={d}
                />
                </g>
              ))}
            </g>
          </svg>

        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-foreground-muted max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Full-Stack • Web • Software Engineering
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <a href="#projects" className="btn-glow">
            View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
          <a 
            href="/RishavCV.pdf" 
            download="Rishav_CV.pdf"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        <motion.p
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-lg md:text-xl text-foreground-muted max-w-xl mx-auto mb-12">
            Just another tech enthusiast
        </motion.p>

        
      </div>


      <motion.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#projects"
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </motion.a>
    </section>
  );
};
