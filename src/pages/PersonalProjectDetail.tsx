import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Button } from "../components/ui/button";
import { slugify } from "../lib/utils";
import BlogLayout from "../components/BlogLayout";
import AuthorSignOff from "../components/AuthorSignOff";

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

// Helper component for safe image rendering
const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="blog-media my-8 w-[90%] sm:w-[70%] md:w-[65%] mx-auto">
      <img
        src={src}
        alt={alt}
        className="w-full max-w-full rounded-lg shadow-md"
        onError={(e) => {
          // Hide image if it fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
    </div>
  );
};

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

  // Special handling for DIY Electric Skateboard story page
  const isSkateboardProject = slugify(project.title) === "diy-electric-skateboard";

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

  if (isSkateboardProject) {
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
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-800 font-semibold tracking-normal text-accent mb-4">
                  DIY Electric Skateboard
                </h1>
                
                <p className="text-lg sm:text-xl text-accent/80 leading-relaxed mb-12">
                  A from-scratch build focused on a flexible 12S4P battery system, a custom 3D printed enclosure, and VESC tuning.
                </p>

                <BlogLayout>
                  <div className="prose prose-lg max-w-none text-accent/90 space-y-8 [&>section>p]:mx-3 [&>section>p]:md:mx-auto [&>section>p]:md:max-w-2xl [&>section>ul]:mx-3 [&>section>ul]:md:mx-auto [&>section>ul]:md:max-w-2xl [&>section>ol]:mx-3 [&>section>ol]:md:mx-auto [&>section>ol]:md:max-w-2xl">
                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">Overview</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      I built a custom electric skateboard from scratch, including the battery pack, enclosure, drivetrain setup, and controller tuning. The goal was a board that felt comfortable over rough pavement, had strong power delivery across the charge range, and stayed reliable under real riding.
                    </p>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">Learning the battery fundamentals</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      The battery was the biggest learning curve. I used the book "DIY Lithium Batteries" by Micah Toll as my primary guide, and leaned heavily on his battery-building videos while I worked. I treated battery safety as a first-class requirement, not an afterthought, because mistakes here fail fast.
                    </p>
                    <ProjectImage 
                      src="/images/personal-projects/diy-electric-skateboard/book-cover.webp"
                      alt="DIY Lithium Batteries book cover"
                    />
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">Parts sourcing and the build ecosystem</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      Most of the electric-skateboard-specific parts came from DIYElectricSkateboard.com. I bought Samsung 30Q 18650 cells from IMRBatteries.com, and filled in the rest with tools, wiring, consumables, and hardware from Amazon and eBay. This build was a mix of specialty e-skate components and normal "make it work" sourcing.
                    </p>
                    <ProjectImage 
                      src="/images/personal-projects/diy-electric-skateboard/supplies-and-spot-welder.webp"
                      alt="Spot welder and supplies laid out on table"
                    />
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">Designing around a flexible deck</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      The board started as a flexible longboard deck because flex is comfortable and absorbs vibration. The downside is structural: if the deck flexes, the enclosure and battery system have to flex with it. That design constraint shaped everything.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed">
                      To support flex, I built the enclosure in a scale-like segmented form, so each section could move slightly relative to the next. That approach also made the enclosure easier to print on an Ender 3 and easier to iterate on without reprinting a single massive part.
                    </p>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">The battery layout: 12S4P in flexible sections</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      I built the pack as a 12S4P configuration using Samsung 30Q 18650 cells. Instead of one rigid block, I segmented the battery into smaller groups so it could flex with the deck. I also 3D printed cell holders to keep each group aligned and consistent during assembly.
                    </p>
                    <ProjectImage 
                      src="/images/personal-projects/diy-electric-skateboard/battery-packs.webp"
                      alt="Workbench showing pack sections, BMS diagrams, and tools"
                    />
                    <p className="text-base sm:text-lg leading-relaxed">
                      This segmentation affected wiring. To keep the pack flexible, I could not rely on continuous nickel strip runs everywhere. I had to use wire bridging between sections, which is why the internal layout looks the way it does.
                    </p>
                    <ProjectImage 
                      src="/images/personal-projects/diy-electric-skateboard/battery-packs-in-enclosure.webp"
                      alt="Battery pack inside the enclosure, top-down view"
                    />
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">Assembly reality: welding, soldering, patience</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      The spot welding was one part of the job, but the soldering was the time sink. I had minor prior experience, but I was effectively leveling up while doing the build. Just the soldering portion took roughly six to eight hours.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed">
                      This was also where the build stopped feeling like "electronics" and started feeling like systems engineering. Every decision affected heat, clearance, strain relief, serviceability, and failure modes.
                    </p>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">Mounting the enclosure to the board</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      To mount the enclosure cleanly, I drilled into the deck and installed threaded inserts (metal threaded sleeves) so the enclosure could bolt in securely. This avoided relying on wood screws directly into the deck, and it made removal and maintenance realistic.
                    </p>
                    <ProjectImage 
                      src="/images/personal-projects/diy-electric-skateboard/enclosure-on-board.webp"
                      alt="Enclosure mounted on the board"
                    />
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">ESC and tuning: VESC setup and gearing</h2>
                    <ProjectImage 
                      src="/images/personal-projects/diy-electric-skateboard/vesc-wiring.webp"
                      alt="Close-up of VESC wiring and ESC wiring on board"
                    />
                    <p className="text-base sm:text-lg leading-relaxed">
                      After the battery was complete, I tuned the VESC controller and iterated on settings over time. I also played with gearing ratios to dial in acceleration, efficiency, and ride feel.
                    </p>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">A fun mistake: the 3D printed drive gear</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      I forgot to order the wheel gear needed for the belt drive setup. Instead of waiting, I found a compatible 3D model on Thingiverse and printed a gear that fit the wheels I had.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed">
                      Surprisingly, it held up for months. It lasted roughly three to four months, and I estimate around 300 to 500 miles of riding before it finally wore down. This was with my weight being over 200 pounds at the time. I eventually replaced it with aluminum, but it was a great reminder that printed parts can be legitimate prototypes, not just toys.
                    </p>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">Speed vs stability: what the flexible deck taught me</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      The setup was capable of very high speed (over 40 mph in theory), but I learned quickly that flex and speed do not mix. Flex feels great at normal speeds, but at higher speeds it can feel unstable. Small bumps start to feel like they want to throw you off the board.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed">
                      Over time, I swapped decks to something stiffer with better footing that made me feel more locked in. The flexible deck was fun, but the stability tradeoff became obvious once the power was real.
                    </p>
                    <ProjectImage 
                      src="/images/personal-projects/diy-electric-skateboard/complete-board-bottom.webp"
                      alt="Complete board bottom view"
                    />
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">What I'd do differently today</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      If I rebuilt this today, I would:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-base sm:text-lg leading-relaxed ml-4">
                      <li>Decide on the deck stiffness earlier and design the enclosure around that choice</li>
                      <li>Plan the drivetrain parts list more carefully up front</li>
                      <li>Spend more time on cable routing and strain relief to make maintenance easier</li>
                      <li>Build the enclosure with serviceability in mind from day one</li>
                    </ul>
                  </section>

                  <section className="space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4 mt-12">Why this project still matters to me</h2>
                    <p className="text-base sm:text-lg leading-relaxed">
                      This build was a strong "hardware meets software" challenge. The battery work was physical and safety-critical, the enclosure demanded iteration and real constraints, and the VESC tuning felt like programming a machine with real consequences. It was one of those projects where you can't fake understanding, because the system tells you immediately when something is wrong.
                    </p>
                  </section>

                  <section className="space-y-6">
                    <p className="text-base sm:text-lg leading-relaxed font-semibold text-accent/90 mt-12">
                      Interested in this kind of work?
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed -mt-2">
                      If you're building something similar or just want to compare notes, feel free to{" "}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleContactClick();
                        }}
                        className="text-accent underline hover:text-accent/80 transition-colors"
                      >
                        reach out
                      </a>
                      .
                    </p>
                  </section>
                  
                  <AuthorSignOff />
                  </div>
                </BlogLayout>
              </motion.div>
            </div>
          </section>
        </main>
      </>
    );
  }

  // Default layout for other projects
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

