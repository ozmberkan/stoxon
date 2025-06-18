import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  userClaims: [],
  setUserClaims: (claims) => set({ userClaims: claims }),
  setUser: (data) => set({ user: data }),
}));
