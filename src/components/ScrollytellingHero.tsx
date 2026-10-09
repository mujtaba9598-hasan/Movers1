"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScrollytellingHero() {
  return (
    <div className="relative h-[80vh] bg-black overflow-hidden">
      {/* Background Image with Parallax or Static Fade */}
      <Image 
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/hero.jpg`} 
        alt="Moving Service Hero" 
        fill 
        className="object-cover opacity-60"
        priority
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl w-full px-2"
        >
          <h1 className="mb-4 md:mb-6 drop-shadow-2xl leading-[1.1] md:leading-tight font-anemone w-full">
            <span className="block font-normal text-white/90 text-[10vw] sm:text-6xl md:text-7xl lg:text-8xl">Moving Your World,</span>
            <span className="relative inline-block font-normal text-[#98FF98] uppercase mt-2 md:mt-4 tracking-wide font-awesome-custom text-[9vw] sm:text-5xl md:text-7xl lg:text-8xl">
              Scratchlessly<span className="text-accent">.</span>
              {/* Signature SWOOSH Underline */}
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-5 text-accent opacity-90 drop-shadow-sm" viewBox="0 0 200 20" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5,15 Q80,25 195,2" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/90 drop-shadow-md mb-8 max-w-3xl mx-auto px-4">
            The most trusted movers and packers in Dubai with over 20 years of UAE experience. Experience the difference of professional relocation with high-quality protection for residential and commercial assets.
          </p>
          
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-primary-light transition-colors"
          >
            Get Your Free Quote
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
