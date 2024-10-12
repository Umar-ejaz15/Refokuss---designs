import React from "react";
import { Navbar } from "./components/Navbar";
import Work from "./components/Work";
import Strips from "./components/Strips";
import Products from "./components/Products";
import Marquess from "./components/Marquess";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <>
      <div className="#main w-full bg-zinc-900 text-white">
        <Navbar />
        <Work />
        <Strips />
        <Products />
        <Marquess />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default App;
