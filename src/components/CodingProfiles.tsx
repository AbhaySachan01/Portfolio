
import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "abhaysachan01",
      title: "Knight",
      maxRating: 1903,
      description: "Consistent problem solver with strong algorithmic skills",
      color: "orange",
      link: "https://leetcode.com/abhaysachan01"
    },
    {
      platform: "CodeChef",
      username: "abhay_sachan",
      title: "4-Star",
      maxRating: 1887,
      description: "High-rated competitive programmer",
      color: "brown",
      link: "https://codechef.com/users/abhay_sachan"
    },
    {
      platform: "Codeforces",
      username: "abhaysachan360",
      title: "Specialist",
      maxRating: 1413,
      description: "Active participant in regular contests",
      color: "cyan",
      link: "https://codeforces.com/profile/abhaysachan360"
    },
    {
      platform: "HackerRank",
      username: "abhaysachan360",
      title: "5-Star in C++ and Python",
      maxRating: null,
      description: "Certified in multiple programming domains",
      color: "green",
      link: "https://hackerrank.com/abhaysachan360"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: "bg-orange-500/20 border-orange-500 text-orange-400",
      brown: "bg-amber-700/20 border-amber-700 text-amber-400",
      cyan: "bg-cyan-500/20 border-cyan-500 text-cyan-400",
      green: "bg-green-500/20 border-green-500 text-green-400"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-500/20 border-blue-500 text-blue-400";
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Coding <span className="text-blue-400">Profiles</span>
          </h2>
          <p className="text-slate-300 text-lg">My presence across competitive programming platforms</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-900/70 transition-all duration-300 hover:scale-105 transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{profile.platform}</h3>
                  <p className="text-slate-400">@{profile.username}</p>
                </div>
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className={`inline-flex items-center px-3 py-1 rounded-full border mb-4 ${getColorClasses(profile.color)}`}>
                <Star size={16} className="mr-2" />
                <span className="font-semibold">{profile.title}</span>
              </div>

              {profile.maxRating && (
                <div className="mb-4">
                  <span className="text-slate-400">Max Rating: </span>
                  <span className="text-white font-bold text-lg">{profile.maxRating}</span>
                </div>
              )}

              <p className="text-slate-300 leading-relaxed">{profile.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Problem Solving Statistics</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2">1200+</div>
            <p className="text-slate-300 mb-4">Problems solved across multiple platforms</p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">LeetCode</div>
                <div className="text-slate-400">Knight</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">CodeChef</div>
                <div className="text-slate-400">4-Star Rated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">Codeforces</div>
                <div className="text-slate-400">Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
