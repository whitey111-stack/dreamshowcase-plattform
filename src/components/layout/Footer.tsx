import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mahmoud Mohamed</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Software & Cybersecurity Engineer passionate about creating secure, scalable solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-gray-600 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="text-sm text-gray-600 hover:text-primary transition-colors">Experience</a>
              </li>
              <li>
                <a href="#publications" className="text-sm text-gray-600 hover:text-primary transition-colors">Publications</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Mahmoud Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
