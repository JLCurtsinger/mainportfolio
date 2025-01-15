import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#fdfcfb] via-[#f1f0fb] to-[#e2d1c3]">
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
            className="px-6 py-3 bg-primary text-white rounded-full 
            hover:bg-primary/90 active:bg-primary/80
            transition-all duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-secondary text-white rounded-full 
            hover:bg-secondary/90 active:bg-secondary/80
            transition-all duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;