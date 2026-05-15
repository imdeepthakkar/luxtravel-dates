import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import ProfileCard from '../components/ProfileCard';
import ChatList from '../components/ChatList';
import { useApp } from '../context/AppContext';

export default function Home() {
  const { destinations, travelers, getMatchingTravelers } = useApp();
  const matchedTravelers = getMatchingTravelers();
  const featuredDestinations = destinations.slice(0, 4);
  const featuredTravelers = travelers.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold">Popular Destinations</span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Find Your Next Adventure
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Explore trending destinations and connect with travelers heading the same way
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard destination={dest} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matched Travelers */}
      <section className="py-20 px-4 bg-bg-card/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold">Meet Travelers</span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Matched for Your Next Trip
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Connect with travelers who share your passion and travel style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTravelers.map((traveler, index) => (
              <motion.div
                key={traveler.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProfileCard traveler={traveler} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Chat */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold">Stay Connected</span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-bold mt-2 mb-4">
                Chat with Your Travel Community
              </h2>
              <p className="text-text-secondary mb-6">
                Plan trips, share tips, and make lasting connections with fellow adventurers.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '💬', title: 'Real-time Chat', desc: 'Instant messaging with travelers' },
                  { icon: '🎯', title: 'Trip Planning', desc: 'Coordinate itineraries together' },
                  { icon: '📸', title: 'Share Moments', desc: 'Photos and travel stories' },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl glass"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-text-secondary text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-outfit font-bold text-xl mb-4">Recent Messages</h3>
              <ChatList />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}