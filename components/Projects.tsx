import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Task Management System',
      description: 'Comprehensive web application for task and project management with a smooth user interface',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Learning Platform',
      description: 'Interactive platform for learning programming with support for courses and tests',
      tech: ['Next.js', 'Django', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'E-commerce Application',
      description: 'Complete e-commerce platform with payment system and inventory management',
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Weather App',
      description: 'Application for displaying weather conditions with 7-day forecasts',
      tech: ['React Native', 'Redux', 'Weather API'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Blog Platform',
      description: 'Comprehensive content management system for blogs with advanced editor',
      tech: ['Gatsby', 'GraphQL', 'Markdown'],
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with support for voice messages and images',
      tech: ['Flutter', 'Firebase', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Github size={20} />
                    <span>Source</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <ExternalLink size={20} />
                    <span>Preview</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}