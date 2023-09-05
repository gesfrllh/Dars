import React, { useEffect } from "react";
import { useDarkMode } from "../../DarkModeContext";
import Typewrite from "typewriter-effect";
import { home } from "../../content";
import "./home.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css'


const HomeSection = () => {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [darkMode])

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  return (
    <>
      <div
        id={home.id}
        className={
          darkMode
            ? "bg-gray-800 text-white transition-all"
            : "bg-white text-gray-800 transition-all"
        }
      >
        <div className="h-screen  flex items-center justify-center">
          <div
          data-aos='fade-down'
            className={
              darkMode
                ? "flex flex-col border-2  border-yellow-600 text-yellow-500  shadow-xl transition-all rounded-lg py-8 md:w-[500px] w-96 px-8 gap-8"
                : "flex flex-col shadow-lg border border-gray-200 rounded-lg py-8 md:w-[500px] w-96 px-8 gap-8"
            }
          >
            <div className="text-lg md:text-2xl" 
            >
              <div className="text text-center md:text-left">
                <p>{home.title}</p>
              </div>
              <div className="text-write text-center md:text-left">
                <Typewrite
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Dwi Arya Safrulloh",
                      "Frontend Developer",
                      "React - JS Developer",
                      "Vue - JS Developer",
                    ],
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link
                to="/projects"
                className="Link hover:text-yellow-500"
              >
                {home.button}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection;
