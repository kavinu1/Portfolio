import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
