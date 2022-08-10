import React from "react";
import Button from "../Button/Button";

import { eye, user } from "../../icons";

const Home = () => {
  return (
    <div id="home" className="w-screen">
      <div className="w-[85%] flex justify-between items-center mx-auto">
        <div className="flex flex-1 w-[50%] flex-col justify-start font-poppin">
          <h2 className="font-normal text-h2 text-dark -mb-4">Hi, I&apos;m</h2>
          <h1 className="text-h1 font-semibold text-primary">Talha Khan</h1>
          <p className="text-dark text-nav font-medium mb-6">
            Fleelance UI designer, Full-stack <br /> developer. I create
            seamless web <br />
            experience&apos;s for end-user.
          </p>
          <div className="flex space-x-[28px]">
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
        <div className=" relative flex items-start justify-start">
          <div className=" absolute w-[300px] h-[300px] bg-primary filter blur-xl  -bottom-1   rounded-full overflow-hidden"></div>
          <img
            className=" relative h-[300px] w-[300px] rounded-full"
            src="/Images/me.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
