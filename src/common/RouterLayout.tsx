import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function RouterLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RouterLayout;
