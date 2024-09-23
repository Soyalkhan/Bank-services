import React, { useState } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CardGrid from "./CardGrid";
import CookieConsent from "./CookieConsent";



function Home() {
  return (
    <>  

        <CookieConsent/>
        <Navbar />
        <Banner />
        <CardGrid />
        <Footer />
    </>
  );
}

export default Home;
