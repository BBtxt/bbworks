import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

const Page = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-violet-400" : "" }
        hover:text-violet-400 transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}>
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");

    return(
        <nav className={`z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="text-8xl font-bold">BB</h4>

                {/* Desktop Nav */}
                {isAboveSmallScreen ? (
                    <div className="flex justify-between gap-16 text-sm font-semibold">
                        <Page
                        page='Home'
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage} />
                        <Page
                        page='About'
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage} />
                        <Page
                        page='Projects'
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage} />
                        <Page
                        page='Skills'
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage} />
                        <Page
                        page='Contact'
                        selectedPage={selectedPage}
                        setSelectedPage={selectedPage} />
                    </div>
                ):(
                    <button 
                    className="rounded-full p-2">
                        <Image 
                        alt="menu" 
                        src="../asset/menu-icon.svg"
                        className="w-8 h-8"
                        width={36}
                        height={36} />
                    </button>
                )}
            </div>

        </nav>
    )
}

export default Navbar;