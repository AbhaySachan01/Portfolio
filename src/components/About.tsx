
import React from 'react';
import { GraduationCap, Trophy, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Passionate Computer Science student with a strong foundation in competitive programming 
            and software development. Currently pursuing B.Tech at MNNIT Allahabad with a CPI of 8.62.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 transform">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
            <p className="text-slate-300">
              B.Tech CSE at MNNIT Allahabad with excellent academic performance and strong technical foundation.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 transform">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Achievements</h3>
            <p className="text-slate-300">
              Multiple contest victories and high rankings in competitive programming platforms with 1200+ problems solved.
            </p>
          </div>

          <div className="text-center p-6 bg-slate-900/50 rounded-xl hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 transform">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
            <p className="text-slate-300">
              Skilled in multiple programming languages and frameworks with hands-on experience in real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
