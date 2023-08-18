import React from "react";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function HomeScreen() {
  return (
    <div className="home_container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default HomeScreen;
