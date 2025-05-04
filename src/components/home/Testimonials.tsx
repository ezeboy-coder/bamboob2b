"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
const testimonials = [{
  content: "BamBooB2B has transformed our supply chain management, cutting costs by 27% and improving delivery times. The platform's analytics capabilities have given us unprecedented visibility into our operations.",
  author: "Sarah Johnson",
  role: "COO at TechGlobal Industries",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  stars: 5
}, {
  content: "Implementing BamBooB2B's ERP solution was the best decision we made last year. The integration with our existing systems was smooth, and the ROI has been remarkable. Our teams are more productive than ever.",
  author: "Michael Chen",
  role: "CTO at Innovate Manufacturing",
  image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  stars: 5
}, {
  content: "The customer support at BamBooB2B is exceptional. They've been with us every step of the way, helping us customize the platform to our specific industry needs. It's rare to find a B2B vendor so committed to client success.",
  author: "Emily Rodriguez",
  role: "Head of Operations at Global Logistics Co",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  stars: 5
}];
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  return <div className="bg-white py-24 sm:py-32" data-unique-id="1bd7c7d0-2a65-42a9-b309-e9b3d7f66a2c" data-loc="43:4-43:45" data-file-name="components/home/Testimonials.tsx">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-unique-id="12ef9ad7-b293-4fce-b06e-1b252c7b9946" data-loc="44:6-44:54" data-file-name="components/home/Testimonials.tsx">
        <div className="mx-auto max-w-2xl lg:max-w-4xl" data-unique-id="ba35d81d-6c64-4665-ae4d-d05c3e0adeae" data-loc="45:8-45:56" data-file-name="components/home/Testimonials.tsx">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center" data-unique-id="089f6f22-5486-4289-a158-779d132d36d0" data-loc="46:10-46:86" data-file-name="components/home/Testimonials.tsx">
            Trusted by businesses worldwide
          </h2>
          
          <motion.div className="mt-16 relative" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} data-unique-id="bbc71453-c87e-4b85-97b0-103b7a7d0383" data-loc="50:10-56:11" data-file-name="components/home/Testimonials.tsx">
            <div className="absolute top-0 -z-10 left-1/2 transform -translate-x-1/2 h-80 w-80 bg-blue-100 rounded-full opacity-20" data-unique-id="53b6e35c-1b26-4406-8c34-9bd4d721caba" data-loc="57:12-57:132" data-file-name="components/home/Testimonials.tsx"></div>
            
            <div className="relative overflow-hidden" data-unique-id="9cdfaa32-082b-490b-a7b2-ba3c8ca9f685" data-loc="59:12-59:54" data-file-name="components/home/Testimonials.tsx">
              <motion.div key={currentIndex} initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: 0.5
            }} className="relative" data-unique-id="2867d46b-0377-460b-bfde-4a46fdd920b1" data-loc="60:14-67:15" data-file-name="components/home/Testimonials.tsx">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10" data-unique-id="fc49db87-fe28-485e-bfc6-cae962395afb" data-loc="68:16-68:75" data-file-name="components/home/Testimonials.tsx">
                  <div className="flex items-center mb-4" data-unique-id="541af834-6a4f-45c9-8979-b0160595ed53" data-loc="69:18-69:58" data-file-name="components/home/Testimonials.tsx">
                    {[...Array(testimonials[currentIndex].stars)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl font-medium text-gray-900 mb-8" data-unique-id="4dae7610-3282-4b60-89f9-7da704f876ef" data-loc="75:18-75:92" data-file-name="components/home/Testimonials.tsx">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div className="flex items-center" data-unique-id="10b0ff22-6f27-42ed-b4e9-67655490ecb2" data-loc="79:18-79:53" data-file-name="components/home/Testimonials.tsx">
                    <img className="h-12 w-12 rounded-full" src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} data-unique-id="f86f174b-1bbc-455b-b20c-ff2df06d3757" data-loc="80:20-84:22" data-file-name="components/home/Testimonials.tsx" />
                    <div className="ml-4" data-unique-id="3046d2f0-9780-4944-a529-127a82133814" data-loc="85:20-85:42" data-file-name="components/home/Testimonials.tsx">
                      <div className="text-base font-medium text-gray-900" data-unique-id="62178818-4ac1-4630-bae1-3134c0adac8e" data-loc="86:22-86:75" data-file-name="components/home/Testimonials.tsx">{testimonials[currentIndex].author}</div>
                      <div className="text-sm text-gray-500" data-unique-id="e05fa0ff-259f-41a9-87bf-fea19e591f7e" data-loc="87:22-87:61" data-file-name="components/home/Testimonials.tsx">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-8 flex justify-center space-x-4" data-unique-id="0da508c8-1531-4ce6-b803-bb56d77de2c5" data-loc="94:12-94:64" data-file-name="components/home/Testimonials.tsx">
              <button className="rounded-full p-2 border border-gray-300 hover:bg-gray-100" onClick={prevTestimonial} data-unique-id="2be369fd-03fe-447f-a6a6-93cfa5f6a5fe" data-loc="95:14-98:15" data-file-name="components/home/Testimonials.tsx">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only" data-unique-id="7859261a-3f83-4bbe-ba8a-a2c58be74bb8" data-loc="100:16-100:42" data-file-name="components/home/Testimonials.tsx">Previous testimonial</span>
              </button>
              
              <div className="flex space-x-2" data-unique-id="c4c9e7f2-20b6-458f-b148-049aa17ffb91" data-loc="103:14-103:46" data-file-name="components/home/Testimonials.tsx">
                {testimonials.map((_, index) => <button key={index} className={`h-2.5 w-2.5 rounded-full ${currentIndex === index ? 'bg-blue-700' : 'bg-gray-300'}`} onClick={() => setCurrentIndex(index)} data-unique-id="map_94cff9b4-e812-463b-a209-f5e2ec61158e" data-loc="105:18-111:19" data-file-name="components/home/Testimonials.tsx" data-is-mapped="true">
                    <span className="sr-only" data-unique-id="map_2c2ce986-0fc1-4ec6-9f1a-5dfe16f76280" data-loc="112:20-112:46" data-file-name="components/home/Testimonials.tsx" data-is-mapped="true">Testimonial {index + 1}</span>
                  </button>)}
              </div>
              
              <button className="rounded-full p-2 border border-gray-300 hover:bg-gray-100" onClick={nextTestimonial} data-unique-id="82c13259-9e86-4a48-90fc-5637a0b609f4" data-loc="117:14-120:15" data-file-name="components/home/Testimonials.tsx">
                <ArrowRight className="h-5 w-5" />
                <span className="sr-only" data-unique-id="45c68ce3-5f96-49f4-adc3-91e35f3b7c14" data-loc="122:16-122:42" data-file-name="components/home/Testimonials.tsx">Next testimonial</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
}