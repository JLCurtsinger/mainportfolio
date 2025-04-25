import { motion } from "framer-motion";

const projects = [
  {
    title: "ZentraCare",
    description: "Healthcare platform revolutionizing patient care through innovative digital solutions and seamless user experience",
    link: "https://zentracare.com",
    tags: ["Healthcare", "Web Platform", "UI/UX"],
    altText: "ZentraCare healthcare platform interface showcasing patient care management system"
  },
  {
    title: "So Fire Fitness",
    description: "Modern fitness training and wellness platform designed for personalized workout experiences",
    link: "https://sofirefitness.com",
    tags: ["Fitness", "Health", "Web App"],
    altText: "So Fire Fitness web application displaying workout tracking interface"
  },
  {
    title: "Xchainj",
    description: "Secure blockchain platform enabling peer-to-peer trading and borrowing with advanced DeFi features",
    link: "https://xchainj.com",
    tags: ["Blockchain", "Web3", "DeFi"],
    altText: "Xchainj blockchain trading platform showing decentralized exchange interface"
  },
  {
    title: "The LZ",
    description: "Free mental health and additional resources for veterans",
    link: "https://thelz.org/",
    tags: ["Military", "Web App", "Mental Health"],
    altText: "The LZ is a site that provides free resources for veterans centered around mental health."
  },
  // {
  //   title: "Roamari",
  //   description: "Intuitive travel planning and exploration platform with personalized recommendations",
  //   link: "https://roamari.com",
  //   tags: ["Travel", "Web App", "UI/UX"],
  //   altText: "Roamari travel planning application displaying destination exploration interface"
  // },
  {
    title: "TalkLikeALocal",
    description: "Learn to say things like the locals do all across the United States",
    link: "https://talklikealocal.org",
    tags: ["Education", "Language", "Community"],
    altText: "TalkLikeALocal language learning platform showing interactive lesson interface"
  },
  {
    title: "Lesson Link",
    description: "Early literacy skill builder for 3 year olds with AI powered personalized learning paths",
    link: "https://lessonlink.org",
    tags: ["Education", "AI-powered", "EdTech"],
    altText: "Lesson Link educational platform displaying teacher-student connection interface"
  },
];

const Projects = () => {
  return (
    <section aria-label="Featured Projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-accent text-center mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
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
                  aria-label={`Visit ${project.title} project`}
                  className="inline-block px-4 py-2 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
                >
                  Visit Project
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
