import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Timer, Check } from 'lucide-react';

export default function Discount() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/discount.png"
              alt="Special Offer"
              className="w-full rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-white">
              Special New Year Offer
              <span className="block text-yellow-400 mt-2">50% Discount</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Join now and transform your life with our exclusive new year offer. Limited time only!
            </p>
            <div className="space-y-4">
              {[
                "Access to all premium equipment",
                "Free personal training session",
                "Unlimited group classes",
                "Nutrition consultation included"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-6 h-6 text-yellow-400" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Timer className="w-6 h-6 text-yellow-400" />
              <span>Offer ends in: 7 days</span>
            </div>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Claim Your Discount Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}