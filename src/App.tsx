import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}

export default App;
