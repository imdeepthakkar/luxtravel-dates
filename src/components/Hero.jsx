import { motion } from 'framer-motion';
import { Plane, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Hero() {
  const { setActiveTab } = useApp();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-bg-card to-bg-dark" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        🇯🇵
      </motion.div>
      <motion.div
        className="absolute top-32 right-20 text-3xl opacity-30"
        animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        🇫🇷
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-3xl opacity-30"
        animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        🇮🇹
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-10 text-4xl opacity-30"
        animate={{ y: [0, -22, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        🇪🇸
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="text-secondary" size={16} />
          <span className="text-sm text-text-secondary">Where love meets adventure</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Discover Your Next</span>
          <br />
          <span className="text-white">Adventure Together</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10"
        >
          Connect with fellow travelers who share your passion for exploration.
          Find love while exploring the world's most beautiful destinations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            onClick={() => setActiveTab('explore')}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white glow hover:glow-pink transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plane size={20} />
            Explore Destinations
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('messages')}
            className="flex items-center gap-2 px-8 py-4 glass rounded-xl font-semibold text-white hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Connecting
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-16"
        >
          {[
            { value: '50+', label: 'Destinations' },
            { value: '10K+', label: 'Travelers' },
            { value: '5K+', label: 'Connections' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-outfit text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-text-secondary text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-white/50 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}