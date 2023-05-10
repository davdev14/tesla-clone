import { createContext } from "vm"

interface navbarStore {
  openNav: boolean
}

export const navbarContext = createContext<navbarStore>()