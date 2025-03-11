
import React, { useState } from 'react';
import Section from '../ui/Section';
import { Briefcase, Calendar } from 'lucide-react';

interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "INFOSEC4TC",
    position: "Software & Cybersecurity Engineer",
    period: "2019 - Present",
    responsibilities: [
      "Developed scalable cloud-based solutions on AWS and Azure, ensuring high availability.",
      "Led cross-functional teams to deliver customer-centric web applications, integrating security best practices.",
      "Automated deployments and created monitoring tools to ensure system health and predictive accuracy.",
      "Collaborated with product and engineering teams to improve customer configuration architecture.",
      "Engineered custom reporting systems and dashboarding platforms for internal and external use.",
      "Implemented security measures, ensuring compliance with ISO 27001 and NIST across cloud and on-premise systems.",
      "Developed Python automation scripts to streamline security monitoring and incident response."
    ]
  },
  {
    company: "Al-Gressey Computer Company",
    position: "Cybersecurity Specialist",
    period: "April 2024 - October 2024",
    responsibilities: [
      "Developed and implemented a comprehensive cybersecurity strategy, ensuring the protection of critical assets.",
      "Oversaw the day-to-day operations of the cybersecurity team, providing guidance and support.",
      "Conducted risk assessments and vulnerability scans to identify potential security threats.",
      "Collaborated with cross-functional teams to ensure integration of security measures.",
      "Managed the implementation and maintenance of security tools, including firewalls and intrusion detection systems.",
      "Led incident response efforts, investigating security incidents and implementing remediation measures.",
      "Developed and delivered cybersecurity training and awareness programs for employees.",
      "Maintained compliance with relevant regulations and standards, such as NCA, ISO 27001, and NIST."
    ]
  },
  {
    company: "Crystal Networks",
    position: "Network Engineer",
    period: "May 2019 - August 2019",
    responsibilities: [
      "Designed and implemented secure network architectures for small-to-medium businesses.",
      "Configured and managed network devices (routers, switches, load balancers) to ensure secure operations.",
      "Worked closely with software teams to ensure secure network configurations.",
      "Performed regular network monitoring using tools like Wireshark to identify potential vulnerabilities."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState(experiences[0].company);
  
  const activeExperience = experiences.find(exp => exp.company === activeCompany) || experiences[0];

  return (
    <Section id="experience" className="bg-gray-50">
      <div className="space-y-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Professional Experience</h2>
          <p className="mt-4 text-lg text-gray-600">
            My professional journey spans various roles in software development and cybersecurity, 
            where I've built expertise in creating secure, scalable solutions.
          </p>
        </div>
        
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Company tabs - vertical on desktop, horizontal on mobile */}
          <div className="lg:col-span-3">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 space-x-4 lg:space-x-0 lg:space-y-2">
              {experiences.map((exp) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveCompany(exp.company)}
                  className={`px-4 py-3 text-left rounded-lg transition-all whitespace-nowrap lg:whitespace-normal ${
                    activeCompany === exp.company
                      ? "bg-white shadow-sm border border-gray-100 text-primary"
                      : "text-gray-600 hover:bg-white/50"
                  }`}
                >
                  <span className="text-sm font-medium">{exp.company}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience details */}
          <div className="mt-6 lg:mt-0 lg:col-span-9">
            <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-100 animate-fade-in">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900">{activeExperience.position}</h3>
                <div className="flex items-center mt-2 text-gray-500">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span className="mr-4">{activeExperience.company}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{activeExperience.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3">
                {activeExperience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </span>
                    <span className="text-gray-600">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
