import React from "react";
import HeaderTab from "../HeaderTab/HeaderTab";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import HeroSlider from "../Slider/HeroSlider";
import SubNavbar from "../SubNav/SubNavbar";
import Maindata from "../Maindata/Maindata";
import Footer from "../Footer/Footer";
import Sidetab from "../Side/Sidetab";

console.log('dash');

function DashboardPage() {
  return (
    <>
      <div>
        <HeaderTab /> 
        <Header /> 
        <Navigation />
        <HeroSlider />
        <SubNavbar />
        <Maindata />
        <Footer />
        <Sidetab />
      </div>
    </>
  );
}

export default DashboardPage;