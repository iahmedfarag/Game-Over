import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <section className="gamesContainer">
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
