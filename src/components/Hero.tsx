import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-[#2A4365]"
    >
      <div className="flex flex-col items-center justify-center text-center px-4 pt-16">
        <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white">
          <img 
            src="/profile.jpg" 
            alt="Pete" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-8">
          Hello, I am Pete!
        </h1>
        
        <p className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight">
          A frontend developer specialised in React
        </p>
      </div>
    </section>
  );
};

export default Hero;
