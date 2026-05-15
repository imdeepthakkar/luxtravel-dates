import { motion } from 'framer-motion';
import { Calendar, Users, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function DestinationCard({ destination }) {
  const { setSelectedTrip, setShowTripModal } = useApp();

  const handleClick = () => {
    setSelectedTrip(destination);
    setShowTripModal(true);
  };

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden glass group cursor-pointer"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-transparent to-transparent" />

        {/* Flag Badge */}
        <motion.div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass flex items-center gap-2"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
        >
          <span className="text-lg">{destination.flag}</span>
          <span className="font-semibold text-sm">{destination.country}</span>
        </motion.div>

        {/* Traveler Count */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full glass flex items-center gap-2">
          <Users size={14} />
          <span className="text-sm font-medium">{destination.travelers}</span>
        </div>

        {/* Color Overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundColor: destination.color }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-outfit font-bold text-xl text-white group-hover:text-primary transition-colors">
              {destination.name}
            </h3>
            <p className="text-text-secondary text-sm">{destination.subtitle}</p>
          </div>
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: destination.color }}
          />
        </div>

        {/* Dates */}
        <div className="flex items-center gap-2 text-text-secondary text-sm mb-4">
          <Calendar size={14} className="text-primary" />
          <span>{destination.dates}</span>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm line-clamp-2 mb-4">
          {destination.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-primary font-semibold text-sm">{destination.budget}</span>
          <motion.div
            className="flex items-center gap-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ x: 5 }}
          >
            View Trip
            <ArrowRight size={16} />
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: destination.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${(destination.travelers / destination.maxTravelers) * 100}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}