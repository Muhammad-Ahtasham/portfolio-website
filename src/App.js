import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-dark-navy overflow-hidden">
        <CustomCursor />
        <BackgroundElements />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
