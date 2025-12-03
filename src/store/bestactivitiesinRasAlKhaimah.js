// import { create } from 'zustand';

// const activities = [
//   {
//     id: 1,
//     name: "Jebel Jais Viewing Deck Park",
//     image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 2356,
//     price: 45,
//     description: "Experience breathtaking panoramic views from the UAE's highest peak at 1,934 meters above sea level.",
//     duration: "2-3 hours",
//     category: "Mountains",
//     highlights: ["UAE's Highest Peak", "360° Mountain Views", "Stunning Photo Spots"],
//     location: "Jebel Jais Mountains",
//     included: ["Viewing Deck Access"],
//     recommended: true
//   },
//   {
//     id: 2,
//     name: "Jebel Jais Zipline",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
//     rating: 4.9,
//     reviews: 3124,
//     price: 550,
//     description: "World's longest zipline at 2.83 km, reaching speeds up to 150 km/h over the majestic Jebel Jais mountains.",
//     duration: "2-3 hours",
//     category: "Adventure",
//     highlights: ["World's Longest Zipline", "150 km/h Speed", "Mountain Views"],
//     location: "Jebel Jais Mountains",
//     included: ["Safety Gear", "Training", "Certificate"],
//     recommended: true
//   },
//   {
//     id: 3,
//     name: "Al Marjan Island Sunset Cruise",
//     image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 1456,
//     price: 180,
//     description: "A scenic cruise around the man-made archipelago with stunning sunset views over the Arabian Gulf.",
//     duration: "2 hours",
//     category: "Cruises",
//     highlights: ["Sunset Views", "Island Hopping", "Coastal Landscapes"],
//     location: "Al Marjan Island",
//     included: ["Boat Tour", "Refreshments"],
//     recommended: true
//   },
//   {
//     id: 4,
//     name: "Iceland Water Park",
//     image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     reviews: 2879,
//     price: 220,
//     description: "Largest water park in Ras al Khaimah with 30+ slides, wave pools, and family-friendly attractions.",
//     duration: "Full Day",
//     category: "Water Parks",
//     highlights: ["Penguin Encounters", "Thrill Slides", "Lazy River"],
//     location: "Al Hamra Village",
//     included: ["All-Day Access", "Locker"],
//     recommended: true
//   },
//   {
//     id: 5,
//     name: "RAK Pearl Museum & Souk",
//     image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80",
//     rating: 4.4,
//     reviews: 892,
//     price: 25,
//     description: "Discover Ras al Khaimah's pearl diving heritage and shop for traditional crafts and pearls.",
//     duration: "1-2 hours",
//     category: "Cultural",
//     highlights: ["Pearl Diving History", "Traditional Souk", "Local Crafts"],
//     location: "Old Town",
//     included: ["Museum Entry"],
//     recommended: false
//   },
//   {
//     id: 6,
//     name: "Al Wadi Desert Nature Reserve",
//     image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 1678,
//     price: 150,
//     description: "Protected desert reserve with native wildlife, desert activities, and luxury accommodations.",
//     duration: "Half Day",
//     category: "Nature",
//     highlights: ["Arabian Oryx", "Desert Safari", "Stargazing"],
//     location: "Wadi Khadija",
//     included: ["Nature Walk", "Wildlife Viewing"],
//     recommended: true
//   },
//   {
//     id: 7,
//     name: "Bear Grylls Explorers Camp",
//      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 1234,
//     price: 380,
//     description: "Adventure camp offering survival training, zip lines, and obstacle courses in the desert mountains.",
//     duration: "3-4 hours",
//     category: "Adventure",
//     highlights: ["Survival Training", "Obstacle Courses", "Desert Skills"],
//     location: "Jebel Jais",
//     included: ["Equipment", "Instructor"],
//     recommended: true
//   },
//   {
//     id: 8,
//     name: "Dhayah Fort",
//    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80",
//     rating: 4.5,
//     reviews: 756,
//     price: 0,
//     description: "Historic 19th-century hilltop fort offering panoramic views of date palm oases and mountains.",
//     duration: "1-2 hours",
//     category: "Historical",
//     highlights: ["Hilltop Views", "Historic Architecture", "Date Palm Oases"],
//     location: "Dhayah",
//     included: ["Free Entry"],
//     recommended: true
//   },
//   {
//     id: 9,
//     name: "RAK National Museum",
//     image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80",
//     rating: 4.3,
//     reviews: 654,
//     price: 35,
//     description: "Housed in a former ruler's fort, showcasing Ras al Khaimah's archaeological finds and cultural heritage.",
//     duration: "1-2 hours",
//     category: "Museums",
//     highlights: ["Archaeological Finds", "Traditional Weapons", "Local History"],
//     location: "Old Town",
//     included: ["Gallery Access"],
//     recommended: true
//   },
//   {
//     id: 10,
//     name: "Desert Safari with Overnight Camping",
//     image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 2345,
//     price: 420,
//     description: "Full desert experience including dune bashing, camel rides, BBQ dinner, and overnight stargazing.",
//     duration: "Overnight",
//     category: "Desert",
//     highlights: ["Dune Bashing", "Camel Rides", "Overnight Camping"],
//     location: "Red Dunes",
//     included: ["Dinner", "Entertainment", "Camping Gear"],
//     recommended: true
//   },
//   {
//     id: 11,
//     name: "Al Hamra Marina & Yacht Club",
//     image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     reviews: 987,
//     price: 280,
//     description: "Luxury marina offering yacht charters, waterfront dining, and stunning views of Al Hamra Village.",
//     duration: "2-3 hours",
//     category: "Luxury",
//     highlights: ["Yacht Charter", "Waterfront Dining", "Sunset Views"],
//     location: "Al Hamra",
//     included: ["Yacht Tour"],
//     recommended: false
//   },
//   {
//     id: 12,
//     name: "Hatta Mountain Safari from RAK",
//     image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 1321,
//     price: 320,
//     description: "Day trip to Hatta for mountain adventures, kayaking in the dam, and exploring heritage village.",
//     duration: "Full Day",
//     category: "Adventure",
//     highlights: ["Hatta Dam Kayaking", "Mountain Safari", "Heritage Village"],
//     location: "Hatta (Day Trip)",
//     included: ["Transportation", "Activities"],
//     recommended: true
//   }
// ];

// export const useActivityStore = create((set) => ({
//   activities,
//   selectedActivity: null,

//   selectActivity: (id) => {
//     const activity = activities.find((item) => item.id === id);
//     set({ selectedActivity: activity });
//   },

//   clearSelectedActivity: () => set({ selectedActivity: null }),

//   getActivityById: (id) => {
//     return activities.find((item) => item.id === id);
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

