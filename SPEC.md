# LuxTravel Dates - Specification Document

## 1. Project Overview

**Project Name:** LuxTravel Dates
**Type:** Full-featured Single Page Application (React + Tailwind)
**Core Functionality:** A travel dating platform connecting travelers based on shared destinations, dates, and travel interests with group trip planning capabilities.
**Target Users:** Solo travelers, adventure seekers, digital nomads, travel enthusiasts seeking connections

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections:**
- Fixed Navigation Bar (top)
- Hero Section with destination showcase
- Featured Trips Grid
- Matched Travelers Carousel
- Conversations List
- Footer

**Responsive Breakpoints:**
- Mobile: < 640px (single column, stacked cards)
- Tablet: 640px - 1024px (2 column grid)
- Desktop: > 1024px (3-4 column grid, sidebar layout)

### Visual Design

**Color Palette:**
- Primary: `#6366F1` (Indigo-500)
- Primary Dark: `#4F46E5` (Indigo-600)
- Secondary: `#EC4899` (Pink-500)
- Accent: `#14B8A6` (Teal-500)
- Background Dark: `#0F172A` (Slate-900)
- Background Card: `#1E293B` (Slate-800)
- Text Primary: `#F8FAFC` (Slate-50)
- Text Secondary: `#94A3B8` (Slate-400)
- Success: `#10B981` (Emerald-500)
- Warning: `#F59E0B` (Amber-500)

**Typography:**
- Font Family: `'Outfit', sans-serif` (headings), `'DM Sans', sans-serif` (body)
- Hero Title: 56px, font-weight 700
- Section Titles: 32px, font-weight 600
- Card Titles: 20px, font-weight 600
- Body Text: 16px, font-weight 400
- Small Text: 14px, font-weight 400

**Spacing System:**
- Section Padding: 80px vertical
- Card Padding: 24px
- Grid Gap: 24px
- Component Margin: 16px

**Visual Effects:**
- Glassmorphism cards (backdrop-blur-xl, bg-opacity-80)
- Gradient overlays on images
- Smooth hover transitions (300ms ease)
- Floating animation on cards
- Glow effects on primary buttons

### Components

**Navigation:**
- Logo with animated gradient
- Nav items: Explore, Messages, Trips, Profile
- Active state: underline with glow
- Mobile: hamburger menu with slide-in drawer

**Destination Cards:**
- Country flag badge
- Destination name & subtitle
- Date range display
- Traveler count with avatars
- "View Trip" button with hover glow

**Profile Cards:**
- Circular avatar with border glow
- Name, age, location
- Match percentage with animated ring
- Travel style badges
- Connect/Message buttons

**Chat Items:**
- Avatar, name, last message preview
- Timestamp (relative time)
- Unread indicator (dot)
- Hover: background highlight

**Trip Detail Modal:**
- Full-width hero image with parallax
- Trip info (dates, location, budget)
- Highlights list with icons
- Traveler avatars row
- Discussion section
- Action buttons (Join/Message)

---

## 3. Functionality Specification

### Core Features

1. **Destination Browsing**
   - Grid of destination cards with images
   - Filter by: date range, budget, travel style
   - Search by destination name

2. **Trip Matching**
   - Compatibility score calculation
   - Swipe-style profile cards
   - Connect/Ignore actions

3. **Messaging**
   - Conversation list with previews
   - Real-time chat simulation
   - Message input with emoji support

4. **Profile Management**
   - Photo gallery (carousel)
   - Bio editor
   - Preferred destinations selector
   - Travel style selection
   - Availability calendar

5. **Trip Details**
   - Full itinerary display
   - Traveler list
   - Group chat integration
   - Join request flow

### User Interactions

- Click destination → open trip detail modal
- Swipe profile cards → match/unmatch
- Click conversation → open chat view
- Edit profile → save changes
- Join trip → request sent

### Data Handling

- Mock data for all entities (trips, profiles, messages)
- State management via React Context
- LocalStorage for user preferences

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Dark theme with gradient accents loads correctly
- [ ] All cards have glassmorphism effect
- [ ] Animations smooth at 60fps
- [ ] Responsive on all breakpoints
- [ ] Images load without layout shift

### Functional Checkpoints
- [ ] Navigation switches between views
- [ ] Modals open/close smoothly
- [ ] Profile cards are interactive
- [ ] Chat messages display correctly
- [ ] Search/filter works on destinations

### Performance
- [ ] Initial load under 3 seconds
- [ ] No console errors
- [ ] Images optimized with proper sizing

---

## 5. Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Vercel

---

## 6. File Structure

```
luxtravel-dates/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── DestinationCard.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── ChatList.jsx
│   │   ├── TripModal.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Messages.jsx
│   │   ├── Trips.jsx
│   │   └── Profile.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── context/
│   │   └── AppContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```