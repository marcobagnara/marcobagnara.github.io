import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CV from "@/components/CV";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="bg-academic-light">
        <CV />
      </div>
      <div className="bg-academic-accent">
        <Publications />
      </div>
      <div className="bg-academic-light">
        <Contact />
      </div>
    </div>
  );
};

export default Index;