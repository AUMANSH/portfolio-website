import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaStackOverflow } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub size={24} />, url: "https://github.com/AUMANSH", key: "github" },
  { icon: <FaLinkedin size={24} />, url: "https://www.linkedin.com/in/aumansh-vijayendra-gupta-5aa951269/", key: "linkedin" },
  { icon: <FaTwitter size={24} />, url: "https://twitter.com", key: "twitter" },
  { icon: <FaMedium size={24} />, url: "https://medium.com", key: "medium" },
  { icon: <FaStackOverflow size={24} />, url: "https://stackoverflow.com", key: "stackoverflow" },
];

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-[#18181b] transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side: 5 Social Links */}
        <nav className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.key}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </nav>

        {/* Right Side: 2 Internal Links */}
        <nav className="flex gap-8">
          <a
            href="#projects"
            onClick={(e) => handleClick(e, 'projects')}
            className="text-white hover:text-gray-300 font-medium transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="text-white hover:text-gray-300 font-medium transition-colors"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
