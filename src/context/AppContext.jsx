import { createContext, useContext, useState } from 'react';
import { destinations, travelers, conversations, currentUser } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showTripModal, setShowTripModal] = useState(false);
  const [activeConversation, setActiveConversation] = useState(null);
  const [myTrips, setMyTrips] = useState([1, 3]); // Trip IDs user has joined
  const [savedProfiles, setSavedProfiles] = useState([]);
  const [matches, setMatches] = useState([2, 4]); // Traveler IDs matched with

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getMatchingTravelers = () => {
    return travelers.filter(t => matches.includes(t.id));
  };

  const getTripById = (id) => {
    return destinations.find(d => d.id === id);
  };

  const getConversations = () => conversations;

  const getCurrentUser = () => currentUser;

  const value = {
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    destinations: filteredDestinations,
    allDestinations: destinations,
    travelers,
    getMatchingTravelers,
    getTripById,
    getConversations,
    getCurrentUser,
    selectedTrip,
    setSelectedTrip,
    showTripModal,
    setShowTripModal,
    activeConversation,
    setActiveConversation,
    myTrips,
    savedProfiles,
    setSavedProfiles,
    matches
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}