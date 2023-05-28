import React from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
