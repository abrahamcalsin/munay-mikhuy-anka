import React from "react";

import Footer from "../footer";
import Navbar from "../navbar";

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
