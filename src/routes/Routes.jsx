import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Sign from "../pages/sign up/Sign";
import BusinessOwnerSignUp from "../pages/Business Owner/BusinessOwnerSignUp";
import StudentSignUp from "../pages/student/StudentSignUp";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="/student-signup" element={<StudentSignUp />} />
        <Route path="/business-owner-signup" element={<BusinessOwnerSignUp />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
