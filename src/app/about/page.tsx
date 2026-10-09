"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Zap, Handshake } from "lucide-react";

export default function About() {
  const timeline = [
    { year: "Year 1", desc: "Abdul Majeed founds the company with a single truck and a commitment to zero-damage moves." },
    { year: "Year 5", desc: "Expanded to a fleet of 20+ specialized vehicles, introducing industrial-grade packing materials." },
    { year: "Year 10", desc: "Launched our B2B Commercial Relocation division, securing contracts with top multinational corporations." },
    { year: "Year 15", desc: "Celebrating 10,000+ successful moves, standing as the undisputed leader in premium packing and moving." }
  ];

  const values = [
    { title: "Safety First (Premium Protection)", desc: "Utilizing impact-resistant custom crates and specialized foam padding for unmatched security.", icon: <ShieldCheck className="w-10 h-10 text-accent mb-4" /> },
    { title: "Speed & Efficiency (Zero Downtime)", desc: "Our expert crews are trained for rapid deployment, ensuring your home or office is relocated seamlessly.", icon: <Zap className="w-10 h-10 text-accent mb-4" /> },
    { title: "Transparency (No Hidden Costs)", desc: "Honest, upfront quotes tailored to your exact volume and requirements.", icon: <Handshake className="w-10 h-10 text-accent mb-4" /> }
  ];

  return (
    <div className="pt-20 bg-light">
      
      {/* Hero Section: The Founder's Vision */}
      <section className="relative h-[60vh] bg-black overflow-hidden">
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/company_growth.png`} alt="Company Growth" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-roboto-condensed)]">
              A Legacy of Trust, Driven by Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Founded and led by Abdul Majeed, Movers & Packers UAE has redefined the relocation industry over the past 20 years of UAE experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEO Message & 15 Year Journey */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image 
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/truck_vision.png`} 
              alt="Our Premium Moving Fleet" 
              fill 
              className="object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-bold font-[family-name:var(--font-roboto-condensed)]">Premium Fleet</h3>
              <p className="text-accent font-bold tracking-widest uppercase text-sm mt-1">Fully Equipped</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 prose prose-lg"
          >
            <h2 className="text-4xl font-bold text-primary font-[family-name:var(--font-roboto-condensed)] mb-6">
              20 Years of Dynamic Growth
            </h2>
            <p className="text-gray-700 leading-relaxed">
              What started as a vision to provide stress-free, reliable moving services has evolved into the UAE's premier logistics and relocation powerhouse. Under the dynamic and visionary leadership of Abdul Majeed, our company blends cutting-edge packing technology with old-fashioned customer care.
            </p>
            
            <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-gray-800 bg-white p-6 shadow-sm rounded-r-2xl">
              "In an industry built on trust, our 20 year reputation is our most valuable asset. My promise to every client, whether a family moving into their first villa or a corporation relocating its headquarters, is absolute precision, uncompromising safety, and a seamless transition. Your peace of mind is our final deliverable."
            </blockquote>

            <p className="text-gray-700 leading-relaxed">
              <span className="text-primary font-bold px-1.5 py-0.5 rounded bg-primary/10 border-l-4 border-accent inline-block my-1">We don't just transport belongings;</span> we safely transition your memories and business assets to their next destination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)]">Our Milestone Journey</h2>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-primary"
              >
                <div className="w-full md:w-32 flex-shrink-0">
                  <span className="text-3xl font-black text-primary/30 font-[family-name:var(--font-roboto-condensed)]">{item.year}</span>
                </div>
                <p className="text-gray-700 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Meticulous Relocation Process */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)]">Our Meticulous Relocation Process</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you are moving a luxury villa or a high-end corporate office, we employ a scientific, zero-damage approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/process_delicate.png`} alt="Packing Delicate Items" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Delicate & High-Value Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Expensive art, crystals, and antiques are handled by our elite packing staff using specialized moving gloves and premium multi-layer bubble wrap, ensuring absolute safety before transport.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/handymen.jpg`} alt="Commercial Office Relocation" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Commercial & Residential</h3>
                <p className="text-gray-600 leading-relaxed">
                  From navigating narrow office corridors to maneuvering through luxury Dubai villas, our uniformed, highly trained professionals execute complex heavy lifting with flawless precision.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/truck_vision.png`} alt="Inventory & Numbering" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">Strategic Inventorying</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain strict accountability. Every single item and box is methodically counted, numbered, and recorded on clipboards, guaranteeing zero misplaced belongings during unpacking.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-[family-name:var(--font-roboto-condensed)]">The Pillars of Our Success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur p-8 rounded-3xl border border-white/20 hover:bg-white hover:text-dark transition-colors duration-500 group"
              >
                {val.icon}
                <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                <p className="text-white/80 group-hover:text-gray-600 leading-relaxed transition-colors">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
