"use client";

import { motion } from 'framer-motion';
import { Smartphone, Code, SmartphoneIcon, SmartphoneCharging, SmartphoneNfc, SmartphoneTouch, SmartphoneVibrate } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'iOS Development',
    description: 'Native iOS applications built with Swift and SwiftUI for optimal performance and user experience.',
    icon: Smartphone,
  },
  {
    title: 'Android Development',
    description: 'Native Android applications developed using Kotlin and Jetpack Compose for modern UI experiences.',
    icon: SmartphoneCharging,
  },
  {
    title: 'Cross-Platform Solutions',
    description: 'Unified mobile applications using React Native and Flutter for cost-effective development.',
    icon: SmartphoneNfc,
  },
  {
    title: 'Mobile Backend',
    description: 'Robust backend infrastructure to support your mobile applications with high performance and scalability.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed specifically for mobile platforms.',
    icon: SmartphoneTouch,
  },
  {
    title: 'App Maintenance',
    description: 'Ongoing support and updates to keep your mobile applications running smoothly.',
    icon: SmartphoneVibrate,
  },
];

const benefits = [
  {
    title: 'Enhanced Customer Engagement',
    description: 'Connect with your customers anytime, anywhere through mobile applications.',
  },
  {
    title: 'Improved Operational Efficiency',
    description: 'Streamline business processes with mobile-first solutions.',
  },
  {
    title: 'Better Market Reach',
    description: 'Expand your business presence through mobile platforms.',
  },
  {
    title: 'Competitive Advantage',
    description: 'Stay ahead of the competition with innovative mobile solutions.',
  },
];

export default function MobileAppsPage() {
  return (
    <div className="w-full pt-20">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mobile Applications</h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our mobile development services create engaging, high-performance mobile applications that help businesses connect with their customers and streamline operations.
            </p>
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
                  Comprehensive Mobile Development Features
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-4 text-xl text-gray-600"
                >
                  Our mobile solutions provide end-to-end development for your business
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
          <div className="bg-blue-600 rounded-2xl mt-16">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left"
              >
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ready to build your mobile app?
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-blue-100">
                  Let's discuss how our mobile development solutions can transform your business.
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
      </div>
    </div>
  );
} 