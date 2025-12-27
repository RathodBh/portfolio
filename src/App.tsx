import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      <Header />
      <motion.main
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;