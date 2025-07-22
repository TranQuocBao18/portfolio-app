import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Hospital Equipment Management',
    description: 'A system to help hospitals track the status and usage history of medical equipment.',
    tags: ['ASP.NET Aspire', 'Blazor', 'ASP.NET Core', 'SQL Server', 'AdminLTE'],
    github: 'https://github.com/TranQuocBao18/EMS',
    image: 'img2.jpg' // Placeholder
  },
  // Add more projects here if available
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">My Projects</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-lg shadow-lg overflow-hidden group">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-text-secondary mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center justify-center">
                  <FaGithub className="mr-2" /> View on Github
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