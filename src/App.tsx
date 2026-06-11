import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Data/Skills";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}