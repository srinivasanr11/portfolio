import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets";

const NavBar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden ">
        <Image src={assets.header_bg_color} alt="Header Background" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? " backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20 " : ""
        }`}
      >
        {/* Logo */}
        <a href="#">
          <Image src={ isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a className="font-ovo" href="#top">Home</a>
          </li>
          <li>
            <a className="font-ovo" href="#about">About Me</a>
          </li>
          <li>
            <a className="font-ovo" href="#services">Services</a>
          </li>
          <li>
            <a className="font-ovo" href="#work">Work</a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">Contact Me</a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Button */}
          <button onClick={()=> setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Moon Icon" className="w-6" />
          </button>

          {/* Contact Button (Desktop) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact <Image src={ isDarkMode ? assets.arrow_icon_dark :assets.arrow_icon} className="w-3" alt="Arrow Icon" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={ isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 
          transition duration-500  dark:bg-darkHover dark:text-white"
        >
          {/* Close Button */}
          <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
            <Image src={ isDarkMode ? assets.close_white : assets.close_black} alt="Close Icon" className="w-5" />
          </div>

          {/* Menu Links */}
          <li>
            <a href="#top" onClick={closeMenu} className="font-ovo">Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="font-ovo">About Me</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu} className="font-ovo">Services</a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu} className="font-ovo">Work</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu} className="font-ovo">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
