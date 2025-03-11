
import React from 'react';
import Section from '../ui/Section';
import { Card } from '../ui/card';
import { BookOpen, BriefcaseBusiness, Code, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="space-y-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experienced Senior Software Engineer with over 8 years of expertise in developing scalable, secure, and high-performance web applications. Specialized in Python, SQL, cloud computing, and distributed systems with a proven track record in building data-driven SaaS products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <Card className="text-center p-8 animate-fade-in">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-6">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Software Development</h3>
            <p className="text-gray-600">
              Expert in Python, JavaScript, TypeScript, and various frameworks for building robust web applications.
            </p>
          </Card>
          
          <Card className="text-center p-8 animate-fade-in">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 mb-6">
              <Shield className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
            <p className="text-gray-600">
              Expertise in securing distributed systems, implementing compliance standards, and risk mitigation.
            </p>
          </Card>
          
          <Card className="text-center p-8 animate-fade-in">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 mb-6">
              <BriefcaseBusiness className="h-6 w-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Leadership</h3>
            <p className="text-gray-600">
              Led cross-functional teams in Agile environments, fostering collaboration and mentoring team members.
            </p>
          </Card>
          
          <Card className="text-center p-8 animate-fade-in">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-6">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Research</h3>
            <p className="text-gray-600">
              Published researcher in the fields of cybersecurity, machine learning, and network security.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default About;
