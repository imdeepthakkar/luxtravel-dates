import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, MapPin, Calendar, DollarSign, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';

const countries = [
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Indonesia', flag: '🇮🇩' },
  { name: 'New Zealand', flag: '🇳🇿' },
  { name: 'Morocco', flag: '🇲🇦' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Portugal', flag: '🇵🇹' },
];

const travelStyles = ['Adventure', 'Culture', 'Luxury', 'Budget', 'Backpacker'];
const activityLevels = ['Light', 'Moderate', 'Active', 'Extreme'];

export default function CreateTripModal({ show, onClose }) {
  const { createTrip, currentUser } = useApp();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    flag: '',
    subtitle: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: '',
    activityLevel: 'Moderate',
    accommodation: '',
    highlights: [''],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountrySelect = (country) => {
    setFormData(prev => ({
      ...prev,
      country: country.name,
      flag: country.flag
    }));
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData(prev => ({ ...prev, highlights: newHighlights }));
  };

  const addHighlight = () => {
    setFormData(prev => ({ ...prev, highlights: [...prev.highlights, ''] }));
  };

  const removeHighlight = (index) => {
    const newHighlights = formData.highlights.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, highlights: newHighlights }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.country || !formData.startDate || !formData.endDate) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const filteredHighlights = formData.highlights.filter(h => h.trim());

      const result = createTrip({
        ...formData,
        dates: `${formData.startDate} - ${formData.endDate}`,
        highlights: filteredHighlights.length > 0 ? filteredHighlights : ['🌟 Amazing experience await'],
        travelers: 1,
        maxTravelers: 15,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`
      });

      if (result.success) {
        onClose();
        setFormData({
          name: '',
          country: '',
          flag: '',
          subtitle: '',
          description: '',
          startDate: '',
          endDate: '',
          budget: '',
          activityLevel: 'Moderate',
          accommodation: '',
          highlights: [''],
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'
        });
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert('Failed to create trip');
    }

    setLoading(false);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] rounded-2xl glass p-6 overflow-y-auto"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
          >
            <X size={20} />
          </motion.button>

          <div className="text-center mb-6">
            <h2 className="font-outfit text-2xl font-bold">Create New Trip</h2>
            <p className="text-text-secondary">Share your adventure with others</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Destination Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Destination Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Tokyo, Paris, Bali"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
                required
              />
            </div>

            {/* Country Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Country *</label>
              <div className="flex flex-wrap gap-2">
                {countries.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => handleCountrySelect(c)}
                    className={`px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                      formData.country === c.name
                        ? 'bg-primary text-white'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span className="text-sm">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Subtitle */}
            <div>
              <label className="block text-sm font-medium mb-2">Trip Theme</label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                placeholder="e.g., Sakura Season, Wine & Lights"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell travelers what makes this trip special..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary resize-none"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">End Date *</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white"
                  required
                />
              </div>
            </div>

            {/* Budget & Activity */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="$2,000 - $3,000"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Activity Level</label>
                <select
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white"
                >
                  {activityLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Accommodation */}
            <div>
              <label className="block text-sm font-medium mb-2">Accommodation Type</label>
              <input
                type="text"
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
                placeholder="e.g., Boutique Hotels, Hostels, Villas"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
              />
            </div>

            {/* Highlights */}
            <div>
              <label className="block text-sm font-medium mb-2">Trip Highlights</label>
              {formData.highlights.map((highlight, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={highlight}
                    onChange={(e) => handleHighlightChange(index, e.target.value)}
                    placeholder="e.g., 🌸 Cherry Blossom Viewing"
                    className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-white placeholder-text-secondary"
                  />
                  {formData.highlights.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeHighlight(index)}
                      className="px-3 py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addHighlight}
                className="text-primary text-sm hover:underline"
              >
                + Add another highlight
              </button>
            </div>

            {/* Submit */}
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
                  Creating Trip...
                </>
              ) : (
                <>
                  <MapPin size={20} />
                  Create Trip
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}