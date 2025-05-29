import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2021/03/05/66988-521238776_tiny.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-center mb-6"
          >
            Transform Your Body
            <br />
            <span className="text-yellow-400">Transform Your Life</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-center mb-8 max-w-2xl"
          >
            Join the ultimate fitness experience where every workout brings you closer to your goals
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Start Your Journey Today
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}