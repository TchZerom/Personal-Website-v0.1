import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="mailto:email@example.com"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <Mail size={24} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
          >
            <Twitter size={24} />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
}