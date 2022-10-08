import React from "react";

// components
import BannerComponentHome from "../../components/home-components/BannerComponentHome";
import AboutComponentHome from "../../components/home-components/AboutComponentHome";
import MainActivityComponentHome from "../../components/home-components/MainActivityComponentHome";
import MalamPuncak from "../../components/home-components/MalamPuncak";
import Medpart from "../../components/home-components/Medpart";
function Home() {
  return (
    <main>
      <BannerComponentHome />
      <AboutComponentHome />
      <MainActivityComponentHome />
      <MalamPuncak />
      <Medpart />
    </main>
  );
}

export default Home;
