import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Suresh Kumar',
    position: 'College Tutor',
    company: 'Sri Ramakrishna Engineering College',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Dhanush is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving abilities are outstanding, making him a valuable asset to any team.'
  },
  {
    id: 2,
    name: 'Suresh',
    position: 'Software Developer',
    company: 'Creative Designs',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Working with Dhanush was a great experience. He has a keen eye for design and translates concepts into beautiful, functional interfaces with ease. His collaborative approach makes the design process smooth and enjoyable.'
  },
  {
    id: 3,
    name: 'Dharshan',
    position: 'Software Developer',
    company: 'Mitra Soft Technologies',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'I have had the pleasure of talking with Dhanush , and his technical expertise and dedication are truly impressive. He approaches complex challenges with confidence and always delivers elegant solutions.'
  },
];

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
            Here's what people are saying about working with me on various projects.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-100 dark:border-blue-900/30">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <Quote size={36} className="text-blue-500 opacity-20" />
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 italic">
                  {testimonials[activeIndex].content}
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-1">{testimonials[activeIndex].name}</h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-700 shadow-md flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-blue-300 dark:hover:bg-blue-700'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white dark:bg-zinc-700 shadow-md flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;