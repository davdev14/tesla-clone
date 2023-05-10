import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./navbar.css?inline";
import TeslaLogo from "../../assets/images/tesla-logo.svg";
import Navigation from "./Navigation";
import { navbarContext } from "~/context/appContext";

const Navbar = component$(() => {
  useStylesScoped$(styles);


  const store = useContext(navbarContext)

  return (
    <div class="container">
      <div class='img'><img src={TeslaLogo} alt="tesla-logo" class="tesla-logo" /></div>
      <div class='btn'><button class="menu-btn" onClick$={() => store.openNav = true}>Menu</button></div>
      {store.openNav && <Navigation />}
    </div>
  );
});

export default Navbar;
