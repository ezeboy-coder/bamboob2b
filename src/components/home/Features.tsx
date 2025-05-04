"use client";

import { motion } from 'framer-motion';
import { Database, BarChart3, Users, Zap, Globe, Lock } from 'lucide-react';
const features = [{
  name: 'Centralized Data Management',
  description: 'Consolidate all your business data in one secure location for seamless access across departments.',
  icon: Database
}, {
  name: 'Advanced Analytics',
  description: 'Gain valuable insights with custom reports and real-time dashboards to drive informed decisions.',
  icon: BarChart3
}, {
  name: 'Collaboration Tools',
  description: 'Connect teams and partners with integrated communication and project management features.',
  icon: Users
}, {
  name: 'Process Automation',
  description: 'Streamline workflows and eliminate manual tasks with intelligent automation capabilities.',
  icon: Zap
}, {
  name: 'Global Deployment',
  description: 'Scale your operations worldwide with multi-language support and regional customization.',
  icon: Globe
}, {
  name: 'Enterprise-Grade Security',
  description: 'Protect your business data with advanced encryption, access controls, and compliance features.',
  icon: Lock
}];
export default function Features() {
  return <div className="bg-white py-24 sm:py-32" data-unique-id="abba6e23-2228-417d-99a4-57f690045c80" data-loc="41:4-41:45" data-file-name="components/home/Features.tsx">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-unique-id="929fdbc0-e705-4ee9-88ad-af03f5eb7aa1" data-loc="42:6-42:54" data-file-name="components/home/Features.tsx">
        <div className="mx-auto max-w-2xl lg:text-center" data-unique-id="016d41e0-af63-40bb-a59a-7f880495184e" data-loc="43:8-43:58" data-file-name="components/home/Features.tsx">
          <h2 className="text-base font-semibold leading-7 text-blue-700" data-unique-id="b540caab-5961-4d99-9fc7-caf2eb63eb31" data-loc="44:10-44:74" data-file-name="components/home/Features.tsx">Maximum Efficiency</h2>
          <motion.p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} data-unique-id="554bd759-0b7a-4a01-95d3-11b64c5fe5af" data-loc="45:10-51:11" data-file-name="components/home/Features.tsx">
            Everything you need to manage your business
          </motion.p>
          <motion.p className="mt-6 text-lg leading-8 text-gray-600" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} data-unique-id="6fce3cbd-8c12-4258-8caf-8e5a0c7ce34f" data-loc="54:10-60:11" data-file-name="components/home/Features.tsx">
            Our comprehensive suite of enterprise solutions helps you streamline operations, boost productivity, 
            and drive growth through innovative technology and intelligent process optimization.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none" data-unique-id="f463941e-614a-48e9-bbe1-da054ddd2dd2" data-loc="65:8-65:81" data-file-name="components/home/Features.tsx">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3" data-unique-id="3621c92e-35b2-42e5-a88f-737d1f4b2864" data-loc="66:10-66:98" data-file-name="components/home/Features.tsx">
            {features.map((feature, index) => <motion.div key={feature.name} className="flex flex-col" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1 * index
          }} data-unique-id="map_bbbe95ff-5d74-41c2-8de0-64448e55efa0" data-loc="68:14-75:15" data-file-name="components/home/Features.tsx" data-is-mapped="true">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900" data-unique-id="map_41a79473-a495-46d9-b00e-ea782efb9b4d" data-loc="76:16-76:106" data-file-name="components/home/Features.tsx" data-is-mapped="true">
                  <div className="h-10 w-10 flex-none rounded-lg bg-blue-50 flex items-center justify-center" data-unique-id="map_5c03059a-5783-4f59-94f7-6a56bbc8b6aa" data-loc="77:18-77:110" data-file-name="components/home/Features.tsx" data-is-mapped="true">
                    <feature.icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600" data-unique-id="map_614c04dd-e1e7-44e5-85f5-c91c0fba1548" data-loc="82:16-82:95" data-file-name="components/home/Features.tsx" data-is-mapped="true">
                  <p className="flex-auto" data-unique-id="map_9a366f55-57cd-44eb-a150-4c4a68f3878c" data-loc="83:18-83:43" data-file-name="components/home/Features.tsx" data-is-mapped="true">{feature.description}</p>
                </dd>
              </motion.div>)}
          </dl>
        </div>
      </div>
    </div>;
}