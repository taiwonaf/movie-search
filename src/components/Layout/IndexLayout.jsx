import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../index";

const IndexLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default IndexLayout;
