import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  const [terminalState, setTerminalState] = useState<'idle' | 'typing' | 'done'>('idle');

  const handleTerminalClick = () => {
    if (terminalState !== 'idle') return;
    setTerminalState('typing');
    setTimeout(() => {
      setTerminalState('done');
      setTimeout(() => {
        window.location.href = "mailto:aumanshgupta2004@gmail.com";
        setTerminalState('idle');
      }, 1500);
    }, 1000);
  };

  return (
    <footer id="contact" className="py-20 px-6 relative z-10 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Let's Connect</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Currently seeking junior roles in AI, Machine Learning, and Data Science. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Terminal Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl bg-black rounded-lg border border-slate-700 shadow-2xl overflow-hidden cursor-pointer group"
          onClick={handleTerminalClick}
        >
          {/* Terminal Header */}
          <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-800">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs font-mono text-slate-500">bash — aumansh@portfolio:~</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm sm:text-base min-h-[160px] flex flex-col justify-center relative">
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <p className="text-slate-300">
              <span className="text-green-400 font-bold">aumansh@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-blue-400 font-bold">~</span>
              <span className="text-white">$ </span>
              {terminalState === 'idle' && (
                <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">./initiate_contact.sh <span className="animate-pulse bg-slate-300 text-transparent">_</span></span>
              )}
              {terminalState === 'typing' && (
                <span className="text-cyan-400">./initiate_contact.sh</span>
              )}
              {terminalState === 'done' && (
                <span className="text-cyan-400">./initiate_contact.sh</span>
              )}
            </p>
            
            {terminalState === 'done' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-cyan-300"
              >
                <p>&gt; Establishing secure connection...</p>
                <p>&gt; Resolving mailto:aumanshgupta2004@gmail.com...</p>
                <p className="text-green-400 mt-2 flex items-center gap-2"><Mail size={16} /> Opening default mail client...</p>
              </motion.div>
            )}
            
            {terminalState === 'idle' && (
              <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 group-hover:text-cyan-500/50 transition-colors">
                <Terminal size={16} />
                <span className="text-xs uppercase tracking-widest">Click to run</span>
              </div>
            )}
          </div>
        </motion.div>

        <div className="mt-20 text-slate-500 text-sm font-mono text-center">
          <p>Designed & Built for Aumansh Vijayendra Gupta</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/AUMANSH" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/aumansh-vijayendra-gupta-5aa951269/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
