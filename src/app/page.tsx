import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Solutions from '@/components/home/Solutions';
import CaseStudies from '@/components/home/CaseStudies';
import TechnologyStack from '@/components/home/TechnologyStack';
import Process from '@/components/home/Process';
import ContactForm from '@/components/home/ContactForm';

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <Solutions />
      <Process />
      <TechnologyStack />
      <CaseStudies />
      <ContactForm />
    </div>
  );
}