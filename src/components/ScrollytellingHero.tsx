"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScrollytellingHero() {
  return (
    <div className="relative h-[80vh] bg-black overflow-hidden">
      {/* Background Image with Parallax or Static Fade */}
      <Image 
        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/movers_carrying_boxes.jpg`} 
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
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg font-[family-name:var(--font-roboto-condensed)] leading-tight">
            Moving Your World, Seamlessly
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md mb-8">
            Experience the difference of professional relocation with high-quality protection for residential and commercial assets.
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
