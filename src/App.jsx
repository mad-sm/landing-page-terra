import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Instalasi from "./pages/Instalasi";
import Mitra from "./pages/Mitra";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Instalasi />
        <Mitra />
      </main>

      <Footer />
    </>
  );
}

export default App;
