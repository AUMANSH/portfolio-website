import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, Code2, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="container mx-auto max-w-5xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex flex-col md:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 rounded-full text-cyan-400 font-mono text-sm mb-4"
            >
              Available for Junior AI / ML Roles
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Aumansh <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Vijayendra Gupta
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-light">
              Machine Learning Engineer & Data Scientist architecting scalable AI pipelines and deployment-ready workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="group flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-3.5 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] w-full sm:w-auto justify-center"
              >
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
              <a 
                href="#projects"
                className="flex items-center gap-2 border border-slate-700 bg-slate-800/50 hover:bg-slate-700/50 text-white px-8 py-3.5 rounded-lg font-semibold transition-all w-full sm:w-auto justify-center"
              >
                View Projects <ChevronRight size={20} />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-8 justify-center md:justify-start text-slate-400">
              <a href="https://github.com/AUMANSH" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/aumansh-vijayendra-gupta-5aa951269/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110">
                <FaLinkedin size={28} />
              </a>
              <a href="https://leetcode.com/u/aumanshgupta01/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110" title="LeetCode">
                <Code2 size={28} />
              </a>
              <a href="https://www.hackerrank.com/profile/aumansh_gupta111" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors transform hover:scale-110" title="HackerRank">
                <Terminal size={28} />
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 hidden lg:flex flex-col items-center justify-center relative w-full max-w-md mt-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />
            
            {/* Profile Image */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-56 h-56 rounded-full p-1.5 border border-cyan-500/50 shadow-[0_0_40px_rgba(0,210,255,0.3)] z-20 mb-[-60px] bg-slate-900"
            >
               <img src="/profile.jpg" alt="Aumansh Gupta" className="w-full h-full object-cover rounded-full" />
            </motion.div>

            <div className="relative glass-panel p-8 rounded-2xl w-full border-t border-l border-white/10 shadow-2xl overflow-hidden group z-10 pt-20">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-slate-500 font-mono">model_training.py</span>
              </div>
              <div className="font-mono text-sm space-y-2 text-slate-300">
                <p><span className="text-pink-400">import</span> torch</p>
                <p><span className="text-pink-400">from</span> transformers <span className="text-pink-400">import</span> AutoModelForCausalLM</p>
                <br/>
                <p><span className="text-slate-500"># Initializing deployment-ready model</span></p>
                <p><span className="text-cyan-300">model</span> = AutoModelForCausalLM.from_pretrained(</p>
                <p className="pl-4 text-green-300">"aumansh/future-workforce"</p>
                <p>)</p>
                <br/>
                <p><span className="text-cyan-300">pipeline</span>.deploy(</p>
                <p className="pl-4">target=<span className="text-green-300">"production"</span>,</p>
                <p className="pl-4">latency_budget=<span className="text-orange-300">"&lt;50ms"</span></p>
                <p>)</p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                  className="w-2 h-4 bg-cyan-400 inline-block align-middle ml-1"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
