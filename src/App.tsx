import Navbar from "/src/components/Navbar";
import Home from "/src/components/Home";
import About from "/src/components/About";
import Skills from "/src/components/Skills";
import Project from "/src/components/Project";
import Contact from "/src/components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
export default App;
