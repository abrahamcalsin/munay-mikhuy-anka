import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
