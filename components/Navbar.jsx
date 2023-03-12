"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative z-10 bg-primary-black`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <h2
          style={{ color: `${textColor}` }}
          className="font-bold text-3xl sm:text-4xl"
        >
          <a href="/">KLEVER</a>
          <span className="text-purple-400"> BPO</span>
        </h2>
        <div className="sm:hidden">
          <a href="tel:+(973) 444-2767">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone-call"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#be83fa"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
          </a>
        </div>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex font-semibold "
        >
          <li className="p-4 flex flex-row">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-phone-call"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#be83fa"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
            </div>
            <a
              href="tel:+(973) 444-2767"
              className="pl-4 leading-normal text-white hover:text-purple-400"
            >
              (973) 444-2767
            </a>
          </li>
          <li className="p-4 hover:text-purple-400 ">
            <a href="/">Home</a>
          </li>
          <li className="p-4 hover:text-purple-400">
            <a href="#explore">Services</a>
          </li>
          <li className="p-4 hover:text-purple-400">
            <a href="#about">About</a>
          </li>
          <li className="flex text-white items-center  bg-purple-700 border-0 px-2  hover:bg-purple-600 rounded-xl text-lg">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-20">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <a href="/">Home</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <a href="#explore">Services</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <a href="#about">About</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute w-[50%] inset-0 gradient-01 -z-10" />
    </motion.nav>
  );
};

export default Navbar;
