import React from "react";
import MainBunner from "../components/MainBunner/MainBunner";
import About from "../components/About/About";
import MainFooter from "../components/MainFooter/MainFooter";
import Price from "../components/Price/Price";
import Faster from "../components/Faster/Faster";

const HomePage = () => {
  return (
      <div>
        <MainBunner/>
        <About/>
        <Faster/>
        <Price/>
        <MainFooter/>
      </div>
  )
}

export default HomePage