import React, { useState } from "react";
import Header from "../Header";
import Footer from "../footer/Footer";
import Menu from "../../Menu/Menu";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      {open && <Menu setOpen={setOpen} />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
