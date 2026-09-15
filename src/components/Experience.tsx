import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Statistical Data Engineer Intern',
    company: 'Dyne Tech AI Private Limited',
    period: 'Oct 2025 – May 2026',
    description: [
      'Architected scalable ML pipelines for deployment-ready systems, optimizing data flow and enhancing production reliability.',
      'Drove end-to-end AI model development, executing rigorous data auditing and statistical optimization.'
    ]
  },
  {
    role: 'Intern',
    company: 'ServiceNow',
    period: 'Apr 2025 – Oct 2025',
    description: [
      'Engineered and managed automated enterprise workflows using Flows and Automated Test Framework (ATF).',
      'Integrated Agentic AI capabilities into ITSM processes via advanced prompt engineering and API integrations.'
    ]
  },
  {
    role: 'Engineering Intern',
    company: 'DRDO, Ministry of Defence',
    period: 'May 2025 – Jul 2025',
    description: [
      'Developed a computer vision-based Intruder Detection System using PCA-SVD for feature extraction and KNN for classification.',
      'Implemented real-time ML workflows in a high-security R&D environment, optimizing inference time and dimensionality reduction.'
    ]
  },
  {
    role: 'Machine Learning Engineer Intern',
    company: 'Afame Technologies',
    period: 'Apr 2024 – May 2024',
    description: [
      'Optimized model accuracy by 80% and decreased prediction errors by 10% via advanced feature engineering.',
      'Developed and deployed 2 ML models, resulting in improved operational efficiency and cost savings.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 relative z-10 bg-slate-900/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-4 gap-8 items-start">
                {/* Timeline dot & line (Mobile only) */}
                <div className="md:hidden absolute left-0 top-1 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#00d2ff]"></div>
                <div className="md:hidden absolute left-1.5 top-4 bottom-[-3rem] w-px bg-slate-700"></div>
                
                <div className="md:col-span-1 mb-2 md:mb-0 md:text-right pt-1">
                  <span className="text-slate-400 font-mono text-sm block">{exp.period}</span>
                </div>
                
                <div className="md:col-span-3 glass-panel p-6 rounded-xl relative group hover:border-cyan-500/50 transition-colors">
                  {/* Timeline dot (Desktop only) */}
                  <div className="hidden md:block absolute -left-12 top-6 w-4 h-4 bg-slate-900 border-2 border-cyan-400 rounded-full shadow-[0_0_10px_#00d2ff] group-hover:bg-cyan-400 transition-colors"></div>
                  
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-cyan-400 mb-4 flex items-center gap-2">
                    <Briefcase size={16} /> {exp.company}
                  </h4>
                  
                  <ul className="space-y-2 text-slate-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-500 mt-1.5">▹</span>
                        <span className="leading-relaxed text-sm md:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
