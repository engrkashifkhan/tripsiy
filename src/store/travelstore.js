// import { create } from 'zustand';

// // Sample data
// const citiesData = [
//   {
//     id: 1,
//     name: 'Dubai',
//     image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
//     description: 'City of luxury and modern architecture'
//   },
//   {
//     id: 2,
//     name: 'Singapore',
//     image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
//     description: 'Garden city with diverse culture'
//   },
//   {
//     id: 3,
//     name: 'Paris',
//     image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
//     description: 'Romantic city of lights'
//   },
//   {
//     id: 4,
//     name: 'Tokyo',
//     image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
//     description: 'Blend of tradition and technology'
//   },
//   {
//     id: 5,
//     name: 'New York',
//     image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
//     description: 'The city that never sleeps'
//   },
//   {
//     id: 6,
//     name: 'Bali',
//     image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
//     description: 'Tropical paradise island'
//   }
// ];

// const attractionsData = [
//   // Dubai attractions
//   { id: 1, city: 'Dubai', name: 'Burj Khalifa', rating: 4.8, reviews: 4500, price: 250, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400', description: 'World\'s tallest building' },
//   { id: 2, city: 'Dubai', name: 'Dubai Mall', rating: 4.5, reviews: 3200, price: 0, image: 'https://images.unsplash.com/photo-1581259021846-f3e7c2beab72?w=400', description: 'Largest shopping mall in the world' },
//   { id: 3, city: 'Dubai', name: 'Desert Safari', rating: 4.7, reviews: 2800, price: 180, image: 'https://images.unsplash.com/photo-1512149074996-e923ac45be6a?w=400', description: 'Exciting desert adventure' },
  
//   // Singapore attractions
//   { id: 4, city: 'Singapore', name: 'Gardens by the Bay', rating: 4.7, reviews: 3800, price: 28, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400', description: 'Futuristic park with supertrees' },
//   { id: 5, city: 'Singapore', name: 'Marina Bay Sands', rating: 4.6, reviews: 4200, price: 150, image: 'https://images.unsplash.com/photo-1565962235329-0d5c3b53b2b6?w=400', description: 'Iconic hotel with infinity pool' },
//   { id: 6, city: 'Singapore', name: 'Sentosa Island', rating: 4.4, reviews: 3100, price: 45, image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400', description: 'Entertainment and resort island' },
  
//   // Paris attractions
//   { id: 7, city: 'Paris', name: 'Eiffel Tower', rating: 4.9, reviews: 5200, price: 25, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w-400', description: 'Iconic iron tower' },
//   { id: 8, city: 'Paris', name: 'Louvre Museum', rating: 4.7, reviews: 3900, price: 17, image: 'https://images.unsplash.com/photo-1544919982-b61976a0d7ed?w=400', description: 'World\'s largest art museum' },
  
//   // Tokyo attractions
//   { id: 9, city: 'Tokyo', name: 'Tokyo Tower', rating: 4.5, reviews: 2800, price: 12, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', description: 'Communications and observation tower' },
//   { id: 10, city: 'Tokyo', name: 'Shibuya Crossing', rating: 4.3, reviews: 2100, price: 0, image: 'https://images.unsplash.com/photo-1549693578-d683be217e58?w=400', description: 'World\'s busiest pedestrian crossing' },
// ];

// const useTravelStore = create((set, get) => ({
//   cities: citiesData,
//   attractions: attractionsData,
//   selectedCity: null,
//   selectedAttraction: null,
//   searchQuery: '',
//   priceRange: 'all',
//   sortBy: 'rating',
  
//   setSelectedCity: (cityName) => {
//     const city = citiesData.find(c => c.name.toLowerCase() === cityName.toLowerCase());
//     set({ selectedCity: city });
//   },
  
//   setSelectedAttraction: (attractionId) => {
//     const attraction = attractionsData.find(a => a.id === parseInt(attractionId));
//     set({ selectedAttraction: attraction });
//   },
  
//   setSearchQuery: (query) => set({ searchQuery: query }),
//   setPriceRange: (range) => set({ priceRange: range }),
//   setSortBy: (sortType) => set({ sortBy: sortType }),
  
//   getFilteredAttractions: (cityName) => {
//     const { searchQuery, priceRange, sortBy } = get();
//     let filtered = attractionsData.filter(attr => 
//       attr.city.toLowerCase() === cityName.toLowerCase()
//     );
    
//     // Apply search filter
//     if (searchQuery) {
//       filtered = filtered.filter(attr =>
//         attr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         attr.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Apply price filter
//     if (priceRange !== 'all') {
//       const ranges = {
//         'free': [0, 0],
//         'budget': [1, 50],
//         'moderate': [51, 150],
//         'luxury': [151, Infinity]
//       };
//       const [min, max] = ranges[priceRange];
//       filtered = filtered.filter(attr => attr.price >= min && attr.price <= max);
//     }
    
//     // Apply sorting
//     filtered.sort((a, b) => {
//       switch(sortBy) {
//         case 'price-low':
//           return a.price - b.price;
//         case 'price-high':
//           return b.price - a.price;
//         case 'rating':
//         default:
//           return b.rating - a.rating;
//       }
//     });
    
//     return filtered;
//   }
// }));

// export default useTravelStore;









import { create } from 'zustand';

// =======================
// Cities Data
// =======================
const citiesData = [
  {
    id: 1,
    name: 'Dubai',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
    description: 'City of luxury and modern architecture'
  },
  {
    id: 2,
    name: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
    description: 'Garden city with diverse culture'
  },
  {
    id: 3,
    name: 'Paris',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
    description: 'Romantic city of lights'
  },
  {
    id: 4,
    name: 'Tokyo',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
    description: 'Blend of tradition and technology'
  },
  {
    id: 5,
    name: 'New York',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
    description: 'The city that never sleeps'
  },
  {
    id: 6,
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800',
    description: 'Tropical paradise island'
  },

  // NEW CITIES
  {
    id: 7,
    name: 'London',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    description: 'Historic city with modern charm'
  },
  {
    id: 8,
    name: 'Istanbul',
    image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=800',
    description: 'City where East meets West'
  },
  {
    id: 9,
    name: 'Kuala Lumpur',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800',
    description: 'Modern skyline and vibrant culture'
  },
  {
    id: 10,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1506956191972-13f57ddf565c?w=800',
    description: 'Heaven of beaches and luxury resorts'
  },
  {
    id: 11,
    name: 'Rome',
    image: 'https://images.unsplash.com/photo-1526481280691-906fa4d0f869?w=800',
    description: 'City of ancient history'
  },
  {
    id: 12,
    name: 'Sydney',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad89?w=800',
    description: 'Harbour city with iconic landmarks'
  },
];

// =======================
// Attractions Data
// =======================
let idCounter = 10;
const nextId = () => ++idCounter;

const attractionsData = [
  // ---------------- Dubai ----------------
  { id: 1, city: 'Dubai', name: 'Burj Khalifa', rating: 4.8, reviews: 4500, price: 250, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400', description: 'World\'s tallest building' },
  { id: 2, city: 'Dubai', name: 'Dubai Mall', rating: 4.5, reviews: 3200, price: 0, image: 'https://images.unsplash.com/photo-1581259021846-f3e7c2beab72?w=400', description: 'Largest shopping mall in the world' },
  { id: 3, city: 'Dubai', name: 'Desert Safari', rating: 4.7, reviews: 2800, price: 180, image: 'https://images.unsplash.com/photo-1512149074996-e923ac45be6a?w=400', description: 'Exciting desert adventure' },

  // ---------------- Singapore ----------------
  { id: 4, city: 'Singapore', name: 'Gardens by the Bay', rating: 4.7, reviews: 3800, price: 28, image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400', description: 'Futuristic park with supertrees' },
  { id: 5, city: 'Singapore', name: 'Marina Bay Sands', rating: 4.6, reviews: 4200, price: 150, image: 'https://images.unsplash.com/photo-1565962235329-0d5c3b53b2b6?w=400', description: 'Iconic hotel with infinity pool' },
  { id: 6, city: 'Singapore', name: 'Sentosa Island', rating: 4.4, reviews: 3100, price: 45, image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400', description: 'Entertainment and resort island' },

  // ---------------- Paris ----------------
  { id: 7, city: 'Paris', name: 'Eiffel Tower', rating: 4.9, reviews: 5200, price: 25, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400', description: 'Iconic iron tower' },
  { id: 8, city: 'Paris', name: 'Louvre Museum', rating: 4.7, reviews: 3900, price: 17, image: 'https://images.unsplash.com/photo-1544919982-b61976a0d7ed?w=400', description: 'World\'s largest art museum' },

  // ---------------- Tokyo ----------------
  { id: 9, city: 'Tokyo', name: 'Tokyo Tower', rating: 4.5, reviews: 2800, price: 12, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400', description: 'Communications and observation tower' },
  { id: 10, city: 'Tokyo', name: 'Shibuya Crossing', rating: 4.3, reviews: 2100, price: 0, image: 'https://images.unsplash.com/photo-1549693578-d683be217e58?w=400', description: 'World\'s busiest crossing' },

  // ---------------- NEW CITIES BELOW ----------------

  // London
  { id: nextId(), city: 'London', name: 'London Eye', rating: 4.6, reviews: 4100, price: 35, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400', description: 'Giant Ferris wheel on the Thames' },
  { id: nextId(), city: 'London', name: 'Tower Bridge', rating: 4.8, reviews: 3900, price: 12, image: 'https://images.unsplash.com/photo-1495581137615-1c1b64d03763?w=400', description: 'Iconic historic bridge' },
  { id: nextId(), city: 'London', name: 'British Museum', rating: 4.7, reviews: 5000, price: 0, image: 'https://images.unsplash.com/photo-1544551763-ced63b6d8a71?w=400', description: 'World-famous history museum' },

  // Istanbul
  { id: nextId(), city: 'Istanbul', name: 'Hagia Sophia', rating: 4.9, reviews: 6000, price: 15, image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=400', description: 'Historic mosque and museum' },
  { id: nextId(), city: 'Istanbul', name: 'Blue Mosque', rating: 4.8, reviews: 4500, price: 0, image: 'https://images.unsplash.com/photo-1520975918311-2fd2a4d1e91f?w=400', description: 'Stunning Ottoman-era mosque' },

  // Kuala Lumpur
  { id: nextId(), city: 'Kuala Lumpur', name: 'Petronas Towers', rating: 4.8, reviews: 5200, price: 20, image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=400', description: 'Twin skyscrapers with sky bridge' },
  { id: nextId(), city: 'Kuala Lumpur', name: 'Batu Caves', rating: 4.7, reviews: 4100, price: 0, image: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=400', description: 'Hindu cave temple complex' },

  // Maldives
  { id: nextId(), city: 'Maldives', name: 'Snorkeling Tour', rating: 4.9, reviews: 3000, price: 120, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400', description: 'Explore coral reefs and marine life' },
  { id: nextId(), city: 'Maldives', name: 'Water Villa Stay', rating: 5.0, reviews: 2500, price: 450, image: 'https://images.unsplash.com/photo-1506956191972-13f57ddf565c?w=400', description: 'Luxury villas over the ocean' },

  // Rome
  { id: nextId(), city: 'Rome', name: 'Colosseum', rating: 4.8, reviews: 6500, price: 18, image: 'https://images.unsplash.com/photo-1526481280691-906fa4d0f869?w=400', description: 'Ancient Roman gladiator arena' },
  { id: nextId(), city: 'Rome', name: 'Trevi Fountain', rating: 4.7, reviews: 5200, price: 0, image: 'https://images.unsplash.com/photo-1530035306091-1c7adfbf6b87?w=400', description: 'Famous baroque fountain' },

  // Sydney
  { id: nextId(), city: 'Sydney', name: 'Sydney Opera House', rating: 4.8, reviews: 4800, price: 37, image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad89?w=400', description: 'World-famous performing arts center' },
  { id: nextId(), city: 'Sydney', name: 'Harbour Bridge Tour', rating: 4.7, reviews: 3100, price: 160, image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad89?w=400', description: 'Bridge climbing adventure' },
];

// =======================
// Zustand Store
// =======================
const useTravelStore = create((set, get) => ({
  cities: citiesData,
  attractions: attractionsData,
  selectedCity: null,
  selectedAttraction: null,
  searchQuery: '',
  priceRange: 'all',
  sortBy: 'rating',

  setSelectedCity: (cityName) => {
    const city = citiesData.find(c => c.name.toLowerCase() === cityName.toLowerCase());
    set({ selectedCity: city });
  },

  setSelectedAttraction: (attractionId) => {
    const attraction = attractionsData.find(a => a.id === parseInt(attractionId));
    set({ selectedAttraction: attraction });
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
  setPriceRange: (range) => set({ priceRange: range }),
  setSortBy: (sortType) => set({ sortBy: sortType }),

  getFilteredAttractions: (cityName) => {
    const { searchQuery, priceRange, sortBy } = get();
    let filtered = attractionsData.filter(
      attr => attr.city.toLowerCase() === cityName.toLowerCase()
    );

    if (searchQuery) {
      filtered = filtered.filter(attr =>
        attr.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        attr.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceRange !== 'all') {
      const ranges = {
        free: [0, 0],
        budget: [1, 50],
        moderate: [51, 150],
        luxury: [151, Infinity]
      };
      const [min, max] = ranges[priceRange];
      filtered = filtered.filter(attr => attr.price >= min && attr.price <= max);
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating':
        default: return b.rating - a.rating;
      }
    });

    return filtered;
  }
}));

export default useTravelStore;

