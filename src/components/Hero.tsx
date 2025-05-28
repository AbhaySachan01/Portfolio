import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const roles = [
    'Competitive Programmer',
    'Software Developer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  const typewriterText = useTypewriter({
    words: roles,
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Abhay Sachan</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Computer Science Engineering Student at MNNIT Allahabad
          </p>
         <div className="text-slate-400 mb-8 max-w-2xl mx-auto h-12 flex items-center justify-center">
          <span className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
            {typewriterText}
          </span>
          <span className="animate-pulse ml-1 text-2xl md:text-4xl text-blue-400">|</span>
        </div>

          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/abhaysachan01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/abhaysachan01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:abhay20233008@gmail.com"
              className="p-3 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 transform"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 transform"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;