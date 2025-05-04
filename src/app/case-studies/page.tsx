"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart3, Users, Globe, Zap } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Transformation",
    company: "Retail Giant",
    industry: "Retail",
    challenge: "Struggling with outdated systems and poor customer experience",
    solution: "Implemented our digital platform with advanced analytics and AI-powered recommendations",
    results: [
      "45% increase in online sales",
      "30% reduction in cart abandonment",
      "60% improvement in customer satisfaction",
    ],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Supply Chain Optimization",
    company: "Manufacturing Leader",
    industry: "Manufacturing",
    challenge: "Inefficient supply chain management and high operational costs",
    solution: "Deployed our integrated supply chain management system with real-time tracking",
    results: [
      "35% reduction in operational costs",
      "50% improvement in delivery times",
      "25% increase in inventory turnover",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: <Globe className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 3,
    title: "Customer Service Revolution",
    company: "Service Provider",
    industry: "Services",
    challenge: "Poor customer service response times and low satisfaction rates",
    solution: "Integrated our AI-powered customer service platform with automated workflows",
    results: [
      "70% faster response times",
      "85% customer satisfaction rate",
      "40% reduction in support costs",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
  {
    id: 4,
    title: "Digital Transformation",
    company: "Financial Institution",
    industry: "Finance",
    challenge: "Legacy systems hindering growth and innovation",
    solution: "Complete digital transformation with our enterprise platform",
    results: [
      "60% increase in operational efficiency",
      "90% reduction in processing time",
      "50% growth in digital transactions",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    icon: <Zap className="h-6 w-6 text-blue-600" />,
  },
];

export default function CaseStudies() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Success Stories
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Discover how businesses across industries have transformed their operations with our digital solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">{caseStudy.industry}</span>
                      <span className="text-sm text-blue-200">{caseStudy.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-2">{caseStudy.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-500">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to write your success story?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-blue-100">
              Let's discuss how our solutions can transform your business.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center"
          >
            <Link href="/book-call">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 