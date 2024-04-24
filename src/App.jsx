import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OneSection from "./components/Sections/OneSection";
import AboutSection from "./components/Sections/AboutSection";
import OurProjects from "./components/Sections/OurProjects";
import Testimonials from "./components/Sections/Testimonials";
import LastSection from "./components/Sections/LastSection";
import Footer from "./Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OneSection />
      <AboutSection />
      <Testimonials />
      <OurProjects />
      <LastSection />
      <Footer />
    </main>
  );
}

export default App;
