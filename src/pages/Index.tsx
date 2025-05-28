
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <Hero />
      <About />
      {/* <Education /> */}
      <Projects />
      <Skills />
      <Achievements />
      <CodingProfiles />
      <Contact />
    </div>
  );
};

export default Index;
