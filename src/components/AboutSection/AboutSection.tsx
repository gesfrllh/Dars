import React, { useEffect } from "react";
import { about } from "../../content";
import { useDarkMode } from "../../DarkModeContext";
import AOS from "aos";

const AboutSection = () => {

  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [darkMode]);


  useEffect(() => {
    AOS.refresh(); 
  }, [darkMode]);


  return (
    <>
      <div id={about.id} className={darkMode ? " bg-gray-800 overflow-auto md:overflow-hidden" : "bg-white overflow-auto md:overflow-hidden"}>
        <div className="md:h-screen h-auto mt-12 md:mt-auto flex items-center justify-center ">
          <div
            className={
              darkMode
                ? "text-yellow-500 flex px-4 mt-8 flex-col gap-6 "
                : "text-black  px-4 flex mt-8 flex-col gap-6"
            }
          >
            <div
              data-aos="fade-right"
              className={
                darkMode
                  ? "border border-yellow-500 flex flex-col w-full h-full md:w-2/3 px-6 py-6 rounded-lg shadow-lg gap-4 "
                  : "border flex flex-col w-full px-6 py-6 gap-4 md:w-2/3 rounded-lg shadow-lg h-full"
              }
            >
              <div className="text ">
                <p>{about.title}</p>
                <p>{about.name}</p>
                
              </div>
              <div
                className={
                  darkMode
                    ? " text-yellow-500"
                    : " text-gray-500"
                }
              >
                <p>{about.description}</p>
              </div>
              
            </div>
            <div className="flex items-end justify-end">
              <div
                data-aos="fade-left"
                className={
                  darkMode
                    ? "border border-yellow-500 flex w-full md:w-2/3 justify-center items-center flex-col px-6 py-6 gap-4 rounded-lg shadow-lg"
                    : "border justify-center items-center flex flex-col w-full px-6 py-6 gap-4 md:w-2/3 rounded-lg shadow-lg"
                }
              >
                <div className="text">
                  <p>Stack</p>
                </div>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-2">
                  {about.stack.map((item, index) => (
                    <div
                      key={index}
                      className={
                        darkMode
                          ? "group relative h-12 overflow-hidden rounded-2xl shadow"
                          : "group relative h-12 overflow-hidden rounded-2xl shadow"
                      }
                    >
                      <div
                        className={
                          darkMode
                            ? "absolute inset-0 w-0 flex items-center justify-center  bg-yellow-200 transition-all duration-[250ms] ease-out group-hover:w-full"
                            : "absolute inset-0 w-0 flex items-center justify-center  bg-gray-200 transition-all duration-[250ms] ease-out group-hover:w-full"
                        }
                      ></div>
                      <div
                        className={
                          darkMode
                            ? "flex items-center gap-4 relative px-4 py-1 text-yellow-500 border h-12 border-yellow-500 hover:text-yellow-700 transition-all"
                            : "flex items-center gap-4 relative px-4 py-1 text-black border h-12 border-gray-500  transition-all"
                        }
                      >
                        <img
                          src={item.data.img}
                          alt=""
                          width={32}
                          height={32}
                        />
                        <p className="text-desc  ">{item.data.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
