"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, BarChart3, Shield, Zap, Users, Globe, ArrowRight } from 'lucide-react';

const features = [
  {
    name: 'Advanced Analytics',
    description: 'Get detailed insights into your business operations with our powerful analytics tools.',
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption and regular security audits.',
    icon: <Shield className="h-6 w-6 text-blue-600" />,
  },
  {
    name: 'Scalable Infrastructure',
    description: 'Our platform grows with your business, handling increased load seamlessly.',
    icon: <Zap className="h-6 w-6 text-blue-600" />,
  },
  {
    name: 'Team Collaboration',
    description: 'Enable seamless collaboration between teams and departments.',
    icon: <Users className="h-6 w-6 text-blue-600" />,
  },
];

const benefits = [
  {
    title: 'Cost-Effective Solutions',
    description: 'Get enterprise-grade features at affordable prices, with flexible payment options.',
    icon: <Check className="h-6 w-6 text-green-500" />,
  },
  {
    title: 'No Hidden Costs',
    description: 'Transparent pricing with no surprise fees. Pay only for what you need.',
    icon: <Check className="h-6 w-6 text-green-500" />,
  },
  {
    title: 'Scalable Pricing',
    description: 'Start small and scale as you grow. Our pricing adapts to your business needs.',
    icon: <Check className="h-6 w-6 text-green-500" />,
  },
  {
    title: 'ROI Focused',
    description: 'Our solutions are designed to deliver maximum value and return on investment.',
    icon: <Check className="h-6 w-6 text-green-500" />,
  },
];

export default function Pricing() {
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
              Affordable Digital Solutions
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Get enterprise-grade digital solutions at prices that work for your business. 
              Our flexible pricing ensures you only pay for what you need.
          </p>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900"
            >
              Why Choose Our Solutions?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600"
            >
              We believe in providing value at every price point
            </motion.p>
        </div>
        
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="ml-3 text-lg font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
        
      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900"
            >
              Comprehensive Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600"
            >
              All the tools you need to succeed, at a price that works for you
            </motion.p>
              </div>
              
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {feature.icon}
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
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
              Ready to transform your business?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-blue-100">
              Let's discuss how our affordable digital solutions can help you achieve your goals.
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