import React from 'react';
import { Github, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; 
import melkamuPhoto from '../assets/melkamu.jpg'; 

const Hero = () => {
  const coreSkills = [
    "Full-Stack Development",
      "Database Management",
    "AI Integration",
    "Deployment & DevOps"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0f1a] px-6 pt-32 md:pt-40 pb-20 relative overflow-hidden" id="hero">
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* የጽሁፍ ክፍል */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left order-last md:order-first"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm"
          >
            <span ><h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            My name is  <span className="text-blue-500">Melkamu</span> 
          </h3></span>
          </motion.div>

          <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            I'm a <span className="text-blue-500">Full-stack</span> Developer
          </h3>

          <div className="text-gray-400 mb-8 leading-relaxed">
            <p className="text-lg mb-6">
              I am a highly skilled Full-Stack Software Developer with over <span className="text-white font-semibold"> over 5 years of experience</span> in the technology and education sectors. 
              I specialize in the <span className="text-blue-400">MERN stack</span> (MongoDB, Express.js, React, Node.js) and PHP/MySQL to build scalable, high-performance digital solutions. 
              My portfolio includes complex systems like SMIS, Online Exam platforms, and comprehensive Financial Systems.
            </p>

            <div className="space-y-3">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 opacity-70">Core Technical Expertise:</h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl"
                  >
                    <CheckCircle2 size={16} className="text-blue-500" />
                    <span className="text-sm text-gray-200 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 mt-10">
            <Link to="projects" smooth={true} duration={600} offset={-70}
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] cursor-pointer active:scale-95"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            
            <div className="flex items-center gap-5 text-gray-400">
              <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all transform hover:-translate-y-1"><Github size={24} /></a>
              <a href="https://app.netlify.com/teams/melkamucom1130/projects" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all transform hover:-translate-y-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 19.5h20L12 2z" /><path d="M12 11l-4 7h8l-4-7z" />
                </svg>
              </a>
              <a href="mailto:melkamucom1130@gmail.com" className="hover:text-blue-500 transition-all transform hover:-translate-y-1"><Mail size={24} /></a>
            </div>
          </div>
        </motion.div>

        {/* የፎቶ ክፍል */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-first md:order-last" 
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10 bg-[#111827]"
            >
              <img 
                src={melkamuPhoto} 
                alt="Melkamu Full-stack Developer" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                style={{ objectPosition: 'top' }} 
              />
            </motion.div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;