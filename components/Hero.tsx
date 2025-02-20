import React from 'react';
import { Code, Terminal, Coffee } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-4 mb-6">
          <Code className="text-blue-600" size={32} />
          <Terminal className="text-blue-600" size={32} />
          <Coffee className="text-blue-600" size={32} />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi! I'm Tamer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Software Developer & Passionate Learner
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Specialized in programming and passionate about turning ideas into practical and innovative solutions. 
          I have experience in developing applications and websites using the latest technologies.
        </p>
      </div>
    </section>
  );
}