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
        <div id="contact">
          <CallToAction />
        </div>
      </main>
    </>
  );
};

export default Index;