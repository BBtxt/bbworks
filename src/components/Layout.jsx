import React, { useEffect } from "react";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import LineGradient from "@/components/LineGradient";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width: 769px)");

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
      <div className="w-3/4 mx-auto md:h-full">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <div>
        <LineGradient />
      </div>

      <div className="w-3/4 mx-auto md:h-full">
        <About />
      </div>
      <LineGradient />
      <div className="w-3/4 mx-auto md:h-full">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-3/4 mx-auto h-full">
      <Contact/>
      </div>
    </div>
  );
};

export default Layout;
