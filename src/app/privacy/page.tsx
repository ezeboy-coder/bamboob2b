"use client";

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="w-full pt-20">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-base leading-7 text-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
              <p className="mb-6">
                At BambooB2B, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name and contact information</li>
                <li>Business information</li>
                <li>Payment information</li>
                <li>Account credentials</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Usage Data</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
              <p className="mb-6">
                We use the collected information to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide and maintain our Service</li>
                <li>Process your transactions</li>
                <li>Send you updates and marketing communications</li>
                <li>Improve our Service</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Sharing</h2>
              <p className="mb-6">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
              <p className="mb-6">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies</h2>
              <p className="mb-6">
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Changes to This Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at privacy@bamboob2b.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 