import { assets, infoList, toolsData } from '@/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      aria-labelledby="about-heading"
    >
      {/* Section Header */}
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        id="about-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <motion.figure
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={assets.user_image}
            alt="Portrait of the developer"
            className="w-full rounded-3xl"
          />
        </motion.figure>

        {/* About Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo text-justify md:text-left">
            I specialize in building and optimizing AI-powered solutions that enhance productivity and decision-making. 
            I thrive in collaborative environments, where I can generate ideas, develop innovative solutions, and bring them to life. 
            My mission is to combine creativity and technology to transform ideas into scalable, impactful AI solutions.
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            role="list"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
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
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="my-6 text-gray-700 font-ovo dark:text-white/80"
            id="tools-heading"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex items-center gap-3 sm:gap-5"
            aria-labelledby="tools-heading"
            role="list"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                role="listitem"
              >
                <Image
                  src={tool}
                  alt={`Tool logo ${index + 1}`}
                  className="sm:w-7"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
