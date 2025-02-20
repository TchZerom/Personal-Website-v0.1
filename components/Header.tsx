import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Tamer Walid</h1>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <button className="md:hidden text-gray-600">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}