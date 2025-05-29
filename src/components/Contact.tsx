import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2019/01/03/20422-309694396_tiny.mp4" type="video/mp4" />
      </video>
      <div className="relative bg-black bg-opacity-80 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Get In Touch
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-yellow-400" />
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-yellow-400" />
                <p className="text-white">info@yourgym.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <p className="text-white">123 Fitness Street, Gym City, GC 12345</p>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}