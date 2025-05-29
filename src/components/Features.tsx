import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dumbbell, Users, Clock, Trophy } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: "State-of-the-Art Equipment",
    description: "Access to premium fitness equipment and dedicated workout spaces"
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Professional guidance from certified fitness instructors"
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Work out on your schedule with round-the-clock facility access"
  },
  {
    icon: Trophy,
    title: "Results Guaranteed",
    description: "Achieve your fitness goals with our proven training methods"
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose Our Gym?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}