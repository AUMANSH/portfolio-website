import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="glow-bg"></div>
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}

export default App;
