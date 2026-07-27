"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import QuoteGenerator from "@/components/QuoteGenerator";

export default function Gallery() {
  const images = [
    { src: "/assets/packing_assessment_1785124754858.png", title: "Strategic Assessment" },
    { src: "/assets/packing_protection_1785124761917.png", title: "Premium Protection" },
    { src: "/assets/packing_loading_1785124769522.png", title: "Secure Loading" },
    { src: "/assets/process_delicate.png", title: "Delicate Item Care" },
    { src: "/assets/process_sofa.png", title: "Commercial Relocation" },
    { src: "/assets/process_inventory.png", title: "Strategic Inventorying" },
  ];

  return (
    <div className="pt-20 bg-light min-h-screen">
      {/* Gallery Header */}
      <section className="py-24 bg-dark text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-roboto-condensed)] mb-6">Our Work Gallery</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A visual showcase of our premium moving services, elite packing standards, and meticulous handling across the UAE.
            </p>
          </motion.div>
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
