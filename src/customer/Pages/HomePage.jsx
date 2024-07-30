import React from "react";
import MainCarousel from "../component/HomeCarosel/MainCarousel";
import HomesectionCarousel from "../component/Homesection/HomesectionCarousel";
import { randomtoyExample } from "../../Data/toys";
import { chumma } from "../../Data/Chumma";
// import Homesectioncard from '../component/Homesection/Homesectioncard';

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomesectionCarousel datapacks={randomtoyExample} secName={"Trending Toys"} />
        <HomesectionCarousel datapacks={chumma} secName={"Editors choice"} />
        {/* <HomesectionCarousel />
        <HomesectionCarousel />
        <HomesectionCarousel /> */}
      </div>
    </div>
  );
};

export default HomePage;
