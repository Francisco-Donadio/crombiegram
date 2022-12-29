import React from "react";
import { Route, Routes } from "react-router-dom";
import RouterLayout from "./common/RouterLayout";
import Start from "./components/Start";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<RouterLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
