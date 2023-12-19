import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import IntroComponent from "../components/IntroComponent";
import BestComponent from "../components/BestComponent";
import FooterComponent from "../components/FooterComponent";
import OffersComponent from "../components/OffersComponent";
import SideBarComponent from "../components/SideBarComponent";

const HomeComponent = () => {
  const [isSideBarActive, setActiveSideBar] = useState(false);
 
  return (
    <>
    <HeaderComponent isSideBarActive={isSideBarActive} toggleSideBar={setActiveSideBar}/>
    <SideBarComponent isActive={isSideBarActive} isSideBarActive={isSideBarActive} toggleSideBar={setActiveSideBar}/> 
    <IntroComponent />
    <OffersComponent />
    <BestComponent />
    <FooterComponent />

    
    </>
  );
};

export default HomeComponent;
