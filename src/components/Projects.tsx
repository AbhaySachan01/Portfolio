
import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MiniSQL",
      description: "Built a lightweight SQL engine from scratch in C++. Implemented core SQL functionalities including CREATE, INSERT, UPDATE, SELECT with fast in-memory table operations and persistence to disk.",
      technologies: ["C++", "File I/O", "Modular Design"],
      period: "April 2025 - Ongoing",
      status: "In Progress",
      features: [
        "Core SQL functionality implementation",
        "Fast in-memory table operations",
        "Data persistence to disk",
        "Modular architecture design"
      ]
    },
    {
      title: "Superstore Sales Analyzer",
      description: "Performed comprehensive time series analysis on retail sales data for insights and forecasting. Built predictive models using ARIMA and LSTM for sales forecasting.",
      technologies: ["Python", "Pandas", "Matplotlib", "ARIMA", "LSTM"],
      period: "March 2025 - Ongoing",
      status: "In Progress",
      features: [
        "Data cleaning and preprocessing",
        "Trend visualization with charts",
        "ARIMA model implementation",
        "LSTM neural network forecasting"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg">Showcasing my technical expertise through practical implementations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 transform"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                  {project.status}
                </span>
              </div>
              
              <div className="flex items-center text-slate-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{project.period}</span>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700 text-blue-400 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
