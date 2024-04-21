import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/ui/Layout";
import Hero from "./components/Hero/Hero";
import OneSection from "./components/Sections/OneSection";
import AboutSection from "./components/Sections/AboutSection";
import OurProjects from "./components/Sections/OurProjects";
import Testimonials from "./components/Sections/Testimonials";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OneSection />
      <AboutSection />
      <OurProjects />
      <Testimonials />
    </main>
  );
}

export default App;
