import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles =
    `relative bg-violet-400 before:absolute before:w-5 before:h-5 before:rounded-full before:border-violet-400 before:border-2 before:left-[-34%] before:top-[-33%]`;
  return ( 
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-gray-500"
        }
       w-3 h-3 rounded-full`}
        href="#home"
        onClick={() => setSelectedPage("home")}
      />
      <AnchorLink
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-gray-500"
        }
       w-3 h-3 rounded-full`}
        href="#about"
        onClick={() => setSelectedPage("about")}
      />
      <AnchorLink
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-gray-500"
        }
       w-3 h-3 rounded-full`}
        href="#projects"
        onClick={() => setSelectedPage("projects")}
      /><AnchorLink
      className={`${
        selectedPage === "skills" ? selectedStyles : "bg-gray-500"
      }
     w-3 h-3 rounded-full`}
      href="#skills"
      onClick={() => setSelectedPage("skills")}
    /><AnchorLink
    className={`${
      selectedPage === "Contact" ? selectedStyles : "bg-gray-500"
    }
   w-3 h-3 rounded-full`}
    href="#Contact"
    onClick={() => setSelectedPage("Contact")}
  />
    </div>
  );
};

export default DotGroup;
