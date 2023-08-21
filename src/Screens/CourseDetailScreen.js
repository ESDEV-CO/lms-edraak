import React from "react";
import CourseDetail from "../components/CourseDetail/CourseDetail";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const CourseDetailScreen = () => {
  return (
    <div>
      <Navbar />
      <CourseDetail />
      <Footer />
    </div>
  );
};

export default CourseDetailScreen;
