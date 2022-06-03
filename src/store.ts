import create from "zustand";
import { User } from "./types/general";

export type Store = {
  user: User,
  setUser: (user: User) => void
}

export const useStore = create<Store>((set) => ({
  user: {
    isAuthenticated: false,
    did: "",
    authWalletAdress: "",
    username: "defaultName",
  },
  setUser: (user: User) => 
    set((state) => ({
      ...state,
      user
    }))
}))


