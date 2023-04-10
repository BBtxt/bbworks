import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import LineGradient from "./LineGradient";
import Image from "next/image";

const About = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width: 769px)");
  return (
    <section id="about" className="pt-10 pb-24">
      {/* Header and Image  */}

      <div className="md:flex md:justify-between md:gap-16 mt-32">
        {/* SmallScreen ABOUT ME */}
        {isAboveMediumScreen ? null : (
          <p className="flex justify-center font-semibold text-6xl mb-8 font-bebas">
            <span className="text-violet-400">ABOUT </span> ME
          </p>
        )}
        {/* Photo */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex justify-center md:mt-0">
            {isAboveMediumScreen ? (
              <div className="relative z-0 before:absolute">
                <Image
                  className="z-10"
                  src="/KidsPhoto.jpg"
                  alt="kids"
                  width={400}
                  height={400}
                />
              </div>
            ) : (
              <Image
                className="z-10 "
                src="/KidsPhoto.jpg"
                alt="kids"
                width={400}
                height={400}
              />
            )}
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {isAboveMediumScreen ? (
            <p className="font-semibold text-6xl font-bebas">
              <span className="text-violet-400">ABOUT</span> ME
            </p>
          ) : null}

          <p className="mt-4 mb-5 text-sm font-roboto">
            I am an engineer and photographer based in Seattle. Formally trained in maritime engineering and have been working in the field for over 5 years. I have a passion for building
            projects and I love to learn new skills. My other passion is photography, 
            I have always enjoyed taking pictures of landscapes and elements of street photography. One fact about me is that, I am always looking for new opportunities to learn and grow. Feel free to
            reach out to me if you have any questions or if you want to
            collaborate on a project.
          </p>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="md:flex md:justify-between mt-16 mb-8 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-10">
              <p className="font-bebas font-semibold text-5xl bg-sky-400">01</p>
              <p className="font-bebas font-semibold text-3xl mt-3 bg-transparent">
                Experience
              </p>
            </div>
          </div>
          <p className="font-roboto">
           Working on complex systems in the maritime industry has given me the insights how to troubleshoot and solve problems. In my past experience I have mastered my skills in design, construction, and commissioning of many projects.
          </p>
        </motion.div>

        {/* CURIOSITY */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-10">
              <p className="font-bebas font-semibold text-5xl bg-blue-400">02</p>
              <p className="font-bebas font-semibold text-3xl mt-3">
                Curiosity
              </p>
            </div>

          </div>
          <p className="font-roboto">
           I have a knack for figuring out how things work. Within every project that I am producing I make sure to have a understanding of all parts of systems interact and symbiotically  . I am always looking for new opportunities to learn and grow. 
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-28">
            <div className="z-10">
              <p className="font-bebas font-semibold text-5xl bg-indigo-400">03</p>
              <p className="font-bebas font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
          </div>
          <p className="font-roboto">
           From looking at a scene and imagining how it would look in a different light to building a system that would solve a problem. I have always been able to see the bigger picture and how things fit together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
