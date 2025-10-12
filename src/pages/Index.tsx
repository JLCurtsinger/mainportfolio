import Hero from "../components/Hero";
import Projects from "../components/Projects";
import InteractiveArt from "../components/InteractiveArt";
import MyWhy from "../components/MyWhy";
import CallToAction from "../components/CallToAction";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-16">
        <div id="hero">
          <Hero />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <InteractiveArt />
        <div id="my-why">
          <MyWhy />
        </div>
        <section id="profile-headshot" aria-label="Portrait" className="py-12 bg-white">
          <div className="flex justify-center items-center">
            <img
              src="/Headshot1.png"
              alt="Justin Curtsinger headshot"
              className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] rounded-full object-cover shadow-lg"
              loading="lazy"
              width="260"
              height="260"
            />
          </div>
        </section>
        <div id="contact">
          <CallToAction />
        </div>
      </main>
    </>
  );
};

export default Index;