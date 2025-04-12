'use client';

import { experience } from '@/assets';
import Image from 'next/image';
import React from 'react';

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full px-[10%] py-10 scroll-mt-20 sm:px-6"
    >
      <h2
        id="experience-heading"
        className="text-center text-3xl sm:text-4xl font-ovo"
      >
        My Experience
      </h2>

      <div className="relative mt-16 max-w-6xl mx-auto">
        {/* Vertical timeline line */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-1 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-12 sm:gap-10 font-ovo">
          {experience.map(({ icon, title, description, Role, duration }, index) => {
            const isLeft = index % 2 === 0;
            return (
              <article
                key={index}
                className={`relative w-full flex flex-col sm:flex-row ${
                  isLeft ? 'sm:justify-start' : 'sm:justify-end'
                }`}
                aria-label={`${title} experience`}
              >
                <div className="w-full sm:w-1/2 px-4 sm:px-6">
                  <div className="bg-white dark:bg-darkTheme border-2 border-gray-300 dark:border-white p-6 rounded-xl shadow-lg relative z-10 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white dark:hover:bg-darkHover/50">
                    <header className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Image
                          src={icon}
                          alt={`${title} icon`}
                          width={24}
                          height={24}
                          className="w-6 h-6 sm:w-5 sm:h-5 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-base font-semibold text-gray-800 dark:text-white">
                          {title}
                        </h3>
                        {Role && (
                          <p className="text-sm text-gray-700 dark:text-gray-300">{Role}</p>
                        )}
                        {duration && (
                          <p className="text-xs text-gray-500 dark:text-gray-400">{duration}</p>
                        )}
                      </div>
                    </header>
                    <p className="text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
