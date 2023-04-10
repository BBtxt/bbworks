import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import menu_icon from "../../public/menu-vertical-svgrepo-com.svg";

const Page = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-violet-400" : ""}
        hover:text-violet-400 transition duration-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 769px)");
  const navbarBackground = isTopOfPage ? "" : "bg-violet-300 transition duration-200 opacity-75";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="text-3xl font-bold">BB</h4>

        {/* Desktop Nav */}
        {isAboveSmallScreen ? (
          <div className="flex justify-between gap-10 text-sm font-semibold">
            <Page
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Page
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Page
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Page
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image alt="menu" src={menu_icon} width={36} height={36} />
          </button>
        )}

        {/* Mobile Nav */}
        {!isAboveSmallScreen && isMenuOpen && (
          <div className="fixed right-0 bottom-0 h-full w-[300px] bg-white border-dotted border-2 border-zinc-400">
            {/* Closed Mobile Nav */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Image alt="menu" src={menu_icon} width={36} height={36} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl">
              <Page
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Page
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Page
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Page
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
