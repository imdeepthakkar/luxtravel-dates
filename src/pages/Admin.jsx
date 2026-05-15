import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Map, MessageCircle, Settings, Trash2, Edit, Eye, Shield, BarChart3, Calendar, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Admin() {
  const { users, allTrips, conversations, currentUser, deleteTrip, updateTrip } = useApp();
  const [activeAdminTab, setActiveAdminTab] = useState('dashboard');
  const [selectedTrip, setSelectedTrip] = useState(null);

  // Check if current user is admin (hardcoded for demo)
  const isAdmin = currentUser?.email === 'admin@luxtravel.com' || currentUser?.name === 'Deep Thakkar';

  // Demo: allow any logged in user to access admin for now
  const hasAccess = currentUser !== null;

  const adminTabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'trips', label: 'Manage Trips', icon: Map },
    { id: 'users', label: 'Manage Users', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  if (!hasAccess) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <Shield size={64} className="mx-auto mb-4 text-text-secondary" />
          <h2 className="font-outfit text-2xl font-bold mb-2">Admin Access Required</h2>
          <p className="text-text-secondary">Please login to access the admin panel</p>
        </div>
      </div>
    );
  }

  // Stats calculation
  const stats = {
    totalTrips: allTrips.length,
    totalUsers: users.length + 1, // +1 for current user not in users array
    totalConversations: conversations.length,
    activeTrips: allTrips.filter(t => new Date(t.startDate) > new Date()).length,
    totalTravelers: allTrips.reduce((acc, t) => acc + (t.travelers?.length || 0), 0),
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Trips', value: stats.totalTrips, icon: Map, color: 'text-primary' },
          { label: 'Total Users', value: stats.totalUsers, icon: Users, color: 'text-secondary' },
          { label: 'Conversations', value: stats.totalConversations, icon: MessageCircle, color: 'text-accent' },
          { label: 'Active Trips', value: stats.activeTrips, icon: Calendar, color: 'text-emerald-400' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl glass"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <stat.icon className={`${stat.color} mb-2`} size={24} />
            <div className="font-outfit text-3xl font-bold">{stat.value}</div>
            <div className="text-text-secondary text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl glass">
          <h3 className="font-outfit text-xl font-bold mb-4">Recent Trips</h3>
          <div className="space-y-3">
            {allTrips.slice(-5).reverse().map((trip) => (
              <div key={trip.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{trip.flag}</span>
                  <div>
                    <div className="font-medium">{trip.name}</div>
                    <div className="text-text-secondary text-sm">{trip.dates}</div>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-sm">
                  {trip.travelers?.length || 1} travelers
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl glass">
          <h3 className="font-outfit text-xl font-bold mb-4">Recent Users</h3>
          <div className="space-y-3">
            {users.slice(-5).reverse().map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <img
                    src={user.photos?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-text-secondary text-sm">{user.email}</div>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full bg-accent/20 text-accent text-sm">
                  {user.joinedTrips?.length || 0} trips
                </span>
              </div>
            ))}
            {currentUser && !users.find(u => u.id === currentUser.id) && (
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <img
                    src={currentUser.photos?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'}
                    alt={currentUser.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{currentUser.name} (You)</div>
                    <div className="text-text-secondary text-sm">{currentUser.email}</div>
                  </div>
                </div>
                <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary text-sm">
                  {currentUser.joinedTrips?.length || 0} trips
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTrips = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-outfit text-xl font-bold">All Trips ({allTrips.length})</h3>
      </div>

      <div className="space-y-3">
        {allTrips.map((trip) => (
          <motion.div
            key={trip.id}
            className="p-4 rounded-2xl glass flex items-center justify-between"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={trip.image}
                alt={trip.name}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <div className="font-semibold flex items-center gap-2">
                  <span>{trip.flag}</span>
                  {trip.name}, {trip.country}
                </div>
                <div className="text-text-secondary text-sm">{trip.dates}</div>
                <div className="text-text-secondary text-sm">
                  {trip.travelers?.length || 1} travelers • Budget: {trip.budget || 'N/A'}
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <motion.button
                className="p-2 rounded-lg bg-white/10 hover:bg-primary/20 transition-colors"
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setSelectedTrip(trip);
                }}
              >
                <Eye size={18} />
              </motion.button>
              <motion.button
                className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  if (confirm('Are you sure you want to delete this trip?')) {
                    deleteTrip(trip.id);
                  }
                }}
              >
                <Trash2 size={18} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {allTrips.length === 0 && (
        <div className="text-center py-12 text-text-secondary">
          No trips found. Create one to get started.
        </div>
      )}
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-4">
      <h3 className="font-outfit text-xl font-bold">All Users ({users.length + (currentUser ? 1 : 0)})</h3>

      <div className="space-y-3">
        {currentUser && (
          <motion.div
            className="p-4 rounded-2xl glass flex items-center justify-between border border-secondary/30"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={currentUser.photos?.[0]}
                alt={currentUser.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary"
              />
              <div>
                <div className="font-semibold flex items-center gap-2">
                  {currentUser.name} <span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary text-xs">You</span>
                </div>
                <div className="text-text-secondary text-sm">{currentUser.email}</div>
                <div className="text-text-secondary text-sm">{currentUser.joinedTrips?.length || 0} trips joined</div>
              </div>
            </div>
          </motion.div>
        )}

        {users.map((user) => (
          <motion.div
            key={user.id}
            className="p-4 rounded-2xl glass flex items-center justify-between"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={user.photos?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold">{user.name}</div>
                <div className="text-text-secondary text-sm">{user.email}</div>
                <div className="text-text-secondary text-sm">{user.joinedTrips?.length || 0} trips joined</div>
              </div>
            </div>

            <div className="flex gap-2">
              <span className={`px-2 py-1 rounded-full text-xs ${
                user.travelStyle === 'Adventure' ? 'bg-primary/20 text-primary' :
                user.travelStyle === 'Luxury' ? 'bg-secondary/20 text-secondary' :
                'bg-accent/20 text-accent'
              }`}>
                {user.travelStyle || 'Explorer'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-4">
      <h3 className="font-outfit text-xl font-bold">Conversations ({conversations.length})</h3>

      <div className="space-y-3">
        {conversations.map((conv) => (
          <motion.div
            key={conv.id}
            className="p-4 rounded-2xl glass"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={conv.photo}
                alt={conv.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold">{conv.name}</div>
                <div className="text-text-secondary text-sm truncate">{conv.lastMessage || 'No messages yet'}</div>
                <div className="text-text-secondary text-xs">{conv.time}</div>
              </div>
              {conv.unread && (
                <div className="w-3 h-3 bg-primary rounded-full" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {conversations.length === 0 && (
        <div className="text-center py-12 text-text-secondary">
          No conversations yet.
        </div>
      )}
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="font-outfit text-xl font-bold">Platform Settings</h3>

      <div className="space-y-4">
        <div className="p-4 rounded-2xl glass">
          <h4 className="font-semibold mb-3">General Settings</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Allow new user registration</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
            </label>
            <label className="flex items-center justify-between">
              <span>Enable trip creation for all users</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
            </label>
            <label className="flex items-center justify-between">
              <span>Require email verification</span>
              <input type="checkbox" className="w-5 h-5 accent-primary" />
            </label>
          </div>
        </div>

        <div className="p-4 rounded-2xl glass">
          <h4 className="font-semibold mb-3">Safety Settings</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Enable content moderation</span>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
            </label>
            <label className="flex items-center justify-between">
              <span>Require profile completion</span>
              <input type="checkbox" className="w-5 h-5 accent-primary" />
            </label>
          </div>
        </div>

        <div className="p-4 rounded-2xl glass">
          <h4 className="font-semibold mb-3 text-red-400">Danger Zone</h4>
          <div className="space-y-3">
            <button className="w-full py-2 px-4 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
              Clear All Messages
            </button>
            <button className="w-full py-2 px-4 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
              Reset All Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
            <Shield size={28} />
          </div>
          <div>
            <h1 className="font-outfit text-3xl font-bold">Admin Panel</h1>
            <p className="text-text-secondary">Manage your platform</p>
          </div>
        </motion.div>

        {/* Admin Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {adminTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveAdminTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-colors ${
                activeAdminTab === tab.id
                  ? 'bg-primary text-white'
                  : 'glass hover:bg-white/10'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon size={18} />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeAdminTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {activeAdminTab === 'dashboard' && renderDashboard()}
          {activeAdminTab === 'trips' && renderTrips()}
          {activeAdminTab === 'users' && renderUsers()}
          {activeAdminTab === 'messages' && renderMessages()}
          {activeAdminTab === 'settings' && renderSettings()}
        </motion.div>
      </div>
    </div>
  );
}