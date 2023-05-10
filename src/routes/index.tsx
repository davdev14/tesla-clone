import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Navbar from "~/components/Navbar";
import landingPageBgVideo from "../../assets/videos/landing-page-bg.mp4";
import styles from "./style.css?inline";
import SectionHeading from "../components/SectionHeading";
import Button from "~/components/Button";

export default component$(() => {
  useStylesScoped$(styles);
  

  return (
    <div>
      <section class='home-section'>
        <video autoPlay muted loop class="bg-video">
          <source src={landingPageBgVideo} type="video/mp4" />
        </video>
        <Navbar />
        <SectionHeading
          mainHeading= 'Experience Tesla'
          subHeading="Schedule a demo drive today"
          
        />
        <Button
          background="transparent"
          border="6px solid #fff"
          borderRadius="10px"
          color="#fff"
          width="800px"
          btnTxt="Demo Drive"
          marginTop="930px"
        />
      </section>
      <section class='model3-section'>
      <SectionHeading
          mainHeading="Model 3"
          subHeading="view inventory"
          color="#000"
          textDecoration="underline"
        />
        <Button
          background="#171a20cc"
          border="none"
          borderRadius="10px"
          color="#fff"
          width="800px"
          btnTxt="Order Now"
          marginTop="900px"
        />
        <Button
          background="#f4f4f4a6"
          border="none"
          borderRadius="10px"
          color="#393c41"
          width="800px"
          btnTxt="Demo Drive"
          marginTop='30px'
        />
      </section>
    </div>
  );
});
