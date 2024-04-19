import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/ui/Layout";
import Hero from "./components/Hero/Hero";
import OneSection from "./components/Sections/OneSection";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Layout>
        <OneSection />
      </Layout>
    </main>
  );
}

export default App;
