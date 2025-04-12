import Image from "next/image";
import { assets, workData } from "@/assets";
import React from "react";

const Work = ({ isDarkMode }) => {
  return (
    <section
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      aria-labelledby="portfolio-heading"
    >
      <h4
        id="portfolio-heading"
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </h4>

      <h2 className="text-center text-5xl font-ovo">
        My latest work
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my developer portfolio! Explore a collection of projects showcasing my expertise in project development.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <article
            key={index}
            className="aspect-square bg-cover bg-center bg-no-repeat rounded-lg relative cursor-pointer group overflow-hidden"
            style={{ backgroundImage: `url(${project.bgImage})` }}
            aria-label={`Project: ${project.title}`}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a href={project.link} aria-label={`Visit ${project.title} project`}>
                  <Image
                    src={assets.send_icon}
                    alt={`Open ${project.title}`}
                    className="w-5"
                  />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <a
        href="https://github.com/srinivasanr11"
        className="w-max flex items-center justify-center gap-2 text-gray-700 
          border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
          dark:text-white dark:border-white dark:hover:bg-darkHover"
        aria-label="View more projects on GitHub"
      >
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Arrow icon for show more"
          className="w-4"
        />
      </a>
    </section>
  );
};

export default Work;
