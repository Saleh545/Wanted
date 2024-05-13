import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Sign from "../components/pages/sign up/Sign";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Sign />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
