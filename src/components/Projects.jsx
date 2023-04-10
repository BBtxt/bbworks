import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [isOpenMenu1, setIsOpenMenu1] = useState(false);
  const [isOpenMenu2, setIsOpenMenu2] = useState(false);
  const handleMenu1Clicked = () => {
    setIsOpenMenu1(!isOpenMenu1);
  };
  const handleMenu2Clicked = () => {
    setIsOpenMenu2(!isOpenMenu2);
  };

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* Heading */}
      <motion.div
        className="md:w-2/4 mx-auto text-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-semibold text-8xl mb-5 font-bebas">Projects</p>
        </div>
      </motion.div>

      {/* PROJECT 1 */}

      <div className="md:w4/5 mx-auto content-center mb-12">
        <p className="text-2xl font-semibold  font-bebas text-center mb-4">/bblog_world</p>
        <div className="flex justify-center flex-col gap-12 md:flex-row  md:justify-stretch">
          <div className="">
            <Image
              className="mx-auto"
              src="/BBlogWorld.gif"
              alt="BBlogWorld website gif"
              width={600}
              height={600}
            />
          </div>
          <div className="object-contain w-full md:w-1/2">
            <motion.nav
              className=""
              initial={false}
              animate={isOpenMenu1 ? "open" : "closed"}
            >
              <motion.button
                className=" w-full flex items-center justify-between gap-6 font-roboto p-2 mb-4"
                whileTap={{ scale: 0.97 }}
                onClick={handleMenu1Clicked}
              >
                About
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <svg width="15" height="15" viewBox="0 0 20 20">
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </motion.button>
              <motion.ul
                className="border-dotted border-2 border-black p-4"
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpenMenu1 ? "auto" : "none" }}
              >
                <motion.li
                  variants={itemVariants}
                  className="text-sm font-semibold"
                >
                  Abstract:
                </motion.li>
                <motion.li variants={itemVariants} className="text-sm font-roboto">
                  Full Stack application that uses Next.js, GraphQL, Hygraph,
                  and Tailwind. This is a blog site that use Hygraph CMS for
                  content management. The site is fully responsive for desktop
                  and mobile. Leverages Instagram API to mirror my feed. The
                  site is hosted on Vercel.
                </motion.li>
                <motion.li
                  className="text-sm font-semibold font-roboto"
                  variants={itemVariants}
                >
                  Status:
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="text-sm font-semibold text-green-400 font-roboto "
                >
                  Continuous Development
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="text-sm font-semibold font-roboto"
                >
                  Links:
                </motion.li>
                <motion.li variants={itemVariants}>
                  {" "}
                  <a
                    className="text-sm underline font-roboto"
                    href="https://www.bblog.world/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Preview
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a
                    className="text-sm  underline font-roboto"
                    href="https://github.com/BBtxt/bblog_world"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </div>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="md:w4/5 mx-auto content-center">
        <p className="text-2xl font-semibold text-center mb-4 font-bebas">/threeD</p>
        <div className="flex justify-center flex-col gap-12 md:flex-row  md:justify-stretch">
          <div className="">
            <Image
              className="mx-auto"
              src="/three3D.gif"
              alt="3d website gif"
              width={600}
              height={600}
            />
          </div>
          <div className="object-contain w-full md:w-1/2">
            <motion.nav
              className=""
              initial={false}
              animate={isOpenMenu2 ? "open" : "closed"}
            >
              <motion.button
                className=" w-full flex items-center justify-between gap-6 font-roboto p-2 mb-4"
                whileTap={{ scale: 0.97 }}
                onClick={handleMenu2Clicked}
              >
                About
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <svg width="15" height="15" viewBox="0 0 20 20">
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </motion.button>
              <motion.ul
                className="border-dotted border-2 border-black p-4"
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: isOpenMenu2 ? "auto" : "none" }}
              >
                <motion.li
                  variants={itemVariants}
                  className="text-sm font-semibold font-roboto"
                >
                  Abstract:
                </motion.li>
                <motion.li variants={itemVariants} className="text-sm font-roboto">
                  Application that takes of Three.js library to create a 3D
                  space scene that can be navigated with the mouse. Includes
                  randomly generated stars and planet with rotating ring.
                </motion.li>
                <motion.li
                  className="text-sm font-semibold font-roboto"
                  variants={itemVariants}
                >
                  Status:
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="text-sm font-semibold text-red-400 font-roboto "
                >
                  Out of Development
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="text-sm font-semibold font-roboto"
                >
                  Links:
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a
                    className="text-sm  underline"
                    href="https://github.com/BBtxt/ThreeD"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </motion.li>
              </motion.ul>
            </motion.nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
