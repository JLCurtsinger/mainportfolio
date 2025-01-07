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
              <button className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#33C3F0] to-[#0FA0CE] text-white font-semibold transform transition-transform hover:scale-105 hover:shadow-lg">
                Contact Me
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Send me a message</DialogTitle>
              </DialogHeader>
              <ContactForm onSubmit={setIsOpen} />
            </DialogContent>
          </Dialog>
          
          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;