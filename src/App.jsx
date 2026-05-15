import { AnimatePresence } from 'framer-motion';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TripModal from './components/TripModal';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Messages from './pages/Messages';
import Trips from './pages/Trips';
import Profile from './pages/Profile';

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