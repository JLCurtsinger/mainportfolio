import { motion } from "framer-motion";

const Hero = () => {
  const handleContactClick = () => {
    // First scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    
    // Then trigger the dialog button click
    const dialogTrigger = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
    if (dialogTrigger && !document.querySelector('[role="dialog"]')) {
      dialogTrigger.click();
    }
  };

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
          Hi, I’m a designer and developer passionate about crafting beautiful and intuitive digital experiences. 
          Specializing in UI/UX, emerging tech, and human-centered design, I bring creative ideas to life through code.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-[#7E69AB] text-white rounded-full 
            hover:bg-[#6E59A5] hover:shadow-[0_0_15px_rgba(126,105,171,0.5)]
            active:bg-[#6E59A5]/90
            transition-all duration-300 ease-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            onClick={handleContactClick}
            className="px-6 py-3 bg-[#8E9196] text-white rounded-full 
            hover:bg-[#7A7D82] hover:shadow-[0_0_15px_rgba(142,145,150,0.5)]
            active:bg-[#7A7D82]/90
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
