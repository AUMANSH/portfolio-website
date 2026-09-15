import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'C++', 'Java', 'JavaScript', 'C#', 'HTML/CSS']
  },
  {
    title: 'AI & ML',
    skills: ['Generative AI', 'RAG', 'Agentic Workflows', 'Computer Vision', 'Federated Learning', 'Supervised Learning', 'NLP']
  },
  {
    title: 'Frameworks & Libs',
    skills: ['LangChain', 'LangGraph', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Pandas', 'React.js']
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'ServiceNow', 'Databricks', 'Git']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
