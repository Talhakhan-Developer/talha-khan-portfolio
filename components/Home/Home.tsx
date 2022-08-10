import React from "react";
import Button from "../Button/Button";

import { eye, user } from "../../icons";

const Home = () => {
  return (
    <div id="home" className="w-screen mt-[75px]">
      <div className="w-[80%] flex flex-col-reverse md:flex-row justify-between items-center mx-auto">
        {/* left hero section */}
        <div className="flex text-center lg:text-justify md:w-[60%] flex-col justify-start font-poppin md:text-left">
          <h2 className="text-left font-normal  text-dark mt-4 mb-0 ml-14 sm:ml-7 md:ml-0  md:mb-2 md:text-h2">
            Hi, I&apos;m
          </h2>
          <h1 className="md:text-h1 text-4xl font-semibold text-primary md:mb-4">
            Talha Khan
          </h1>
          <p className="paragraph">
            Fleelance UI designer, Full-stack <br /> developer. I create
            seamless web <br />
            experience&apos;s for end-user.
          </p>
          <div className="flex space-x-[20px] lg:space-x-[28px]">
            <Button
              text="Projects"
              icon={eye}
              variant="primary"
              url="#projects"
            />
            <Button
              text="Hire me"
              icon={user}
              variant="secondary"
              url="#contact"
            />
          </div>
        </div>
        {/* right hero section */}
        <div className=" relative flex items-start justify-center md:w-[40%]">
          <img
            className="relative object-cover w-40 h-44 md:h-[250px] md:w-[200px] lg:h-[400px] lg:w-[300px] rounded-tl-full rounded-tr-full ring-4 ring-primary"
            src="/Images/me.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
