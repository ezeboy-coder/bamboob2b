"use client";

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, Server, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Security Audits',
    description: 'Comprehensive security assessments to identify vulnerabilities and risks in your systems.',
    icon: Shield,
  },
  {
    title: 'Threat Detection',
    description: 'Advanced monitoring and detection systems to identify and respond to security threats in real-time.',
    icon: AlertTriangle,
  },
  {
    title: 'Compliance Management',
    description: 'Ensure your systems meet industry standards and regulatory requirements.',
    icon: Lock,
  },
  {
    title: 'Data Protection',
    description: 'End-to-end encryption and secure data storage solutions to protect sensitive information.',
    icon: Key,
  },
  {
    title: 'Access Control',
    description: 'Granular access management and authentication systems to control who can access what.',
    icon: Eye,
  },
  {
    title: 'Infrastructure Security',
    description: 'Secure your network and server infrastructure with advanced protection measures.',
    icon: Server,
  },
];

const benefits = [
  {
    title: 'Enhanced Security Posture',
    description: 'Strengthen your overall security framework with comprehensive protection measures.',
  },
  {
    title: 'Regulatory Compliance',
    description: 'Meet industry standards and legal requirements with our compliance solutions.',
  },
  {
    title: 'Risk Mitigation',
    description: 'Proactively identify and address potential security risks before they become threats.',
  },
  {
    title: 'Customer Trust',
    description: 'Build confidence with your customers by demonstrating strong security practices.',
  },
];

export default function SecurityPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            alt="Security"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Security Solutions
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your digital assets with our comprehensive security solutions. From threat detection to compliance management, we've got you covered.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900"
            >
              Comprehensive Security Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600"
            >
              Our security solutions provide end-to-end protection for your business
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="ml-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900"
            >
              Key Benefits
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Ready to secure your business?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-blue-100">
              Let's discuss how our security solutions can protect your digital assets.
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
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 