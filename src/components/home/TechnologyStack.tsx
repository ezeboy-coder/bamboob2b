const technologies = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'Go', 'PHP'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    category: 'AI/ML',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
  },
];

export default function TechnologyStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-xl text-gray-600">
            Cutting-edge technologies for modern solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 