import React, { useEffect } from "react";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Navbar from "@/components/Navbar";

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" app ">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </div>
  );
};

export default Layout;
