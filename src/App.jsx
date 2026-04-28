import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-[#0a0f1a] text-white selection:bg-blue-500/30 min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section - አላስፈላጊ የውጭ section ተወግዷል */}
        <div className="relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
          <Hero />
        </div>

        <section id="skills" className="bg-[#0c1220] border-y border-white/5">
          <Skills />
        </section>

        <section id="projects" className="bg-[#0a0f1a]">
          <Projects />
        </section>

        <section id="contact" className="bg-[#0c1220]">
          <Contact />
        </section>
      </main>

      <footer className="py-10 text-center text-gray-500 text-sm border-t border-white/5 bg-[#0a0f1a]">
        <p>© {new Date().getFullYear()}  All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;