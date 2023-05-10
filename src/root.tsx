import { component$, useContextProvider, useStore } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { navbarContext } from './context/appContext';


import './global.css';



export type navbarStore = {
  openNav: boolean
}

export default component$(() => {
  const navbarState: navbarStore = useStore({
    openNav: false
  })
  useContextProvider(navbarContext, navbarState)
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
