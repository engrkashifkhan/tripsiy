// store.js
import { create } from "zustand";
// import { allPackages } from "./packagesData";
import { allPackages } from "../data/PackagesData";

export const useFiltersStore = create((set, get) => ({
  activeFilter: "",
  regionFilter: "",
  priceFilter: "",
  filteredPackages: allPackages,

  setActiveFilter: (type) => {
    set({ activeFilter: type });
    get().applyFilters({ type });
  },

  setRegionFilter: (region) => {
    set({ regionFilter: region });
    get().applyFilters({ region });
  },

  setPriceFilter: (price) => {
    set({ priceFilter: price });
    get().applyFilters({ price });
  },

  resetFilters: () => {
    set({ activeFilter: "", regionFilter: "", priceFilter: "" });
    set({ filteredPackages: allPackages });
  },

  applyFilters: ({ type, region, price } = {}) => {
    const { activeFilter, regionFilter, priceFilter } = get();
    let filtered = allPackages;

    if (type || activeFilter) {
      filtered = filtered.filter((p) => p.type === (type || activeFilter));
    }
    if (region || regionFilter) {
      filtered = filtered.filter((p) => p.region === (region || regionFilter));
    }
    if (price || priceFilter) {
      filtered = filtered.filter((p) => {
        const val = price || priceFilter;
        if (val === "$0 - $500") return p.price <= 500;
        if (val === "$500 - $1000") return p.price > 500 && p.price <= 1000;
        if (val === "$1000 - $2000") return p.price > 1000 && p.price <= 2000;
        if (val === "$2000+") return p.price > 2000;
        return true;
      });
    }

    set({ filteredPackages: filtered });
  },
}));
