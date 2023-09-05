import React, { useEffect, useState } from "react";
import { useDarkMode } from "../../DarkModeContext";
import { project } from "../../content";
import "./project.css";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import AOS from 'aos'

const ProjectSection = () => {
  const { darkMode } = useDarkMode();

  const data = project.project.map((item) => item.data);
  const [slideImage, setSlideImage] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = slideImage === 0;
    const newIndex = isFirstSlide ? data.length - 1 : slideImage - 1;
    setSlideImage(newIndex);
  };

  const nextSlide = (): any => {
    const isNextSlide = slideImage === data.length - 1;
    const newIndex = isNextSlide ? 0 : slideImage + 1;
    setSlideImage(newIndex);
  };

  const slide = () => {
    setSlideImage(prevSlide => (prevSlide + 1) % data.length);
  };
  

  useEffect(() => {
    const interval = setInterval(slide, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    AOS.init({duration: 1000})
  }, [darkMode])

  return (
    <>
      <div
        id={project.id}
        className={
          darkMode
            ? "bg-gray-800  overflow-auto md:overflow-hidden"
            : "bg-white overflow-auto md:overflow-hidden "
        }
      >
        <div className="h-screen py-20 md:py-0 md:h-screen flex md:flex-row flex-col justify-center gap-8 items-center px-8 md:px-16  ">
          <div
          data-aos='fade-down'
            className={
              darkMode
                ? "text-title text-left md:w-2/4 md:text-3xl text-lg md:text-center text-yellow-500"
                : "text-title text-left md:w-2/4 md:text-3xl text-lg md:text-center text-black"
            }
          >
            <p>{project.title}</p>
            <p>{project.description}</p>
          </div>
          <div
          data-aos='fade-up'
            className={
              darkMode
                ? "flex flex-col gap-8  rounded-[20px] overflow-auto shadow-yellow-500 shadow-md border-x-2 border-yellow-500 border-b md:w-2/4 w-full"
                : "flex flex-col gap-8  rounded-[20px] overflow-auto shadow-gray-500 shadow-md border-x-2 border-gray-500 border-b  md:w-2/4 w-full"
            }
          >
            <div className={darkMode ? " container" : "container shadow-lg"}>
              <img className="image" src={data[slideImage].img} />
              <div className="overlay">
                <div className="flex absolute w-full z-50 justify-between">
                  <MdOutlineArrowLeft size={30} onClick={prevSlide} />
                  <MdOutlineArrowRight size={30} onClick={nextSlide} />
                </div>
                <div className="text-img">
                  <div className="text">
                    <p className="text-gray-800">{data[slideImage].title}</p>
                  </div>
                  <p className=" text-sm text-desc text-white">
                    {data[slideImage].desc}
                  </p>
                  <a href={data[slideImage].link} target="_blank" className={darkMode ? 'text-sm italic underline text-yellow-500' : 'text-sm italic underline '}>
                    {data[slideImage].link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
