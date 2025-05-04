import { Code2, Cloud, Database, Smartphone, Shield, Brain } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const solutions = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications and platforms built with modern technologies.',
    icon: Code2,
    features: [
      'Responsive Design',
      'Progressive Web Apps',
      'E-commerce Solutions',
      'Content Management Systems'
    ],
    details: {
      overview: 'Our web development services help businesses create powerful, scalable, and user-friendly web applications. We leverage the latest technologies and best practices to deliver solutions that drive growth and efficiency.',
      benefits: [
        'Enhanced user experience and engagement',
        'Improved business efficiency',
        'Scalable and maintainable solutions',
        'Integration with existing systems'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
      process: [
        'Requirement Analysis',
        'UI/UX Design',
        'Development',
        'Testing & QA',
        'Deployment',
        'Maintenance'
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Web Development Process',
          caption: 'Modern web development workflow'
        },
        {
          src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Code Review',
          caption: 'Code review and quality assurance'
        }
      ]
    }
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure, migration, and optimization services.',
    icon: Cloud,
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'Scalability Solutions',
      'Cost Optimization'
    ],
    details: {
      overview: 'Our cloud solutions help businesses leverage the power of cloud computing to improve efficiency, reduce costs, and enhance scalability. We provide end-to-end cloud services from migration to optimization.',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      process: [
        'Cloud Assessment',
        'Migration Planning',
        'Implementation',
        'Optimization',
        'Monitoring',
        'Support'
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Cloud Infrastructure',
          caption: 'Cloud infrastructure setup and management'
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Cloud Migration',
          caption: 'Seamless cloud migration process'
        }
      ]
    }
  },
  {
    id: 'database-management',
    title: 'Database Management',
    description: 'Expert database design, optimization, and maintenance.',
    icon: Database,
    features: [
      'Database Design',
      'Performance Optimization',
      'Data Migration',
      'Security Implementation'
    ],
    details: {
      overview: 'Our database management services ensure your data is secure, accessible, and optimized for performance. We help businesses design, implement, and maintain robust database solutions.',
      benefits: [
        'Improved data security',
        'Enhanced performance',
        'Better data integrity',
        'Reduced maintenance costs'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Oracle'],
      process: [
        'Database Assessment',
        'Design & Planning',
        'Implementation',
        'Optimization',
        'Security Setup',
        'Maintenance'
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Database Architecture',
          caption: 'Modern database architecture design'
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Data Security',
          caption: 'Advanced data security measures'
        }
      ]
    }
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'Mobile Backend'
    ],
    details: {
      overview: 'Our mobile development services create engaging, high-performance mobile applications that help businesses connect with their customers and streamline operations.',
      benefits: [
        'Enhanced customer engagement',
        'Improved operational efficiency',
        'Better market reach',
        'Competitive advantage'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      process: [
        'Requirement Analysis',
        'UI/UX Design',
        'Development',
        'Testing',
        'Deployment',
        'Support'
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Mobile App Development',
          caption: 'Cross-platform mobile app development'
        },
        {
          src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Mobile UI/UX',
          caption: 'Intuitive mobile user interfaces'
        }
      ]
    }
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions and protection services.',
    icon: Shield,
    features: [
      'Security Audits',
      'Penetration Testing',
      'Threat Protection',
      'Compliance Solutions'
    ],
    details: {
      overview: 'Our cybersecurity services protect your business from digital threats and ensure compliance with industry standards. We provide comprehensive security solutions tailored to your needs.',
      benefits: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced risk of breaches',
        'Improved customer trust'
      ],
      technologies: ['SIEM', 'Firewalls', 'IDS/IPS', 'VPN', 'Encryption'],
      process: [
        'Security Assessment',
        'Vulnerability Analysis',
        'Implementation',
        'Testing',
        'Monitoring',
        'Updates'
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Security Infrastructure',
          caption: 'Advanced security infrastructure'
        },
        {
          src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Threat Protection',
          caption: 'Real-time threat protection'
        }
      ]
    }
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Custom AI solutions and intelligent automation.',
    icon: Brain,
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Automation Solutions'
    ],
    details: {
      overview: 'Our AI and Machine Learning services help businesses leverage artificial intelligence to automate processes, gain insights, and improve decision-making.',
      benefits: [
        'Automated processes',
        'Data-driven insights',
        'Improved efficiency',
        'Competitive advantage'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP'],
      process: [
        'Requirement Analysis',
        'Data Collection',
        'Model Development',
        'Testing',
        'Deployment',
        'Optimization'
      ],
      images: [
        {
          src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'AI Development',
          caption: 'AI model development and training'
        },
        {
          src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
          alt: 'Machine Learning',
          caption: 'Advanced machine learning applications'
        }
      ]
    }
  }
];

export default function SolutionPage({ params }: { params: { id: string } }) {
  const solution = solutions.find(s => s.id === params.id);

  if (!solution) {
    return (
      <div className="w-full pt-20">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Solution not found</h1>
            <Link href="/solutions" className="mt-4 text-blue-600 hover:text-blue-700">
              Back to Solutions
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20">
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <solution.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{solution.title}</h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">{solution.description}</p>
          </div>

          {/* Interactive Images Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {solution.details.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={450}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white text-lg font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Overview</h2>
            <p className="mt-6 text-gray-600">{solution.details.overview}</p>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">Benefits</h2>
            <ul className="mt-6 space-y-4">
              {solution.details.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="mt-1 h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3 text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">Technologies</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {solution.details.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900">Our Process</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.details.process.map((step, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 p-4 hover:border-blue-500 transition-colors duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <span className="text-lg font-semibold text-blue-600">{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{step}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 