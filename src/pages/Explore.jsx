import { motion } from 'framer-motion';
import DestinationCard from '../components/DestinationCard';
import { Search, Filter } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Explore() {
  const { destinations, searchQuery, setSearchQuery, allDestinations } = useApp();
  const displayedDestinations = searchQuery ? destinations : allDestinations;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-outfit text-4xl sm:text-5xl font-bold mb-4">
            Explore <span className="gradient-text">Destinations</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover amazing trips and connect with travelers heading your way
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-bg-card border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
            />
          </div>
          <motion.button
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl glass hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <Filter size={20} />
            Filters
          </motion.button>
        </motion.div>

        {/* Results Count */}
        <motion.p
          className="text-text-secondary mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Showing {displayedDestinations.length} destinations
        </motion.p>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <DestinationCard destination={dest} />
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {displayedDestinations.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="font-outfit text-xl font-semibold mb-2">No destinations found</h3>
            <p className="text-text-secondary">Try a different search term</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}