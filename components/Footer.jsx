import React from "react";
import Image from "next/image";
import { assets } from "@/assets/index";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark:assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark:assets.mail_icon} alt="Mail Icon" className="w-6" />
          rockysrini70@gmail.com
        </div>
      </div>


      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
  <p>© 2025 All rights reserved.</p>

  <div className="flex flex-wrap items-center justify-center gap-x-1 text-sm sm:text-base text-center">
  Built with 
  <span className="text-[#D70654] text-2xl px-1">♡</span>
  by&nbsp;
  <a 
    href="mailto:rockysrini70@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="underline underline-offset-2"
  >
    ROCKY
  </a>
</div>


  
  <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
    <li><a target="_blank" href="https://www.instagram.com/rocky_srini_">Instagram</a></li>
    <li><a target="_blank" href="https://linkedin.com/in/srinivasanr11">LinkedIn</a></li>
    <li><a target="_blank" href="https://github.com/srinivasanr11">GitHub</a></li>
  </ul>
</div>

    </div>
  );
};

export default Footer;


