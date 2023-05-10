import { component$, useStylesScoped$, useContext } from "@builder.io/qwik";
import styles from './navigation.css?inline'
import closeIcon from '../../assets/icons/icon-close.svg'
import { navbarContext } from "~/context/appContext";
const Navigation = component$(() => {
  useStylesScoped$(styles)
  const store = useContext(navbarContext)
  return (
  <div class='container'>
    <div class='close-icon-div'>
      <img src={closeIcon} alt="close-icon" onClick$={() => store.openNav = false}/>
    </div>
    <div class='pages-links'>
    <a href="/">Model S</a>
    <a href="/">Model 3</a>
    <a href="/">Model X</a>
    <a href="/">Model Y</a>
    </div>
  </div>
  )
})

export default Navigation