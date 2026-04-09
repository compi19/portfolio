import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layout, Database, Code2, Globe } from 'lucide-react';

const Skills = () => {
  // 1. Skill Categories (Including PHP, MySQL, and VS Code)
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-blue-400" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-blue-400" />,
      skills: ["Node.js", "PHP", "MongoDB", "MySQL", "Express", "Firebase"]
    },
    {
      title: "Tools & Environment",
      icon: <Terminal className="text-blue-400" />,
      skills: ["VS Code", "Git & GitHub", "Docker", "Postman", "Vercel"]
    }
  ];

  // 2. Technical Skills (With proficiency levels)
  const technicalSkills = [
    { name: "HTML / CSS", level: "100%" },
    { name: "JavaScript / React", level: "90%" },
    { name: "PHP / MySQL", level: "85%" }, 
    { name: "Node.js / MongoDB", level: "80%" },
    { name: "Visual Studio Code", level: "95%" } 
  ];

  // 3. Professional Skills (Soft Skills)
  const softSkills = [
    { name: "Communication", level: "95%" },
    { name: "Teamwork", level: "95%" },
    { name: "Problem Solving", level: "90%" },
    { name: "Creativity", level: "95%" }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0f1a] px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight uppercase">Technical Expertise</h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </div>

        {/* --- Category Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-[#111827] rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all shadow-2xl group"
            >
              <div className="mb-6 bg-blue-500/10 w-fit p-4 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                {cat.icon}
              </div>
              <h4 className="text-xl font-bold mb-6 text-white">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <span key={s} className="bg-[#0a0f1a] text-blue-300 px-3 py-1.5 rounded-lg border border-white/5 text-xs font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Progress Bars (Technical & Professional) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Technical List */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-widest">Coding Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between text-sm font-bold text-gray-300">
                  <span>{skill.name}</span>
                  <span className="text-blue-500">{skill.level}</span>
                </div>
                <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Professional List */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-widest">Professional Qualities</h3>
            {softSkills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between text-sm font-bold text-gray-300">
                  <span>{skill.name}</span>
                  <span className="text-blue-500">{skill.level}</span>
                </div>
                <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;