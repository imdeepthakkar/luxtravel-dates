import { motion } from 'framer-motion';
import DestinationCard from '../components/DestinationCard';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Trips() {
  const { allDestinations, myTrips, getTripById } = useApp();

  const myTripData = myTrips.map(id => getTripById(id)).filter(Boolean);
  const availableTrips = allDestinations.filter(d => !myTrips.includes(d.id));

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
            Your <span className="gradient-text">Trips</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Manage your upcoming adventures and discover new destinations
          </p>
        </motion.div>

        {/* My Trips Section */}
        <section className="mb-16">
          <h2 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            My Trips
          </h2>

          {myTripData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myTripData.map((trip, index) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <DestinationCard destination={trip} />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12 glass rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-5xl mb-4 block">🗺️</span>
              <h3 className="font-outfit text-xl font-semibold mb-2">No trips yet</h3>
              <p className="text-text-secondary">Join a trip or create your own adventure!</p>
            </motion.div>
          )}
        </section>

        {/* Available Trips Section */}
        <section>
          <h2 className="font-outfit text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            Available Trips
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard destination={trip} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Overview */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { icon: Calendar, label: 'Trips Joined', value: myTripData.length, color: 'text-primary' },
            { icon: MapPin, label: 'Destinations', value: myTripData.length, color: 'text-secondary' },
            { icon: Users, label: 'Travelers Met', value: myTripData.length * 5, color: 'text-accent' },
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl glass text-center">
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="font-outfit text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}