import { createContext, useContext, useState, useEffect } from 'react';
import { destinations as defaultDestinations, travelers as defaultTravelers, conversations as defaultConversations, currentUser as defaultUser } from '../data/mockData';

const AppContext = createContext();

// Initial data storage
const initializeStorage = () => {
  if (!localStorage.getItem('luxTravelUsers')) {
    localStorage.setItem('luxTravelUsers', JSON.stringify([]));
  }
  if (!localStorage.getItem('luxTravelTrips')) {
    localStorage.setItem('luxTravelTrips', JSON.stringify(defaultDestinations));
  }
  if (!localStorage.getItem('luxTravelConversations')) {
    localStorage.setItem('luxTravelConversations', JSON.stringify(defaultConversations));
  }
  if (!localStorage.getItem('luxTravelCurrentUser')) {
    localStorage.setItem('luxTravelCurrentUser', JSON.stringify(null));
  }
};

export function AppProvider({ children }) {
  const [activeTab, setActiveTab] = useState('explore');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showTripModal, setShowTripModal] = useState(false);
  const [activeConversation, setActiveConversation] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  // Data states
  const [currentUser, setCurrentUser] = useState(null);
  const [allTrips, setAllTrips] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState([]);

  // Initialize and load data
  useEffect(() => {
    initializeStorage();
    loadData();
  }, []);

  const loadData = () => {
    const trips = JSON.parse(localStorage.getItem('luxTravelTrips') || '[]');
    const convos = JSON.parse(localStorage.getItem('luxTravelConversations') || '[]');
    const allUsers = JSON.parse(localStorage.getItem('luxTravelUsers') || '[]');
    const user = JSON.parse(localStorage.getItem('luxTravelCurrentUser') || 'null');

    setAllTrips(trips);
    setConversations(convos);
    setUsers(allUsers);
    setCurrentUser(user);
  };

  // Auth functions
  const signup = (name, email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('luxTravelUsers') || '[]');

    if (existingUsers.find(u => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      location: '',
      flag: '🌍',
      bio: '',
      photos: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'],
      destinations: [],
      travelStyle: 'Adventure',
      interests: [],
      available: [],
      joinedTrips: []
    };

    existingUsers.push(newUser);
    localStorage.setItem('luxTravelUsers', JSON.stringify(existingUsers));
    localStorage.setItem('luxTravelCurrentUser', JSON.stringify(newUser));

    setUsers(existingUsers);
    setCurrentUser(newUser);
    setShowAuthModal(false);

    return { success: true };
  };

  const login = (email, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('luxTravelUsers') || '[]');
    const user = existingUsers.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: 'Invalid email or password' };
    }

    localStorage.setItem('luxTravelCurrentUser', JSON.stringify(user));
    setCurrentUser(user);
    setShowAuthModal(false);

    return { success: true };
  };

  const logout = () => {
    localStorage.setItem('luxTravelCurrentUser', JSON.stringify(null));
    setCurrentUser(null);
    setActiveTab('explore');
  };

  // Trip functions
  const createTrip = (tripData) => {
    if (!currentUser) return { success: false, message: 'Please login first' };

    const newTrip = {
      id: Date.now(),
      ...tripData,
      organizerId: currentUser.id,
      organizerName: currentUser.name,
      travelers: [currentUser.id],
      createdAt: new Date().toISOString()
    };

    const updatedTrips = [...allTrips, newTrip];
    localStorage.setItem('luxTravelTrips', JSON.stringify(updatedTrips));
    setAllTrips(updatedTrips);

    // Add trip to user's joined trips
    updateUserProfile(currentUser.id, { joinedTrips: [...(currentUser.joinedTrips || []), newTrip.id] });

    return { success: true, trip: newTrip };
  };

  const updateTrip = (tripId, updates) => {
    const updatedTrips = allTrips.map(t => t.id === tripId ? { ...t, ...updates } : t);
    localStorage.setItem('luxTravelTrips', JSON.stringify(updatedTrips));
    setAllTrips(updatedTrips);
  };

  const deleteTrip = (tripId) => {
    const updatedTrips = allTrips.filter(t => t.id !== tripId);
    localStorage.setItem('luxTravelTrips', JSON.stringify(updatedTrips));
    setAllTrips(updatedTrips);
  };

  const joinTrip = (tripId) => {
    if (!currentUser) return { success: false, message: 'Please login first' };

    const trip = allTrips.find(t => t.id === tripId);
    if (!trip) return { success: false, message: 'Trip not found' };
    if (trip.travelers.includes(currentUser.id)) {
      return { success: false, message: 'Already joined this trip' };
    }

    const updatedTrips = allTrips.map(t =>
      t.id === tripId ? { ...t, travelers: [...t.travelers, currentUser.id] } : t
    );
    localStorage.setItem('luxTravelTrips', JSON.stringify(updatedTrips));
    setAllTrips(updatedTrips);

    // Add to user's joined trips
    updateUserProfile(currentUser.id, {
      joinedTrips: [...(currentUser.joinedTrips || []), tripId]
    });

    return { success: true };
  };

  const leaveTrip = (tripId) => {
    if (!currentUser) return { success: false };

    const updatedTrips = allTrips.map(t =>
      t.id === tripId ? { ...t, travelers: t.travelers.filter(id => id !== currentUser.id) } : t
    );
    localStorage.setItem('luxTravelTrips', JSON.stringify(updatedTrips));
    setAllTrips(updatedTrips);

    // Remove from user's joined trips
    updateUserProfile(currentUser.id, {
      joinedTrips: (currentUser.joinedTrips || []).filter(id => id !== tripId)
    });

    return { success: true };
  };

  // Profile functions
  const updateUserProfile = (userId, updates) => {
    const updatedUsers = users.map(u => u.id === userId ? { ...u, ...updates } : u);
    localStorage.setItem('luxTravelUsers', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    if (currentUser && currentUser.id === userId) {
      const updatedCurrent = { ...currentUser, ...updates };
      localStorage.setItem('luxTravelCurrentUser', JSON.stringify(updatedCurrent));
      setCurrentUser(updatedCurrent);
    }
  };

  // Messaging functions
  const sendMessage = (conversationId, text) => {
    if (!currentUser) return { success: false, message: 'Please login first' };

    const newMessage = {
      sender: 'me',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    if (conversationId) {
      // Update existing conversation
      const updatedConvos = conversations.map(c =>
        c.id === conversationId
          ? { ...c, messages: [...c.messages, newMessage], lastMessage: text, time: 'Just now', unread: false }
          : c
      );
      localStorage.setItem('luxTravelConversations', JSON.stringify(updatedConvos));
      setConversations(updatedConvos);
    } else {
      // Create new conversation
      // This would need a recipient - simplified for now
    }

    return { success: true };
  };

  const startConversation = (userId) => {
    if (!currentUser) return { success: false, message: 'Please login first' };

    const otherUser = users.find(u => u.id === userId);
    if (!otherUser) return { success: false, message: 'User not found' };

    // Check if conversation already exists
    const existing = conversations.find(c =>
      c.name === otherUser.name && c.id !== currentUser.id
    );

    if (existing) {
      return { success: true, conversationId: existing.id };
    }

    // Create new conversation
    const newConvo = {
      id: Date.now(),
      name: otherUser.name,
      photo: otherUser.photos[0],
      lastMessage: '',
      time: 'Just now',
      unread: false,
      messages: []
    };

    const updatedConvos = [...conversations, newConvo];
    localStorage.setItem('luxTravelConversations', JSON.stringify(updatedConvos));
    setConversations(updatedConvos);

    return { success: true, conversationId: newConvo.id };
  };

  // Get all users except current
  const getAllUsers = () => users.filter(u => u.id !== currentUser?.id);

  // Derived data
  const filteredTrips = allTrips.filter(trip =>
    trip.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const myTrips = currentUser
    ? allTrips.filter(t => (currentUser.joinedTrips || []).includes(t.id))
    : [];

  const availableTrips = currentUser
    ? allTrips.filter(t => !(currentUser.joinedTrips || []).includes(t.id))
    : allTrips;

  const value = {
    // Navigation
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,

    // Trips
    trips: filteredTrips,
    allTrips,
    myTrips,
    availableTrips,
    createTrip,
    updateTrip,
    deleteTrip,
    joinTrip,
    leaveTrip,
    getTripById: (id) => allTrips.find(t => t.id === id),

    // Users
    currentUser,
    users,
    getAllUsers,
    getTravelers: () => getAllUsers(),

    // Conversations
    conversations,
    sendMessage,
    startConversation,

    // Profile
    updateUserProfile,

    // Auth
    showAuthModal,
    setShowAuthModal,
    authMode,
    setAuthMode,
    signup,
    login,
    logout,

    // UI
    selectedTrip,
    setSelectedTrip,
    showTripModal,
    setShowTripModal,
    activeConversation,
    setActiveConversation
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