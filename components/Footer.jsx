import React from "react";
import Image from "next/image";
import { assets } from "@/assets/index";

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="mt-20" role="contentinfo">
      {/* Logo & Email */}
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Srinivasan R logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="Email icon"
            className="w-6"
          />
          <a
            href="mailto:rockysrini70@gmail.com"
            className="hover:underline"
            aria-label="Send email to rockysrini70@gmail.com"
          >
            rockysrini70@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Footer Content */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="text-sm sm:text-base">© 2025 All rights reserved.</p>

        {/* Credit Line */}
        <div className="flex flex-wrap items-center justify-center gap-x-1 text-sm sm:text-base text-center mt-4 sm:mt-0">
          <span>Built with</span>
          <span className="text-[#D70654] text-2xl px-1" aria-hidden="true">♡</span>
          <span>by&nbsp;</span>
          <a
            href="mailto:rockysrini70@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            aria-label="Email Rocky"
          >
            ROCKY
          </a>
        </div>

        {/* Social Links */}
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/rocky_srini_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rocky's Instagram profile"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/srinivasanr11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rocky's LinkedIn profile"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/srinivasanr11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Rocky's GitHub profile"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
