import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">About Me</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="max-w-3xl mx-auto text-text-secondary text-lg">
          I am a recent Software Engineering graduate from Can Tho University with a
          strong passion for .NET development. I have a solid foundation in object-oriented 
          programming, database management, and web application
          development. I am looking for an opportunity to grow as a .NET developer and
          contribute to a dynamic team. I am a quick learner, a problem-solver, and
          highly motivated to enhance my expertise in backend development.
        </p>
      </div>
    </section>
  );
};

export default About;