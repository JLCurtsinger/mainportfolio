import { motion } from "framer-motion";

const Hero = () => {
  const circles = Array.from({ length: 50 }, (_, i) => i);
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#D3E4FD]/10 to-[#33C3F0]/2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(51,195,240,0.05),rgba(15,160,206,0.02))]" />
      
      {/* Animated circles background */}
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#33C3F0]/5"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1.5, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-accent text-center mb-6"
        >
          Crafting Ideas Into Reality
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-accent/80 text-center max-w-2xl mx-auto mb-12"
        >
          Hi, I'm a designer and developer passionate about creating beautiful, functional experiences. 
          Specializing in UI/UX, Web3, and interactive art, I bring creative visions to life through code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;