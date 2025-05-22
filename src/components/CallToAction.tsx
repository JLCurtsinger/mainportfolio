
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ContactForm } from "./contact/ContactForm";
import { SocialLinks } from "./contact/SocialLinks";

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-accent mb-8"
        >
          Let's Create Something Amazing
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <motion.button 
                data-contact-trigger
                className="relative px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full 
                hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] active:shadow-[0_0_10px_rgba(139,92,246,0.3)]
                transition-all duration-300 ease-out overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
              </motion.button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] shadow-xl">
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl font-bold text-accent">Send me a message</DialogTitle>
              </DialogHeader>
              <ContactForm onSubmitProp={setIsOpen} />
            </DialogContent>
          </Dialog>
          
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
