"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import QuoteGenerator from "@/components/QuoteGenerator";

import { Camera, Star, Map } from "lucide-react";

export default function Gallery() {
  const images = [
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/hero.jpg`, title: "Premium Relocation Fleet" },
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/handymen.jpg`, title: "Expert Handyman Services" },
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/moving_truck_with_boxes.jpg`, title: "Safe & Secure Transport" },
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/packing_assessment_1785124754858.png`, title: "Strategic Assessment" },
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/packing_protection_1785124761917.png`, title: "Premium Protection" },
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/packing_loading_1785124769522.png`, title: "Secure Loading" },
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/process_delicate.png`, title: "Delicate Item Care" },
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/process_sofa.png`, title: "Commercial Relocation" },
    { src: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/truck_vision.png`, title: "Strategic Inventorying" },
  ];

  return (
    <div className="bg-light min-h-screen">
      {/* Gallery Header */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-24 bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[#112133] z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-roboto-condensed)] mb-6 text-white leading-tight">
                Our Work <span className="text-accent relative inline-block">Gallery<svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg></span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                A visual showcase of our premium moving services, elite packing standards, and meticulous handling across the UAE.
              </p>
            </motion.div>

            {/* Floating Stats Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl"
            >
              {/* Badge 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Camera className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">Behind The Scenes</h3>
                  <p className="text-gray-400 text-sm">Real execution</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                  <Star className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">Premium Quality</h3>
                  <p className="text-gray-400 text-sm">Unmatched standards</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Map className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">All Over UAE</h3>
                  <p className="text-gray-400 text-sm">Dubai & Beyond</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-80 rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-white">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)] mb-4">Ready to Experience It Yourself?</h2>
          <p className="text-lg text-gray-600 mb-10">Use our instant quote generator below to get started with your flawless move.</p>
          <QuoteGenerator />
        </div>
      </section>
    </div>
  );
}
