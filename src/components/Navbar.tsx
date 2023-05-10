import { component$, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./navbar.css?inline";
import TeslaLogo from "../../assets/images/tesla-logo.svg";
import { useContent } from "@builder.io/qwik-city";
import { navbarContext } from "~/context/appContext";
import Navigation from "./navigation";

const Navbar = component$(() => {
  useStylesScoped$(styles);

  const store = useStore({
    openNav: false
  })

  // const store = useContent(navbarContext)

  return (
    <div class="container">
      <img src={TeslaLogo} alt="tesla-logo" class="tesla-logo" />
      <button class="menu-btn" onClick$={() => store.openNav = true}>Menu</button>
      {store.openNav && <Navigation />}
    </div>
  );
});

export default Navbar;
