import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        <p className="text-text-secondary max-w-2xl mx-auto mb-12">
          I'm currently looking for new opportunities. If you have a project or a role you think I'd be a good fit for, please get in touch!
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex items-center text-text-primary">
            <FaEnvelope size={20} className="text-primary mr-4" />
            <a href="mailto:tqbao251002@gmail.com" className="hover:text-primary">tqbao251002@gmail.com</a>
          </div>
          <div className="flex items-center text-text-primary">
            <FaPhone size={20} className="text-primary mr-4" />
            <span>0825873028</span>
          </div>
          <div className="flex items-center text-text-primary">
            <FaMapMarkerAlt size={20} className="text-primary mr-4" />
            <span>Binh Thanh Ward, HCM City</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;