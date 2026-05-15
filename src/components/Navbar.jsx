import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MessageCircle, Map, User, Settings, Menu, X, Search, LogIn, LogOut, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';

const navItems = [
  { id: 'explore', label: 'Explore', icon: Globe },
  { id: 'trips', label: 'Trips', icon: Map },
  { id: 'messages', label: 'Messages', icon: MessageCircle },
  { id: 'profile', label: 'Profile', icon: User },
];

export default function Navbar() {
  const { activeTab, setActiveTab, searchQuery, setSearchQuery, currentUser, setShowAuthModal, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab('explore')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl">🌎</span>
            </div>
            <span className="font-outfit font-bold text-xl gradient-text hidden sm:block">
              LuxTravel Dates
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === item.id
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/20 rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.2 }}
                  />
                )}
                <span className="flex items-center gap-2">
                  <item.icon size={18} />
                  {item.label}
                </span>
              </motion.button>
            ))}
            {/* Admin Link */}
            {currentUser && (
              <motion.button
                onClick={() => setActiveTab('admin')}
                className={`relative px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'admin'
                    ? 'text-secondary'
                    : 'text-text-secondary hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <Shield size={18} />
                  Admin
                </span>
              </motion.button>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Search Toggle */}
            <motion.button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              <Search size={20} />
            </motion.button>

            {/* User Menu */}
            {currentUser ? (
              <div className="relative">
                <motion.button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={currentUser.photos?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80'}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </motion.button>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-2 w-48 rounded-xl glass overflow-hidden"
                    >
                      <div className="p-3 border-b border-white/10">
                        <div className="font-medium">{currentUser.name}</div>
                        <div className="text-text-secondary text-sm">{currentUser.email}</div>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={() => {
                            setActiveTab('profile');
                            setShowUserMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-left"
                        >
                          <User size={16} />
                          My Profile
                        </button>
                        <button
                          onClick={() => {
                            setActiveTab('admin');
                            setShowUserMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-left"
                        >
                          <Shield size={16} />
                          Admin Panel
                        </button>
                        <button
                          onClick={() => {
                            logout();
                            setShowUserMenu(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 text-left text-red-400"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn size={18} />
                <span className="hidden sm:inline">Sign In</span>
              </motion.button>
            )}

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden pb-4"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
                <input
                  type="text"
                  placeholder="Search destinations, travelers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-bg-card rounded-xl pl-12 pr-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === item.id
                      ? 'bg-primary/20 text-primary'
                      : 'hover:bg-white/10'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon size={20} />
                  {item.label}
                </motion.button>
              ))}
              {currentUser && (
                <motion.button
                  onClick={() => {
                    setActiveTab('admin');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeTab === 'admin'
                      ? 'bg-secondary/20 text-secondary'
                      : 'hover:bg-white/10'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  <Shield size={20} />
                  Admin Panel
                </motion.button>
              )}
              {currentUser ? (
                <motion.button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-red-400 hover:bg-red-500/10"
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut size={20} />
                  Logout
                </motion.button>
              ) : (
                <motion.button
                  onClick={() => {
                    setShowAuthModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white"
                  whileTap={{ scale: 0.95 }}
                >
                  <LogIn size={20} />
                  Sign In
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}