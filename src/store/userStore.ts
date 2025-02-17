import { User } from "@/types/users";
import { create } from "zustand";

interface UserState {
  userData: User;
  setUserData: (user: User) => void;
  resetUserData: () => void;
}

const useUserStore = create<UserState>((set) => ({
  userData: {
    userId: "",
    username: "",
    email: "",
    role: 0,
    photoProfile: "",
    state: "",
  },
  setUserData: (user) => set({ userData: user }),
  resetUserData: () =>
    set({
      userData: {
        userId: "",
        username: "",
        email: "",
        role: 0,
        photoProfile: "",
        state: "",
      },
    }),
}));

export default useUserStore;
