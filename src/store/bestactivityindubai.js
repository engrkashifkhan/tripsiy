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

