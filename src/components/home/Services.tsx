import { Code2, Cloud, Database, Smartphone, Shield, Brain } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: Code2,
  },
  {
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure setup, migration, and optimization services.',
    icon: Cloud,
  },
  {
    title: 'Database Management',
    description: 'Database design, optimization, and maintenance services.',
    icon: Database,
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'Cybersecurity',
    description: 'Security audits, penetration testing, and security solutions.',
    icon: Shield,
  },
  {
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions and machine learning implementations.',
    icon: Brain,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Digital Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions to transform your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 