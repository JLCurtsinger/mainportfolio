import { motion } from "framer-motion";

const Hero = () => {
  const circles = Array.from({ length: 50 }, (_, i) => i);
  const waves = Array.from({ length: 3 }, (_, i) => i);
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Animated waves background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {waves.map((i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute w-[200%] h-[60px] left-[-50%] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"
            style={{
              top: `${30 + i * 15}%`,
            }}
            animate={{
              x: ["-25%", "0%", "-25%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20 + i * 2,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
          />
        ))}
      </div>

      {/* Existing animated circles background */}
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5"
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
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full 
            hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] active:shadow-[0_0_10px_rgba(139,92,246,0.3)]
            transition-all duration-300 ease-out overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            <span className="relative z-10">View My Work</span>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-full 
            hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] active:shadow-[0_0_10px_rgba(59,130,246,0.3)]
            transition-all duration-300 ease-out overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            <span className="relative z-10">Contact Me</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
