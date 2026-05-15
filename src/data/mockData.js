// Mock data for LuxTravel Dates

export const destinations = [
  {
    id: 1,
    name: 'Tokyo',
    country: 'Japan',
    flag: '🇯🇵',
    subtitle: 'Sakura Season',
    description: 'Experience the magic of cherry blossoms in Tokyo. Explore ancient temples, modern districts, and taste authentic sushi.',
    dates: 'Mar 15 - Apr 5, 2026',
    startDate: '2026-03-15',
    endDate: '2026-04-05',
    travelers: 12,
    maxTravelers: 20,
    budget: '$2,500 - $4,000',
    activityLevel: 'Moderate',
    accommodation: 'Boutique Hotels',
    highlights: [
      '🌸 Cherry Blossom Viewing at Shinjuku Gyoen',
      '🛍️ Shopping in Shibuya & Harajuku',
      '⛩️ Temple Visits in Asakusa',
      '🍣 Authentic Sushi Experience',
      '🏯 Day Trip to Mt. Fuji',
      '🎎 Traditional Tea Ceremony'
    ],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    color: '#FF6B6B'
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
    flag: '🇫🇷',
    subtitle: 'Wine & Lights',
    description: 'Fall in love with the City of Lights. Wine tastings, Eiffel Tower sunsets, and romantic strolls through Montmartre.',
    dates: 'Jun 20 - Jul 5, 2026',
    startDate: '2026-06-20',
    endDate: '2026-07-05',
    travelers: 18,
    maxTravelers: 25,
    budget: '$3,000 - $5,000',
    activityLevel: 'Light',
    accommodation: 'Boutique Hotels',
    highlights: [
      '🍷 Wine Tasting in Champagne Region',
      '🗼 Eiffel Tower Sunset Viewing',
      '🎨 Louvre Museum Tour',
      '🥐 Authentic Croissant Morning',
      '🌹 Montmartre Art District',
      '🚢 Seine River Cruise'
    ],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
    color: '#8B5CF6'
  },
  {
    id: 3,
    name: 'Rome',
    country: 'Italy',
    flag: '🇮🇹',
    subtitle: 'Ancient Romance',
    description: 'Walk through 2,000 years of history. From the Colosseum to Vatican City, experience la dolce vita.',
    dates: 'Sep 10 - 25, 2026',
    startDate: '2026-09-10',
    endDate: '2026-09-25',
    travelers: 8,
    maxTravelers: 15,
    budget: '$2,800 - $4,500',
    activityLevel: 'Moderate',
    accommodation: 'Apartments & Hotels',
    highlights: [
      '🏛️ Colosseum Guided Tour',
      '⛪ Vatican City & Sistine Chapel',
      '🍝 Authentic Pasta Making Class',
      '🏰 Trevi Fountain & Spanish Steps',
      '️ Ancient Roman Forum',
      '🍕 Roman Pizza Tour'
    ],
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
    color: '#F59E0B'
  },
  {
    id: 4,
    name: 'Barcelona',
    country: 'Spain',
    flag: '🇪🇸',
    subtitle: 'Beach Vibes',
    description: 'Sun, sea, and Gaudi architecture. Enjoy tapas, beach parties, and vibrant nightlife in Catalonia.',
    dates: 'Aug 1 - 15, 2026',
    startDate: '2026-08-01',
    endDate: '2026-08-15',
    travelers: 15,
    maxTravelers: 20,
    budget: '$2,000 - $3,500',
    activityLevel: 'Active',
    accommodation: 'Beach Hostels & Hotels',
    highlights: [
      '🏖️ Barceloneta Beach Days',
      '🏗️ Gaudi Architecture Tour',
      '🍹 Tapas & Wine Tasting',
      '🎭 Flamenco Show Evening',
      '🏔️ Montserrat Day Trip',
      '🌅 Sunset at Bunkers del Carmel'
    ],
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
    color: '#10B981'
  },
  {
    id: 5,
    name: 'Bali',
    country: 'Indonesia',
    flag: '🇮🇩',
    subtitle: 'Temple Retreat',
    description: 'Find your inner peace in Bali. Rice terraces, ancient temples, and pristine beaches await.',
    dates: 'Oct 5 - 20, 2026',
    startDate: '2026-10-05',
    endDate: '2026-10-20',
    travelers: 10,
    maxTravelers: 18,
    budget: '$1,500 - $3,000',
    activityLevel: 'Light',
    accommodation: 'Villas & Resorts',
    highlights: [
      '🛕 Uluwatu Temple Sunset',
      '🌾 Tegallalang Rice Terraces',
      '🧘 Yoga & Meditation Retreat',
      '🏊 Infinity Pool Villas',
      '🦋 Sacred Monkey Forest',
      '🌊 Uluwatu Surfing Lessons'
    ],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    color: '#14B8A6'
  },
  {
    id: 6,
    name: 'Queenstown',
    country: 'New Zealand',
    flag: '🇳🇿',
    subtitle: 'Adventure Calls',
    description: 'The adventure capital of the world. Bungee, skydiving, and stunning alpine scenery.',
    dates: 'Nov 1 - 14, 2026',
    startDate: '2026-11-01',
    endDate: '2026-11-14',
    travelers: 7,
    maxTravelers: 12,
    budget: '$3,500 - $5,500',
    activityLevel: 'Extreme',
    accommodation: 'Mountain Lodges',
    highlights: [
      '🦘 Bungee Jumping at Kawarau',
      '🪂 Skydiving over Lake Wakatipu',
      '⛷️ Skiing at Remarkables',
      '🚁 Helicopter Glacier Tour',
      '🍷 Middle Earth Wine Tour',
      '🏔️ Milford Sound Cruise'
    ],
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80',
    color: '#6366F1'
  },
  {
    id: 7,
    name: 'Marrakech',
    country: 'Morocco',
    flag: '🇲🇦',
    subtitle: 'Desert Dreams',
    description: 'Immerse yourself in colors, spices, and ancient medinas. Experience the magic of the Sahara.',
    dates: 'Nov 15 - 28, 2026',
    startDate: '2026-11-15',
    endDate: '2026-11-28',
    travelers: 9,
    maxTravelers: 15,
    budget: '$1,800 - $3,200',
    activityLevel: 'Moderate',
    accommodation: 'Riads & Desert Camps',
    highlights: [
      '🐪 Sahara Desert Camel Trek',
      '🕌 Majorelle Garden Visit',
      '🛍️ Souk Shopping Experience',
      '🌅 Hot Air Balloon Ride',
      '🍵 Traditional Hammam Spa',
      '⭐ Stargazing in the Desert'
    ],
    image: 'https://images.unsplash.com/photo-1597212720156-de3ea5aee93f?w=800&q=80',
    color: '#EC4899'
  },
  {
    id: 8,
    name: 'Santorini',
    country: 'Greece',
    flag: '🇬🇷',
    subtitle: 'Sunset Paradise',
    description: 'White-washed buildings, blue domes, and breathtaking sunsets over the Aegean Sea.',
    dates: 'May 20 - Jun 3, 2026',
    startDate: '2026-05-20',
    endDate: '2026-06-03',
    travelers: 11,
    maxTravelers: 18,
    budget: '$2,500 - $4,000',
    activityLevel: 'Light',
    accommodation: 'Cave Hotels & Villas',
    highlights: [
      '🌅 Famous Oia Sunset Viewing',
      '🏊 Swimming at Red Beach',
      '🍷 Local Wine Tasting',
      '⛵ Catamaran Sunset Cruise',
      '🏛️ Ancient Akrotiri Tour',
      '🧀 Authentic Greek Cooking Class'
    ],
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80',
    color: '#3B82F6'
  }
];

export const travelers = [
  {
    id: 1,
    name: 'Sofia Martinez',
    age: 28,
    location: 'Barcelona, Spain',
    flag: '🇪🇸',
    matchPercent: 94,
    travelStyle: 'Solo Trip',
    bio: 'Adventure seeker and coffee enthusiast. Always looking for the next hidden gem.',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    destinations: ['Tokyo', 'Barcelona'],
    interests: ['Photography', 'Hiking', 'Food'],
    available: ['Mar', 'Apr', 'Aug']
  },
  {
    id: 2,
    name: 'Marcus Chen',
    age: 32,
    location: 'San Francisco, USA',
    flag: '🇺🇸',
    matchPercent: 89,
    travelStyle: 'Adventure',
    bio: 'Software engineer by day, adrenaline junkie by night. Looking for travel buddies.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    destinations: ['Tokyo', 'Queenstown'],
    interests: ['Skydiving', 'Surfing', 'Tech'],
    available: ['Jan', 'Jun', 'Nov']
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    age: 26,
    location: 'Osaka, Japan',
    flag: '🇯🇵',
    matchPercent: 87,
    travelStyle: 'Culture',
    bio: 'Born in Japan, raised on wanderlust. Let me show you my favorite spots!',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    destinations: ['Bali', 'Rome'],
    interests: ['Art', 'Temples', 'Yoga'],
    available: ['May', 'Oct', 'Dec']
  },
  {
    id: 4,
    name: 'Elena Rossi',
    age: 30,
    location: 'Milan, Italy',
    flag: '🇮🇹',
    matchPercent: 91,
    travelStyle: 'Luxury',
    bio: 'Fashion designer with a passion for exploration. Good wine is a must!',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
    destinations: ['Paris', 'Rome', 'Santorini'],
    interests: ['Wine', 'Design', 'Shopping'],
    available: ['Jun', 'Sep', 'Oct']
  },
  {
    id: 5,
    name: 'James O\'Brien',
    age: 29,
    location: 'Dublin, Ireland',
    flag: '🇮🇪',
    matchPercent: 85,
    travelStyle: 'Backpacker',
    bio: 'Former teacher turned full-time traveler. Let\'s share stories over Guinness!',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    destinations: ['Marrakech', 'Barcelona'],
    interests: ['History', 'Music', 'Hiking'],
    available: ['Mar', 'Aug', 'Nov']
  },
  {
    id: 6,
    name: 'Aisha Patel',
    age: 27,
    location: 'Mumbai, India',
    flag: '🇮🇳',
    matchPercent: 82,
    travelStyle: 'Culture',
    bio: 'Yoga instructor exploring the world one pose at a time. Namaste!',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    destinations: ['Bali', 'Tokyo'],
    interests: ['Yoga', 'Meditation', 'Photography'],
    available: ['Apr', 'Sep', 'Oct']
  },
  {
    id: 7,
    name: 'Lucas Weber',
    age: 31,
    location: 'Berlin, Germany',
    flag: '🇩🇪',
    matchPercent: 88,
    travelStyle: 'Adventure',
    bio: 'Photographer chasing light around the globe. Let\'s capture moments together!',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    destinations: ['Queenstown', 'Marrakech'],
    interests: ['Photography', 'Mountain Biking', 'Art'],
    available: ['Jan', 'Feb', 'Nov']
  },
  {
    id: 8,
    name: 'Nina Johansson',
    age: 25,
    location: 'Stockholm, Sweden',
    flag: '🇸🇪',
    matchPercent: 79,
    travelStyle: 'Budget',
    bio: 'Graduate student with wanderlust. Expert at finding free walking tours!',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    destinations: ['Barcelona', 'Rome'],
    interests: ['History', 'Museums', 'Food'],
    available: ['Jun', 'Jul', 'Aug']
  }
];

export const conversations = [
  {
    id: 1,
    name: 'Elena Rossi',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
    lastMessage: 'Just booked my Tokyo trip! 🌸 Can\'t wait!',
    time: '2m ago',
    unread: true,
    messages: [
      { sender: 'other', text: 'Hey! Saw you\'re interested in the Tokyo trip 🎌', time: '10:30 AM' },
      { sender: 'me', text: 'Yes! So excited about the sakura season!', time: '10:32 AM' },
      { sender: 'other', text: 'Me too! I\'ve been wanting to visit for years', time: '10:33 AM' },
      { sender: 'me', text: 'Have you been to Tokyo before?', time: '10:35 AM' },
      { sender: 'other', text: 'Once, but only for a weekend. This time I want to really explore!', time: '10:36 AM' },
      { sender: 'other', text: 'Just booked my Tokyo trip! 🌸 Can\'t wait!', time: '10:40 AM' }
    ]
  },
  {
    id: 2,
    name: 'James O\'Brien',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    lastMessage: 'Can\'t wait for the vineyard tour!',
    time: '15m ago',
    unread: true,
    messages: [
      { sender: 'other', text: 'Bonjour! Interested in the Paris trip?', time: '9:15 AM' },
      { sender: 'me', text: 'Absolutely! Wine tasting is a must! 🍷', time: '9:18 AM' },
      { sender: 'other', text: 'Perfect! I found an amazing tour in Champagne', time: '9:20 AM' },
      { sender: 'me', text: 'That sounds incredible!', time: '9:22 AM' },
      { sender: 'other', text: 'Can\'t wait for the vineyard tour!', time: '9:25 AM' }
    ]
  },
  {
    id: 3,
    name: 'Mira Santos',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    lastMessage: 'Bali or Thailand? Help me decide!',
    time: '1h ago',
    unread: false,
    messages: [
      { sender: 'me', text: 'Which trip are you thinking about?', time: '8:00 AM' },
      { sender: 'other', text: 'Bali or Thailand? Help me decide!', time: '8:05 AM' },
      { sender: 'me', text: 'Bali is amazing for wellness and temples', time: '8:10 AM' }
    ]
  },
  {
    id: 4,
    name: 'Alex Kim',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    lastMessage: 'The Colosseum tour looks epic!',
    time: '2h ago',
    unread: false,
    messages: [
      { sender: 'other', text: 'Hey! Heading to Rome soon?', time: '6:00 PM' },
      { sender: 'me', text: 'Yes! So excited about the ancient ruins', time: '6:05 PM' },
      { sender: 'other', text: 'The Colosseum tour looks epic!', time: '6:10 PM' }
    ]
  },
  {
    id: 5,
    name: 'Sophie Laurent',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    lastMessage: 'See you in Barcelona! 🇪🇸',
    time: '3h ago',
    unread: false,
    messages: [
      { sender: 'me', text: 'Just joined the Barcelona trip!', time: '5:00 PM' },
      { sender: 'other', text: 'Yay! We\'ll have so much fun!', time: '5:02 PM' },
      { sender: 'other', text: 'See you in Barcelona! 🇪🇸', time: '5:05 PM' }
    ]
  }
];

export const currentUser = {
  id: 0,
  name: 'Alex Morgan',
  age: 29,
  location: 'New York, USA',
  flag: '🇺🇸',
  bio: 'Adventure seeker looking for meaningful connections in breathtaking destinations. Coffee enthusiast, sunset chaser, and amateur photographer.',
  photos: [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  ],
  destinations: ['Tokyo', 'Barcelona', 'Bali', 'Rome'],
  travelStyle: 'Adventure',
  interests: ['Photography', 'Hiking', 'Food'],
  available: ['Mar', 'Apr', 'Jun', 'Aug', 'Sep', 'Oct']
};

export const tripDiscussions = {
  1: [ // Tokyo trip
    { user: 'Elena Rossi', text: 'Should we book a tea ceremony early?', time: '5m ago', avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&q=80' },
    { user: 'James O\'Brien', text: 'I\'m flying in on the 14th!', time: '23m ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { user: 'Mira Santos', text: 'Any photography enthusiasts? 📸', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80' },
    { user: 'Alex Kim', text: 'The Mt. Fuji day trip is a must!', time: '2h ago', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80' }
  ],
  2: [ // Paris trip
    { user: 'James O\'Brien', text: 'Champagne tour is booked! 🍾', time: '1h ago', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80' },
    { user: 'Sophie Laurent', text: 'Found a cute bakery near our hotel', time: '3h ago', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80' }
  ]
};