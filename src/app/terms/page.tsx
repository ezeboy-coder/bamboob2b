"use client";

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="w-full pt-20">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
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
                Welcome to BambooB2B. By accessing our website and using our services, you agree to be bound by these Terms of Service. Please read them carefully.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Definitions</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>"Service" refers to the services provided by BambooB2B</li>
                <li>"User" refers to any individual or entity using our Service</li>
                <li>"Content" refers to any material available through our Service</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Use of Service</h2>
              <p className="mb-6">
                You agree to use our Service only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Intellectual Property</h2>
              <p className="mb-6">
                All content, features, and functionality of our Service are owned by BambooB2B and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. User Content</h2>
              <p className="mb-6">
                You retain ownership of any content you submit to our Service. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, and distribute your content.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
              <p className="mb-6">
                BambooB2B shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Changes to Terms</h2>
              <p className="mb-6">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Contact Information</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us at support@bamboob2b.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 