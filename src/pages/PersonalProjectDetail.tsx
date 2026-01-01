import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { slugify } from "../lib/utils";

const personalProjects = [
  {
    title: "DIY Electric Skateboard",
    description: "Built a custom electric skateboard from scratch using a VESC controller, brushless motor, and custom battery pack. Learned about motor control, battery management systems, and mechanical design.",
    detailDescription: "This project was a deep dive into the world of electric vehicle engineering. I sourced components from various suppliers, designed a custom mounting system for the motor and battery pack, and programmed the VESC controller to optimize performance and safety. The build process taught me valuable lessons about power management, thermal considerations, and the importance of proper mechanical design in high-performance applications.",
  },
  {
    title: "Placeholder Personal Build",
    description: "A curiosity-driven project exploring new technologies and creative problem-solving outside of web development.",
    detailDescription: "This project represents my ongoing exploration of technologies and creative solutions beyond the web development sphere. It's a space for experimentation, learning, and pushing boundaries in areas that interest me personally.",
  },
];

const PersonalProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = personalProjects.find(
    (p) => slugify(p.title) === slug
  );

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white pt-16">
          <div className="container mx-auto px-4 max-w-4xl py-20">
            <h1 className="text-4xl font-semibold text-accent mb-6">Project Not Found</h1>
            <p className="text-lg text-accent/80 mb-8">The project you're looking for doesn't exist.</p>
            <Button
              variant="outline"
              onClick={() => navigate("/personal-projects")}
              className="border-accent text-accent hover:bg-accent hover:text-white"
            >
              Back to Personal Projects
            </Button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        <section className="py-20 bg-gradient-to-br from-[#fdfcfb] via-[#f1f0fb] to-[#e2d1c3]">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Button
                variant="outline"
                onClick={() => navigate("/personal-projects")}
                className="mb-8 border-accent text-accent hover:bg-accent hover:text-white"
              >
                ← Back to Personal Projects
              </Button>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-800 font-semibold tracking-normal text-accent mb-6">
                {project.title}
              </h1>
              
              <div className="mt-8 space-y-4">
                <p className="text-lg sm:text-xl text-accent/80 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-base sm:text-lg text-accent/70 leading-relaxed">
                  {project.detailDescription}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PersonalProjectDetail;

