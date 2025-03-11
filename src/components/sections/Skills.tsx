
import React from 'react';
import Section from '../ui/Section';
import { CheckCircle } from 'lucide-react';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 1-5
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "C/C++", level: 3 },
      { name: "Java", level: 3 },
      { name: "Rust", level: 2 },
      { name: "Go", level: 2 },
    ]
  },
  {
    name: "Web Development",
    skills: [
      { name: "React", level: 5 },
      { name: "Flask", level: 5 },
      { name: "Django", level: 4 },
      { name: "REST APIs", level: 5 },
      { name: "GraphQL", level: 3 },
    ]
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", level: 4 },
      { name: "Azure", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "Docker", level: 5 },
      { name: "CI/CD", level: 4 },
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: "SQL", level: 5 },
      { name: "MySQL", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "MongoDB", level: 3 },
    ]
  },
  {
    name: "Cybersecurity",
    skills: [
      { name: "ISO 27001", level: 5 },
      { name: "NIST", level: 4 },
      { name: "Penetration Testing", level: 3 },
      { name: "Security Auditing", level: 4 },
      { name: "IDS/IPS", level: 3 },
    ]
  }
];

const certifications = [
  "Certified in Cybersecurity by ISC2",
  "Certified Information Security Manager (CISM)",
  "Certified Ethical Hacker (CEH)",
  "ISO 27001 Senior Lead Implementer",
  "Natural Language Processing (King Abdul Aziz University, 2023)",
  "Introduction to Cybersecurity (Cisco Networking Academy, 2020)",
  "Linux Essentials (Cisco Networking Academy, 2020)",
  "Data Communication with Industrial Ethernet (Siemens, 2020)"
];

const SkillsSection: React.FC = () => {
  return (
    <Section id="skills" className="bg-white">
      <div className="space-y-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Skills & Expertise</h2>
          <p className="mt-4 text-lg text-gray-600">
            A comprehensive overview of my technical skills, expertise, and professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-white shadow-sm rounded-2xl p-6 border border-gray-100 animate-fade-in"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">
                        {Array(5).fill(0).map((_, i) => (
                          <span 
                            key={i} 
                            className={`inline-block w-2 h-2 rounded-full mx-0.5 ${
                              i < skill.level ? 'bg-primary' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications & Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
