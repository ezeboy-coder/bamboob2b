import { Search, Layout, Code, TestTube2, Rocket } from 'lucide-react';

const processSteps = [
  {
    title: 'Discovery',
    description: 'We analyze your requirements and define project scope.',
    icon: Search,
  },
  {
    title: 'Design',
    description: 'Creating wireframes and UI/UX designs for your solution.',
    icon: Layout,
  },
  {
    title: 'Development',
    description: 'Building your solution with modern technologies and best practices.',
    icon: Code,
  },
  {
    title: 'Testing',
    description: 'Rigorous testing to ensure quality and performance.',
    icon: TestTube2,
  },
  {
    title: 'Deployment',
    description: 'Launching your solution and providing ongoing support.',
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-600">
            A proven methodology for delivering successful digital solutions
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <step.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center max-w-xs">{step.description}</p>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block w-24 h-1 bg-gray-200 mt-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 