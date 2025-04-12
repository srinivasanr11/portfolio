import { assets, infoList, toolsData } from '@/assets';
import React from 'react';
import Image from 'next/image';

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      {/* Section Header */}
      <h4 className="text-center mb-2 text-lg font-ovo" id="about-heading">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-ovo">
        About Me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Profile Image */}
        <figure className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="Portrait of the developer"
            className="w-full rounded-3xl"
          />
        </figure>

        {/* About Description */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo text-justify md:text-left">
            I specialize in building and optimizing AI-powered solutions that enhance productivity and decision-making. 
            I thrive in collaborative environments, where I can generate ideas, develop innovative solutions, and bring them to life. 
            My mission is to combine creativity and technology to transform ideas into scalable, impactful AI solutions.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl" role="list">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
                role="listitem"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={`${title} icon`}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white/80">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <h4 className="my-6 text-gray-700 font-ovo dark:text-white/80" id="tools-heading">
            Tools I use
          </h4>

          <ul
            className="flex items-center gap-3 sm:gap-5"
            aria-labelledby="tools-heading"
            role="list"
          >
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                role="listitem"
              >
                <Image
                  src={tool}
                  alt={`Tool logo ${index + 1}`}
                  className="sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
