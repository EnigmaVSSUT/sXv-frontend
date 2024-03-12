import { create } from "zustand";
import api from "../axios/api";

const useEventTimelineStore = create((set, get) => ({
  currentDay: 0,
  setCurrentDay: (n) => set({ currentDay: n }),
  currentType: 0,
  setCurrentType: (n) => set({ currentType: n }),
  events: [],
  fetchEvents: async () => {
    try {
      const res = await api.events.getAll();
      const data = await res.data.events;
      // console.log(data);
      set({
        events: data,
      });
    } catch (err) {
      console.log("Failed fetching events");
    }
  },
}));

export default useEventTimelineStore;
