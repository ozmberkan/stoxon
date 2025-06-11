import { create } from "zustand";

export const useAuthStore = create((set) => ({
  userClaims: [],
  user: null,
  setUserClaims: (claims) => set({ userClaims: claims }),
  clearUserClaims: () => set({ userClaims: [] }),
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
