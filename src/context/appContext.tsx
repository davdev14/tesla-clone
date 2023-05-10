import { createContextId } from "@builder.io/qwik"

export interface NavbarContextData {
  openNav: boolean;
} 

export const navbarContext = createContextId<NavbarContextData>('navbar-context')