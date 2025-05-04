"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Database, Smartphone, Shield, Brain, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications and platforms built with modern technologies.',
    icon: Code2,
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems'
    ],
    benefits: [
      'Enhanced user experience',
      'Improved conversion rates',
      'Mobile-first approach',
      'SEO optimization'
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure, migration, and optimization services.',
    icon: Cloud,
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'Scalability Solutions',
      'Cost Optimization'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Improved scalability',
      'Enhanced security',
      'Better disaster recovery'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    icon: Database,
    features: [
      'Business Intelligence',
      'Predictive Analytics',
      'Data Visualization',
      'Custom Dashboards'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved forecasting',
      'Real-time insights',
      'Competitive advantage'
    ]
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'App Maintenance',
      'Performance Optimization'
    ],
    benefits: [
      'Wider audience reach',
      'Improved customer engagement',
      'Enhanced brand presence',
      'Better user retention'
    ]
  },
  {
    id: 'security',
    title: 'Security Solutions',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: Shield,
    features: [
      'Security Audits',
      'Threat Detection',
      'Compliance Management',
      'Data Protection'
    ],
    benefits: [
      'Enhanced security posture',
      'Regulatory compliance',
      'Risk mitigation',
      'Customer trust'
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Leverage artificial intelligence and machine learning for business growth.',
    icon: Brain,
    features: [
      'Predictive Modeling',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Systems'
    ],
    benefits: [
      'Automated processes',
      'Improved efficiency',
      'Better decision making',
      'Competitive edge'
    ]
  }
];

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Digital Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Comprehensive digital solutions to transform your business operations and drive growth
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {solution.title}
                  </h3>
                  <solution.icon className="h-6 w-6 text-blue-600" />
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {solution.description}
                </p>
                <div className="space-y-4 mt-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500">✓</div>
                          <p className="ml-2 text-sm text-gray-600">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-blue-500">•</div>
                          <p className="ml-2 text-sm text-gray-600">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link href={`/solutions/${solution.id}`}>
                  <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 