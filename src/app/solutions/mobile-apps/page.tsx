"use client";

import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

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
              Transform your business with custom mobile applications that engage customers and streamline operations.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  iOS Development
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Native iOS applications built with Swift and SwiftUI, optimized for performance and user experience.</p>
                </dd>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  Android Development
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Custom Android applications developed with Kotlin and Jetpack Compose, ensuring smooth performance across devices.</p>
                </dd>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  Cross-Platform Solutions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">React Native and Flutter applications that work seamlessly across iOS and Android platforms.</p>
                </dd>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  Mobile Backend
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Secure and scalable backend infrastructure to support your mobile applications.</p>
                </dd>
              </motion.div>
            </dl>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-700 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">Enhanced Customer Engagement</h3>
                <p className="mt-2">Connect with your customers through intuitive mobile experiences that drive engagement and loyalty.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">Improved Operational Efficiency</h3>
                <p className="mt-2">Streamline business processes with mobile solutions that increase productivity and reduce costs.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="border-l border-blue-600 pl-6 font-semibold text-gray-900">Better Market Reach</h3>
                <p className="mt-2">Expand your business reach with mobile applications that make your services accessible anytime, anywhere.</p>
              </motion.div>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center gap-x-6">
            <motion.a
              href="/contact"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Book a Call
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
} 