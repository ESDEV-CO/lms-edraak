import React from "react";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import Carousel from "./components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="home_page">
      <Hero />
      <Category />
      <Products />
    </div>
  );
};

export default Home;
