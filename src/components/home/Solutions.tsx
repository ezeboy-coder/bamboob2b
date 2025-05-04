"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
const solutions = [{
  title: 'Supply Chain Management',
  description: 'Optimize your entire supply chain from procurement to delivery with real-time tracking, inventory management, and supplier collaboration tools.',
  image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  link: '/solutions/supply-chain',
  bgColor: 'bg-blue-50'
}, {
  title: 'Enterprise Resource Planning',
  description: 'Streamline business processes across finance, HR, operations, and more with our integrated ERP solution that grows with your business.',
  image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  link: '/solutions/erp',
  bgColor: 'bg-green-50'
}, {
  title: 'Customer Relationship Management',
  description: 'Build stronger business relationships with a 360° view of your customers, automated sales processes, and powerful marketing tools.',
  image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  link: '/solutions/crm',
  bgColor: 'bg-amber-50'
}];
export default function Solutions() {
  return <div className="bg-white py-24 sm:py-32" data-unique-id="61b1d39e-42b8-4d5a-b358-76d5be3a9d33" data-loc="34:4-34:45" data-file-name="components/home/Solutions.tsx">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-unique-id="d3d9ef02-102e-4915-836c-7b4b48e82932" data-loc="35:6-35:54" data-file-name="components/home/Solutions.tsx">
        <div className="mx-auto max-w-2xl lg:text-center" data-unique-id="e1e6a429-9cda-4d3e-a7c6-1c485c445e29" data-loc="36:8-36:58" data-file-name="components/home/Solutions.tsx">
          <h2 className="text-base font-semibold leading-7 text-blue-700" data-unique-id="5f7b63d7-1b65-4c8d-90b2-1c522e1c3151" data-loc="37:10-37:74" data-file-name="components/home/Solutions.tsx">Enterprise Solutions</h2>
          <motion.p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} data-unique-id="2fcf9e9d-a37e-41ee-85f6-937fc174f5d4" data-loc="38:10-44:11" data-file-name="components/home/Solutions.tsx">
            Tailored solutions for modern businesses
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
        }} data-unique-id="ff539a76-7d87-48eb-b60f-bdd71a630d22" data-loc="47:10-53:11" data-file-name="components/home/Solutions.tsx">
            Our comprehensive suite of enterprise applications helps businesses of all sizes optimize operations, 
            improve collaboration, and drive growth through digital transformation.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none space-y-16" data-unique-id="02412732-3908-4ed0-9d26-5968496c69d0" data-loc="59:8-59:92" data-file-name="components/home/Solutions.tsx">
          {solutions.map((solution, index) => <motion.div key={solution.title} className={cn("rounded-2xl overflow-hidden", index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse", solution.bgColor)} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.1 * index
        }} data-unique-id="map_a404ab85-547a-4ac8-947c-9924c0f256c0" data-loc="61:12-72:13" data-file-name="components/home/Solutions.tsx" data-is-mapped="true">
              <div className="flex flex-col lg:flex-row" data-unique-id="map_d35893e2-cf6f-4a08-a271-9149174ef00b" data-loc="73:14-73:57" data-file-name="components/home/Solutions.tsx" data-is-mapped="true">
                <div className="relative h-64 w-full lg:h-auto lg:w-1/2" data-unique-id="map_495be640-96df-4573-ac35-e03e746d29ee" data-loc="74:16-74:73" data-file-name="components/home/Solutions.tsx" data-is-mapped="true">
                  <img src={solution.image} alt={solution.title} className="h-full w-full object-cover" data-unique-id="map_b99725a3-f5a1-4836-bc17-58772e668e0e" data-loc="75:18-79:20" data-file-name="components/home/Solutions.tsx" data-is-mapped="true" />
                </div>
                <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center" data-unique-id="map_63cd49c7-cad7-4df9-82ae-1d70c6ed3829" data-loc="81:16-81:90" data-file-name="components/home/Solutions.tsx" data-is-mapped="true">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-4" data-unique-id="map_b3e0a5cd-f5a1-49c9-a6dc-e47ac7b3b020" data-loc="82:18-82:99" data-file-name="components/home/Solutions.tsx" data-is-mapped="true">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-lg text-gray-600" data-unique-id="map_aeb52493-0da3-4a66-8eed-1f978847977d" data-loc="85:18-85:60" data-file-name="components/home/Solutions.tsx" data-is-mapped="true">
                    {solution.description}
                  </p>
                  <div className="mt-6" data-unique-id="map_d8f93dc8-ced6-40a8-80d5-f24151f47ccf" data-loc="88:18-88:40" data-file-name="components/home/Solutions.tsx" data-is-mapped="true">
                    <Link href={solution.link} className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium" data-unique-id="map_aae2a2ab-0147-45ff-9acc-f802a8ac33a8" data-loc="89:20-89:130" data-file-name="components/home/Solutions.tsx" data-is-mapped="true">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
}