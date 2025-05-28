
import React from 'react';
import { Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Motilal Nehru National Institute of Technology Allahabad",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 - Present",
      score: "CPI: 8.62",
      type: "University"
    },
    {
      institution: "K.R. Education Centre",
      degree: "Higher Secondary Education",
      period: "2022",
      score: "Percentage: 94.6%",
      type: "School"
    },
    {
      institution: "K.R. Education Centre",
      degree: "Secondary Education",
      period: "2020",
      score: "Percentage: 96.8%",
      type: "School"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Education</span>
          </h2>
          <p className="text-slate-300 text-lg">Academic journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="mb-8 bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 transform"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-blue-400 text-lg mb-2">{edu.degree}</p>
                  <div className="flex items-center text-slate-300 mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center text-green-400 font-semibold">
                    <Award size={16} className="mr-2" />
                    <span>{edu.score}</span>
                  </div>
                  <span className="text-slate-400 text-sm mt-1">{edu.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
