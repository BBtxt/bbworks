import React from "react";
import Image from "next/image";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7">
      <a
        className=" p-0.5 rounded-lg hover:opacity-50 transition duration-500 hover:bg-violet-400"
        href="https://www.linkedin.com/in/bb00/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons8-linkedin-2-50.png"
          alt="linkedIn"
          height={30}
          width={30}
        />
      </a>
      <a
        className=" p-0.5 rounded-full hover:opacity-50 transition duration-500 hover:bg-violet-400"
        href="https://github.com/BBtxt"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons8-github-50.png"
          alt="gitHub" 
          height={30}
          width={30}
        />
      </a>
      <a
        className="  p-0.5 rounded-lg hover:opacity-50 transition duration-500 hover:bg-violet-400"
        href="https://www.instagram.com/bblog.world/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/icons8-instagram-50.png"
          alt="Instagram"
          height={30}
          width={30}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
