import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouterLayout from "../common/RouterLayout";
import PrivateRoutes from "../Context/PrivateRoutes";
import Home from "../Views/Home";
import Login from "../Views/Login";
import Profile from "../Views/Profile";
import Register from "../Views/Register";
import Start from "../Views/Start";

function Navigate() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<RouterLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigate;
