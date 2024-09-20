import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CardGrid from "./CardGrid";



function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <CardGrid />
        <Footer />
    </>
  );
}

export default Home;
