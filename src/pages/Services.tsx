import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Search, Globe, Share2, Monitor, Database, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'WEB DEVELOPMENT',
      description: 'Create a strong online presence with a fast, user-friendly website designed to meet your needs.',
      icon: 'search',
      features: [
        'Custom Website Design',
        'Responsive Layouts',
        'Seamless Navigation',
        'E-Commerce Solution',
        'Performance Optimization',
        'On-going Support & Maintenance'
      ]
    },
    {
      id: 2,
      title: 'WORDPRESS DEVELOPMENT',
      description: 'Create a professional, easy-to-manage website with our expert WordPress solutions.',
      icon: 'globe',
      features: [
        '✅ Custom WordPress Design',
        'Plugin Integration',
        'SEO-Friendly Setup',
        'Dynamic Content',
        'Theme Development',
        'Ongoing Support & Maintenance'
      ]
    },
    {
      id: 3,
      title: 'SEO',
      description: 'Boost your online visibility and rank higher on search engines with proven SEO strategies.',
      icon: 'share',
      features: [
        'Keyword Research & Strategy',
        'On-Page Optimization',
        'Technical SEO',
        'Link Building',
        'Content Optimization',
        'Analytics & Reporting'
      ]
    },
    {
      id: 4,
      title: 'SMO',
      description: 'Enhance your brand’s social presence and engage your audience effectively across platforms.',
      icon: 'code',
      features: [
        'Profile Optimization',
        'Content Strategy & Creation',
        'Audience Engagement',
        'Hashtag & Trend Research',
        'Social Media Advertising',
        'Performance Tracking & Reporting'
      ]
    },
    {
      id: 5,
      title: 'SEM',
      description: 'Drive targeted traffic and maximize conversions with effective search engine marketing.',
      icon: 'monitor',
      features: [
        'Google Ads Management',
        'PPC Campaign Optimization',
        'Keyword Bidding Strategy',
        'Landing Page Optimization',
        'A/B Testing & Analytics',
        'Performance Tracking & Reporting'
      ]
    },
    {
      id: 6,
      title: 'APP DEVELOPMENT',
      description: 'Transform your ideas into powerful, user-friendly mobile applications for all platforms.',
      icon: 'database',
      features: [
        'Custom App Design',
        'iOS & Android Development',
        'UI/UX Optimization',
        'API & Backend Integration',
        'App Testing & Debugging',
        'Ongoing Support & Maintenance'
      ]
    },
    {
      id: 7,
      title: 'UI/UX DESIGN',
      description: 'Create intuitive, visually stunning, and user-friendly digital experiences.',
      icon: 'database',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Responsive Design',
        'Interactive UI Elements',
        'Usability Testing',
        'Ongoing Improvements & Support'
      ]
    },
    {
      id: 8,
      title: 'WEB APP DEVELOPMENT',
      description: 'Build high-performing, scalable, and user-friendly web applications tailored to your needs.',
      icon: 'database',
      features: [
        'Custom Web App Design',
        'Front-End & Back-End Development',
        'Progressive Web Apps (PWA)',
        'API Integration',
        'Security & Performance Optimization',
        'Ongoing Support & Maintenance'
      ]
    },
    {
      id: 9,
      title: 'META ADS',
      description: 'Reach your ideal audience and drive conversions with highly targeted Meta advertising.',
      icon: 'database',
      features: [
        'Campaign Strategy & Setup',
        'Audience Targeting & Retargeting',
        'Ad Creatives & Copywriting',
        'A/B Testing & Optimization',
        'Budget & Bid Management',
        'Analytics & Performance Reporting'
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