
import React, { useState } from 'react';
import Section from '../ui/Section';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Calendar, ExternalLink, FileText } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  journal: string;
  date: string;
  doi?: string;
  link?: string;
  authors: string[];
  abstract: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Comparing the Performance of Deep Denoising Sparse Autoencoder with Other Defense Methods Against Adversarial Attacks for Arabic letters",
    journal: "Jordan Journal of Electrical Engineering",
    date: "2024",
    doi: "10.5455/jjee.204-1687363297",
    link: "https://doi.org/10.5455/jjee.204-1687363297",
    authors: ["M. Mohamed", "M. Bilal"],
    abstract: "This research compares the effectiveness of deep denoising sparse autoencoders against other defense methods for protecting Arabic letter recognition systems from adversarial attacks."
  },
  {
    id: 2,
    title: "Comparative Evaluation of VAEs, VAE-GANs and AAEs for Anomaly Detection in Network Intrusion Data",
    journal: "EMITTER International Journal of Engineering Technology",
    date: "Dec 2023",
    doi: "10.24003/emitter.v11i2.817",
    link: "https://doi.org/10.24003/emitter.v11i2.817",
    authors: ["M. Mohamed"],
    abstract: "A comprehensive evaluation of various autoencoder architectures for detecting anomalies in network traffic data, with implications for intrusion detection systems."
  },
  {
    id: 3,
    title: "A Comprehensive Machine Learning Framework for Robust Security Management in Cloud-based Internet of Things Systems",
    journal: "Jurnal Kejuruteraan",
    date: "May 2024",
    authors: ["M. Mohamed", "K. Alosman"],
    abstract: "This paper presents a novel machine learning framework designed to enhance security management for IoT systems deployed in cloud environments, focusing on threat detection and mitigation."
  },
  {
    id: 4,
    title: "Building a Resilient and Successful Enterprise: Key Attributes and How to Measure Them",
    journal: "ISACA Journal",
    date: "May 2024",
    link: "https://www.isaca.org/resources/isaca-journal/issues/2024/volume-3/building-a-resilient-and-successful-enterprise-key-attributes-and-how-to-measure-them",
    authors: ["M. Mohamed"],
    abstract: "An analysis of the critical attributes that contribute to enterprise resilience and long-term success, with a framework for measuring organizational effectiveness."
  },
  {
    id: 5,
    title: "Optimizing encrypted search in the cloud using autoencoder-based query approximation",
    journal: "Baghdad Science Journal",
    date: "Aug 2025 (In-press)",
    authors: ["M. Mohamed", "K. Alosman"],
    abstract: "This research introduces a novel approach to searching encrypted data in cloud environments using autoencoder neural networks to approximate search queries while maintaining privacy."
  },
  {
    id: 6,
    title: "A comparative study of deep learning approaches for Arabic language processing",
    journal: "Jordan Journal of Electrical Engineering",
    date: "2024 (In press)",
    doi: "10.5455/jjee.204-1711016538",
    authors: ["M. Mohamed", "K. Alosman"],
    abstract: "An in-depth comparison of different deep learning architectures and their effectiveness for various Arabic natural language processing tasks."
  },
  {
    id: 7,
    title: "The Impact of 5G: Unpacking Security and Privacy Concerns",
    journal: "ISACA",
    date: "2025 (In press)",
    authors: ["M. Mohamed"],
    abstract: "A comprehensive analysis of the security and privacy implications of 5G technology adoption, highlighting potential vulnerabilities and mitigation strategies."
  },
  {
    id: 8,
    title: "An analysis for the causes of poor motivation for learning among KAU students",
    journal: "The 13th Science Conference of KAU",
    date: "2022",
    authors: ["M. Mohamed"],
    abstract: "This study explores factors contributing to decreased learning motivation among university students, with recommendations for educational institutions."
  }
];

const PublicationsSection: React.FC = () => {
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    if (expandedPublication === id) {
      setExpandedPublication(null);
    } else {
      setExpandedPublication(id);
    }
  };

  return (
    <Section id="publications" className="bg-white">
      <div className="space-y-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Research Publications</h2>
          <p className="mt-4 text-lg text-gray-600">
            My academic contributions to the fields of cybersecurity, machine learning, and software engineering.
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((publication) => (
            <Card 
              key={publication.id} 
              className={`transition-all duration-300 animate-fade-in ${
                expandedPublication === publication.id ? 'border-primary/30' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                    
                    <div className="flex flex-wrap items-center text-sm text-gray-600 gap-x-4 gap-y-2 mt-2">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{publication.journal}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{publication.date}</span>
                      </div>
                      
                      {publication.doi && (
                        <Badge variant="outline" className="ml-0">
                          DOI: {publication.doi}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="mt-3 text-sm text-gray-600">
                      <span className="font-semibold">Authors:</span> {publication.authors.join(", ")}
                    </div>
                  </div>
                  
                  <div className="flex md:flex-col gap-2 md:items-end">
                    {publication.link && (
                      <a 
                        href={publication.link} 
                        className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Publication
                      </a>
                    )}
                    
                    <button 
                      onClick={() => toggleExpand(publication.id)}
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {expandedPublication === publication.id ? 'Show Less' : 'Show Abstract'}
                    </button>
                  </div>
                </div>
                
                {expandedPublication === publication.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-in">
                    <h4 className="text-sm font-semibold mb-2">Abstract</h4>
                    <p className="text-gray-600 text-sm">{publication.abstract}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PublicationsSection;
