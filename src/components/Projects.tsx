import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Intruder Detection System',
    description: 'Proposed a hybrid pipeline utilizing YOLOv8n, ResNet18-backed CNN, and LBPH for behavior classification.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://github.com/AUMANSH/CODE-IN-PLACE-2026'
  },
  {
    title: 'HARMONY: HR Automation',
    description: 'Engineered an integrated HR platform leveraging intelligent automation, Agentic AI, and Tesseract OCR.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://github.com/AUMANSH/MAJOR-PROJECT-1'
  },
  {
    title: 'FLIP: Hybrid Framework',
    description: 'Developed a scalable federated learning framework using homomorphic encryption (BFV-CKKS).',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003739791-90/flip-hybrid-bfv-ckks-encryption-framework-scalable-secure-federated-learning-aumansh-vijayendra-gupta-deepak-kumar-verma-vipin-kr-kushwahac-shiva-gupta-nitin-mohan'
  },
  {
    title: 'Software Fault Tolerance',
    description: 'Applied deep learning models to predict and mitigate software faults to improve system robustness.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'https://github.com/AUMANSH/SOFTWARE-BUG-PREDICTION'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-[#14532d] min-h-screen flex items-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-white">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-black">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-black font-semibold text-sm hover:underline mt-2"
                >
                  See more <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
