import { component$, useContextProvider, useStore, useStylesScoped$ } from '@builder.io/qwik';
import Navbar from '~/components/Navbar';
import landingPageBgVideo from "../../assets/videos/landing-page-bg.mp4";
import styles from './style.css?inline'
import { navbarContext } from '~/context/appContext';

export default component$(() => {
  useStylesScoped$(styles)
  const store = useStore({
    openNav: false
  })
  useContextProvider(navbarContext, store)
  return (
    <div>
      <video autoPlay muted loop class="bg-video">
        <source src={landingPageBgVideo} type="video/mp4" />
      </video>
      <Navbar />
    </div>
  ); 
});


