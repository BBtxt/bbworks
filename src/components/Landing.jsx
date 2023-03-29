import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 769px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10 mt-20"
    >
      {/* Image Section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreen ? (
          <div className="relative z-0 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-violet-500 before:z-[-1]">
            <Image
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="/ProfilePic.jpeg"
              alt="profile"
              width={400}
              height={400}
            />
          </div>
        ) : (
          <>
            <Image
              className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="/ProfilePic.jpeg"
              alt="profile"
              width={400}
              height={400}
              priority={true}
            />
          </>
        )}
      </div>
      {/* Main TEXT TING  */}
      <div className="z-30 basis mt-12 md:mt32 ">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl z-10 font-extrabold text-center text-roboto md:text-start -">
            Brandon {""}
            <span className="xs:relative xs:text-violet-400 xs:font-semibold z-20 -pt-10 -mt-10">
              Baker
            </span>
          </p>
          <p className="mt-4 mb-7 text-sm font-semibold text-center md:text-start">Engineer and Photographer</p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
        className="flex mt-5 justify-center border: md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <AnchorLink 
            className="py-3 px-7 font-semibold bg-violet-400 hover:text-white transition duration-500"
            onClick={()=> setSelectedPage('contact')}
            href="#contact">
                Contact Me
            </AnchorLink>

            <AnchorLink 
            className="py-0.5 pr-0.5 border-2 border-violet-400 "
            onClick={()=> setSelectedPage('contact')}
            href="#contact">
                <div className=" w-full h-full flex items-center justify-center font-semibold px-10 hover:text-violet-400 transition duration-500">
                    Let's Talk
                </div>
            </AnchorLink>

        </motion.div>

      </div>
    </section>
  );
};

export default Landing;
