"use client";

import { motion } from 'framer-motion';
import { Database, BarChart3, Users, Zap, Globe, Lock } from 'lucide-react';
export default function Partners() {
  const partnerLogos = [{
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  }, {
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  }, {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
  }, {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
  }, {
    name: "SAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
  }, {
    name: "MongoDB",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
  }, {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
  }, {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
  }];
  return <div className="bg-white py-24 sm:py-32" data-unique-id="a36242f9-f653-4673-aa2a-055b0703b030" data-loc="19:4-19:45" data-file-name="components/home/Partners.tsx">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-unique-id="a732c925-8430-4783-a2e8-f0f26200590d" data-loc="20:6-20:54" data-file-name="components/home/Partners.tsx">
        <div className="mx-auto max-w-2xl lg:max-w-none" data-unique-id="94ce0584-8c49-4458-bbd2-e3a173768100" data-loc="21:8-21:57" data-file-name="components/home/Partners.tsx">
          <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900" data-unique-id="39103096-4ead-4008-a67a-6802af3600e8" data-loc="22:10-22:85" data-file-name="components/home/Partners.tsx">
            Integrated with leading technology partners
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-8" data-unique-id="da0c8d31-9d68-4b7d-bf3b-a52273dee830" data-loc="25:10-25:138" data-file-name="components/home/Partners.tsx">
            {partnerLogos.map((partner, index) => <motion.div key={partner.name} className="col-span-1 flex justify-center" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.4
          }} data-unique-id="map_c7b3e454-5d60-4bb1-92e1-0765b1ef04c0" data-loc="27:14-34:15" data-file-name="components/home/Partners.tsx" data-is-mapped="true">
                <img src={partner.logo} alt={partner.name} className="h-12 object-contain" data-unique-id="map_050ccbc6-d668-45d9-9ca0-8ad498cf173f" data-loc="35:16-39:18" data-file-name="components/home/Partners.tsx" data-is-mapped="true" />
              </motion.div>)}
          </div>
        </div>
      </div>
    </div>;
}