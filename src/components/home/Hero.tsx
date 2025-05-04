"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50 opacity-20"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8"
          >
            <Zap className="h-4 w-4 mr-2" />
            Next-Gen B2B Solutions
          </motion.div>
            
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Streamline Your</span>
            <span className="block text-blue-600">Business Operations</span>
            </motion.h1>
            
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Transform your business with our comprehensive B2B platform. From supply chain optimization to seamless partner collaboration, we've got you covered.
            </motion.p>
            
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/book-call" 
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center justify-center transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            <Link 
              href="/solutions" 
              className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-lg font-medium flex items-center justify-center transition-colors duration-200 border border-gray-300 shadow-sm hover:shadow-md"
            >
                  Explore Solutions
              </Link>
            </motion.div>
            
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            {[
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: 'Enterprise Security',
                description: 'Bank-grade security with end-to-end encryption'
              },
              {
                icon: <Zap className="h-8 w-8 text-blue-600" />,
                title: 'Lightning Fast',
                description: 'Optimized performance for seamless operations'
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
                title: 'Smart Analytics',
                description: 'Data-driven insights for better decisions'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-blue-50 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}