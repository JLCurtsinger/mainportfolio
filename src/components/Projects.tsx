import { motion } from "framer-motion";

const projects = [
  {
    title: "Xchainj",
    description: "Borrow & trade with anyone anywhere on a secure blockchain platform",
    image: "/AppIcon.png",
    link: "https://xchainj.com",
    tags: ["React", "Web3", "UI/UX"],
  },
  {
    title: "Project Two",
    description: "Interactive Art Installation",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Three.js", "WebGL", "Art"],
  },
  {
    title: "Project Three",
    description: "Mobile-First Design System",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Design", "Mobile", "UI"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;