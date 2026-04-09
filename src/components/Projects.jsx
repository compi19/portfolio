import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, FolderRoot } from 'lucide-react';

const Projects = () => {
  // 1. የፕሮጀክት መረጃዎች እዚህ ጋር ይስተካከላሉ
  const myProjects = [
    {
      title: "My website",
      description: "A full-featured shopping system with real-time sync, secure Firebase authentication, and streamlined checkout.",
      tech: ["React", "Tailwind", "Firebase"],
      github: "https://github.com/yourusername/ecommerce", // የGitHub ሊንክ እዚህ ይግባ
      live: "https://melkamu-tech.netlify.app/"    // የዌብሳይቱ ሊንክ እዚህ ይግባ
    },
    {
      title: "Smart Income and Expense managment systenm",
      description: "A comprehensive health dashboard featuring interactive charts and state management for daily wellness metrics.",
      tech: ["React", "Chart.js", "Zustand"],
      github: "https://github.com/compi19/income-expense-management-system", 
      live: "http://melkamu-tech.infinityfreeapp.com/index.php"
    },/*
    {
      title: "Smart Food Ordering",
      description: "A fast, attractive restaurant interface with smooth animations and dynamic cart management.",
      tech: ["React", "Framer Motion", "Context API"],
      github: "https://github.com/yourusername/food-order", 
      live: "https://your-food-site.netlify.app"
    }*/
  ];

  return (
    <section className="py-24 bg-[#0a0f1a] px-6 relative overflow-hidden" id="projects">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Code2 className="text-blue-500" size={28} />
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          </div>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            A selection of my recent works. These projects demonstrate my ability to bridge the gap between complex functionality and elegant user interfaces.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#111827] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Project Preview Area */}
              <div className="h-52 bg-[#1a2333] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Hover Overlay - ሊንኮቹ የሚታዩበት */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                    <div className="flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                       <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/20 shadow-xl">
                         <Github size={20} />
                       </a>
                       <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white shadow-xl">
                         <ExternalLink size={20} />
                       </a>
                    </div>
                </div>
                
                <FolderRoot className="text-blue-500/20 group-hover:text-blue-500/40 transition-colors" size={64} />
              </div>

              {/* Project Details */}
              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full uppercase tracking-tighter border border-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Footer Links - እዚህ ጋር ሊንኮቹ ተገናኝተዋል */}
                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                    <Github size={18} /> Source Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">
                    Preview <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;