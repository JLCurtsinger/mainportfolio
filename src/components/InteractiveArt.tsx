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
      targetRadius: number;
    }> = [];

    const colors = ['#33C3F0', '#0FA0CE', '#D3E4FD'];
    let mouseX = 0;
    let mouseY = 0;
    let isMouseDown = false;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          targetRadius: Math.random() * 2 + 1,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Slower movement
        particle.x += particle.dx * 0.5;
        particle.y += particle.dy * 0.5;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Interactive radius change
        if (distance < 100) {
          if (isMouseDown) {
            particle.targetRadius = Math.min(8, particle.radius + 0.5);
            const angle = Math.atan2(dy, dx);
            particle.dx += Math.cos(angle) * 0.1;
            particle.dy += Math.sin(angle) * 0.1;
          } else {
            particle.targetRadius = Math.max(1, particle.radius - 0.1);
          }
        } else {
          particle.targetRadius = particle.radius;
        }

        // Smooth radius transition
        particle.radius += (particle.targetRadius - particle.radius) * 0.1;

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

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
    };

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('touchstart', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('touchstart', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#D3E4FD]/10 to-[#33C3F0]/2">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-pointer touch-none"
          />
        </div>
        <p className="text-center mt-4 text-sm text-accent/70">
          Touch and hold or click and drag to interact with the particles
        </p>
      </div>
    </section>
  );
};

export default InteractiveArt;
