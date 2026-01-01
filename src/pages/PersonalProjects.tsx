import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { slugify } from "../lib/utils";

const personalProjects = [
  {
    title: "DIY Electric Skateboard",
    description: "Built a custom electric skateboard from scratch using a VESC controller, brushless motor, and custom battery pack. Learned about motor control, battery management systems, and mechanical design.",
    image: "/images/personal-projects/diy-electric-skateboard/vesc-wiring.webp",
  },
];

const PersonalProjects = () => {
  const navigate = useNavigate();

  const handleCardClick = (projectTitle: string) => {
    const slug = slugify(projectTitle);
    navigate(`/personal-projects/${slug}`);
  };

  const handleCardKeyDown = (event: React.KeyboardEvent, projectTitle: string) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(projectTitle);
    }
  };

  const handleButtonClick = (event: React.MouseEvent, projectTitle: string) => {
    event.stopPropagation();
    handleCardClick(projectTitle);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#fdfcfb] via-[#f1f0fb] to-[#e2d1c3]">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl text-gray-800 font-semibold tracking-normal text-accent text-center mb-6"
            >
              Personal Projects
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-accent/80 text-center mx-auto"
            >
              A collection of curiosity builds and personal explorations, separate from my main portfolio of web development projects.
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className={`grid grid-cols-1 ${personalProjects.length === 1 ? "md:grid-cols-1 place-items-center" : "md:grid-cols-2"} gap-8`}>
              {personalProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={personalProjects.length === 1 ? "w-full max-w-xl" : ""}
                >
                  <Card 
                    className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                    onClick={() => handleCardClick(project.title)}
                    onKeyDown={(e) => handleCardKeyDown(e, project.title)}
                    role="link"
                    tabIndex={0}
                  >
                    <CardHeader className={personalProjects.length === 1 ? "text-center" : ""}>
                      <CardTitle className="text-2xl font-semibold text-accent">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className={`flex-1 ${personalProjects.length === 1 ? "text-center" : ""}`}>
                      <CardDescription className="text-base text-accent/80 leading-relaxed max-w-[48ch] mx-auto">
                        {project.description}
                      </CardDescription>
                      {project.image && (
                        project.title === "DIY Electric Skateboard" ? (
                          <div className="mt-6 mx-auto w-[80%]">
                            <div className="aspect-[16/9] rounded-lg overflow-hidden bg-muted">
                              <img 
                                src={project.image} 
                                alt={`${project.title} build supplies and spot welder`}
                                className="w-full h-full object-cover object-[50%_40%]"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="mt-6 w-full aspect-[16/9] rounded-lg overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={`${project.title} build supplies and spot welder`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        onClick={(e) => handleButtonClick(e, project.title)}
                        className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                      >
                        View details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PersonalProjects;

