import create from "zustand";
import { UseCases, User } from "./types/general";

type Store = {
  user: User,
  globalUseCases: UseCases,
  setUser: (user: User) => void
}

export const useStore = create<Store>((set) => ({
  user: {
    isAuthenticated: false,
    did: "",
    authWalletAdress: "",
    username: "",
  },
  globalUseCases: [],
  setUser: (user: User) => 
    set((state) => ({
      ...state,
      user
    }))
}))


