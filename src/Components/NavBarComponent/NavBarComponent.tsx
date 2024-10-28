import { IoMoonOutline } from "react-icons/io5";
import { MdClose, MdOutlineWbSunny } from "react-icons/md";
import { toggleMode } from "./../../Redux/Slice/ModeSlice";
import { Link } from "react-router-dom";
import "./../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

interface NavBarProps {
  name: string;
}

const NavBarComponent: React.FC<NavBarProps> = ({ name }) => {
  const darkMode = useSelector((state: any) => state.mode.darkMode);
  const dispatch = useDispatch();
  const [isClosed, setIsClosed] = useState(true);

  return (
    <nav
      className={`flex justify-between max-w-[1217px] mx-auto items-center pt-8 px-[20px] mb-[30px] pb-[20px] sticky top-0 z-30 ${
        darkMode ? "bg-dark-mode-color" : "bg-white"
      }`}
    >
      <h1 className="text-[20px] font-semibold">{name}</h1>
      <ul className="hidden md:flex">
        <li className="flex items-center justify-center h-10 pr-4 text-[18px]">
          <Link to="/">Blog</Link>
        </li>
        <li className="flex items-center justify-center h-10 pr-4 text-[18px]">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="flex items-center justify-center h-10 pr-4 text-[18px]">
          <Link to="/about">About</Link>
        </li>
        <li className="flex items-center justify-center h-10 pr-4 text-[18px]">
          <Link to="/newsletter">Newsletter</Link>
        </li>
        <li className="flex justify-center">
          <button
            className={`${
              darkMode ? "bg-white" : "bg-dark-mode-color"
            } rounded-[29px] w-[96px]`}
            onClick={() => dispatch(toggleMode())}
          >
            {darkMode ? (
              <span className="flex justify-between !text-black px-4">
                <span className="flex w-6 h-6 rounded-full bg-dark-mode-color">
                  <MdOutlineWbSunny size={24} />
                </span>
                <IoMoonOutline size={24} />
              </span>
            ) : (
              <span className="flex justify-between !text-white px-4">
                <MdOutlineWbSunny size={24} />
                <span className="flex w-6 h-6 bg-white rounded-full">
                  <IoMoonOutline size={24} />
                </span>
              </span>
            )}
          </button>
        </li>
      </ul>
      <span
        onClick={() => {
          setIsClosed(false);
        }}
        className="flex items-center justify-center h-10 md:hidden hover:cursor-pointer"
      >
        <FaBars size={24} />
      </span>

      {/* Toggle Menu NavBar */}
      <div
        className={`absolute z-50 ${
          isClosed ? "right-[200%]" : "right-0"
        } top-0 h-[100vh] w-full flex flex-col items-center justify-center ${
          darkMode ? "bg-dark-mode-color text-white" : "bg-white text-black"
        } transition-all duration-500 ease-in-out`}
      >
        <h1 className="text-[20px] font-semibold mb-[54px]">{name}</h1>
        <ul className="flex flex-col items-center gap-[20px]">
          <li className="text-[18px]">
            <Link to="/">Blog</Link>
          </li>
          <li className="text-[18px]">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="text-[18px]">
            <Link to="/about">About</Link>
          </li>
          <li className="text-[18px]">
            <Link to="/newsletter">Newsletter</Link>
          </li>
          <li className="flex justify-center">
            <button
              className={`${
                darkMode ? "bg-white" : "bg-dark-mode-color"
              } rounded-[29px] w-[96px] h-10`}
              onClick={() => dispatch(toggleMode())}
            >
              {darkMode ? (
                <span className="flex justify-between !text-black px-4">
                  <span className="flex w-6 h-6 rounded-full bg-dark-mode-color">
                    <MdOutlineWbSunny size={24} />
                  </span>
                  <IoMoonOutline size={24} />
                </span>
              ) : (
                <span className="flex justify-between !text-white px-4">
                  <MdOutlineWbSunny size={24} />
                  <span className="flex w-6 h-6 bg-white rounded-full">
                    <IoMoonOutline size={24} />
                  </span>
                </span>
              )}
            </button>
          </li>
          <li
            onClick={() => {
              setIsClosed(true);
            }}
            className="absolute bottom-[20px] hover:cursor-pointer"
          >
            <MdClose size={24} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComponent;
