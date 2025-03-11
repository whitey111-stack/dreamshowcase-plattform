import React, { useState } from 'react';
import Section from '../ui/Section';
import Card from '../ui/card';
import Badge from '../ui/badge';
import { ExternalLink, Github, Layers } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  category: 'software' | 'security' | 'research';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Secure Cloud Infrastructure Platform",
    description: "Developed a scalable cloud infrastructure platform implementing ISO 27001 security standards with automated compliance monitoring and remediation capabilities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    tags: ["AWS", "Python", "Terraform", "Security", "Compliance"],
    category: 'security'
  },
  {
    id: 2,
    title: "Real-time Data Analytics Dashboard",
    description: "Created a responsive real-time analytics dashboard for monitoring system performance metrics across distributed cloud environments.",
    image: "https://images.unsplash.com/photo-1535970793482-07de93762dc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["React", "TypeScript", "D3.js", "WebSockets", "AWS"],
    link: "#",
    github: "#",
    category: 'software'
  },
  {
    id: 3,
    title: "Intrusion Detection System",
    description: "Designed and implemented a machine learning-based intrusion detection system capable of identifying anomalous network behavior with high precision.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D",
    tags: ["Python", "TensorFlow", "Network Security", "Anomaly Detection"],
    category: 'security'
  },
  {
    id: 4,
    title: "Automated Vulnerability Scanner",
    description: "Built an automated vulnerability scanning tool that integrates with CI/CD pipelines to identify security issues in code before deployment.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["Python", "Docker", "Security", "CI/CD", "DevSecOps"],
    github: "#",
    category: 'security'
  },
  {
    id: 5,
    title: "Arabic NLP Processing Framework",
    description: "Developed a natural language processing framework specifically designed for Arabic text analysis and classification.",
    image: "https://images.unsplash.com/photo-1519834022362-8c9ed33f1336?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJhYmljfGVufDB8fDB8fHww",
    tags: ["Python", "NLP", "Machine Learning", "Arabic", "Text Analysis"],
    link: "#",
    category: 'research'
  },
  {
    id: 6,
    title: "Encrypted Cloud Storage Solution",
    description: "Created a secure cloud storage solution with end-to-end encryption and zero-knowledge architecture to ensure data privacy.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGVuY3J5cHRpb258ZW58MHx8MHx8fDA%3D",
    tags: ["Cryptography", "Cloud", "Security", "Privacy", "React"],
    category: 'software'
  }
];

type Category = 'all' | 'software' | 'security' | 'research';

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section id="projects" className="bg-gray-50">
      <div className="space-y-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Featured Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            A selection of my most impactful projects showcasing my expertise in software development and cybersecurity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {(['all', 'software', 'security', 'research'] as Category[]).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategory === category 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden flex flex-col h-full animate-fade-in" 
              interactive
            >
              <div className="h-48 w-full overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 flex-1">{project.description}</p>
                
                <div className="flex items-center gap-4 mt-4">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-primary hover:text-primary/80 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <span className="text-sm">View Project</span>
                    </a>
                  )}
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      className="text-gray-600 hover:text-gray-900 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      <span className="text-sm">GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <Layers className="h-5 w-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </Section>
  );
};

export default ProjectsSection;
