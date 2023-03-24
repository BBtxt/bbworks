import React from "react";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Navbar from "@/components/Navbar";

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
  return (

  <div className=" app ">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
  </div>
  );
}

export default Layout;
