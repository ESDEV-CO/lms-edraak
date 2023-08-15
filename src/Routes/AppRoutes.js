import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../screen/HomeScreen";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
