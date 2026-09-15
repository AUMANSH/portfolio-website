import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Generative AI & AI Agents Professional',
    issuer: 'AWS',
    link: 'https://coursera.org/verify/professional-cert/39QU5DYXW6GF'
  },
  {
    title: 'RAG and Agentic AI Professional Certificate',
    issuer: 'IBM',
    link: 'https://coursera.org/verify/professional-cert/QYOZK86RJY9J'
  },
  {
    title: 'AI & ML Engineering Professional',
    issuer: 'Microsoft',
    link: 'https://coursera.org/verify/professional-cert/KE6N0RAZE8SR'
  },
  {
    title: 'Google AI Essentials Specialization',
    issuer: 'Google',
    link: 'https://coursera.org/verify/specialization/U1ZR2LWLJCIC'
  },
  {
    title: 'Generative AI in Software Development',
    issuer: 'Amazon',
    link: 'https://coursera.org/verify/MVQYVKWJFIL6'
  },
  {
    title: 'Probability for Artificial Intelligence 2026',
    issuer: 'Stanford University',
    link: 'https://pai.stanford.edu/pai/share/Djziism8FzoCsdEBnioK'
  },
  {
    title: 'Code in Place 2026 (Python)',
    issuer: 'Stanford University',
    link: 'https://codeinplace.stanford.edu/cip6/certificate/w6e2hi'
  },
  {
    title: 'SQL Foundations',
    issuer: 'Microsoft',
    link: 'https://coursera.org/verify/X2J0IY7GRJA9'
  },
  {
    title: 'Data Engineering Capstone (Data Waves)',
    issuer: 'AWS Academy',
    link: 'https://www.credly.com/badges/7024df7c-d923-4adf-8194-58febd8cbae9/public_url'
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-6 relative z-10 bg-slate-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Licenses & Certifications</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl hover:border-cyan-500/30 transition-colors flex flex-col h-full group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:to-cyan-500/5 transition-colors duration-300 pointer-events-none"></div>
              
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="p-2 bg-slate-800 rounded-lg text-cyan-400">
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg leading-tight mb-1 group-hover:text-cyan-300 transition-colors">{cert.title}</h3>
                  <p className="text-slate-400 text-sm font-mono">{cert.issuer}</p>
                </div>
              </div>
              
              <div className="mt-auto pt-4 relative z-10">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  Show Credential <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
