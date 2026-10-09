"use client";

import { motion } from "framer-motion";
import RelocationSteps from "@/components/RelocationSteps";
import QuoteGenerator from "@/components/QuoteGenerator";
import Image from "next/image";
import { CheckCircle2, Package, Home, Briefcase, Wrench, Lock } from "lucide-react";

export default function ServicesPage() {
  const detailedServices = [
    {
      title: "Household & Villa Shifting",
      subtitle: "Local & Domestic, Door-to-Door Service",
      desc: "Whether you are moving a 1-bedroom apartment or a luxury Dubai villa, our elite team ensures every piece of furniture, delicate art, and household item is packed, transported, and placed with zero damage.",
      points: ["Expert Villa & Apartment Relocation", "Dedicated Moving Coordinator", "Specialized Art & Piano Handling"],
      img: "House Movers.jpg",
      reverse: false
    },
    {
      title: "Office & Commercial Moving",
      subtitle: "Furniture, Files, IT Setup Shifting",
      desc: "Minimize downtime and ensure a seamless corporate transition. We handle everything from heavy IT server racks to delicate office files, navigating narrow corridors and tight elevators with extreme precision.",
      points: ["Zero Business Disruption", "Secure IT & Server Relocation", "Organized File & Document Packing"],
      img: "office movers.jpg",
      reverse: true
    },
    {
      title: "Premium Packing & Unpacking",
      subtitle: "Specialized Materials & Elite Staff",
      desc: "We don't just put things in boxes. Our team uses industrial-strength sealing tapes, premium multi-layer bubble wrap, and moisture-proof cartons to guarantee 100% scratch-less transportation.",
      points: ["Multi-Layer Bubble Wrapping", "Custom Crating for Antiques", "Unpacking & Debris Removal"],
      img: "premium_packing.jpg",
      reverse: false
    },
    {
      title: "Storage & Warehouse",
      subtitle: "Short Term & Long Term Facilities",
      desc: "Need a place to keep your belongings safe? Our climate-controlled, highly secure storage facilities offer the perfect short-term or long-term solution with 24/7 CCTV surveillance.",
      points: ["Climate-Controlled Units", "24/7 CCTV & Security", "Flexible Short/Long Term Plans"],
      img: "torage Services.jpg",
      reverse: true
    },
    {
      title: "Professional Handyman Services",
      subtitle: "Expert Dismantling, Assembly & Fixing",
      desc: "Delivery is just the beginning. Our expert handymen meticulously reassemble your furniture, mount your TVs, and install your curtains so your new house feels like home instantly.",
      points: ["Complete Furniture Reassembly", "TV Mounting & Appliance Setup", "Curtain & Blinds Installation"],
      img: "handymen.jpg",
      reverse: false
    },
    {
      title: "24/7 Recovery Service",
      subtitle: "Professional Car Recovery & Towing",
      desc: "Stuck on the road or need a vehicle transported securely? Our advanced fleet of recovery vehicles and rapid response team are available round-the-clock anywhere in the UAE.",
      points: ["24/7 Emergency Response", "Safe & Secure Towing", "Inter-Emirate Vehicle Transport"],
      img: "plain_white_moving_truck.jpg",
      reverse: true
    }
  ];

  return (
    <div className="bg-light min-h-screen">
      {/* Hero Header */}
                  <section className="relative text-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0d1b2a]">
          {/* Subtle dark background with gradient instead of relying on a human photo */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-dark/90"></div>
          <Image 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/services_hero.jpg`} 
            alt="Our Elite Services" 
            fill 
            className="object-cover object-center opacity-20 mix-blend-overlay" 
            priority 
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-roboto-condensed)] mb-6 text-white drop-shadow-lg"
          >
            Comprehensive <span className="text-accent">Relocation Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10"
          >
            From packing your first box to mounting your TV in your new home, we handle every single step with 100% scratch-less guarantee.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full">
              <Package className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm md:text-base tracking-wide">Premium Packing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full">
              <Home className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm md:text-base tracking-wide">Villa & Apartment</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full">
              <Briefcase className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm md:text-base tracking-wide">Office Shifting</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full">
              <Wrench className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm md:text-base tracking-wide">Handyman Setup</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full">
              <Lock className="w-5 h-5 text-accent" />
              <span className="font-medium text-sm md:text-base tracking-wide">Secure Storage</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternating Services Sections */}
      <section className="py-12 bg-white overflow-hidden">
        {detailedServices.map((service, idx) => (
          <div key={idx} className={`py-16 ${idx % 2 !== 0 ? 'bg-primary/5' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl group"
                >
                  <Image 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/${service.img}`} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-10 pointer-events-none"></div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <span className="text-accent font-bold tracking-widest uppercase mb-2 text-sm">{service.subtitle}</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-dark font-[family-name:var(--font-roboto-condensed)] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-dark font-medium">
                        <CheckCircle2 className="text-accent w-6 h-6 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-light transition-colors self-start"
                  >
                    Get a Quote
                  </a>
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Step-by-Step Relocation Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-roboto-condensed)] text-dark">
              Our Complete 8-Step Moving Process
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              From dismantling to fixing everything at your new location, our scientific approach guarantees a zero-stress experience.
            </p>
          </div>
          <div className="flex justify-center">
            <RelocationSteps />
          </div>
        </div>
      </section>

      {/* Quote Generator Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-[family-name:var(--font-roboto-condensed)] text-dark">Ready to Move?</h2>
            <p className="mt-4 text-xl text-gray-600">Get an instant, transparent quote for your specific needs.</p>
          </div>
          <QuoteGenerator />
        </div>
      </section>
    </div>
  );
}


