import Image from "next/image";
import React from "react";
import { android, code, nodejs, uiux } from "../../icons";

const About = () => {
  return (
    <div id="about" className="w-screen mt-[75px]">
      <div className="w-[80%] mx-auto">
        <div>
          <h1 className="section-title">About Me:</h1>
          <p className="paragraph">
            Hi, my name is Talha khan, i am a Fullstack web developer, UI
            designer. I have honed my skills in Web Development and advance i
            have core understanding of advance web design principles. Here are
            the major skiills i have.
          </p>
          <div className="flex space-x-6 items-center">
            <span className="md:text-8xl text-h1 font-extrabold text-primary md:mb-4">
              5+
            </span>
            <span className="paragraph text-2xl font-bold">
              Years of experience. Specialised in building Web apps, while
              ensuring a seamless web experience for end users.
            </span>
          </div>
          <div className="cards">
            {/* single card */}
            <div className="flex card flex-col items-start justify-end p-7 w-64 h-64 bg-primary shadow-lg md:shadow-xl">
              <Image src={code.src} alt="" width={50} height={50} />
              <h2 className="section-title mt-2 text-white font-medium">
                Web <br />
                Development
              </h2>
            </div>
            {/* single card */}
            <div className="flex card flex-col items-start justify-end p-7 w-64 h-64 bg-gray shadow-lg md:shadow-xl">
              <Image src={uiux.src} alt="" width={50} height={50} />
              <h2 className="section-title mt-2 text-primary font-medium">
                UI / UX
                <br />
                Designing
              </h2>
            </div>
            {/* single card */}
            <div className="flex card flex-col items-start justify-end p-7 w-64 h-64 bg-gray shadow-lg md:shadow-xl">
              <Image src={nodejs.src} alt="" width={50} height={50} />
              <h2 className="section-title mt-2 text-primary font-medium">
                MERN stack
                <br />
                Development
              </h2>
            </div>
            {/* single card */}
            <div className="flex card flex-col items-start justify-end p-7 w-64 h-64 bg-gray shadow-lg md:shadow-xl">
              <Image src={android.src} alt="" width={50} height={50} />
              <h2 className="section-title mt-2 text-primary font-medium">
                Mobile
                <br />
                Development
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
