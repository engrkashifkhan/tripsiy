// import { create } from 'zustand';
// const activities = [
//   {
//     id: 1,
//     name: "Marina Bay Sands SkyPark Observation",
//     image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 4312,
//     price: 98,
//     description: "Enjoy panoramic views of Singapore’s skyline, Gardens by the Bay, and the Marina Bay waterfront from the iconic Sands SkyPark.",
//     duration: "1-2 hours",
//     category: "Landmarks",
//     highlights: ["360° Views", "Iconic Skyline", "Stunning Sunsets"],
//     location: "Marina Bay Sands",
//     included: ["Observation Deck Access"],
//     recommended: true
//   },
//   {
//     id: 2,
//     name: "Singapore Night Safari",
//     image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    
//     rating: 4.7,
//     reviews: 5123,
//     price: 230,
//     description: "World’s first nocturnal wildlife park offering tram rides and walking trails through natural habitats.",
//     duration: "3-4 hours",
//     category: "Adventure",
//     highlights: ["Night Tram Ride", "Wildlife Shows", "Walking Trails"],
//     location: "Mandai Wildlife Reserve",
//     included: ["Tram Ride", "Show Access"],
//     recommended: true
//   },
//   {
//     id: 3,
//     name: "Singapore River Cruise",
//      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     reviews: 2103,
//     price: 140,
//     description: "A peaceful cruise along the Singapore River showcasing Clarke Quay, Boat Quay, and Marina Bay.",
//     duration: "40 minutes",
//     category: "Cruises",
//     highlights: ["Clarke Quay", "Marina Bay Sands", "City Lights"],
//     location: "Clarke Quay",
//     included: ["Boat Ticket", "Audio Guide"],
//     recommended: true
//   },
//   {
//     id: 4,
//     name: "Adventure Cove Waterpark",
//     image: "https://images.unsplash.com/photo-1570197571499-166b36435e9f?auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 3245,
//     price: 250,
//     description: "A family-friendly waterpark on Sentosa Island with thrilling waterslides and snorkeling with tropical fish.",
//     duration: "Full Day",
//     category: "Water Parks",
//     highlights: ["Thrill Slides", "Snorkeling", "Lazy River"],
//     location: "Sentosa Island",
//     included: ["All-Day Access", "Life Jackets"],
//     recommended: true
//   },
//   {
//     id: 5,
//     name: "Orchard Road Shopping District",
//      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.5,
//     reviews: 6521,
//     price: 0,
//     description: "Singapore’s premier shopping street filled with luxury brands, malls, cafés, and entertainment.",
//     duration: "Flexible",
//     category: "Shopping",
//     highlights: ["Luxury Malls", "Dining", "Street Vibes"],
//     location: "Orchard Road",
//     included: ["Free Entry"],
//     recommended: false
//   },
//   {
//     id: 6,
//     name: "Gardens by the Bay",
//     image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
//     rating: 4.9,
//     reviews: 9512,
//     price: 45,
//     description: "A futuristic garden featuring the Supertree Grove, Cloud Forest, and world-class floral displays.",
//     duration: "2-3 hours",
//     category: "Gardens",
//     highlights: ["Supertree Grove", "Cloud Forest", "Flower Dome"],
//     location: "Marina Bay",
//     included: ["Dome Entrance"],
//     recommended: true
//   },
//   {
//     id: 7,
//     name: "Ice Skating at The Rink JCube",
//     image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=800&q=80",
//     rating: 4.3,
//     reviews: 1432,
//     price: 88,
//     description: "Singapore’s first and only Olympic-sized ice skating rink, perfect for sports and leisure skating.",
//     duration: "2 hours",
//     category: "Winter Sports",
//     highlights: ["Olympic Size", "Skating Lessons", "Family Friendly"],
//     location: "Jurong East",
//     included: ["Skates Rental", "Safety Gear"],
//     recommended: false
//   },
//   {
//     id: 8,
//     name: "Singapore Botanic Gardens",
//     image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
//     rating: 4.9,
//     reviews: 8320,
//     price: 0,
//     description: "UNESCO World Heritage garden featuring lush greenery, lakes, and the National Orchid Garden.",
//     duration: "2-3 hours",
//     category: "Cultural",
//     highlights: ["Orchid Garden", "Swan Lake", "Walking Trails"],
//     location: "Tanglin",
//     included: ["Free Entry"],
//     recommended: true
//   },
//   {
//     id: 9,
//     name: "ArtScience Museum",
//      image: "https://images.unsplash.com/photo-1563461660947-507ef49e9c47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.6,
//     reviews: 3421,
//     price: 65,
//     description: "Iconic lotus-shaped museum featuring futuristic exhibitions and immersive digital art.",
//     duration: "2 hours",
//     category: "Museums",
//     highlights: ["Future World Exhibit", "Interactive Art", "Architecture"],
//     location: "Marina Bay Sands",
//     included: ["Gallery Access"],
//     recommended: true
//   },
//   {
//     id: 10,
//     name: "Universal Studios Singapore",
//     image: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 6123,
//     price: 320,
//     description: "The most famous theme park in Southeast Asia featuring thrilling rides, shows, and movie-themed attractions.",
//     duration: "Full Day",
//     category: "Theme Parks",
//     highlights: ["Battlestar Galactica", "Transformers Ride", "The Mummy"],
//     location: "Sentosa Island",
//     included: ["All Rides", "Shows"],
//     recommended: true
//   },
//   {
//     id: 11,
//     name: "National Museum of Singapore",
//      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.7,
//     reviews: 2411,
//     price: 55,
//     description: "Singapore’s oldest museum with immersive exhibitions on culture, art, and national history.",
//     duration: "2-3 hours",
//     category: "Cultural",
//     highlights: ["Story of Singapore", "Artifacts", "Immersive Exhibits"],
//     location: "Stamford Road",
//     included: ["Audio Guide"],
//     recommended: true
//   },
//   {
//     id: 12,
//     name: "Sentosa Luxury Beachfront",
//     image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     rating: 4.8,
//     reviews: 1675,
//     price: 0,
//     description: "A stunning luxury beachfront area featuring beach clubs, bars, and scenic ocean views.",
//     duration: "1-2 hours",
//     category: "Luxury",
//     highlights: ["Beach Clubs", "Sunset Views", "Relaxing Ambience"],
//     location: "Sentosa Island",
//     included: ["Beach Access"],
//     recommended: false
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

