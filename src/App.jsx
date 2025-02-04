import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Briefcase, User } from 'lucide-react';

// Portfolio Component
const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6" style={{ backgroundColor: 'white', color: 'white' }}>
      {/* Navbar */}
      <nav className="w-full p-4" style={{ backgroundColor: 'black', color: 'white' }}>
        <ul className="flex justify-evenly list-none">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#service" className="hover:text-gray-400">Service</a></li>
          <li><a href="#resume" className="hover:text-gray-400">Resume</a></li>
          <li><a href="#project" className="hover:text-gray-400">Project</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>   
    </div>
  );
};

export default Portfolio;
