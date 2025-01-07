import Hero from "../components/Hero";
import Projects from "../components/Projects";
import InteractiveArt from "../components/InteractiveArt";
import CallToAction from "../components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Projects />
      <InteractiveArt />
      <CallToAction />
    </main>
  );
};

export default Index;