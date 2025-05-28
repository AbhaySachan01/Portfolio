
import React from 'react';
import {ExternalLink , Trophy, Medal, Award, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Meta Hacker Cup 2024",
      description: "Qualified for Round 2 of Meta Hacker Cup 2024",
      icon: <Trophy size={24} />,
      type: "Competition",
      color: "gold"
    },
    {
      title: "Insomnia Coding Competition",
      description: "First Runner-Up among all MNNIT participants",
      icon: <Medal size={24} />,
      type: "Competition",
      color: "silver"
    },
    {
      title: "CodeStart Coding Contest",
      description: "Secured 4th Rank in CodeStart Coding Contest",
      icon: <Award size={24} />,
      type: "Contest",
      color: "bronze"
    },
    {
      title: "CodeFest 2025",
      description: "Achieved Rank 547 out of 45K+ participants",
      icon: <Target size={24} />,
      type: "Contest",
      color: "blue"
    },
    {
      title: "LeetCode Biweekly Contest 149",
      description: "Secured Rank 539 among 30000+ Participants (Top 1.5%) ",
      icon: <Trophy size={24} />,
      type: "Contest",
      color: "green"
    },
    {
      title: "Codeforces Round 993",
      description: "Secured Rank 865 among 30000+ Participants(Top 3%)",
      icon: <Medal size={24} />,
      type: "Contest",
      color: "purple"
    },
    {
      title: "Codechef Starters 149",
      description: "Secured Rank 86 among 31000+ Participants (Top 0.3%)",
      icon: <Award size={24} />,
      type: "Contest",
      color: "orange"
    },
    {
      title: "Problem Solving",
      description: "Solved 1200+ problems on various platforms",
      icon: <Target size={24} />,
      type: "Milestone",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      gold: "bg-yellow-500/20 border-yellow-500 text-yellow-400",
      silver: "bg-gray-400/20 border-gray-400 text-gray-300",
      bronze: "bg-amber-600/20 border-amber-600 text-amber-400",
      blue: "bg-blue-500/20 border-blue-500 text-blue-400",
      green: "bg-green-500/20 border-green-500 text-green-400",
      purple: "bg-purple-500/20 border-purple-500 text-purple-400",
      orange: "bg-orange-500/20 border-orange-500 text-orange-400",
      cyan: "bg-cyan-500/20 border-cyan-500 text-cyan-400"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-500/20 border-blue-500 text-blue-400";
  };

  return (
    <section id="achievements" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Achievements</span>
          </h2>
          <p className="text-slate-300 text-lg">Recognition and accomplishments in competitive programming</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 transform"
            >
              <div className={`w-12 h-12 ${getColorClasses(achievement.color)} rounded-lg flex items-center justify-center mb-4 border`}>
                {achievement.icon}
              </div>
              <div className="mb-2">
                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                  {achievement.type}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

       <div className="mt-16 text-center">
        <div className="bg-slate-900/60 border border-slate-700 rounded-2xl p-10 max-w-2xl mx-auto shadow-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">Certifications</h2>
          <div className="space-y-4">
            {[
              {
                title: "Meta Hacker Cup 2024",
                date: "Oct 2024",
                link: "https://drive.google.com/drive/folders/1778p3TAqPV9C1GUO8ahxkLOeBTzn5Zbl"
              },
              {
                title: "Codefest 2025 Prelims",
                date: "March 2025",
                link: "https://drive.google.com/drive/folders/1V2EjFdm6bjdMSWjUeMrMCm25FyV8X9LO"
              },
              {
                title: "HackerRank Problem Solving Intermediate",
                date: "Certified",
                link: "https://www.hackerrank.com/certificates/b01bb2aec53d"
              }
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-all duration-200 hover:scale-[1.01]"
              >
                <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-700 hover:bg-slate-800/60 shadow-md">
                  <div className="text-left">
                    <p className="text-slate-200 font-medium text-lg">{cert.title}</p>
                    <p className="text-sm text-slate-400">{cert.date}</p>
                  </div>
                  <ExternalLink className="text-blue-400 w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      </div>
    </section>
  );
};

export default Achievements;
