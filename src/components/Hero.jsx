import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';


const Hero = () => {
  const headerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current && imageRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = 300;
        const scale = Math.max(1 - scrolled / maxScroll, 0.8);
        const translateY = Math.min(scrolled * 0.5, 100);
        
        imageRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        headerRef.current.style.opacity = Math.max(1 - scrolled / maxScroll, 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className="flex flex-col justify-center py-15 transition-all duration-300"
    >
      <div className="w-[40%] mx-auto min-w-[310px] overflow-hidden">
        <img 
          ref={imageRef}
          src="/hero.png"  
          alt="Hero illustration"
          className="transition-transform duration-300 ease-out"
        />
      </div>
      <h1 className="text-white max-w-3xl mx-auto text-5xl text-center capitalize mt-3 transition-all duration-300 hover:scale-105">
        Find <span className="gradient hover:opacity-80 transition-opacity duration-300">Movies </span> you'll Enjoy without the
        hassle
      </h1>
    </div>
  );
};

export default Hero;
