import { FC, useEffect, useRef } from "react";

interface SkillCanvasProps {
  sources: string[];
}

const SkillCanvas: FC<SkillCanvasProps> = ({ sources }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images = sources.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    let particles: any[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width));
      canvas.height = Math.max(1, Math.floor(rect.height));
      // recreate particles sized for this canvas
      const count = Math.min(8, images.length || 4);
      particles = new Array(count).fill(0).map((_, i) => {
        const size = Math.max(18, Math.min(48, Math.floor(canvas.width / 6)));
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.8,
          dy: (Math.random() - 0.5) * 0.8,
          angle: Math.random() * Math.PI * 2,
          size,
          img: images[i % images.length],
        };
      });
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        p.angle += 0.01;

        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = canvas.height + p.size;
        if (p.y > canvas.height + p.size) p.y = -p.size;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        try {
          ctx.drawImage(p.img, -p.size / 2, -p.size / 2, p.size, p.size);
        } catch (e) {
          /* drawing before image loaded */
        }
        ctx.restore();
      });
    };

    const loop = () => {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    loop();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [sources]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
};

export default SkillCanvas;
