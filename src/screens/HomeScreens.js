import React from "react";
import HomeAbout from "../components/HomeAbout";
import HomeCarousel from "../components/HomeCarousel";
import HomeCollections from "../components/HomeCollections";
import HomeWeBelieve from "../components/HomeWeBelieve";

const HomeScreens = () => {
  return (
    <div>
      <HomeCarousel />
      <HomeAbout />
      <HomeCollections />
      <HomeWeBelieve />
    </div>
  );
};

export default HomeScreens;
