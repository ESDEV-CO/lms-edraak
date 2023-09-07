import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function HomeScreen() {
    return (
        <div className="home_container">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default HomeScreen;
