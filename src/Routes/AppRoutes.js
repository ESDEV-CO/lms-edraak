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
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../components/Dashboard/Dashboard";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

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
        <Route path="/dashboard" element={<DashboardScreen />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<SignIn />} />
          <Route path="create-course" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
