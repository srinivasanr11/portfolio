import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets';
import { motion } from "motion/react";
import { Typewriter } from 'react-simple-typewriter';
const Header = () => {
  return (
    <header
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'
      role="banner"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt='Portrait of Srinivasan R'
          className="rounded-full w-[120px] sm:w-[140px] md:w-[200px]"
          priority
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
      >
        Hi! I&apos;m Srinivasan R
        <Image src={assets.hand_icon} alt='Waving hand emoji' className='w-6 mb-[2px]' />
      </motion.h3>

      {/* Main Heading (h1 is important for SEO) */}
      <motion.h1
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className='text-3xl sm:text-4xl lg:text-[40px] text-center '
    >AI & ML <span>
        <Typewriter
          className = 'font-ovo'
          words={['Developer', 'Engineer']}
          loop={0} // 0 = infinite
          cursor
          cursorStyle='|'
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-ovo'
      >
        As an engineer with expertise in Python, machine learning, deep learning, and data science, 
        I am passionate about transforming innovative ideas into scalable AI solutions.
      </motion.p>

      {/* CTA Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        {/* Contact Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='#contact'
          className='px-8 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
          aria-label="Contact Srinivasan R"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt='Right arrow icon' className='w-4' />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href='/resume.pdf'
          download
          className='px-8 py-2 border border-gray-500 rounded-full flex items-center gap-2 bg-white dark:text-black'
          aria-label="Download Srinivasan R's resume"
        >
          My Resume
          <Image src={assets.download_icon} alt='Download icon' className='w-4' />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
