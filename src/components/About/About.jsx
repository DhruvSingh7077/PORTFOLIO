import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side*/}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greetings*/}
          <h1 className="text-3xl sm:text-6xl font-bold text-white mb-2 leading-tight">
            HI I AM
          </h1>
          {/* Name*/}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Dhruv Singh
          </h2>
          {/* Skills heading with typing effect*/}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-4  text-[#8245ec] leading-tight">
            <span className="text-white">i am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={["Full Stack Devloper", "UI/UX Devloper", "Coder"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>
          {/* about paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate and dedicated Full Stack Developer with a knack
            for crafting seamless web experiences. With a strong foundation in
            both front-end and back-end technologies.
          </p>
          <a
            href="My Resume (3).pdf" // place your CV inside the public folder
            download="Dhruv_Singh_CV.pdf"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        {/* <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={""}
            alt="ds"
            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;
