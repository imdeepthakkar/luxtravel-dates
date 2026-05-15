import { Globe, Heart, MessageCircle, Map, Users, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl">🌎</span>
              </div>
              <span className="font-outfit font-bold text-xl gradient-text">
                LuxTravel Dates
              </span>
            </div>
            <p className="text-text-secondary text-sm mb-4">
              Where love meets adventure. Connect with fellow travelers and discover the world together.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'Instagram', 'Facebook'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full glass hover:bg-primary/20 transition-colors flex items-center justify-center"
                >
                  <Globe size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Destinations', 'Travelers', 'Trips', 'Stories'].map((link) => (
                <li key={link}>
                  <button className="text-text-secondary hover:text-primary transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Press', 'Blog'].map((link) => (
                <li key={link}>
                  <button className="text-text-secondary hover:text-primary transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {['Help Center', 'Safety', 'Community Guidelines', 'Contact'].map((link) => (
                <li key={link}>
                  <button className="text-text-secondary hover:text-primary transition-colors text-sm">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            © 2026 LuxTravel Dates. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-text-secondary hover:text-white transition-colors">Privacy</button>
            <button className="text-text-secondary hover:text-white transition-colors">Terms</button>
            <button className="text-text-secondary hover:text-white transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}