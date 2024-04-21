import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OneSection from "./components/Sections/OneSection";
import AboutSection from "./components/Sections/AboutSection";
import OurProjects from "./components/Sections/OurProjects";
import Testimonials from "./components/Sections/Testimonials";
import LastSection from "./components/Sections/LastSection";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OneSection />
      <AboutSection />
      <OurProjects />
      <Testimonials />
      <LastSection />
    </main>
  );
}

export default App;
