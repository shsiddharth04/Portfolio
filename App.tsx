import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowIThink from './components/HowIThink';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-background text-textPrimary relative">
        {/* Cinematic Noise Overlay */}
        <div className="bg-noise"></div>
        
        <Navbar />
        <Hero />
        <About />
        <Services />
        <HowIThink />
        <Projects />
        <OtherProjects />
        <Skills />
        <Contact />
    </main>
  );
};

export default App;