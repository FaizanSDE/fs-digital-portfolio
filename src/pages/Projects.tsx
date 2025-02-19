import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      description: "Complete overhaul of an e-commerce platform with modern UI/UX and enhanced performance",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      category: "E-Commerce",
      client: "Fashion Retail Co.",
      completionDate: "2024-02",
      technologies: ["React", "Node.js", "Stripe", "AWS"],
      link: "https://example.com"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Modern healthcare platform for managing patient records and appointments",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      category: "Healthcare",
      client: "Medical Center",
      completionDate: "2024-01",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Real Estate Platform",
      description: "Advanced property listing and management platform with virtual tours",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      category: "Real Estate",
      client: "Property Solutions",
      completionDate: "2023-12",
      technologies: ["React", "Three.js", "Node.js", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Educational Learning Platform",
      description: "Interactive learning management system with real-time collaboration",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      category: "Education",
      client: "EduTech Inc.",
      completionDate: "2023-11",
      technologies: ["React", "Socket.io", "Express", "MongoDB"]
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "Comprehensive financial analytics and reporting dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      category: "Finance",
      client: "Investment Corp",
      completionDate: "2023-10",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"]
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description: "Advanced analytics platform for social media performance tracking",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      category: "Analytics",
      client: "Digital Marketing Agency",
      completionDate: "2023-09",
      technologies: ["React", "Python", "AWS", "TensorFlow"]
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] mix-blend-overlay opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful digital transformations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm text-cyan-400 bg-cyan-400/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>Client: {project.client}</span>
                    <span>{project.completionDate}</span>
                  </div>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View Project
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in digital solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105"
            >
              Start a Project
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;