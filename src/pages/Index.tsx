import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SkillsPage from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SkillsPage />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;
