import { assets, serviceData } from '@/assets';
import Image from "next/image";
import React from 'react';

const Services = () => {
  return (
    <section
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      aria-labelledby="services-heading"
    >
      <h4
        id="services-heading"
        className="text-center mb-2 text-lg font-ovo"
      >
        What I offer
      </h4>

      <h2 className="text-center text-5xl font-ovo">
        My Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I am an AI/ML developer with 3 years of hands-on experience in machine learning and deep learning projects.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <article
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
              hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover
              dark:hover:shadow-white"
            aria-label={`Service: ${title}`}
          >
            <Image src={icon} alt={`${title} icon`} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5"
              aria-label={`Read more about ${title}`}
            >
              Read more
              <Image src={assets.right_arrow} alt="Arrow icon" className="w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
