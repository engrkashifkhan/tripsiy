// import { create } from 'zustand';

// const activities = [
//   {
//     id: 1,
//     name: "Etihad Towers Observation Deck",
//     image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 943,
//     price: 95,
//     description: "Experience breathtaking 360° panoramic views of Abu Dhabi from the 74th floor of Jumeirah at Etihad Towers.",
//     duration: "1-2 hours",
//     category: "Landmarks",
//     highlights: ["360° Views", "High Tea Option", "Stunning Sunsets"],
//     location: "Etihad Towers, Corniche Road",
//     included: ["Observation Deck Access", "Audio Guide"],
//     recommended: true
//   },
//   {
//     id: 2,
//     name: "Abu Dhabi Desert Safari",
//     image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.9,
//     reviews: 1845,
//     price: 275,
//     description: "Experience the thrill of dune bashing in the Rub' al Khali desert, camel rides, and authentic Bedouin culture.",
//     duration: "6-7 hours",
//     category: "Adventure",
//     highlights: ["Dune Bashing", "Camel Riding", "Henna Painting", "Traditional Dinner"],
//     location: "Al Khatim Desert",
//     included: ["Hotel Transfer", "Buffet Dinner", "Sandboarding", "Water & Soft Drinks"],
//     recommended: true
//   },
//   {
//     id: 3,
//     name: "Abu Dhabi Corniche Dinner Cruise",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     reviews: 756,
//     price: 150,
//     description: "Scenic dinner cruise along Abu Dhabi's Corniche with views of the skyline, Lulu Island, and Emirates Palace.",
//     duration: "2 hours",
//     category: "Cruises",
//     highlights: ["Corniche Views", "Dinner Buffet", "Live Entertainment"],
//     location: "Abu Dhabi Corniche",
//     included: ["Welcome Drink", "International Buffet", "Soft Drinks"],
//     recommended: false
//   },
//   {
//     id: 4,
//     name: "Yas Waterworld Abu Dhabi",
//     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 2210,
//     price: 260,
//     description: "Emirati-themed waterpark on Yas Island with over 40 rides, slides and attractions including the world's first hydro-magnetic tornado waterslide.",
//     duration: "Full Day",
//     category: "Water Parks",
//     highlights: ["Dawwama Slide", "Bandit Bomber", "Amwaj Wave Pool"],
//     location: "Yas Island",
//     included: ["All-Day Access", "Locker", "Free Life Jackets"],
//     recommended: true
//   },
//   {
//     id: 5,
//     name: "The Galleria Al Maryah Island",
//     image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.5,
//     reviews: 1876,
//     price: 0,
//     description: "Luxury shopping destination on Al Maryah Island with high-end brands, waterfront dining, and entertainment.",
//     duration: "Flexible",
//     category: "Shopping",
//     highlights: ["Luxury Brands", "Waterfront Dining", "Cinema", "Kids Play Area"],
//     location: "Al Maryah Island",
//     included: ["Free Entry", "WiFi", "Valet Parking Available"],
//     recommended: false
//   },
//   {
//     id: 6,
//     name: "UAE Pioneers Memorial Garden",
//     image: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.4,
//     reviews: 654,
//     price: 35,
//     description: "Beautiful memorial garden honoring UAE pioneers with native plants, walking trails, and historical displays.",
//     duration: "2-3 hours",
//     category: "Gardens",
//     highlights: ["Native Plants", "Walking Trails", "Historical Memorials"],
//     location: "Al Bateen",
//     included: ["Entrance Ticket", "Guided Tour Available"],
//     recommended: true
//   },
//   {
//     id: 7,
//     name: "Abu Dhabi Ice Rink - Zayed Sports City",
//     image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.2,
//     reviews: 543,
//     price: 85,
//     description: "Olympic-sized ice skating rink at Zayed Sports City with professional coaching and public skating sessions.",
//     duration: "2-3 hours",
//     category: "Winter Sports",
//     highlights: ["Olympic Standard", "Ice Skating Lessons", "Professional Coaches"],
//     location: "Zayed Sports City",
//     included: ["Skate Rental", "Safety Equipment", "One Session"],
//     recommended: false
//   },
//   {
//     id: 8,
//     name: "Sheikh Zayed Grand Mosque",
//     image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.9,
//     reviews: 5210,
//     price: 0,
//     description: "One of the world's largest mosques, an architectural masterpiece that can accommodate over 40,000 worshippers.",
//     duration: "1-2 hours",
//     category: "Cultural",
//     highlights: ["Free Entry", "Guided Tours", "World's Largest Carpet", "Crystal Chandeliers"],
//     location: "Sheikh Rashid Bin Saeed Street",
//     included: ["Free Entry", "Cultural Tour", "Abaya Rental"],
//     recommended: true
//   },
//   {
//     id: 9,
//     name: "Louvre Abu Dhabi",
//     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 3210,
//     price: 63,
//     description: "First universal museum in the Arab World, featuring artworks from ancient times to the contemporary era under its iconic dome.",
//     duration: "3-4 hours",
//     category: "Museums",
//     highlights: ["Rain of Light Dome", "International Artworks", "Architectural Marvel"],
//     location: "Saadiyat Cultural District",
//     included: ["Permanent Collection", "Audio Guide"],
//     recommended: true
//   },
//   {
//     id: 10,
//     name: "Ferrari World Abu Dhabi",
//     image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 4120,
//     price: 295,
//     description: "World's first Ferrari-themed park featuring Formula Rossa - the fastest roller coaster on earth and Ferrari-inspired rides.",
//     duration: "Full Day",
//     category: "Theme Parks",
//     highlights: ["Formula Rossa", "Flying Aces", "Italian Theming"],
//     location: "Yas Island",
//     included: ["All Rides", "Shows", "Free WiFi"],
//     recommended: true
//   },
//   {
//     id: 11,
//     name: "Qasr Al Watan Presidential Palace",
//     image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 1987,
//     price: 60,
//     description: "Working presidential palace open to the public, showcasing Arabian architecture and UAE's governance.",
//     duration: "2-3 hours",
//     category: "Cultural",
//     highlights: ["Presidential Palace", "Great Hall", "Library", "Light Show"],
//     location: "Al Ras Al Akhdar",
//     included: ["Palace Tour", "Audio Guide", "Gardens Access"],
//     recommended: true
//   },
//   {
//     id: 12,
//     name: "Emirates Palace Mandarin Oriental",
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 1456,
//     price: 0,
//     description: "Iconic luxury hotel offering gold cappuccino, afternoon tea, and stunning beachfront views.",
//     duration: "1-2 hours",
//     category: "Luxury",
//     highlights: ["Gold Cappuccino", "Palace Architecture", "Private Beach"],
//     location: "West Corniche",
//     included: ["Public Areas Access", "Beach Walk"],
//     recommended: false
//   }
// ];

// export const useActivityStore = create(() => ({
//   activities,
//   // Removed: selectedActivity state
  
//   // Removed: selectActivity function
  
//   // Removed: clearSelectedActivity function
  
//   getActivityById: (id) => {
//     return activities.find(item => item.id === id);
//   }
// }));







// import { create } from 'zustand';

// const activities = [
//   {
//     id: 1,
//     name: "Burj Khalifa Top Deck",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 1254,
//     price: 299,
//     description: "Experience the world's tallest building with breathtaking views from the 148th floor.",
//     duration: "2-3 hours",
//     category: "Landmarks",
//     highlights: ["Priority Access", "Digital Photos", "Audio Guide"],
//     location: "Downtown Dubai",
//     included: ["Entrance Ticket", "Audio Guide", "Digital Photos"],
//     recommended: true
//   },
//   {
//     id: 2,
//     name: "kashif Desert Safari",
//     image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.9,
//     reviews: 2310,
//     price: 350,
//     description: "Thrilling desert adventure with dune bashing, camel rides, and traditional entertainment.",
//     duration: "6-7 hours",
//     category: "Adventure",
//     highlights: ["Dune Bashing", "Camel Ride", "BBQ Dinner", "Belly Dance"],
//     location: "Dubai Desert",
//     included: ["Hotel Transfer", "Dinner", "Activities", "Water"],
//     recommended: true
//   },
//   {
//     id: 3,
//     name: "Dubai Marina Cruise",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 987,
//     price: 180,
//     description: "Relaxing dinner cruise through Dubai Marina with stunning skyline views.",
//     duration: "2 hours",
//     category: "Cruises",
//     highlights: ["Buffet Dinner", "Live Music", "Skyline Views"],
//     location: "Dubai Marina",
//     included: ["Dinner", "Drinks", "Entertainment"],
//     recommended: false
//   },
//   {
//     id: 4,
//     name: "Aquaventure Waterpark",
//     image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     reviews: 1543,
//     price: 250,
//     description: "World's largest waterpark at Atlantis The Palm with thrilling slides and marine life.",
//     duration: "Full Day",
//     category: "Water Parks",
//     highlights: ["Water Slides", "Lazy River", "Private Beach"],
//     location: "Palm Jumeirah",
//     included: ["All-Day Access", "Locker", "Towel"],
//     recommended: true
//   },
//   {
//     id: 5,
//     name: "Dubai Mall Shopping",
//     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.5,
//     reviews: 3120,
//     price: 0,
//     description: "World's largest shopping destination with luxury brands and entertainment.",
//     duration: "Flexible",
//     category: "Shopping",
//     highlights: ["1200+ Stores", "Dubai Fountain", "Aquarium"],
//     location: "Downtown Dubai",
//     included: ["Free Entry", "WiFi", "Parking"],
//     recommended: false
//   },
//   {
//     id: 6,
//     name: "Miracle Garden",
//     image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.4,
//     reviews: 876,
//     price: 55,
//     description: "World's largest natural flower garden featuring over 150 million flowers.",
//     duration: "2-3 hours",
//     category: "Gardens",
//     highlights: ["Floral Displays", "Butterfly Garden", "Photo Spots"],
//     location: "Dubailand",
//     included: ["Entrance Ticket", "Parking"],
//     recommended: true
//   },
//   {
//     id: 7,
//     name: "Ski Dubai",
//     image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.3,
//     reviews: 765,
//     price: 220,
//     description: "Indoor ski resort with real snow, penguin encounters, and winter activities.",
//     duration: "3-4 hours",
//     category: "Winter Sports",
//     highlights: ["Skiing", "Snowboarding", "Penguin Encounter"],
//     location: "Mall of the Emirates",
//     included: ["Equipment Rental", "Winter Clothes", "Access to Attractions"],
//     recommended: false
//   },
//   {
//     id: 8,
//     name: "Dubai Frame",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.2,
//     reviews: 543,
//     price: 50,
//     description: "Iconic structure connecting Dubai's past and present with panoramic views.",
//     duration: "1-2 hours",
//     category: "Landmarks",
//     highlights: ["Glass Bridge", "Old vs New Dubai", "Observation Deck"],
//     location: "Zabeel Park",
//     included: ["Entrance Ticket", "Audio Guide"],
//     recommended: true
//   }
// ];

// export const useActivityStore = create((set) => ({
//   activities,
//   selectedActivity: null,
  
//   selectActivity: (id) => {
//     const activity = activities.find(item => item.id === id);
//     set({ selectedActivity: activity });
//   },
  
//   clearSelectedActivity: () => set({ selectedActivity: null }),
  
//   getActivityById: (id) => {
//     return activities.find(item => item.id === id);
//   }
// }));






// import { create } from 'zustand';

// const activities = [
//   {
//     id: 101,
//     name: "Sheikh Zayed Grand Mosque",
//     image: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.9,
//     reviews: 1850,
//     price: 0,
//     description: "Visit one of the world's largest mosques with stunning architecture and serene atmosphere.",
//     duration: "2-3 hours",
//     category: "Cultural",
//     highlights: ["Free Entry", "Guided Tours", "Cultural Experience", "Architectural Marvel"],
//     location: "Sheikh Zayed Grand Mosque",
//     included: ["Entry Ticket", "Cultural Guide", "Prayer Attire"],
//     recommended: true
//   },
//   {
//     id: 102,
//     name: "Ferrari World Abu Dhabi",
//     image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 2145,
//     price: 325,
//     description: "World's first Ferrari-branded theme park featuring Formula Rossa, the fastest roller coaster.",
//     duration: "Full Day",
//     category: "Theme Parks",
//     highlights: ["Formula Rossa", "Ferrari Rides", "Italian Theming", "Family Activities"],
//     location: "Yas Island",
//     included: ["All-Day Access", "Access to Rides", "Locker Service"],
//     recommended: true
//   },
//   {
//     id: 103,
//     name: "Louvre Abu Dhabi",
//     image: "https://images.unsplash.com/photo-1579033462043-0f11a7862f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 1320,
//     price: 60,
//     description: "Universal museum in the Arab world with artworks spanning human history.",
//     duration: "3-4 hours",
//     category: "Museums",
//     highlights: ["Rain of Light", "Global Artworks", "Architectural Wonder", "Waterfront Views"],
//     location: "Saadiyat Island",
//     included: ["Entrance Ticket", "Audio Guide", "Temporary Exhibitions"],
//     recommended: true
//   },
//   {
//     id: 104,
//     name: "Yas Marina Circuit Experience",
//     image: "https://images.unsplash.com/photo-1621252172173-4da53c4cae4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.9,
//     reviews: 890,
//     price: 500,
//     description: "Drive on the iconic Formula 1 circuit or take a guided tour of the facilities.",
//     duration: "2-3 hours",
//     category: "Adventure",
//     highlights: ["Track Experience", "F1 History", "Professional Instructors", "High-Speed Thrills"],
//     location: "Yas Island",
//     included: ["Safety Briefing", "Equipment", "Professional Guidance", "Certificate"],
//     recommended: false
//   },
//   {
//     id: 105,
//     name: "Emirates Palace Visit",
//     image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     reviews: 1560,
//     price: 0,
//     description: "Luxurious palace hotel with stunning architecture, gold accents, and beautiful gardens.",
//     duration: "1-2 hours",
//     category: "Landmarks",
//     highlights: ["Gold Cappuccino", "Palace Architecture", "Beach Access", "Photo Opportunities"],
//     location: "Corniche Road",
//     included: ["Palace Access", "Garden Tour", "Beach Walk"],
//     recommended: false
//   },
//   {
//     id: 106,
//     name: "Mangrove Kayaking Tour",
//     image: "https://images.unsplash.com/photo-1602094397933-4c359d7a3c0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 745,
//     price: 180,
//     description: "Guided kayak tour through Abu Dhabi's natural mangrove forests and waterways.",
//     duration: "2-3 hours",
//     category: "Nature",
//     highlights: ["Eco-Tour", "Bird Watching", "Nature Photography", "Sunset Views"],
//     location: "Eastern Mangroves",
//     included: ["Kayak Rental", "Guide", "Safety Equipment", "Water"],
//     recommended: true
//   },
//   {
//     id: 107,
//     name: "Qasr Al Watan Presidential Palace",
//     image: "https://images.unsplash.com/photo-1563379091339-03246963d9d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 920,
//     price: 65,
//     description: "Working presidential palace open to public, showcasing Arab heritage and governance.",
//     duration: "2-3 hours",
//     category: "Cultural",
//     highlights: ["Palace Tours", "Light Show", "Exhibitions", "Great Hall"],
//     location: "Al Ras Al Akhdar",
//     included: ["Entrance Ticket", "Audio Guide", "Night Show"],
//     recommended: true
//   },
//   {
//     id: 108,
//     name: "Yas Waterworld",
//     image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     reviews: 1865,
//     price: 240,
//     description: "Emirati-themed waterpark with over 40 rides, slides, and attractions.",
//     duration: "Full Day",
//     category: "Water Parks",
//     highlights: ["Dawwama Slide", "Bandit Bomber", "Wave Pool", "Lazy River"],
//     location: "Yas Island",
//     included: ["All-Day Access", "Locker", "Life Jacket"],
//     recommended: false
//   },
//   {
//     id: 109,
//     name: "Heritage Village Abu Dhabi",
//     image: "https://images.unsplash.com/photo-1603575448878-868a20723f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.4,
//     reviews: 620,
//     price: 0,
//     description: "Recreated traditional village showing Emirati life before oil discovery.",
//     duration: "1-2 hours",
//     category: "Cultural",
//     highlights: ["Traditional Crafts", "Camel Enclosure", "Old Market", "Cultural Shows"],
//     location: "Breakwater",
//     included: ["Free Entry", "Cultural Demonstrations", "Photography"],
//     recommended: true
//   },
//   {
//     id: 110,
//     name: "Observation Deck at 300",
//     image: "https://images.unsplash.com/photo-1579537470383-9e2faa1e894f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.5,
//     reviews: 580,
//     price: 95,
//     description: "360-degree observation deck on the 74th floor of Conrad Abu Dhabi with breathtaking views.",
//     duration: "1-2 hours",
//     category: "Landmarks",
//     highlights: ["Skyline Views", "Photo Spots", "High Tea", "Sunset Views"],
//     location: "Etihad Towers",
//     included: ["Entry Ticket", "Audio Guide", "Welcome Drink"],
//     recommended: false
//   }
// ];

// export const useActivityStore = create((set) => ({
//   activities,
//   selectedActivity: null,
  
//   selectActivity: (id) => {
//     const activity = activities.find(item => item.id === id);
//     set({ selectedActivity: activity });
//   },
  
//   clearSelectedActivity: () => set({ selectedActivity: null }),
  
//   getActivityById: (id) => {
//     return activities.find(item => item.id === id);
//   }
// }));




import { create } from 'zustand';

const activities = [
  {
    id: 1,
    name: "Burj Khalifa Top Deck",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviews: 1254,
    price: 299,
    description: "Experience the world's tallest building with breathtaking views from the 148th floor.",
    duration: "2-3 hours",
    category: "Landmarks",
    highlights: ["Priority Access", "Digital Photos", "Audio Guide"],
    location: "Downtown Dubai",
    included: ["Entrance Ticket", "Audio Guide", "Digital Photos"],
    recommended: true
  },
  {
    id: 2,
    name: "Desert Safari",
    image: "https://images.unsplash.com/photo-1588666309990-d68f08e3d4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    reviews: 2310,
    price: 350,
    description: "Thrilling desert adventure with dune bashing, camel rides, and traditional entertainment.",
    duration: "6-7 hours",
    category: "Adventure",
    highlights: ["Dune Bashing", "Camel Ride", "BBQ Dinner", "Belly Dance"],
    location: "Dubai Desert",
    included: ["Hotel Transfer", "Dinner", "Activities", "Water"],
    recommended: true
  },
  {
    id: 3,
    name: "Dubai Marina Cruise",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    reviews: 987,
    price: 180,
    description: "Relaxing dinner cruise through Dubai Marina with stunning skyline views.",
    duration: "2 hours",
    category: "Cruises",
    highlights: ["Buffet Dinner", "Live Music", "Skyline Views"],
    location: "Dubai Marina",
    included: ["Dinner", "Drinks", "Entertainment"],
    recommended: false
  },
  {
    id: 4,
    name: "Aquaventure Waterpark",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    reviews: 1543,
    price: 250,
    description: "World's largest waterpark at Atlantis The Palm with thrilling slides and marine life.",
    duration: "Full Day",
    category: "Water Parks",
    highlights: ["Water Slides", "Lazy River", "Private Beach"],
    location: "Palm Jumeirah",
    included: ["All-Day Access", "Locker", "Towel"],
    recommended: true
  },
  {
    id: 5,
    name: "Dubai Mall Shopping",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.5,
    reviews: 3120,
    price: 0,
    description: "World's largest shopping destination with luxury brands and entertainment.",
    duration: "Flexible",
    category: "Shopping",
    highlights: ["1200+ Stores", "Dubai Fountain", "Aquarium"],
    location: "Downtown Dubai",
    included: ["Free Entry", "WiFi", "Parking"],
    recommended: false
  },
  {
    id: 6,
    name: "Miracle Garden",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.4,
    reviews: 876,
    price: 55,
    description: "World's largest natural flower garden featuring over 150 million flowers.",
    duration: "2-3 hours",
    category: "Gardens",
    highlights: ["Floral Displays", "Butterfly Garden", "Photo Spots"],
    location: "Dubailand",
    included: ["Entrance Ticket", "Parking"],
    recommended: true
  },
  {
    id: 7,
    name: "Ski Dubai",
    image: "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    reviews: 765,
    price: 220,
    description: "Indoor ski resort with real snow, penguin encounters, and winter activities.",
    duration: "3-4 hours",
    category: "Winter Sports",
    highlights: ["Skiing", "Snowboarding", "Penguin Encounter"],
    location: "Mall of the Emirates",
    included: ["Equipment Rental", "Winter Clothes", "Access to Attractions"],
    recommended: false
  },
  {
    id: 8,
    name: "Dubai Frame",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    rating: 4.2,
    reviews: 543,
    price: 50,
    description: "Iconic structure connecting Dubai's past and present with panoramic views.",
    duration: "1-2 hours",
    category: "Landmarks",
    highlights: ["Glass Bridge", "Old vs New Dubai", "Observation Deck"],
    location: "Zabeel Park",
    included: ["Entrance Ticket", "Audio Guide"],
    recommended: true
  }
];

export const useActivityStore = create((set) => ({
  activities,
  selectedActivity: null,
  
  selectActivity: (id) => {
    const activity = activities.find(item => item.id === id);
    set({ selectedActivity: activity });
  },
  
  clearSelectedActivity: () => set({ selectedActivity: null }),
  
  getActivityById: (id) => {
    return activities.find(item => item.id === id);
  }
}));

