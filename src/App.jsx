import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';



function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />

          <Contact />
        </main>

      </div>
    </ThemeProvider>
  );
}

export default App;
