import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Loader2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AuthModal() {
  const { showAuthModal, setShowAuthModal, authMode, setAuthMode, signup, login } = useApp();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (authMode === 'login') {
        const result = login(email, password);
        if (!result.success) {
          setError(result.message);
        }
      } else {
        if (!name.trim()) {
          setError('Please enter your name');
          setLoading(false);
          return;
        }
        const result = signup(name, email, password);
        if (!result.success) {
          setError(result.message);
        }
      }
    } catch (err) {
      setError('Something went wrong');
    }

    setLoading(false);
  };

  const switchMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
    setError('');
  };

  if (!showAuthModal) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setShowAuthModal(false)}
      >
        <motion.div
          className="relative w-full max-w-md rounded-2xl glass p-8"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowAuthModal(false)}
          >
            <X size={20} />
          </motion.button>

          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌎</span>
            </div>
            <h2 className="font-outfit text-2xl font-bold">
              {authMode === 'login' ? 'Welcome Back' : 'Join LuxTravel'}
            </h2>
            <p className="text-text-secondary mt-2">
              {authMode === 'login'
                ? 'Sign in to continue your adventure'
                : 'Create an account to start exploring'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {authMode === 'signup' && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
                required
              />
            </div>

            {error && (
              <motion.p
                className="text-red-400 text-sm text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Please wait...
                </>
              ) : (
                authMode === 'login' ? 'Sign In' : 'Create Account'
              )}
            </motion.button>
          </form>

          <p className="text-center text-text-secondary text-sm mt-6">
            {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={switchMode}
              className="text-primary hover:underline"
            >
              {authMode === 'login' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}