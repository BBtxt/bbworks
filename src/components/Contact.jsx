import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48 flex flex-col">
      {/* HEADER */}
      <motion.div
        className="flex justify w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-semibold font-bebas text-4xl mb-5">CONTACT ME</p>
        </div>
      </motion.div>

      {/* FORM */}

        <motion.div
        className="content-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            className="flex flex-col"
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/65d5edec20a2eb4ba10c8dcc0c9308f1"
            method="POST"
          >
            <input
              className="w-3/4 bg-violet-100 border border-black font-semibold font-roboto placeholder-opaque-black p-3"
              type="text"
              placeholder="Hi, What's your name?"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red-400 mt-1 font-roboto">
                {errors.name.type === "required" && "Name is required"}
                {errors.name.type === "maxLength" && "Name is too long"}
              </p>
            )}
            <input
              className="w-3/4 bg-violet-100 border border-black mt-2 mb-2 font-roboto font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="Best email to reach you at?"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-400 mt-1 font-roboto">
                {errors.email.type === "required" && "Email is required"}
                {errors.email.type === "pattern" && "Invalid email address"}
              </p>
            )}
            <textarea
              className="w-3/4 bg-violet-100 border border-black font-semibold placeholder-opaque-black font-roboto p-3"
              type="text"
              placeholder="Hey Brandon!"
              rows="5"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2500,
              })}
            />
            {errors.message && (
              <p className="text-red-400 mt-1">
                {errors.message.type === "required" && "You gotta say something!"}
                {errors.message.type === "maxLength" &&
                  "Okay that was too much.. Lets set up a connect."}
              </p>
            )}
            <button
    
              type="submit"
              className=" h-12 w-20 font-roboto bg-violet-200 font-semibold mt-5 hover:bg-violet-500
            hover:text-white transition duration-500 ease-in-out"
            >
              Hey!
            </button>
          </form>
        </motion.div>

    </section>
  );
};

export default Contact;
