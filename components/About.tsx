import React from 'react';
import { GraduationCap, Code2, Brain } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-50">
            <GraduationCap className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">Bachelor of Computer Science</p>
            <p className="text-gray-600">King Saud University</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50">
            <Code2 className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">3 Years Experience</p>
            <p className="text-gray-600">in Web Development</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50">
            <Brain className="mx-auto text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-gray-600">Continuous Learning</p>
            <p className="text-gray-600">& Problem Solving</p>
          </div>
        </div>
      </div>
    </section>
  );
}