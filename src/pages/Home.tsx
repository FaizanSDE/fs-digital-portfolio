import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Search, Globe, Share2, Monitor, Database, MessageSquare, Rocket, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types';

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const services = [
    {
      icon: <Search size={40} />,
      title: 'SEO Optimization',
      description: 'Boost your online visibility with data-driven SEO strategies.',
    },
    {
      icon: <Code size={40} />,
      title: 'Website Development',
      description: 'Custom coded web solutions built with cutting-edge technologies.',
    },
    {
      icon: <Globe size={40} />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions for business growth.',
    },
    {
      icon: <Monitor size={40} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences.',
    },
  ];

  const featuredProjects: Project[] = [
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
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "Working with FS Digitalist transformed our digital presence completely. Their innovative approach to SEO and web development exceeded our expectations."
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, InnovateCorp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The team's expertise in digital marketing and their futuristic approach to design helped us achieve remarkable growth in our online presence."
    },
    {
      name: "Emma Davis",
      role: "Founder, EcoTech",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "FS Digitalist's WordPress development services gave our website the modern edge we were looking for. Highly recommended!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/95 to-cyan-900/90" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-network-connection-loop-animation-97.mp4" type="video/mp4" />
          </video>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-4 sm:px-6 lg:px-8 z-10"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Pioneering the Future of{' '}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
              Digital Excellence
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Transforming visions into digital masterpieces with cutting-edge innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

            {/* About Section with Split Layout */}
            <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Digital Agency Team"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Who We Are
              </h3>
              <h2 className="text-4xl font-bold text-white">
                Transforming Businesses Through Digital Innovation
              </h2>
              <p className="text-gray-300 text-lg">
                At FS Digitalist, we're more than just a digital agency. We're your partners in digital transformation, committed to turning your vision into reality through innovative solutions and cutting-edge technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Innovation First</h4>
                    <p className="text-gray-400">We stay ahead of digital trends to deliver future-proof solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Client-Centric Approach</h4>
                    <p className="text-gray-400">Your success is our priority. We work closely with you to achieve your goals.</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 text-white border border-purple-500 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

          {/* About Section with Split Layout */}
          <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
                Who We Are
              </h3>
              <h2 className="text-4xl font-bold text-white">
                Transforming Businesses Through Digital Innovation
              </h2>
              <p className="text-gray-300 text-lg">
                At FS Digitalist, we're more than just a digital agency. We're your partners in digital transformation, committed to turning your vision into reality through innovative solutions and cutting-edge technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Innovation First</h4>
                    <p className="text-gray-400">We stay ahead of digital trends to deliver future-proof solutions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Client-Centric Approach</h4>
                    <p className="text-gray-400">Your success is our priority. We work closely with you to achieve your goals.</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 text-white border border-purple-500 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Digital Agency Team"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>



      {/* Services Preview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Comprehensive digital solutions to elevate your online presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4 transform transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 text-white border border-purple-500 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 group"
            >
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Discover some of our most impactful digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
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
                
                <div className="p Continuing the Home.tsx file content exactly where it left off:"></div>

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

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 text-white border border-purple-500 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear what our clients say about their experience working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Footer Section */}
      <footer className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-white text-center sm:text-left">
              <h4 className="text-2xl font-semibold">FS Digitalist</h4>
              <p className="mt-2 text-gray-400">Innovative Digital Solutions</p>
            </div>
            <div className="mt-8 sm:mt-0">
              <ul className="flex space-x-6 justify-center sm:justify-start">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© 2025 FS Digitalist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;