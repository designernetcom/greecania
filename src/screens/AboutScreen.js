import React from "react";
import About from "../components/About";
import bannerImage from "../assets/2.jpg";

const AboutScreens = () => {
  return (
    <div>
      <div>
        <img src={bannerImage} width="100%" />
      </div>
      <About />
    </div>
  );
};

export default AboutScreens;
