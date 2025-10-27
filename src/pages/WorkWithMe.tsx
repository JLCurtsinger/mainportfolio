import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Linkedin, Mail, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";

const WorkWithMe = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const dialogTrigger = document.querySelector('[data-contact-trigger]') as HTMLButtonElement;
        if (dialogTrigger && !document.querySelector('[role="dialog"]')) {
          dialogTrigger.click();
        }
      }, 500);
    }, 100);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#fdfcfb] via-[#f1f0fb] to-[#e2d1c3]">
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-gray-800 font-semibold tracking-normal text-accent text-center mb-6"
            >
              Let's Build Something Meaningful
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl text-accent/80 text-center mx-auto"
            >
              I'm currently open to remote opportunities, contract work, or collaborations that combine design, technology, and purpose. Whether you're building something from scratch or refining an existing product, I can help bring ideas to life through thoughtful design and code.
            </motion.p>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl text-gray-800 font-semibold tracking-normal text-accent text-center mb-8"
            >
              What I Do
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-accent/80 text-center leading-relaxed"
            >
              I bridge design and development to create intuitive, scalable digital experiences. My background spans full-stack web development, UX/UI design, and product strategy, often in fast-moving environments where ideas need to evolve quickly into something real. I focus on simplicity, usability, and aligning technology with human goals.
            </motion.p>
          </div>
        </section>

        {/* How I Can Help Section */}
        <section className="py-20 bg-gradient-to-br from-[#fdfcfb] via-[#f1f0fb] to-[#e2d1c3]">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl text-gray-800 font-semibold tracking-normal text-accent text-center mb-12"
            >
              How I Can Help
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-accent mb-4">Front-End Development</h3>
                <p className="text-lg text-accent/80 leading-relaxed">
                  Crafting clean, responsive interfaces with React, Next.js, and Tailwind, always with a focus on usability and performance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-accent mb-4">Back-End Integration</h3>
                <p className="text-lg text-accent/80 leading-relaxed">
                  Building secure, scalable backends using Firebase, Supabase, and serverless functions to power authentication, data, and automation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-accent mb-4">UX/UI Design & Prototyping</h3>
                <p className="text-lg text-accent/80 leading-relaxed">
                  Designing intuitive, user-centered experiences in Figma and translating them seamlessly into production-ready code.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-lg shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-accent mb-4">AI & Emerging Tech</h3>
                <p className="text-lg text-accent/80 leading-relaxed">
                  Integrating OpenAI, API-based automations, and edge function workflows to create smarter, faster, and more adaptive applications.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Let's Collaborate Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl text-gray-800 font-semibold tracking-normal text-accent text-center mb-8"
            >
              Let's Collaborate
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-accent/80 text-center leading-relaxed mb-12"
            >
              <p className="mb-6">
                I'm based near Phoenix, Arizona and open to remote or hybrid work, especially collaborations in the Phoenix & San Diego MSA's and with fully remote teams.
                I enjoy working with early-stage startups, small creative teams, and founders who value intentional design and long-term thinking.
              </p>
              <p>
                If you think I'd be a good fit for your project or team, I'd love to hear from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.button
                onClick={handleContactClick}
                className="inline-flex items-center px-6 py-3 text-lg border-2 border-accent text-accent rounded-full 
                hover:bg-accent hover:text-white transition-all duration-300 ease-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
              </motion.button>
              
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/justincurtsinger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://profile.indeed.com/p/justinc-7xlqdf3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Indeed"
                  className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 transition-colors"
                >
                  <Briefcase className="w-6 h-6" />
                </a>
                <a
                  href="mailto:cjcurtsinger502@aol.com"
                  className="p-2 rounded-full bg-accent/5 hover:bg-accent/10 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center text-accent/70 italic mt-16 text-lg"
            >
              I build to connect ideas and people through technology.<br />
              If that resonates, let's start a conversation.
            </motion.p>
          </div>
        </section>
      </main>
    </>
  );
};

export default WorkWithMe;
