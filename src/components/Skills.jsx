import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Terminal } from 'lucide-react';

const Skills = () => {
  // 1. All Skill Categories with specific SVGs and Colors
  const skillCategories = [
    {
      title: "Frontend Development",
      categoryIcon: <Layout className="text-blue-400" size={24} />,
      skills: [
        { name: "HTML5", color: "#E34F26", svg: "M1.5 0H22.5L20.5 22.5L12 25L3.5 22.5L1.5 0ZM18.5 5H5.5L6 10H17.5L17 15L12 16.5L7 15L6.8 13H4.3L4.8 18L12 20L19.2 18L20 5H18.5Z" },
        { name: "CSS3", color: "#1572B6", svg: "M1.5 0L3.5 22.5L12 25L20.5 22.5L22.5 0H1.5ZM18 5L17.5 10H7L7.2 13H17L16.2 18L12 19.2L7.8 18L7.6 15H5.1L5.5 20L12 22L18.5 20L19.5 5H18Z" },
        { name: "JavaScript", color: "#F7DF1E", svg: "M0 0H24V24H0V0ZM21.5 18.5H18.5V21H21.5V18.5ZM17.5 11H14.5V21H17.5V11Z" },
        { name: "React", color: "#61DAFB", svg: "M24 10.6C24 16.4 18.6 21.2 12 21.2C5.4 21.2 0 16.4 0 10.6C0 4.8 5.4 0 12 0C18.6 0 24 4.8 24 10.6ZM12 7C10 7 8.4 8.6 8.4 10.6C8.4 12.6 10 14.2 12 14.2C14 14.2 15.6 12.6 15.6 10.6C15.6 8.6 14 7 12 7Z" },
        { name: "Tailwind", color: "#06B6D4", svg: "M12 5.5C8.5 5.5 6 7.5 4.5 11C6 10 7.5 9.5 9 10C10.5 10.5 11.5 11.5 13 11.5C15.5 11.5 17.5 10 19 7C17.5 8 16 8.5 14.5 8" },
        { name: "Next.js", color: "#FFFFFF", svg: "M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM18.5 18.5L10 8V16H8.5V6H10L18.5 16.5V18.5Z" }
      ]
    },
    {
      title: "Backend & Database",
      categoryIcon: <Database className="text-blue-400" size={24} />,
      skills: [
        { name: "Node.js", color: "#339933", svg: "M12 1L2 6.5V17.5L12 23L22 17.5V6.5L12 1ZM12 20.5L4.5 16.5V7.5L12 3.5L19.5 7.5V16.5L12 20.5Z" },
        { name: "PHP", color: "#777BB4", svg: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" },
        { name: "MongoDB", color: "#47A248", svg: "M12 0C12 0 6 6 6 12C6 18 12 24 12 24C12 24 18 18 18 12C18 6 12 0 12 0Z" },
        { name: "MySQL", color: "#4479A1", svg: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" },
        { name: "Express", color: "#828282", svg: "M24 0H0V24H24V0ZM22 22H2V2H22V22Z" },
        { name: "Firebase", color: "#FFCA28", svg: "M12 2L4 18H20L12 2Z" }
      ]
    },
    {
      title: "Tools & Environment",
      categoryIcon: <Terminal className="text-blue-400" size={24} />,
      skills: [
        { name: "VS Code", color: "#007ACC", svg: "M23.5 17.3L18.7 12L23.5 6.7L18.3 2L12 8.3V2.4L7.5 5.7L2.4 2.8L0.5 3.9L5.3 8.3L0.5 12.7L2.4 13.8L7.5 10.9L12 14.3V20.3L18.3 24.7L23.5 20L23.5 17.3Z" },
        { name: "Git", color: "#F05032", svg: "M23.5 12L12 0.5L10.5 2L13.8 5.3C12.8 5 11.8 5 11 5.4V11C10.2 10.6 9.2 10.6 8.4 11C7.3 11.6 6.8 12.8 7.1 14C7.4 15.2 8.4 16.1 9.6 16.1C10.5 16.1 11.4 15.6 11.9 14.8L14.7 17.6C14.4 18.5 14.5 19.5 15.1 20.3C15.8 21.4 17.2 21.7 18.4 21.1C19.6 20.5 20.1 19.1 19.5 17.9C19 17 18.1 16.5 17.1 16.5V11.2L23.5 12Z" },
        { name: "Docker", color: "#2496ED", svg: "M13.9 11.3V8.8H16.4V11.3H13.9ZM13.9 8.2V5.7H16.4V8.2H13.9ZM11.1 11.3V8.8H13.6V11.3H11.1ZM11.1 8.2V5.7H13.6V8.2H11.1ZM8.3 11.3V8.8H10.8V11.3H8.3ZM16.7 11.3V8.8H19.2V11.3H16.7ZM2.5 12.3C2.5 16.4 5.9 19.8 10 19.8C14.1 19.8 17.5 16.4 17.5 12.3" },
        { name: "Postman", color: "#FF6C37", svg: "M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0ZM17.2 15.8C16.8 16.2 16.2 16.2 15.8 15.8L12 12L8.2 15.8C7.8 16.2 7.2 16.2 6.8 15.8C6.4 15.4 6.4 14.8 6.8 14.4L10.6 10.6L6.8 6.8" },
        { name: "Vercel", color: "#FFFFFF", svg: "M12 1L24 22H0L12 1Z" }
      ]
    }
  ];

  // 2. Technical and Soft Skills Progress
  const technicalSkills = [
    { name: "HTML / CSS", level: "100%" },
    { name: "JavaScript / React", level: "90%" },
    { name: "PHP / MySQL", level: "85%" }, 
    { name: "Node.js / MongoDB", level: "80%" },
    { name: "Visual Studio Code", level: "95%" } 
  ];

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
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight uppercase tracking-widest">Technical Expertise</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
        </div>

        {/* --- Skill Cards Section --- */}
        <div className="space-y-24 mb-24">
          {skillCategories.map((cat, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-10 justify-center md:justify-start">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  {cat.categoryIcon}
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest">{cat.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {cat.skills.map((s, index) => (
                  <motion.div 
                    key={index} 
                    whileHover={{ scale: 1.05, y: -5, backgroundColor: "#1e293b" }}
                    className="flex flex-col items-center justify-center p-8 bg-slate-800/40 rounded-2xl border border-white/5 shadow-xl transition-all group cursor-default"
                  >
                    <div className="mb-4 transition-transform group-hover:scale-110">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill={s.color} xmlns="http://www.w3.org/2000/svg">
                        <path d={s.svg} />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-gray-300 uppercase tracking-widest text-center group-hover:text-white">
                      {s.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- Progress Bars Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-white/5 pt-20">
          {/* Coding Skills Progress */}
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
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills Progress */}
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
                    transition={{ duration: 1.5, ease: "easeOut" }}
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