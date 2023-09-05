import { useDarkMode } from "../../DarkModeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import "./Icon.css"; // Assume this is the CSS file for Icon component

const Icon = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <label className="dark_mode">
      <input type="checkbox" className="dark_mode_input" checked={darkMode} onChange={toggleDarkMode} />
        <MdOutlineDarkMode className="toogle-dark-mode" />
        <MdOutlineLightMode className="toogle-light-mode" />
      </label>
    </>
  );
};

export default Icon;
