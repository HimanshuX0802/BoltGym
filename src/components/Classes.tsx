import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Classes() {
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
        <source src="https://cdn.pixabay.com/video/2022/10/16/135162-761273567_tiny.mp4" type="video/mp4" />
      </video>
      <div className="relative bg-black bg-opacity-70 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Our Classes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "HIIT Training", time: "Mon/Wed/Fri 6:00 AM" },
              { name: "Strength & Conditioning", time: "Tue/Thu 7:00 AM" },
              { name: "Yoga & Flexibility", time: "Daily 8:00 AM" },
              { name: "CrossFit", time: "Mon/Wed/Fri 5:00 PM" },
              { name: "Boxing", time: "Tue/Thu 6:00 PM" },
              { name: "Spin Class", time: "Daily 7:00 PM" }
            ].map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{classItem.name}</h3>
                <p className="text-white opacity-80">{classItem.time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}