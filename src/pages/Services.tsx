import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Search, Globe, Share2, Monitor, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'SEO Optimization',
      description: 'Boost your online visibility and drive organic traffic with our data-driven SEO strategies.',
      icon: 'search',
      features: [
        'Keyword Research & Analysis',
        'On-Page SEO Optimization',
        'Technical SEO Audit',
        'Content Strategy',
        'Link Building',
        'Performance Tracking'
      ]
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      description: 'Engage your audience and build brand presence across all social platforms.',
      icon: 'globe',
      features: [
        'Platform Strategy',
        'Content Creation',
        'Community Management',
        'Paid Advertising',
        'Analytics & Reporting',
        'Influencer Partnerships'
      ]
    },
    {
      id: 3,
      title: 'SMO Services',
      description: 'Optimize your social media presence for maximum impact and engagement.',
      icon: 'share',
      features: [
        'Profile Optimization',
        'Content Strategy',
        'Engagement Tracking',
        'Cross-Platform Integration',
        'Brand Voice Development',
        'Performance Analytics'
      ]
    },
    {
      id: 4,
      title: 'Website Development',
      description: 'Create stunning, responsive websites that deliver exceptional user experiences.',
      icon: 'code',
      features: [
        'Custom Web Development',
        'Responsive Design',
        'UI/UX Design',
        'E-commerce Solutions',
        'Performance Optimization',
        'Security Implementation'
      ]
    },
    {
      id: 5,
      title: 'WordPress Development',
      description: 'Build powerful, scalable websites with WordPress customized to your needs.',
      icon: 'monitor',
      features: [
        'Custom Theme Development',
        'Plugin Development',
        'Speed Optimization',
        'Security Hardening',
        'E-commerce Integration',
        'Maintenance & Support'
      ]
    },
    {
      id: 6,
      title: 'Ads Management',
      description: 'Maximize your ROI with strategic ad campaigns across multiple platforms.',
      icon: 'database',
      features: [
        'Campaign Strategy',
        'Ad Creation & Design',
        'Budget Management',
        'Performance Tracking',
        'A/B Testing',
        'ROI Optimization'
      ]
    },
    {
      id: 7,
      title: 'Ads Management',
      description: 'Maximize your ROI with strategic ad campaigns across multiple platforms.',
      icon: 'database',
      features: [
        'Campaign Strategy',
        'Ad Creation & Design',
        'Budget Management',
        'Performance Tracking',
        'A/B Testing',
        'ROI Optimization'
      ]
    },
    {
      id: 8,
      title: 'Ads Management',
      description: 'Maximize your ROI with strategic ad campaigns across multiple platforms.',
      icon: 'database',
      features: [
        'Campaign Strategy',
        'Ad Creation & Design',
        'Budget Management',
        'Performance Tracking',
        'A/B Testing',
        'ROI Optimization'
      ]
    },
    {
      id: 9,
      title: 'Ads Management',
      description: 'Maximize your ROI with strategic ad campaigns across multiple platforms.',
      icon: 'database',
      features: [
        'Campaign Strategy',
        'Ad Creation & Design',
        'Budget Management',
        'Performance Tracking',
        'A/B Testing',
        'ROI Optimization'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'search':
        return <Search size={40} />;
      case 'globe':
        return <Globe size={40} />;
      case 'share':
        return <Share2 size={40} />;
      case 'code':
        return <Code size={40} />;
      case 'monitor':
        return <Monitor size={40} />;
      case 'database':
        return <Database size={40} />;
      default:
        return <Code size={40} />;
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] mix-blend-overlay opacity-20" />
        
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
                Digital Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your brand and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden"
              >
                <div className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-400 mb-6"
                  >
                    {getIcon(service.icon)}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle2 className="text-cyan-400 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;