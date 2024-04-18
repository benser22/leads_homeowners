import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <main>
      <Navbar />
      <Layout>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <img src="https://res.cloudinary.com/djzp2k8gd/image/upload/v1713467608/leads_landing/wkdgssg99qkd15spyrec.svg"></img>
      </Layout>
    </main>
  );
}

export default App;
