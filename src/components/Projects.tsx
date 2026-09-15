import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'FLIP: Hybrid BFV-CKKS Framework',
    type: 'Publication (Taylor & Francis)',
    description: 'Developed a scalable federated learning framework using homomorphic encryption, achieving 99.23% accuracy on MNIST under adversarial data poisoning and model inversion attacks.',
    tags: ['Python', 'TensorFlow', 'Homomorphic Encryption', 'Federated Learning'],
    links: {
      github: null,
      external: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003739791-90/flip-hybrid-bfv-ckks-encryption-framework-scalable-secure-federated-learning-aumansh-vijayendra-gupta-deepak-kumar-verma-vipin-kr-kushwahac-shiva-gupta-nitin-mohan'
    },
    icon: <BookOpen className="text-purple-400" size={24} />
  },
  {
    title: 'HARMONY: HR Automation System',
    type: 'Project',
    description: 'Engineered an integrated HR platform leveraging intelligent automation, Agentic AI, and Tesseract OCR to streamline multi-step recruitment workflows and interview scheduling.',
    tags: ['Python', 'Agentic AI', 'OCR', 'Workflow Automation'],
    links: {
      github: 'https://github.com/AUMANSH/MAJOR-PROJECT-1',
      external: null
    },
    icon: <ExternalLink className="text-cyan-400" size={24} />
  },
  {
    title: 'Intruder Detection System',
    type: 'Code in Place 2026 Project',
    description: 'Proposed a hybrid pipeline utilizing YOLOv8n, ResNet18-backed CNN, and LBPH for behavior classification, outperforming standard CNNs in challenging lighting scenarios.',
    tags: ['Python', 'YOLOv8', 'CNN', 'Computer Vision'],
    links: {
      github: 'https://github.com/AUMANSH/CODE-IN-PLACE-2026',
      external: null
    },
    icon: <ExternalLink className="text-cyan-400" size={24} />
  },
  {
    title: 'Software Fault Tolerance',
    type: 'Project',
    description: 'Applied deep learning models to predict and mitigate software faults, drastically improving system robustness and overall reliability from historical defect data.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'ML/DL'],
    links: {
      github: 'https://github.com/AUMANSH/SOFTWARE-BUG-PREDICTION',
      external: null
    },
    icon: <ExternalLink className="text-cyan-400" size={24} />
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Engineering</h2>
          <div className="w-20 h-1 bg-cyan-500 mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/10 transition-colors duration-500"></div>
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-slate-900 rounded-lg shadow-inner">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.links.external && (
                    <a href={project.links.external} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="relative z-10 flex-grow">
                <div className="text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">{project.type}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-700/50">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-900/50 px-2 py-1 rounded">
                    {tag}
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

export default Projects;
