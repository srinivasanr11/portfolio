import { assets } from "@/assets";
import React, { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "93deae19-ad72-49ca-9b49-6652dbdc1322");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      {/* Section Heading */}
      <h4 className="text-center mb-2 text-lg font-ovo" id="contact-heading">
        Connect with me
      </h4>

      <h2 className="text-center text-5xl font-ovo">
        Get in touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments, or feedback,
        please use the form below.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        method="POST"
        aria-label="Contact form"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            aria-label="Your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="Name"
            autoComplete="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            aria-label="Your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            name="E-mail"
            autoComplete="email"
          />
        </div>

        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          aria-label="Your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          name="Message"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          aria-label="Submit contact form"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="Arrow icon"
            className="w-4"
          />
        </button>

        <p className="mt-4" role="status" aria-live="polite">{result}</p>
      </form>
    </section>
  );
};

export default Contact;
