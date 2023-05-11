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
      <div class="navbar">
        <Navbar />
      </div>
      <section class="home-section">
        <video autoPlay muted loop class="bg-video">
          <source src={landingPageBgVideo} type="video/mp4" />
        </video>
        <SectionHeading
          mainHeading="Experience Tesla"
          subHeading="Schedule a demo drive today"
          paddingTop="10rem"
        />
        <div class="home-btn">
          <Button
            background="transparent"
            border="8px solid #fff"
            borderRadius="10px"
            color="#fff"
            width="800px"
            btnTxt="Demo Drive"
            marginTop=""
          />
        </div>
      </section>
      <section class="model-section" id="model3">
        <SectionHeading
          mainHeading="Model 3"
          subHeading="view inventory"
          color="#000"
          textDecoration="underline"
          paddingTop="4rem"
        />
        <div class="model-btn">
          <Button
            background="#171a20cc"
            border="none"
            borderRadius="10px"
            color="#fff"
            width="800px"
            btnTxt="Order Now"
            marginTop=""
          />
          <Button
            background="#f4f4f4a6"
            border="none"
            borderRadius="10px"
            color="#393c41"
            width="800px"
            btnTxt="Demo Drive"
            marginTop="2rem"
          />
        </div>
      </section>
      <section class="model-section" id="modely">
        <SectionHeading
          mainHeading="Model Y"
          subHeading="view inventory"
          color="#000"
          textDecoration="underline"
          paddingTop="0rem"
        />
        <div class="model-btn">
          <Button
            background="#171a20cc"
            border="none"
            borderRadius="10px"
            color="#fff"
            width="800px"
            btnTxt="Order Now"
            marginTop=""
          />
          <Button
            background="#f4f4f4a6"
            border="none"
            borderRadius="10px"
            color="#393c41"
            width="800px"
            btnTxt="Demo Drive"
            marginTop="2rem"
          />
        </div>
      </section>
      <section class="model-section" id="models">
        <SectionHeading
          mainHeading="Model S"
          subHeading="view inventory"
          color="#000"
          textDecoration="underline"
          paddingTop="7rem"
        />
        <div class="model-btn">
          <Button
            background="#171a20cc"
            border="none"
            borderRadius="10px"
            color="#fff"
            width="800px"
            btnTxt="Order Now"
            marginTop=""
          />
          <Button
            background="#f4f4f4a6"
            border="none"
            borderRadius="10px"
            color="#393c41"
            width="800px"
            btnTxt="Demo Drive"
            marginTop="2.5rem"
          />
        </div>
      </section>
      <section class="model-section" id="modelx">
        <div>
          <SectionHeading
            mainHeading="Model X"
            subHeading="view inventory"
            color="#000"
            textDecoration="underline"
            paddingTop="5rem"
          />
        </div>
        <div class="model-btn">
          <Button
            background="#171a20cc"
            border="none"
            borderRadius="10px"
            color="#fff"
            width="800px"
            btnTxt="Order Now"
            marginTop=""
          />
          <Button
            background="#f4f4f4a6"
            border="none"
            borderRadius="10px"
            color="#393c41"
            width="800px"
            btnTxt="Demo Drive"
            marginTop="15px"
          />
        </div>
      </section>
    </div>
  );
});
