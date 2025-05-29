import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Parker",
    role: "Fitness Enthusiast",
    image: "https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png",
    quote: "This gym has completely transformed my life. The trainers are exceptional, and the atmosphere is incredibly motivating."
  },
  {
    name: "David Chen",
    role: "Professional Athlete",
    image: "https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png",
    quote: "The facilities and expert guidance here are unmatched. I've achieved results I never thought possible."
  },
  {
    name: "Sophie Williams",
    role: "Yoga Practitioner",
    image: "https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/testimonial.png",
    quote: "The variety of classes and personal attention from instructors make this gym stand out from all others."
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          What Our Members Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white text-center mb-4 italic">"{testimonial.quote}"</p>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-yellow-400">{testimonial.name}</h4>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}