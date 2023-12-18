import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import IntroComponent from "../components/IntroComponent";
import BestComponent from "../components/BestComponent";
import FooterComponent from "../components/FooterComponent";
import OffersComponent from "../components/OffersComponent";
import SideBarComponent from "../components/SideBarComponent";

const HomeComponent = () => {
  return (
    <>
    <HeaderComponent />
    <SideBarComponent />
    <IntroComponent />
    <OffersComponent />
    <BestComponent />
    <FooterComponent />

    
    </>
  );
};

export default HomeComponent;
