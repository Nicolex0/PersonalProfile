import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code, Briefcase, User } from 'lucide-react';

// Portfolio Component
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-between px-6">
      <header className="w-full flex justify-between items-center py-6 px-10 bg-opacity-60 backdrop-blur-lg">
        <h1 className="text-3xl font-bold text-green-500">Your Name Here</h1>
        <nav className="flex gap-8 text-lg">
          <a href="#work" className="hover:text-gray-400 transition-colors">Recent Work</a>
          <a href="#testimonials" className="hover:text-gray-400 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Get in Touch</a>
        </nav>
        <div className="flex gap-4">
          <Github className="text-gray-400 hover:text-white cursor-pointer transition-all" />
          <Linkedin className="text-gray-400 hover:text-white cursor-pointer transition-all" />
          <Mail className="text-gray-400 hover:text-white cursor-pointer transition-all" />
        </div>
      </header>
      
      <section className="text-center mt-20 max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold leading-tight">Your Name Here</h2>
        <p className="text-gray-400 mt-4 text-lg">
          Intro text: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-8 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition-all transform hover:scale-105">
          Let's get started →
        </button>
      </section>
      
      <section className="mt-16 flex flex-col items-center">
        <img src="/path-to-image.jpg" alt="Profile" className="w-40 h-40 rounded-full shadow-2xl border-4 border-green-500" />
        <div className="mt-6 flex gap-6">
          <Code className="text-gray-400 hover:text-white cursor-pointer transition-all" />
          <Briefcase className="text-gray-400 hover:text-white cursor-pointer transition-all" />
          <User className="text-gray-400 hover:text-white cursor-pointer transition-all" />
        </div>
      </section>
      
      <footer className="mt-20 text-center text-gray-600 text-sm px-10">
        <p>Worked with: <span className="font-semibold text-white">ClickUp, Dropbox, Paychex, Elastic, Stripe</span></p>
      </footer>
    </div>
  );
};

export default Portfolio;
