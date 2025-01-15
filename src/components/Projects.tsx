import { motion } from "framer-motion";

const projects = [
  {
    title: "ZentraCare",
    description: "Healthcare platform revolutionizing patient care",
    link: "https://zentracare.com",
    // image: "/placeholder.svg",
    tags: ["Healthcare", "Web Platform", "UI/UX"],
  },
  {
    title: "So Fire Fitness",
    description: "Modern fitness training and wellness platform",
    link: "https://sofirefitness.com",
    // image: "/placeholder.svg",
    tags: ["Fitness", "Health", "Web App"],
  },
  {
    title: "Xchainj",
    description: "Borrow & trade with anyone anywhere on a secure blockchain platform",
    link: "https://xchainj.com",
    // image: "/placeholder.svg",
    tags: ["Blockchain", "Web3", "DeFi"],
  },
  {
    title: "Roamari",
    description: "Travel planning and exploration platform",
    link: "https://roamari.com",
    // image: "/placeholder.svg",
    tags: ["Travel", "Web App", "UI/UX"],
  },
  {
    title: "TalkLikeALocal",
    description: "Language learning and cultural exchange platform",
    link: "https://talklikealocal.org",
    // image: "/placeholder.svg",
    tags: ["Education", "Language", "Community"],
  },
  {
    title: "Lesson Link",
    description: "Educational platform connecting teachers and students",
    link: "https://lessonlink.org",
    // image: "/placeholder.svg",
    tags: ["Education", "Web Platform", "EdTech"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => window.open(project.link, '_blank')}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-200 
              hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-accent">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="inline-block px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                >
                  Visit Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;