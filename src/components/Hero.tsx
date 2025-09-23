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
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-accent text-center mb-6"
        >
          Crafting Ideas Into Reality
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-3xl text-xl sm:text-2xl text-gray-700 text-center mx-auto mb-12"
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
            className="inline-flex items-center rounded-full bg-accent text-white px-6 py-3 text-lg hover:bg-accent/90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            onClick={handleContactClick}
            className="inline-flex items-center rounded-full bg-gray-200 text-gray-800 px-6 py-3 text-lg hover:bg-gray-300 transition"
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
