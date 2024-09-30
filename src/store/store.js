import { create } from "zustand";

export const useStore = create((set) => ({
  city: '',
  temperature: null,
  humidity: null,
  windSpeed: null,
  setCity: (newCity) => set({ city: newCity }),
  setWeatherData: (data) => set({
    temperature: data?.main?.temp,
    humidity: data?.main?.humidity,
    windSpeed: data?.wind?.speed,
  }),
}));
