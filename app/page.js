"use client"

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Works from "@/components/Works";
import { useState, useEffect } from "react";

export default function Home() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
      if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
        setIsDarkMode(true)
      }else{
        setIsDarkMode(false)
      }
    },[])
  
    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "";
      }
    }, [isDarkMode]);
  

  return (
    <main>
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Works isDarkMode={isDarkMode} />
      <Contacts isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode}/>
    </main>
  );
}
