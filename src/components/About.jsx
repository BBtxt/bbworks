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
          <p className="flex justify-center font-semibold text-4xl mb-8 text-roboto">
            <span className="text-violet-400">ABOUT</span> ME
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
          className="md:w-1/2"
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
            <p className="order-2 font-semibold text-4xl mb-5 text-roboto">
              <span className="text-violet-400">ABOUT</span> ME
            </p>
          ) : null}

          {isAboveMediumScreen ? <LineGradient /> : null}

          <p className="mt-10 mb-7 text-sm font-roboto">
            I am an engineer and photographer based in Seattle. I have
            been formally trained in maritime engineering and have been working
            in the industry for over 5 years. I have a passion for building
            things and I love to learn new things. I am also a photographer and
            I love to take pictures of landscapes and street photography. I am
            always looking for new opportunities to learn and grow. Feel free to
            reach out to me if you have any questions or if you want to
            collaborate on a project.
          </p>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="md:flex md:justify-between mt-16 gap-32">
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl bg-sky-400">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 bg-transparent">
                Experience
              </p>
            </div>

          </div>
          <p className="mt-5">
            A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
            morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
            odio sit sagittis,
          </p>
        </motion.div>

        {/* INNOVATIVE */}
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl bg-blue-400">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>

          </div>
          <p className="mt-5">
            Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl bg-indigo-400">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>

          </div>
          <p className="mt-5">
            Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
            curabitur. Lectus libero, egestas enim aliquam quis felis amet.
            Sagittis, amet netus fringilla netus lobortis odio sed platea.
            Bibendum.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
