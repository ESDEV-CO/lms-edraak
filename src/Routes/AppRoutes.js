import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import CheckOutScreen from "../Screens/CheckOutScreen";
import ExploreScreen from "../Screens/ExploreScreen";
import CourseDetailScreen from "../Screens/CourseDetailScreen";
import StreamScreen from "../Screens/StreamScreen";
import AboutScreen from "../Screens/AboutScreen";
import DashboardScreen from "../Screens/DashboardScreen";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/checkout" element={<CheckOutScreen />} />
        <Route path="/explore" element={<ExploreScreen />} />
        <Route path="/course-detail" element={<CourseDetailScreen />} />
        <Route path="/stream" element={<StreamScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
