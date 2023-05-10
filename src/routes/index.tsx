import { component$, useStylesScoped$ } from '@builder.io/qwik';
import Navbar from '~/components/Navbar';
import landingPageBgVideo from "../../assets/videos/landing-page-bg.mp4";
import styles from './style.css?inline'


export default component$(() => {
  useStylesScoped$(styles)

  return (
    <div>
      <video autoPlay muted loop class="bg-video">
        <source src={landingPageBgVideo} type="video/mp4" />
      </video>
      <Navbar />
    </div>
  ); 
});


