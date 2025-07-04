import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets";

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
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
      {/* Decorative Header Background */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden" aria-hidden="true">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navigation */}
      <nav
        className={`w-full fixed px-3 lg:px-4 xl:px-[4%] py-2 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll ? "backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#top" aria-label="Homepage">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Developer Logo"
            className="w-[100px] cursor-pointer mr-8"
          />
        </a>

        {/* Desktop Navigation Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 py-2 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li><a className="font-ovo" href="#top">Home</a></li>
          <li><a className="font-ovo" href="#about">About Me</a></li>
          <li><a className="font-ovo" href="#experience">Experience</a></li>
          <li><a className="font-ovo" href="#services">Services</a></li>
          <li><a className="font-ovo" href="#work">Work</a></li>
          <li><a className="font-ovo" href="#contact">Contact Me</a></li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(prev => !prev)}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isDarkMode ? "Sun Icon" : "Moon Icon"}
              className="w-6"
            />
          </button>

          {/* Contact Button (Desktop Only) */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-3 text-sm border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
            aria-label="Contact Me"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </a>

          {/* Mobile Menu Open Button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open mobile menu"
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu Icon"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 
          transition duration-500 dark:bg-darkHover dark:text-white"
          role="menu"
          aria-label="Mobile navigation menu"
        >
          {/* Close Button */}
          <li className="absolute right-6 top-6 cursor-pointer list-none" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close Menu Icon"
              className="w-5"
            />
          </li>

          {/* Menu Items */}
          <li><a href="#top" onClick={closeMenu} className="font-ovo" role="menuitem">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="font-ovo" role="menuitem">About Me</a></li>
          <li><a href="#experience" onClick={closeMenu} className="font-ovo" role="menuitem">Experience</a></li>
          <li><a href="#services" onClick={closeMenu} className="font-ovo" role="menuitem">Services</a></li>
          <li><a href="#work" onClick={closeMenu} className="font-ovo" role="menuitem">Work</a></li>
          <li><a href="#contact" onClick={closeMenu} className="font-ovo" role="menuitem">Contact Me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
