import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'React Space',
    description: 'Handy toolbelt to create amazing AR components in a React app, with redux integration via middleware.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'React Infinite Scroll',
    description: 'A scrollable bottom sheet with virtualization support, native animations at 60 FPS and fully implemented in JS land.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Photo Gallery',
    description: 'A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Event planner',
    description: 'A mobile application for leisure seekers to discover unique events and activities in their city with a few taps.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
                  href="#" 
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
