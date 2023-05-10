import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './navigation.css?inline'
import closeIcon from '../../assets/icons/icon-close.svg'

const Navigation = component$(() => {
  useStylesScoped$(styles)

  return (
  <div class='container'>
    <div class='close-icon-div'>
      <img src={closeIcon} alt="close-icon" />
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