import React from 'react';
import { FaCode, FaDatabase, FaPencilRuler } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} className="text-primary" />,
    title: 'Backend Development',
    description: 'Hands-on experience with ASP.NET Core, Blazor and C# programming to build robust and scalable web APIs.',
  },
  {
    icon: <FaDatabase size={40} className="text-primary" />,
    title: 'Database Management',
    description: 'Basic knowledge of SQL (SQL Server) and NoSQL databases, including database design and optimization.',
  },
  {
    icon: <FaPencilRuler size={40} className="text-primary" />,
    title: 'System Analysis & Design',
    description: 'Understanding of system design and analysis, with experience in analyzing functional requirements.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">What Can I Do</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h3>
              <p className="text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;