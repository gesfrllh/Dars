import { useEffect, useState } from "react";
import { header } from "../../content";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../DarkModeContext";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

const Navbar = () => {
  const [activeLinks, setActiveLinks] = useState({
    home: false,
    project: false,
    about: false,
    contact: false,
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateSpin, setAnimateSpin] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  const handleDarkModeClick = () => {
    setAnimateSpin(true);
    toggleDarkMode();
    setTimeout(() => setAnimateSpin(false), 1000);
  };

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div
        className={`${
          darkMode
            ? "bg-gray-800 text-yellow-500 rounded-b-xl fixed w-full z-50 border-b-2 border-yellow-500"
            : "bg-white border text-black fixed w-full z-50 rounded-b-xl"
        }`}
      >
        <div className="hidden md:flex nav text-xl  font-semibold items-center z-[100] px-8 shadow-md rounded-b-xl  justify-between relative py-4">
          <div className="hidden md:flex py-4 w-full md:justify-between">
            <div className="flex gap-10">
              <Link
                className={activeLinks.home ? "linkActive" : "Link"}
                to="/"
              >
                {header.home}
              </Link>
              <Link
                to="/about"
                className={activeLinks.about ? "linkActive" : "Link"}
              >
                {header.about}
              </Link>{" "}
              <Link
                to="/projects"
                className={activeLinks.project ? "linkActive" : "Link"}
              >
                {header.project}
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 flex-row-reverse">
              <button
                className={`flex items-center justify-center ${
                  animateSpin ? "animate-spin" : ""
                }`}
                onClick={handleDarkModeClick}
              >
                {darkMode ? (
                  <MdOutlineLightMode size={24} />
                ) : (
                  <MdOutlineDarkMode size={24} />
                )}
              </button>
              <Link
                to="/contact"
                className={activeLinks.contact ? "linkActive" : "Link"}
              >
                {header.contact}
              </Link>
            </div>
          </div>
        </div>

        <div
          className={
            darkMode
              ? "md:hidden nav text-xl bg-gray-800 text-yellow-500 font-semibold items-center px-8 z-50 border-b-2 border-yellow-500 shadow-md rounded-b-xl  fixed w-full py-4"
              : "md:hidden nav text-xl text-black font-semibold items-center px-8 z-50 border-b shadow-md rounded-b-xl bg-white fixed w-full py-4"
          }
        >
          <div className="flex justify-between items-center">
            <div className="font-bold">
              <button
                className={`flex items-center justify-center ${
                  animateSpin ? "animate-spin" : ""
                }`}
                onClick={handleDarkModeClick}
              >
                {darkMode ? (
                  <MdOutlineLightMode size={24} />
                ) : (
                  <MdOutlineDarkMode size={24} />
                )}
              </button>
            </div>
            <div className="flex items-center">
              <button
                className={darkMode ? 'text-yellow-500 md:hidden' :  'md:hidden text-black'}
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? "Close" : "Menu"}
              </button>
            </div>
          </div>
          {mobileMenuOpen && (
            <div className="flex  items-center justify-center">
              <div className="mt-4 flex flex-col justify-center items-center gap-4">
                <Link
                  to="/"
                  className={activeLinks.home ? "linkActive" : "Link"}
                  onClick={toggleMobileMenu}
                >
                  {header.home}
                </Link>
                <Link
                  to="/about"
                  className={activeLinks.about ? "linkActive" : "Link"}
                  onClick={toggleMobileMenu}
                >
                  {header.about}
                </Link>
                <Link
                  to="/projects"
                  className={activeLinks.project ? "linkActive" : "Link"}
                  onClick={toggleMobileMenu}
                >
                  {header.project}
                </Link>
                <Link
                  to="contact"
                  className={activeLinks.contact ? "linkActive" : "Link"}
                  onClick={toggleMobileMenu}
                >
                  {header.contact}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
