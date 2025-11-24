// src/store/usePackagesStore.js
import { create } from "zustand";

export const usePackagesStore = create((set) => ({
  region: "",
  travelType: "",
  filteredPackages: [],

  setRegion: (region) => set({ region }),
  setTravelType: (travelType) => set({ travelType }),

  filterPackages: (packages) =>
    set((state) => {
      const result = packages.filter((p) => {
        const matchRegion = state.region ? p.region === state.region : true;
        const matchType = state.travelType ? p.type === state.travelType : true;
        return matchRegion && matchType;
      });

      return { filteredPackages: result };
    }),
}));
