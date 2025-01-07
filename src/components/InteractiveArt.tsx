import { useEffect, useRef } from 'react';

const InteractiveArt = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }> = [];

    const colors = ['#8B5CF6', '#0EA5E9', '#1A1F2C'];
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          particle.dx += Math.cos(angle) * 0.2;
          particle.dy += Math.sin(angle) * 0.2;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">
          Interactive Art
        </h2>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveArt;