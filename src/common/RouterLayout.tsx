import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./Navbar";

function RouterLayout() {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
}

export default RouterLayout;
