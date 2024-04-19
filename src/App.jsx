import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/ui/Layout";
import Hero from "./components/Hero/Hero";
import OneSection from "./components/Sections/OneSection";

function App() {
  return (
    <main>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <Layout>
        <section id="services">
          <OneSection />
        </section>
      </Layout>
    </main>
  );
}

export default App;
