"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, Award } from 'lucide-react';
const stats = [{
  id: 1,
  name: 'Enterprise Clients',
  value: '250+',
  icon: Users,
  color: 'text-blue-700'
}, {
  id: 2,
  name: 'Efficiency Increase',
  value: '43%',
  icon: TrendingUp,
  color: 'text-green-600'
}, {
  id: 3,
  name: 'Hours Saved Weekly',
  value: '1,200+',
  icon: Clock,
  color: 'text-purple-600'
}, {
  id: 4,
  name: 'Client Satisfaction',
  value: '99.4%',
  icon: Award,
  color: 'text-amber-500'
}];
export default function Stats() {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div id="stats-section" className="bg-gray-50 py-24 sm:py-32" data-unique-id="866261a7-3c8b-4034-a6a4-36caf7eb5dce" data-loc="35:4-35:66" data-file-name="components/home/Stats.tsx">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-unique-id="924a5492-aa60-490e-bed2-e7721b542f49" data-loc="36:6-36:54" data-file-name="components/home/Stats.tsx">
        <div className="mx-auto max-w-2xl lg:max-w-none" data-unique-id="ce6114b6-1f13-4e4a-a76e-cff662c1dc6d" data-loc="37:8-37:57" data-file-name="components/home/Stats.tsx">
          <div className="text-center" data-unique-id="5382c904-d972-4db2-af41-4339f3bec0d1" data-loc="38:10-38:39" data-file-name="components/home/Stats.tsx">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" data-unique-id="7bd8bed9-26b4-4ca6-b8bd-cd341181627a" data-loc="39:12-39:88" data-file-name="components/home/Stats.tsx">
              Trusted by businesses worldwide
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600" data-unique-id="29ecdf41-869c-4e31-8bff-3b1c50fcfa3e" data-loc="42:12-42:64" data-file-name="components/home/Stats.tsx">
              Our platform delivers measurable results across industries
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4" data-unique-id="b548e7a4-01a6-4183-9cd9-a01d95c8a70c" data-loc="46:10-46:127" data-file-name="components/home/Stats.tsx">
            {stats.map((stat, index) => <motion.div key={stat.id} className="flex flex-col bg-white p-8" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} data-unique-id="map_68d9f28c-0e02-4301-8979-649c7853a7ea" data-loc="48:14-55:15" data-file-name="components/home/Stats.tsx" data-is-mapped="true">
                <dt className="text-sm font-semibold leading-6 text-gray-600" data-unique-id="map_fc9e6bda-2a64-4000-8071-edcfe85db16e" data-loc="56:16-56:78" data-file-name="components/home/Stats.tsx" data-is-mapped="true">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex justify-center items-center gap-2" data-unique-id="map_86dcd0e7-d6f1-4243-9708-aa6caac2fc15" data-loc="57:16-57:135" data-file-name="components/home/Stats.tsx" data-is-mapped="true">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  <span data-unique-id="map_e35d4a65-e5c0-4594-9e75-cde4a47aba3e" data-loc="59:18-59:24" data-file-name="components/home/Stats.tsx" data-is-mapped="true">
                    {inView && stat.value}
                  </span>
                </dd>
              </motion.div>)}
          </dl>
        </div>
      </div>
    </div>;
}