import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const trainers = [
  {
    name: "John Smith",
    specialty: "CrossFit Expert",
    image: "https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg",
    description: "10+ years of experience in CrossFit training and competitive athletics"
  },
  {
    name: "Sarah Johnson",
    specialty: "Yoga Instructor",
    image: "https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg",
    description: "Certified yoga instructor with expertise in mindfulness and flexibility training"
  },
  {
    name: "Mike Williams",
    specialty: "Strength Coach",
    image: "https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg",
    description: "Professional powerlifter and certified strength conditioning specialist"
  }
];

export default function Trainers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Meet Our Expert Trainers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{trainer.name}</h3>
                  <p className="text-yellow-400 mb-2">{trainer.specialty}</p>
                  <p className="text-white text-sm mb-4 opacity-80">{trainer.description}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}