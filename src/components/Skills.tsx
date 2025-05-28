
import React from 'react';
import { Code, Database, Cloud, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: ["C++","C", "Python","JavaScript"],
      color: "blue"
    },
    {
      title: "Development Tools",
      icon: <Terminal size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Sublime Text"],
      color: "purple"
    },
    {
      title: "Libraries & Frameworks",
      icon: <Code size={24} />,
      skills: ["React.js", "Node.js"],
      color: "green"
    },
    {
      title: "Cloud & Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MySQL"],
      color: "orange"
    }
  ];

  const areasOfInterest = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming (OOPs)",
    "Operating System",
    "Database Management Systems (DBMS)"
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-600 border-blue-500",
      purple: "bg-purple-600 border-purple-500",
      green: "bg-green-600 border-green-500",
      orange: "bg-orange-600 border-orange-500"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-600 border-blue-500";
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-slate-300 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 transform"
            >
              <div className={`w-12 h-12 ${getColorClasses(category.color)} rounded-lg flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm hover:bg-slate-700 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Areas of Interest</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {areasOfInterest.map((area, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-slate-800/30 border border-slate-700 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
              >
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                <span className="text-slate-300">{area}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
