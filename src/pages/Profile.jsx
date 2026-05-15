import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Calendar, Heart, Settings, Edit2, Save, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { currentUser } from '../data/mockData';

export default function Profile() {
  const { getCurrentUser } = useApp();
  const user = getCurrentUser();
  const [isEditing, setIsEditing] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="h-48 sm:h-64 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-8xl opacity-20">🌎</span>
            </div>
          </div>

          {/* Avatar */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="relative">
              <img
                src={user.photos[0]}
                alt={user.name}
                className="w-32 h-32 rounded-full object-cover ring-4 ring-bg-dark"
              />
              <motion.button
                className="absolute bottom-0 right-0 p-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Camera size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Profile Info */}
        <div className="text-center mt-16 mb-8">
          <motion.h1
            className="font-outfit text-3xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {user.name}, <span className="text-primary">{user.age}</span>
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2 text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MapPin size={16} className="text-accent" />
            {user.location}
            <span className="text-2xl ml-2">{user.flag}</span>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          className="glass rounded-2xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-outfit text-xl font-bold">About Me</h2>
            <motion.button
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? <X size={20} /> : <Edit2 size={20} />}
            </motion.button>
          </div>
          {isEditing ? (
            <textarea
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white resize-none"
              rows={4}
              defaultValue={user.bio}
            />
          ) : (
            <p className="text-text-secondary">{user.bio}</p>
          )}
        </motion.div>

        {/* Photos Section */}
        <motion.div
          className="glass rounded-2xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="font-outfit text-xl font-bold mb-4">Photos</h2>
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src={user.photos[activePhotoIndex]}
                alt={`Photo ${activePhotoIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {user.photos.map((_, i) => (
                <motion.button
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === activePhotoIndex ? 'bg-primary' : 'bg-white/30'
                  }`}
                  onClick={() => setActivePhotoIndex(i)}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Destinations */}
        <motion.div
          className="glass rounded-2xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-outfit text-xl font-bold mb-4">Preferred Destinations</h2>
          <div className="flex flex-wrap gap-2">
            {user.destinations.map((dest, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-white"
              >
                {dest}
              </span>
            ))}
            {isEditing && (
              <motion.button
                className="px-4 py-2 rounded-full border border-dashed border-white/30 text-text-secondary hover:text-white hover:border-primary transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                + Add
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Travel Style */}
        <motion.div
          className="glass rounded-2xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="font-outfit text-xl font-bold mb-4">Travel Style</h2>
          <div className="flex flex-wrap gap-2">
            {['Adventure', 'Culture', 'Luxury', 'Budget', 'Backpacker'].map((style) => (
              <span
                key={style}
                className={`px-4 py-2 rounded-full transition-colors ${
                  user.travelStyle === style
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-white/10 text-text-secondary hover:bg-white/20'
                }`}
              >
                {style}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Availability Calendar */}
        <motion.div
          className="glass rounded-2xl p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="font-outfit text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar size={20} />
            Availability
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {months.map((month) => {
              const isAvailable = user.available.includes(month);
              return (
                <motion.button
                  key={month}
                  className={`py-3 rounded-xl text-sm font-medium transition-colors ${
                    isAvailable
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-white/10 text-text-secondary hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {month}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Save Button */}
        {isEditing && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(false)}
            >
              <Save size={18} />
              Save Changes
            </motion.button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {[
            { icon: Heart, label: 'Connections', value: '24' },
            { icon: Calendar, label: 'Trips', value: '3' },
            { icon: MapPin, label: 'Countries', value: '8' },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl glass text-center">
              <stat.icon className="mx-auto mb-2 text-primary" size={20} />
              <div className="font-bold text-xl">{stat.value}</div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}