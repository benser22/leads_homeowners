import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/ui/Layout";
import Hero from "./components/Hero/Hero";
import OneSection from "./components/Sections/OneSection";
import AboutSection from "./components/Sections/AboutSection";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OneSection />
      <AboutSection />
    </main>
  );
}

export default App;
