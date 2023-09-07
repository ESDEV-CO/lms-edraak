import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Screens/HomePage";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import CheckOutScreen from "../Screens/CheckOutScreen";
import AboutScreen from "../Screens/AboutScreen";
import DashboardScreen from "../components/DashboardScreen/DashboardScreen";
import Dashboard from "../components/Dashboard/Dashboard";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import DashCourse from "../components/DashCourse/DashCourse";
import CreateCourse from "../components/CreateCourse/CreateCourse";
import Messages from "../components/Messages/Messages";
import Notification from "../components/Notification/Notification";
import Earning from "../components/Earning/Earning";
import Payout from "../components/Payout/Payout";
import Settings from "../components/Settings/Settings";
import Home from "../components/Home/Home";
import Explore from "../components/Explore/Explore";
import CourseDetail from "../components/CourseDetail/CourseDetail";
import Stream from "../components/Stream/Stream";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/course-detail" element={<CourseDetail />} />
          <Route path="/stream" element={<Stream />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/checkout" element={<CheckOutScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<DashCourse />} />
          <Route path="create-course" element={<CreateCourse />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notification" element={<Notification />} />
          <Route path="earning" element={<Earning />} />
          <Route path="payout" element={<Payout />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
