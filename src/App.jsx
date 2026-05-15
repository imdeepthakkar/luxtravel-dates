import { AnimatePresence } from 'framer-motion';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TripModal from './components/TripModal';
import AuthModal from './components/AuthModal';
import CreateTripModal from './components/CreateTripModal';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Trips from './pages/Trips';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

function AppContent() {
  const { activeTab } = useApp();

  const renderPage = () => {
    switch (activeTab) {
      case 'explore':
        return <Explore />;
      case 'trips':
        return <Trips />;
      case 'messages':
        return <Messages />;
      case 'profile':
        return <Profile />;
      case 'admin':
        return <Admin />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      <Navbar />
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
      <Footer />
      <TripModal />
      <AuthModal />
      <CreateTripModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}