import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const myProjects = [
    {
  title: "My website",
  description: "A professional personal portfolio showcasing full-stack development expertise, featuring responsive design and seamless user experience.",
  tech: ["React", "Tailwind", "Firebase"],
  github: "https://github.com/compi19/portfolio",
  live: "https://melkamu-tech.netlify.app/",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
},
    {
      title: "Smart Income and Expense management",
      description: "A robust financial tracking system developed using PHP and MySQL for secure data management. Featuring a dynamic interface built with JavaScript, CSS, and HTML, it enables users to record transactions, categorize expenses, and generate insightful financial reports through an intuitive dashboard.",
      tech: ["PHP", "MySQL", "JavaScript", "CSS"], 
      github: "https://github.com/compi19/income-expense-management-system", 
      live: "http://melkamu-tech.infinityfreeapp.com/index.php",
      // የፋይናንስ ዳሽቦርድ ምስል ሊንክ እዚህ ገብቷል
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=cropg" 
      
    }
  ];

  return (
    <section className="py-24 bg-[#0a0f1a] px-6 relative overflow-hidden" id="projects">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {myProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#111827] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl flex flex-col"
            >
              {/* Project Image Preview Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80"></div>
                
                {/* Interactive Hover Links */}
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[3px]">
                  <div className="flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/20 shadow-xl" aria-label="GitHub Source">
                       <Github size={22} />
                     </a>
                     <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white shadow-xl" aria-label="Live Demo">
                       <ExternalLink size={22} />
                     </a>
                  </div>
                </div>
              </div>

              {/* Information Body */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[11px] font-bold bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full uppercase tracking-wider border border-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Bottom Action Links */}
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                    <Github size={20} /> Source Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors">
                    Live Demo <ExternalLink size={20} />
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