import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, DollarSign, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { tripDiscussions } from '../data/mockData';

export default function TripModal() {
  const { selectedTrip, showTripModal, setShowTripModal, setActiveTab } = useApp();

  const discussions = selectedTrip ? (tripDiscussions[selectedTrip.id] || []) : [];

  if (!selectedTrip) return null;

  return (
    <AnimatePresence>
      {showTripModal && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowTripModal(false)}
        >
          <motion.div
            className="relative w-full max-w-3xl max-h-[90vh] rounded-3xl overflow-hidden glass"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-20 p-2 rounded-full glass hover:bg-white/20 transition-colors"
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowTripModal(false)}
            >
              <X size={20} />
            </motion.button>

            {/* Scroll Container */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Hero Image */}
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedTrip.image}
                  alt={selectedTrip.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ backgroundColor: selectedTrip.color }}
                />

                {/* Header Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{selectedTrip.flag}</span>
                    <span className="text-xl">{selectedTrip.country}</span>
                  </div>
                  <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-white mb-2">
                    {selectedTrip.name} {selectedTrip.subtitle}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Calendar, label: 'Dates', value: selectedTrip.dates },
                    { icon: Users, label: 'Travelers', value: `${selectedTrip.travelers}/${selectedTrip.maxTravelers}` },
                    { icon: DollarSign, label: 'Budget', value: selectedTrip.budget },
                    { icon: Clock, label: 'Level', value: selectedTrip.activityLevel },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="p-4 rounded-xl bg-white/5 text-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <stat.icon className="mx-auto mb-2 text-primary" size={20} />
                      <div className="text-xs text-text-secondary">{stat.label}</div>
                      <div className="font-semibold text-sm mt-1">{stat.value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-outfit font-bold text-lg mb-2">About This Trip</h3>
                  <p className="text-text-secondary">{selectedTrip.description}</p>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="font-outfit font-bold text-lg mb-3">Trip Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTrip.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 p-3 rounded-xl bg-white/5"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <span className="text-primary">{highlight.charAt(0)}</span>
                        <span className="text-sm">{highlight.slice(2)}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Discussion */}
                <div>
                  <h3 className="font-outfit font-bold text-lg mb-3">Group Discussion</h3>
                  <div className="space-y-3">
                    {discussions.length > 0 ? (
                      discussions.map((msg, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white/5"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <img
                            src={msg.avatar}
                            alt={msg.user}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">{msg.user}</span>
                              <span className="text-xs text-text-secondary">{msg.time}</span>
                            </div>
                            <p className="text-sm text-text-secondary">{msg.text}</p>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <p className="text-text-secondary text-sm">No discussions yet. Be the first!</p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2 mt-4">
                    <input
                      type="text"
                      placeholder="Add to the discussion..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
                    />
                    <motion.button
                      className="px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Send size={18} />
                    </motion.button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setShowTripModal(false);
                      setActiveTab('messages');
                    }}
                  >
                    <Send size={18} />
                    Join Trip
                  </motion.button>
                  <motion.button
                    className="px-6 py-4 rounded-xl glass text-white font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowTripModal(false)}
                  >
                    Save for Later
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}