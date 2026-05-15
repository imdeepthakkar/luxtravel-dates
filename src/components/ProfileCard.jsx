import { motion } from 'framer-motion';
import { MapPin, Heart, MessageCircle, Bookmark } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ProfileCard({ traveler }) {
  const { setActiveTab, setActiveConversation } = useApp();
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden glass group"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={traveler.photo}
          alt={traveler.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />

        {/* Match Badge */}
        <motion.div
          className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-secondary font-bold text-sm"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
        >
          {traveler.matchPercent}% Match
        </motion.div>

        {/* Actions */}
        <div className="absolute top-4 left-4 flex gap-2">
          <motion.button
            className="p-2 rounded-full glass hover:bg-white/20 transition-colors"
            whileTap={{ scale: 0.8 }}
          >
            <Bookmark size={18} className={saved ? 'text-secondary fill-secondary' : 'text-white'} onClick={() => setSaved(!saved)} />
          </motion.button>
        </div>

        {/* Flag */}
        <div className="absolute bottom-4 left-4">
          <span className="text-2xl">{traveler.flag}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-outfit font-bold text-lg text-white">
              {traveler.name}, <span className="text-primary">{traveler.age}</span>
            </h3>
            <div className="flex items-center gap-1 text-text-secondary text-sm">
              <MapPin size={14} className="text-accent" />
              {traveler.location}
            </div>
          </div>
        </div>

        {/* Travel Style Badge */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
            {traveler.travelStyle}
          </span>
          {traveler.destinations.slice(0, 2).map((dest, i) => (
            <span key={i} className="px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
              {dest}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p className="text-text-secondary text-sm line-clamp-2 mb-4">
          {traveler.bio}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          <motion.button
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveTab('messages');
              setActiveConversation(traveler.id);
            }}
          >
            <MessageCircle size={16} />
            Connect
          </motion.button>
          <motion.button
            className="px-4 py-2 rounded-xl glass text-white font-medium hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

import { useState } from 'react';